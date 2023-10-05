export const IMPACTS_HOST = process.env.NEXT_PUBLIC_IMPACT_HOST || "";

export const COMMUNITY_HOST = process.env.NEXT_PUBLIC_COMMUNITY_HOST || "";

export const MAPBOX_API = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

export const UPLOAD_ASSET_HOST =
    process.env.NEXT_PUBLIC_UPLOAD_ASSET_HOST || "";

const ASSET_VIEW_HOST = process.env.NEXT_PUBLIC_ASSET_VIEW_HOST || "";

const ASSET_VIEW_FOLDER = process.env.NEXT_PUBLIC_ASSET_VIEW_FOLDER || "";

export const ASSET_VIEW = ASSET_VIEW_HOST + "/" + ASSET_VIEW_FOLDER;
export const BLOG_CMS_HOST = process.env.NEXT_PUBLIC_CMS_API || "";

export const SMTP_USER = process.env.NEXT_PUBLIC_SMTP_USER || "";
export const SMTP_PASS = process.env.NEXT_PUBLIC_SMTP_PASS || "";
export const RUMSAN_ASSETS_PATH = process.env.NEXT_PUBLIC_RUMSAN_ASSETS || "https://rumsan.nyc3.cdn.digitaloceanspaces.com"
