FROM node:20.13.1-alpine AS build-env

WORKDIR /app

COPY . ./

RUN npm install
RUN npm run build

FROM nginx:1.13.9-alpine

COPY --from=build-env /app/dist/cat-breeds/browser /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
