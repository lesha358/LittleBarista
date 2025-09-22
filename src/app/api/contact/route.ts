import { NextResponse } from 'next/server';
import TelegramBot from 'node-telegram-bot-api';

// Создаем бота Telegram один раз при инициализации
const bot = process.env.TELEGRAM_BOT_TOKEN 
  ? new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: false })
  : null;

export async function POST(request: Request) {
  try {
    const { name, phone, email, message, model } = await request.json();

    // Проверяем конфигурацию Telegram
    const telegramConfigured = Boolean(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID);
    if (!telegramConfigured) {
      console.error('[API /contact] Telegram is NOT configured: missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID');
      return NextResponse.json(
        { success: false, error: 'Telegram не сконфигурирован на сервере', telegram: 'skipped' },
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
    if (bot && telegramConfigured) {
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
        return NextResponse.json(
          { success: false, error: 'Ошибка отправки в Telegram', telegram: telegramStatus },
          { status: 500 }
        );
      }
    } else {
      console.warn('[API /contact] Telegram: bot is not initialized');
      return NextResponse.json(
        { success: false, error: 'Telegram бот не инициализирован', telegram: 'skipped' },
        { status: 500 }
      );
    }

    // Email-отправка отключена по требованию. Возвращаем статус email: 'disabled'
    return NextResponse.json({ success: true, telegram: telegramStatus, email: 'disabled' });
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