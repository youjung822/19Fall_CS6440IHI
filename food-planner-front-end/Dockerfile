FROM node:10.16.3 AS builder

# make a working directory
RUN mkdir -p /usr/local/app

# set the working directory
WORKDIR /usr/local/app

COPY . ./
RUN yarn
RUN yarn build

# Stage 2 - the production environment
FROM nginx
COPY --from=builder ./usr/local/app/build /usr/share/nginx/html/
COPY --from=builder ./usr/local/app/nginx.conf /etc/nginx/conf.d/default.conf
RUN echo $(ls -1 /usr/share/nginx/html/)
#COPY --from=builder ./usr/local/app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]