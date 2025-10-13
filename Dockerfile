# 1. Билдим приложение
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# 2. Запускаем production сервер
FROM node:20-alpine AS runner

WORKDIR /app

# Копируем собранное приложение
COPY --from=builder /app ./

EXPOSE 3000

CMD ["npm", "run", "start"]
