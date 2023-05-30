FROM node:latest

WORKDIR /app

COPY package.json yarn.lock /app/

RUN npm install -g yarn

RUN yarn install

COPY . /app

RUN yarn build

CMD ["yarn", "deploy"]