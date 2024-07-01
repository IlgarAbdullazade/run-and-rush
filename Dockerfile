FROM node:20 AS build
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN pnpm install
COPY . ./
RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]