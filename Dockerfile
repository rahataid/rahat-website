# Install dependencies only when needed
FROM node:22-alpine AS deps
WORKDIR /opt/app
COPY pnpm-lock.yaml package.json ./
RUN npm install -g pnpm@9 && \
  pnpm install --frozen-lockfile && \
  pnpm store prune

FROM node:22-alpine AS builder
WORKDIR /opt/app
COPY . .
COPY --from=deps /opt/app/node_modules ./node_modules
RUN npm install -g pnpm@9 && \
  pnpm build

FROM node:22-alpine AS proddeps
WORKDIR /opt/app
COPY pnpm-lock.yaml package.json ./
RUN npm install -g pnpm@9 && \
  apk add --no-cache python3 make g++ && \
  pnpm install --prod --frozen-lockfile && \
  pnpm store prune && \
  apk del python3 make g++

# Production image, copy all the files and run next
FROM node:22-alpine AS runner

WORKDIR /usr/src/app

COPY --chown=node:node --from=builder /opt/app/next.config.js ./
COPY --chown=node:node --from=builder /opt/app/public ./public
COPY --chown=node:node --from=builder /opt/app/.next ./.next
COPY --chown=node:node --from=proddeps /opt/app/node_modules ./node_modules

# Ensure Next.js can write image optimization cache
RUN mkdir -p /usr/src/app/.next/cache/images \
    && chown -R node:node /usr/src/app/.next

USER node

EXPOSE 3000

CMD ["node_modules/.bin/next", "start"]
