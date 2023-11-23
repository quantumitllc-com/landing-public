FROM node:latest

RUN mkdir /app

COPY . /app

WORKDIR /app

RUN npm install

RUN yarn build

COPY --from=build /app /app

CMD ["yarn", "start"]



# FROM node:latest

# WORKDIR /app

# COPY package.json yarn.lock /app/

# RUN npm install

# COPY . /app

# RUN yarn build

# CMD ["yarn", "start"]