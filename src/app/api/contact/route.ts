import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import TelegramBot from 'node-telegram-bot-api';

// Создаем бота Telegram один раз при инициализации
const bot = process.env.TELEGRAM_BOT_TOKEN 
  ? new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: false })
  : null;

export async function POST(request: Request) {
  try {
    const { name, phone, email, message, model } = await request.json();

    // Проверяем наличие переменных окружения для email
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing environment variables for email configuration');
      return NextResponse.json(
        { error: 'Ошибка конфигурации сервера: отсутствуют настройки email' },
        { status: 500 }
      );
    }

    // Проверяем наличие переменных окружения для Telegram
    if (!process.env.TELEGRAM_BOT_TOKEN || !process.env.TELEGRAM_CHAT_ID) {
      console.error('Missing environment variables for Telegram configuration');
      return NextResponse.json(
        { error: 'Ошибка конфигурации сервера: отсутствуют настройки Telegram' },
        { status: 500 }
      );
    }

    // Формируем текст сообщения (HTML для красивого отображения)
    const escapeHtml = (value: string | undefined | null) =>
      (value ?? '').toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    const now = new Date();
    const timeMsk = new Intl.DateTimeFormat('ru-RU', {
      timeZone: 'Europe/Moscow',
      dateStyle: 'short',
      timeStyle: 'medium',
    }).format(now);

    const messageText = `🔥 <b>НОВАЯ ЗАЯВКА С САЙТА LITTLE BARISTA</b> 🔥\n
👤 <b>Имя:</b> ${escapeHtml(name)}\n
📞 <b>Телефон:</b> ${escapeHtml(phone)}\n
☕ <b>Модель:</b> ${escapeHtml(model || 'не указана')}\n
🕒 <b>Время (МСК):</b> ${escapeHtml(timeMsk)}`;

    // Отправляем сообщение в Telegram с логами
    let telegramStatus: 'sent' | 'skipped' | 'error' = 'skipped';
    if (bot) {
      console.log('[API /contact] Telegram: sending to chat', process.env.TELEGRAM_CHAT_ID);
      try {
        const tgMessage = await bot.sendMessage(
          process.env.TELEGRAM_CHAT_ID as string,
          messageText,
          { parse_mode: 'HTML', disable_web_page_preview: true }
        );
        console.log('[API /contact] Telegram: sent OK, message_id =', tgMessage.message_id);
        telegramStatus = 'sent';
      } catch (error) {
        console.error('[API /contact] Telegram: send error ->', error);
        telegramStatus = 'error';
        // Продолжаем выполнение, даже если Telegram не работает
      }
    } else {
      console.warn('[API /contact] Telegram: bot is not initialized');
    }

    // Создаем транспорт для отправки писем
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      secure: true,
      tls: {
        rejectUnauthorized: false
      }
    });

    // Проверяем подключение
    try {
      await transporter.verify();
    } catch (error) {
      console.error('SMTP connection error:', error);
      return NextResponse.json(
        { error: 'Ошибка подключения к почтовому серверу' },
        { status: 500 }
      );
    }

    // Отправляем письмо
    const emailInfo = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'chaplinrus@gmail.com',
      subject: 'Новая заявка с сайта Little Barista',
      text: messageText,
      html: messageText.replace(/\n/g, '<br>'),
    });
    console.log('[API /contact] Email: sent OK, messageId =', (emailInfo as any)?.messageId);

    return NextResponse.json({ success: true, telegram: telegramStatus, email: 'sent' });
  } catch (error) {
    console.error('Error sending message:', error);
    
    // Определяем тип ошибки
    if (error instanceof Error) {
      if (error.message.includes('Invalid login')) {
        return NextResponse.json(
          { error: 'Ошибка аутентификации' },
          { status: 500 }
        );
      }
      if (error.message.includes('connect')) {
        return NextResponse.json(
          { error: 'Ошибка подключения' },
          { status: 500 }
        );
      }
    }

    return NextResponse.json(
      { error: 'Ошибка при отправке сообщения' },
      { status: 500 }
    );
  }
} 