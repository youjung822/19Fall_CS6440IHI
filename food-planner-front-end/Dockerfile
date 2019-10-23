FROM node:10.16.3 AS builder

WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
RUN yarn upgrade
COPY . ./
RUN yarn build

#CMD [ "yarn", "start" ]

# Deploy to NGINX
COPY --from=builder ./usr/local/app/app /etc/ngix/html/food-planner-front-end/
COPY --from=builder ./usr/local/app/nginx.conf /etc/ngix/conf.d/deafult.conf

