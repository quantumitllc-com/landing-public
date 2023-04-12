FROM node

COPY package.json package.json  


RUN mkdir /app

COPY . /app

WORKDIR /app


RUN npm install

CMD npm run dev