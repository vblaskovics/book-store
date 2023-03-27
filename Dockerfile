ARG TAG=18.15.0-alpine3.16
ARG CI=true
ARG PORT=3000

FROM node:${TAG} as prepare

USER node
WORKDIR /home/node/app

COPY --chown=node package*.json ./

RUN npm ci

COPY --chown=node . .


FROM prepare as build

RUN npm run build


FROM node:${TAG} as dependencies

USER node
WORKDIR /home/node/app

COPY --chown=node package*.json ./

RUN npm ci --only=production

FROM dependencies as production

COPY --from=build --chown=node /home/node/app/dist ./dist
ENV HOST=0.0.0.0 PORT=${PORT}

EXPOSE ${PORT}

CMD  ["npm","run","start:prod"]
