# Install dependencies only when needed
FROM node:18-alpine3.18 AS deps
WORKDIR /opt/app
COPY pnpm-lock.yaml package.json ./
RUN npm install -g pnpm && \
  pnpm install --frozen-lockfile && \
  pnpm store prune

FROM node:18-alpine3.18 AS builder
WORKDIR /opt/app
COPY . .
COPY --from=deps /opt/app/node_modules ./node_modules
RUN npm install -g pnpm && \
  pnpm build

FROM node:18-alpine3.18 AS proddeps
WORKDIR /opt/app
COPY pnpm-lock.yaml package.json ./
RUN npm install -g pnpm && \
  apk add --no-cache python3 make g++ && \
  pnpm install --prod --frozen-lockfile && \
  pnpm store prune && \
  apk del python3 make g++

# Production image, copy all the files and run next
FROM node:18-alpine3.18 AS runner
WORKDIR /usr/src/app
COPY --chown=0:0 --from=builder /opt/app/next.config.js ./
COPY --chown=0:0 --from=builder /opt/app/public ./public
COPY --chown=0:0 --from=builder /opt/app/.next ./.next
COPY --chown=0:0 --from=proddeps /opt/app/node_modules ./node_modules
USER node
CMD ["node_modules/.bin/next", "start"]