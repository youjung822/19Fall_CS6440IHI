FROM node:10.16.3 AS builder

# make a working directory
RUN mkdir -p /usr/local/app

# set the working directory
WORKDIR /usr/local/app

# copy dependency definitions
COPY . /usr/local/app

#COPY package.json yarn.lock ./
RUN yarn
RUN yarn upgrade
COPY . ./
RUN yarn build

CMD [ "yarn", "start" ]