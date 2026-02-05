# -----------------------------
# 1. Build
# -----------------------------
FROM node:24-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci --legacy-peer-deps

COPY . .
RUN npm run build

# -----------------------------
# 2. Production
# -----------------------------
FROM node:24-alpine AS runner

WORKDIR /app

COPY --from=builder /app ./

ENV HOSTNAME=0.0.0.0
ENV PORT=3000

EXPOSE 3000

CMD ["sh", "-c", "npm run start -- -p $PORT -H $HOSTNAME"]
