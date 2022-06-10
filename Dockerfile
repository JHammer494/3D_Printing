FROM node:14-alpine as base

WORKDIR /app

COPY package.json package.json
COPY web/package.json web/package.json
COPY api/package.json api/package.json
COPY yarn.lock yarn.lock
RUN yarn install --frozen-lockfile

COPY redwood.toml .
COPY graphql.config.js .
COPY babel.config.js .

FROM node:14-alpine

WORKDIR /app

COPY api/package.json .

RUN yarn install && yarn add react react-dom @redwoodjs/cli

COPY graphql.config.js .
COPY redwood.toml .
COPY api api


EXPOSE 8911

EXPOSE 8910

EXPOSE 5555

CMD [ "yarn", "rw", "serve", "api", "--port", "8911", "--rootPath", "/api" ]
