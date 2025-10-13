# -----------------------------
# 1. Билдим приложение
# -----------------------------
FROM node:20-alpine AS builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем только package.json и package-lock.json для кэширования зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install --legacy-peer-deps

# Копируем весь проект
COPY . .

# Строим Next.js приложение
RUN npm run build

# -----------------------------
# 2. Production runner
# -----------------------------
FROM node:20-alpine AS runner

WORKDIR /app

# Копируем только необходимые файлы из билдера
COPY --from=builder /app ./

# Указываем порт, который будет слушать контейнер
EXPOSE 3478



# Устанавливаем CMD для запуска приложения
CMD ["npm", "run", "start"]
