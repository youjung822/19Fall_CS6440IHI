FROM node:10.16.3

WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
RUN yarn upgrade
COPY . ./
RUN yarn build

CMD [ "yarn", "start" ]