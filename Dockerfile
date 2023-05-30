FROM node:latest

WORKDIR /app

COPY package.json yarn.lock /app/

RUN npm install

COPY . /app

RUN yarn build

CMD ["yarn", "start"]