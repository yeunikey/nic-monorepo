# Dockerfile for Next.js
FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm i -g pnpm
RUN pnpm install

COPY . .

RUN pnpm run build

EXPOSE 3003
CMD ["pnpm", "run", "start"]
