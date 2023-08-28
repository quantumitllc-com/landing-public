FROM node:latest AS build

WORKDIR /app

COPY package.json /app/

RUN npm install

COPY . /app/

RUN yarn build

# Final stage
FROM node:latest

WORKDIR /app

COPY --from=build /app /app

CMD ["yarn", "start"]



# FROM node:latest

# WORKDIR /app

# COPY package.json yarn.lock /app/

# RUN npm install

# COPY . /app

# RUN yarn build

# CMD ["yarn", "start"]