# Install dependencies only when needed
FROM node:18-alpine AS deps
WORKDIR /opt/app
COPY package.json yarn.lock ./
# Upgrade Node.js to 18.20.8
RUN apk add --no-cache curl && \
  curl -fsSL https://raw.githubusercontent.com/tj/n/master/bin/n | ash && \
  n 18.20.8 && \
  yarn install

FROM node:18-alpine AS builder
WORKDIR /opt/app
COPY . .
COPY --from=deps /opt/app/node_modules ./node_modules
# Upgrade Node.js to 18.20.8
RUN apk add --no-cache curl && \
  curl -fsSL https://raw.githubusercontent.com/tj/n/master/bin/n | ash && \
  n 18.20.8 && \
  yarn build

FROM node:18-alpine AS proddeps
RUN apk add --no-cache python3 make g++ curl && \
    curl -fsSL https://raw.githubusercontent.com/tj/n/master/bin/n | ash && \
    n 18.20.8 && \
    yarn add sharp && \
    yarn install --production

# Production image, copy all the files and run next
FROM node:18-alpine AS runner
USER node
WORKDIR /usr/src/app
# Upgrade Node.js to 18.20.8
RUN apk add --no-cache curl && \
  curl -fsSL https://raw.githubusercontent.com/tj/n/master/bin/n | ash && \
  n 18.20.8
# COPY --chown=node:node --from=builder /opt/app/.env ./
COPY --chown=node:node --from=builder /opt/app/next.config.js ./
COPY --chown=node:node --from=builder /opt/app/public ./public
COPY --chown=node:node --from=builder /opt/app/.next ./.next
COPY --chown=node:node --from=proddeps /opt/app/node_modules ./node_modules
CMD ["node_modules/.bin/next", "start"]
