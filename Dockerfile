FROM node:latest

RUN mkdir /app

COPY . /app

WORKDIR /app

RUN npm install -f

CMD npm run dev
