#!/usr/bin/env node

/**
 * Upload large images (>100KB) to DigitalOcean Spaces and replace local references.
 *
 * Usage:
 *   node scripts/upload-images-to-spaces.mjs --dry-run      # Preview what will change
 *   node scripts/upload-images-to-spaces.mjs                 # Upload and replace references
 *   node scripts/upload-images-to-spaces.mjs --delete-local  # Also delete local files after upload
 *
 * Environment variables (loaded from scripts/.env.script):
 *   DO_SPACES_KEY       - DigitalOcean Spaces access key
 *   DO_SPACES_SECRET    - DigitalOcean Spaces secret key
 *   DO_SPACES_REGION    - Region (default: nyc3)
 *   DO_SPACES_BUCKET    - Bucket name (default: rumsan)
 *   DO_SPACES_PATH      - Path prefix inside bucket (default: rahat)
 */

import { S3Client, PutObjectCommand, HeadObjectCommand } from "@aws-sdk/client-s3";
import { readFileSync, writeFileSync, statSync, unlinkSync, readdirSync, existsSync } from "fs";
import { join, extname, relative } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = join(__dirname, "..");

// --- Load env from scripts/.env.script ---
const envPath = join(__dirname, ".env.script");
if (existsSync(envPath)) {
  const envContent = readFileSync(envPath, "utf-8");
  for (const line of envContent.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIndex = trimmed.indexOf("=");
    if (eqIndex === -1) continue;
    const key = trimmed.slice(0, eqIndex).trim();
    const value = trimmed.slice(eqIndex + 1).trim();
    if (key && !process.env[key]) {
      process.env[key] = value;
    }
  }
  console.log("📄 Loaded env from scripts/.env.script\n");
} else {
  console.warn("⚠️  scripts/.env.script not found — using environment variables\n");
}

// --- Configuration ---
const REGION = process.env.DO_SPACES_REGION || "nyc3";
const BUCKET = process.env.DO_SPACES_BUCKET || "rumsan";
const PATH_PREFIX = process.env.DO_SPACES_PATH || "rahat";
const CDN_BASE = `https://${BUCKET}.${REGION}.cdn.digitaloceanspaces.com/${PATH_PREFIX}`;
const SIZE_THRESHOLD = 100 * 1024; // 100KB

const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".gif", ".webp", ".ico"]);
const SOURCE_EXTENSIONS = new Set([".js", ".jsx", ".ts", ".tsx", ".scss", ".css", ".json", ".html", ".md"]);
const SCAN_DIRS = ["src", "public"];

const DRY_RUN = process.argv.includes("--dry-run");
const DELETE_LOCAL = process.argv.includes("--delete-local");

// --- MIME types ---
const MIME_TYPES = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".svg": "image/svg+xml",
};

// --- S3 Client ---
function createS3Client() {
  const key = process.env.DO_SPACES_KEY;
  const secret = process.env.DO_SPACES_SECRET;

  if (!key || !secret) {
    console.error("Error: DO_SPACES_KEY and DO_SPACES_SECRET environment variables are required.");
    console.error("Export them or add to a .env file before running this script.");
    process.exit(1);
  }

  return new S3Client({
    endpoint: `https://${REGION}.digitaloceanspaces.com`,
    region: REGION,
    credentials: {
      accessKeyId: key,
      secretAccessKey: secret,
    },
  });
}

// --- Find large images ---
function findLargeImages(dir, results = []) {
  const fullDir = join(PROJECT_ROOT, dir);
  let entries;
  try {
    entries = readdirSync(fullDir, { withFileTypes: true });
  } catch {
    return results;
  }

  for (const entry of entries) {
    const fullPath = join(fullDir, entry.name);
    if (entry.isDirectory()) {
      findLargeImages(join(dir, entry.name), results);
    } else if (entry.isFile()) {
      const ext = extname(entry.name).toLowerCase();
      if (!IMAGE_EXTENSIONS.has(ext)) continue;
      const stat = statSync(fullPath);
      if (stat.size > SIZE_THRESHOLD) {
        results.push({
          absolutePath: fullPath,
          relativePath: dir + "/" + entry.name,
          size: stat.size,
          ext,
        });
      }
    }
  }
  return results;
}

