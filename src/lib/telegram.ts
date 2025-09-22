export type TelegramPayload = {
  name?: string
  phone?: string
  email?: string
  message?: string
  model?: string
  source?: string
}

function buildMessage(payload: TelegramPayload): string {
  const lines: string[] = []
  lines.push('📩 Новая заявка с сайта Little Barista')
  if (payload.source) lines.push(`Источник: ${payload.source}`)
  if (payload.name) lines.push(`Имя: ${payload.name}`)
  if (payload.phone) lines.push(`Телефон: ${payload.phone}`)
  if (payload.email) lines.push(`Email: ${payload.email}`)
  if (payload.model) lines.push(`Модель: ${payload.model}`)
  if (payload.message) lines.push(`Сообщение: ${payload.message}`)
  lines.push(`Время: ${new Date().toLocaleString('ru-RU')}`)
  return lines.join('\n')
}

export async function sendTelegramClient(payload: TelegramPayload): Promise<{ ok: boolean; error?: string }>
{
  try {
    const token = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN
    const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID

    if (!token || !chatId) {
      return { ok: false, error: 'NEXT_PUBLIC_TELEGRAM_* не заданы' }
    }

    const text = buildMessage(payload)

    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML' }),
    })

    if (!res.ok) {
      const body = await res.text().catch(() => '')
      return { ok: false, error: `Telegram HTTP ${res.status} ${body}` }
    }
    const data = await res.json().catch(() => ({} as any))
    if (!(data as any)?.ok) {
      return { ok: false, error: 'Ответ Telegram не ok' }
    }
    return { ok: true }
  } catch (e: any) {
    return { ok: false, error: e?.message || 'Ошибка отправки в Telegram' }
  }
}


