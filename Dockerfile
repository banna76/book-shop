FROM node:18.16

WORKDIR /app

COPY . /app

RUN npm install  --force

RUN npm run build