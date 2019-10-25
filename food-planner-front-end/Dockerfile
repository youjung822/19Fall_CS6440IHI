FROM node:10.16.3 AS builder

# make a working directory
RUN mkdir -p /usr/local/app

# set the working directory
WORKDIR /usr/local/app

RUN echo $(ls -a)
COPY /food-planner-back-end/package.json /food-planner-back-end/yarn.lock ./
RUN yarn
RUN yarn upgrade
COPY . ./
RUN yarn build

# Stage 2 - the production environment
FROM nginx
COPY --from=builder ./usr/local/app/build /usr/share/nginx/html/newfoodplanner2frontend