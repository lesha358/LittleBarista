import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, phone, email, message } = await request.json();

    // Создаем транспорт для отправки писем
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

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
    return NextResponse.json(
      { error: 'Ошибка при отправке письма' },
      { status: 500 }
    );
  }
} 