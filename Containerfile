FROM docker.io/library/node:lts-alpine AS builder
LABEL stage=auto-clean-stage1
RUN mkdir -p /wiki/tmp
COPY . /wiki/tmp
WORKDIR /wiki/tmp
RUN yarn

FROM docker.io/library/node:lts-alpine
RUN mkdir /wiki
WORKDIR /wiki
COPY --from=builder /wiki/tmp/package.json /wiki/package.json
COPY --from=builder /wiki/tmp/node_modules /wiki/node_modules
COPY --from=builder /wiki/tmp/yarn.lock /wiki/yarn.lock
CMD yarn run docs:dev
