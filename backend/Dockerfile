# Dockerfile for NestJS
FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm i -g pnpm
RUN pnpm install

COPY . .

RUN pnpm run build

CMD ["pnpm", "run", "start:prod"]
