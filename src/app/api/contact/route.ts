import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, phone, email, message } = await request.json();

    // Проверяем наличие переменных окружения
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing environment variables for email configuration');
      return NextResponse.json(
        { error: 'Ошибка конфигурации сервера' },
        { status: 500 }
      );
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

    // Формируем текст письма
    const mailText = `
Новая заявка с сайта Little Barista:

Имя: ${name}
Телефон: ${phone}
Email: ${email}

Сообщение:
${message}
    `;

    // Отправляем письмо
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'chaplinrus@gmail.com',
      subject: 'Новая заявка с сайта Little Barista',
      text: mailText,
      html: mailText.replace(/\n/g, '<br>'),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Определяем тип ошибки
    if (error instanceof Error) {
      if (error.message.includes('Invalid login')) {
        return NextResponse.json(
          { error: 'Ошибка аутентификации почтового сервера' },
          { status: 500 }
        );
      }
      if (error.message.includes('connect')) {
        return NextResponse.json(
          { error: 'Ошибка подключения к почтовому серверу' },
          { status: 500 }
        );
      }
    }

    return NextResponse.json(
      { error: 'Ошибка при отправке письма' },
      { status: 500 }
    );
  }
} 