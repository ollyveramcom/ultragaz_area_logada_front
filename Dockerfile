FROM node:20.14.0-alpine3.20 AS app

WORKDIR /app

COPY tsconfig.json tailwind.config.js postcss.config.mjs package.json next.config.mjs components.json /app/

RUN yarn install

FROM app

WORKDIR /app/src

COPY src /app/src

EXPOSE 3000

ENTRYPOINT [ "yarn", "dev" ]