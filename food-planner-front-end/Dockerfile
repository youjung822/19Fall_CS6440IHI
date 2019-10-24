FROM node:10.16.3 AS builder

WORKDIR /usr/src/app
RUN echo $(ls -a)
COPY package.json yarn.lock ./
RUN yarn
RUN yarn upgrade
COPY . ./
RUN yarn build

# Stage 2 - the production environment
FROM nginx:1.12-alpine
COPY --from=builder ./usr/src/app/build /usr/share/nginx/html/newfoodplanner2frontend/
CMD ["nginx", "-g", "daemon off;"]