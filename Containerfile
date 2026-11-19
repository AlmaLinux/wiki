FROM docker.io/library/node:22-alpine AS builder
LABEL stage=auto-clean-stage1
RUN mkdir -p /work
COPY . /work
WORKDIR /work
RUN yarn 

FROM docker.io/library/node:22-alpine
# alternate node_modules directory brought from builder 
ARG alt_node_modules=/node_modules
ENV alt_node_modules ${alt_node_modules}
# required for auto last-update
RUN apk update && apk add git

RUN mkdir /wiki
WORKDIR /wiki

COPY --from=builder /work/node_modules ${alt_node_modules}

CMD yarn run --modules-folder=${alt_node_modules} vuepress dev docs 
