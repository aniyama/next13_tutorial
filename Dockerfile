FROM node:16.15.0-alpine
WORKDIR /usr/src/app

COPY /next-app/package*.json ./

USER node