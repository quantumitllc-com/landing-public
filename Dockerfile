# FROM node:latest

# RUN mkdir /app

# COPY . /app

# WORKDIR /app

# RUN npm install

# RUN npm build

# CMD ["npm", "start"]



FROM node:latest

WORKDIR /app

COPY package.json yarn.lock /app/

RUN npm install

COPY . /app

RUN yarn build

CMD ["yarn", "start"]