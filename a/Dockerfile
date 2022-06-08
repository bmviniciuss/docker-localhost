FROM node:16-alpine as builder

RUN npm install -g pnpm

WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
RUN pnpm install --prod

EXPOSE 3000

CMD [ "pnpm", "run", "start"] 