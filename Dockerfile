# -----------------------------
# 1. Билдим приложение
# -----------------------------
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

# -----------------------------
# 2. Production runner
# -----------------------------
FROM node:20-alpine AS runner

WORKDIR /app
COPY --from=builder /app ./

# Важно: слушаем порт, который назначает Timeweb
ENV HOSTNAME=0.0.0.0
ENV PORT=${PORT:-3000}

EXPOSE $PORT

# CMD запускает Next.js на правильном порту
CMD ["sh", "-c", "npm run start -- -p $PORT -H $HOSTNAME"]
