import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import TelegramBot from 'node-telegram-bot-api';

// Создаем бота Telegram один раз при инициализации
const bot = process.env.TELEGRAM_BOT_TOKEN 
  ? new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: false })
  : null;

export async function POST(request: Request) {
  try {
    const { name, phone, email, message } = await request.json();

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

    // Формируем текст сообщения
    const messageText = `
Новая заявка с сайта Little Barista:

Имя: ${name}
Телефон: ${phone}
Email: ${email}

Сообщение:
${message}
    `;

    // Отправляем сообщение в Telegram
    if (bot) {
      try {
        await bot.sendMessage(process.env.TELEGRAM_CHAT_ID, messageText);
      } catch (error) {
        console.error('Telegram error:', error);
        // Продолжаем выполнение, даже если Telegram не работает
      }
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
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'chaplinrus@gmail.com',
      subject: 'Новая заявка с сайта Little Barista',
      text: messageText,
      html: messageText.replace(/\n/g, '<br>'),
    });

    return NextResponse.json({ success: true });
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