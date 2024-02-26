FROM node:18.16 as angular

WORKDIR /app

COPY . .

RUN npm install  --force

RUN npm run build

FROM httpd:alpine3.19

WORKDIR /usr/local/apache2/htdocs

COPY --from=angular /app/dist/book-shop .