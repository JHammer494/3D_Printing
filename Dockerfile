FROM positivly/prisma-binaries:latest as prisma
FROM node:16.15.0-alpine as base


WORKDIR /app

COPY package.json package.json
COPY web/package.json web/package.json
COPY api/package.json api/package.json
COPY yarn.lock yarn.lock
RUN yarn install

COPY redwood.toml .
COPY graphql.config.js .
 # COPY babel.config.js .

FROM base as web_build

COPY web web
RUN yarn rw dev web

FROM base as api_build

COPY api api
RUN yarn rw dev api

FROM node:16.15.0-alpine


WORKDIR /app

COPY api/package.json .

RUN yarn install && yarn add react react-dom @redwoodjs/cli

COPY graphql.config.js .
COPY redwood.toml .
COPY api api

# COPY --from=web_build /app/web/dist /app/web/dist
# COPY --from=api_build /app/api/dist /app/api/dist
# COPY --from=api_build /app/node_modules/.prisma /app/node_modules/.prisma

EXPOSE 8911

EXPOSE 8910

EXPOSE 5555

RUN apk add --no-cache libc6-compat openssl openssl-dev

ENV PRISMA_QUERY_ENGINE_BINARY=/prisma-engines/query-engine \
  PRISMA_MIGRATION_ENGINE_BINARY=/prisma-engines/migration-engine \
  PRISMA_INTROSPECTION_ENGINE_BINARY=/prisma-engines/introspection-engine \
  PRISMA_FMT_BINARY=/prisma-engines/prisma-fmt \
  PRISMA_CLI_QUERY_ENGINE_TYPE=binary \
  PRISMA_CLIENT_ENGINE_TYPE=binary

COPY --from=prisma /prisma-engines/query-engine /prisma-engines/migration-engine /prisma-engines/introspection-engine /prisma-engines/prisma-fmt /prisma-engines/

CMD [ "yarn", "rw", "serve", "api", "--port", "8911", "--rootPath", "/api" ]
