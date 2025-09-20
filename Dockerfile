# Используем официальный образ nginx
FROM nginx:alpine

# Устанавливаем рабочую директорию
WORKDIR /var/www/html

# Копируем собранные статические файлы
COPY out/ /var/www/html/

# Копируем конфигурацию nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Создаем директории для логов
RUN mkdir -p /var/log/nginx

# Устанавливаем права доступа
RUN chown -R nginx:nginx /var/www/html
RUN chmod -R 755 /var/www/html

# Открываем порт 80
EXPOSE 80

# Запускаем nginx
CMD ["nginx", "-g", "daemon off;"]

