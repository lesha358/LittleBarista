# Используем официальный Node.js образ
FROM node:20-alpine AS deps

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package.json package-lock.json ./

# Устанавливаем зависимости
RUN npm ci --prefer-offline --no-audit

# Копируем остальные файлы проекта
COPY . .

# Собираем приложение
RUN npm run build

# Удаляем dev-зависимости (опционально)
RUN npm prune --production

# Используем production-образ для запуска
FROM node:20-alpine AS runner
WORKDIR /app

# Копируем только необходимые файлы из предыдущего этапа
COPY --from=deps /app .

# Указываем порт
ENV PORT=3000
EXPOSE 3000

# Запуск приложения
CMD ["npm", "start"] 