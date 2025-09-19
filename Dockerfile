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

# Используем production-образ для запуска
FROM node:20-alpine AS runner
WORKDIR /app

# Создаем пользователя для безопасности
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Копируем только необходимые файлы из предыдущего этапа
COPY --from=deps /app/public ./public
COPY --from=deps /app/.next/standalone ./
COPY --from=deps /app/.next/static ./.next/static

# Устанавливаем права доступа
RUN chown -R nextjs:nodejs /app
USER nextjs

# Указываем порт
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
EXPOSE 3000

# Запуск приложения
CMD ["node", "server.js"] 