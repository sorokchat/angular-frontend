FROM node:24.15.0-alpine as build
WORKDIR /opt/app
ADD *.json .
RUN npm ci
ADD . .
RUN npm run build
COPY public /opt/app/dist/angular-frontend/

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /opt/app/dist/angular-frontend/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
