FROM node:24.15.0-alpine as build
WORKDIR /opt/app
ADD *.json .
RUN npm ci
ADD . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /opt/app/dist/angular-frontend/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
