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

# Опционально — если используешь переменные окружения в runtime
ENV NODE_ENV=production
EXPOSE 3000

CMD ["npm", "run", "start"]