// --- Find source files to update references ---
function findSourceFiles(dir, results = []) {
  const fullDir = join(PROJECT_ROOT, dir);
  let entries;
  try {
    entries = readdirSync(fullDir, { withFileTypes: true });
  } catch {
    return results;
  }

  for (const entry of entries) {
    const fullPath = join(fullDir, entry.name);
    if (entry.isDirectory() && entry.name !== "node_modules" && entry.name !== ".next") {
      findSourceFiles(join(dir, entry.name), results);
    } else if (entry.isFile()) {
      const ext = extname(entry.name).toLowerCase();
      if (SOURCE_EXTENSIONS.has(ext)) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

// --- Upload a single image ---
async function uploadImage(s3, image) {
  // Key in spaces: rahat/images/bg/file.jpg (strip "public/" prefix)
  const pathInBucket = image.relativePath.replace(/^public\//, "");
  const key = `${PATH_PREFIX}/${pathInBucket}`;
  const contentType = MIME_TYPES[image.ext] || "application/octet-stream";

  // Check if already uploaded
  try {
    await s3.send(new HeadObjectCommand({ Bucket: BUCKET, Key: key }));
    console.log(`  ⏭  Already exists: ${key}`);
    return key;
  } catch {
    // Not found, proceed to upload
  }

  const body = readFileSync(image.absolutePath);
  await s3.send(
    new PutObjectCommand({
      Bucket: BUCKET,
      Key: key,
      Body: body,
      ContentType: contentType,
      ACL: "public-read",
    })
  );

  console.log(`  ✅ Uploaded: ${key} (${(image.size / 1024).toFixed(0)}KB)`);
  return key;
}

// --- Build replacement map ---
function buildReplacementMap(images) {
  const replacements = new Map();

  for (const image of images) {
    // Images in public/ are served from root, e.g. public/images/bg/foo.jpg -> /images/bg/foo.jpg
    const pathInBucket = image.relativePath.replace(/^public\//, "");
    const cdnUrl = `${CDN_BASE}/${pathInBucket}`;

    // The local reference path used in code (without "public" prefix)
    const localRef = "/" + pathInBucket;

    replacements.set(localRef, cdnUrl);
  }

  return replacements;
}

// --- Replace references in source files ---
function replaceReferences(replacements) {
  const sourceFiles = [];
  for (const dir of SCAN_DIRS) {
    findSourceFiles(dir, sourceFiles);
  }
  // Also scan root-level config files
  for (const f of ["next.config.js", "next.config.mjs"]) {
    const p = join(PROJECT_ROOT, f);
    try {
      statSync(p);
      sourceFiles.push(p);
    } catch {
      // ignore
    }
  }

  let totalReplacements = 0;

  for (const filePath of sourceFiles) {
    let content;
    try {
      content = readFileSync(filePath, "utf-8");
    } catch {
      continue;
    }

    let modified = content;
    for (const [localRef, cdnUrl] of replacements) {
      // Replace exact path references (handles both quoted and url() usages)
      if (modified.includes(localRef)) {
        modified = modified.split(localRef).join(cdnUrl);
        totalReplacements++;
      }
    }

    if (modified !== content) {
      const relPath = relative(PROJECT_ROOT, filePath);
      if (DRY_RUN) {
        console.log(`  📝 Would update: ${relPath}`);
      } else {
        writeFileSync(filePath, modified, "utf-8");
        console.log(`  📝 Updated: ${relPath}`);
      }
    }
  }

  return totalReplacements;
}

// --- Main ---
async function main() {
  console.log("🔍 Scanning for images larger than 100KB...\n");

  const images = [];
  for (const dir of SCAN_DIRS) {
    findLargeImages(dir, images);
  }

  // Sort by size descending
  images.sort((a, b) => b.size - a.size);

  if (images.length === 0) {
    console.log("No images found above 100KB threshold.");
    return;
  }

  console.log(`Found ${images.length} images (total ${(images.reduce((s, i) => s + i.size, 0) / 1024 / 1024).toFixed(1)}MB):\n`);
  for (const img of images) {
    console.log(`  ${(img.size / 1024).toFixed(0)}KB  ${img.relativePath}`);
  }
  console.log();

  // Build replacement map
  const replacements = buildReplacementMap(images);

  if (DRY_RUN) {
    console.log("--- DRY RUN MODE (no uploads, no file changes) ---\n");
    console.log("Replacements that would be made:");
    for (const [local, cdn] of replacements) {
      console.log(`  ${local}`);
      console.log(`    → ${cdn}\n`);
    }
    console.log("\nFiles that would be updated:");
    replaceReferences(replacements);
    console.log("\nRun without --dry-run to apply changes.");
    return;
  }

  // Upload images
  const s3 = createS3Client();
  console.log("📤 Uploading to DigitalOcean Spaces...\n");

  for (const image of images) {
    try {
      await uploadImage(s3, image);
    } catch (err) {
      console.error(`  ❌ Failed to upload ${image.relativePath}: ${err.message}`);
      process.exit(1);
    }
  }

  // Replace references
  console.log("\n🔄 Replacing local references with CDN URLs...\n");
  const count = replaceReferences(replacements);
  console.log(`\n  Total files updated: ${count}`);

  // Optionally delete local files
  if (DELETE_LOCAL) {
    console.log("\n🗑  Deleting local image files...\n");
    for (const image of images) {
      try {
        unlinkSync(image.absolutePath);
        console.log(`  Deleted: ${image.relativePath}`);
      } catch (err) {
        console.error(`  Failed to delete ${image.relativePath}: ${err.message}`);
      }
    }
  }

  console.log("\n✅ Done!");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
