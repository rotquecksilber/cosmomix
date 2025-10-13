# -----------------------------
# 1. Билдим приложение
# -----------------------------
FROM node:20-alpine AS builder

WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь проект
COPY . .

# Строим Next.js приложение
RUN npm run build

# -----------------------------
# 2. Production runner
# -----------------------------
FROM node:20-alpine AS runner

WORKDIR /app

# Копируем все из билдера
COPY --from=builder /app ./

# Открываем порт внутри контейнера
EXPOSE 3000

# Переменные окружения для Timeweb
ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

# Запуск приложения
CMD ["npm", "run", "start"]
