FROM node:20.10.0-alpine as builder

RUN mkdir -p /opt
WORKDIR /opt
COPY . .

RUN npm i --registry=https://mirrors.huaweicloud.com/repository/npm/ --force && npm run build

FROM nginx:1.21.6-alpine

COPY --from=builder /opt/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx

EXPOSE 3000
