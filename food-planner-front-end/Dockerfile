FROM node:10.16.3 AS builder

# make a working directory
RUN mkdir -p /usr/local/app

# set the working directory
WORKDIR /usr/local/app

RUN echo $(ls -a)
COPY package.json yarn.lock ./
RUN yarn
RUN yarn upgrade
COPY . ./
RUN yarn build

# Stage 2 - the production environment
FROM nginx:1.12-alpine
COPY --from=builder ./usr/local/app/build /usr/share/nginx/html/newfoodplanner2frontend
COPY --from=builder ./usr/local/app/build /var/www
COPY --from=builder ./usr/local/app/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80