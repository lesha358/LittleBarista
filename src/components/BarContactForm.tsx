'use client';

import { useState } from 'react'

export default function BarContactForm() {
  const [formData, setFormData] = useState({ name: '', phone: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    try {
      const { sendTelegramClient } = await import('../lib/telegram')
      const tg = await sendTelegramClient({
        name: formData.name,
        phone: formData.phone,
        source: 'Выездной бар — встроенная форма',
      })
      if (!tg.ok) throw new Error(tg.error || 'Не удалось отправить сообщение в Telegram')
      setSubmitStatus('success')
      setFormData({ name: '', phone: '' })
    } catch (error) {
      setSubmitStatus('error')
      if (error instanceof Error) setErrorMessage(error.message)
      else setErrorMessage('Произошла ошибка. Попробуйте ещё раз.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-amber-500/20 bg-black/30 backdrop-blur-sm p-6 text-amber-100 shadow">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="bar-name" className="block text-sm mb-1 text-amber-100/80">Ваше имя</label>
            <input
              id="bar-name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full px-4 py-2 rounded-lg border border-amber-500/30 bg-[#0f0d0b] text-amber-100 placeholder:text-amber-200/40 focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Иван Иванов"
            />
          </div>
          <div>
            <label htmlFor="bar-phone" className="block text-sm mb-1 text-amber-100/80">Телефон</label>
            <input
              id="bar-phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="w-full px-4 py-2 rounded-lg border border-amber-500/30 bg-[#0f0d0b] text-amber-100 placeholder:text-amber-200/40 focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="+7 (999) 123-45-67"
            />
          </div>
        </div>

        {submitStatus === 'success' && (
          <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-400/30 text-emerald-200 text-sm">
            Спасибо! Заявка отправлена. Мы свяжемся с вами в ближайшее время.
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="p-3 rounded-lg bg-red-500/10 border border-red-400/30 text-red-200 text-sm">
            {errorMessage}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full px-6 py-3 rounded-full text-[#0d0a08] font-semibold transition-colors ${
            isSubmitting ? 'bg-amber-400/60 cursor-not-allowed' : 'bg-amber-500 hover:bg-amber-400'
          }`}
        >
          {isSubmitting ? 'Отправка…' : 'Оставить заявку'}
        </button>

        <p className="text-center text-xs text-amber-100/60">Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных</p>
      </form>
    </div>
  )
}


