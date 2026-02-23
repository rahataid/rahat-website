# Install dependencies only when needed
FROM node:18-alpine3.18 AS deps
WORKDIR /opt/app
COPY package.json yarn.lock ./
ENV YARN_IGNORE_ENGINES=true
RUN yarn install

FROM node:18-alpine3.18 AS builder
WORKDIR /opt/app
COPY . .
COPY --from=deps /opt/app/node_modules ./node_modules
ENV YARN_IGNORE_ENGINES=true
RUN yarn build

FROM node:18-alpine3.18 AS proddeps
RUN apk add --no-cache python3 make g++ && \
  yarn add sharp && \
  ENV YARN_IGNORE_ENGINES=true && \
  yarn install --production && \
  apk del python3 make g++

# Production image, copy all the files and run next
FROM node:18-alpine3.18 AS runner
USER node
ENV YARN_IGNORE_ENGINES=true
CMD ["node_modules/.bin/next", "start"]
