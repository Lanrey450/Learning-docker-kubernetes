FROM node:alpine AS multistepbuilder

WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build


FROM nginx
COPY --from=multistepbuilder /app/build /usr/share/nginx/html


