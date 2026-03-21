'use client';

import { useEffect, useState } from 'react';
import { getSavedUtm } from '@/lib/utm';
import { reachGoalAll } from '@/lib/analytics';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetModel?: string;
  sourceTag?: string;
  theme?: 'light' | 'dark';
}

export default function ContactModal({ isOpen, onClose, presetModel = '', sourceTag = 'Модалка', theme = 'light' }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    model: presetModel || '',
  });
  useEffect(() => {
    if (isOpen) reachGoalAll('modal_open')
  }, [isOpen])
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Используем клиентский Telegram API
      const { sendTelegramClient } = await import('../lib/telegram');
      const utm = getSavedUtm();
      const tg = await sendTelegramClient({
        name: formData.name,
        phone: formData.phone,
        model: formData.model || presetModel,
        source: [
          sourceTag,
          utm?.utm_source && `utm_source=${utm.utm_source}`,
          utm?.utm_medium && `utm_medium=${utm.utm_medium}`,
          utm?.utm_campaign && `utm_campaign=${utm.utm_campaign}`,
          utm?.utm_content && `utm_content=${utm.utm_content}`,
          utm?.utm_term && `utm_term=${utm.utm_term}`,
          utm?.referrer && `ref=${utm.referrer}`,
        ].filter(Boolean).join(' | '),
      });
      
      if (tg.ok) {
        reachGoalAll('form_success')
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', model: '' });
        setTimeout(() => onClose(), 2000);
      } else {
        throw new Error(tg.error || 'Ошибка отправки в Telegram');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  const isDark = theme === 'dark'

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Затемнение фона */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Модальное окно */}
      <div className={`${isDark ? 'bg-[#0d0a08] border-amber-500/30 text-amber-100' : 'bg-white border-brown-200 text-gray-900'} relative rounded-2xl p-4 sm:p-6 lg:p-8 max-w-md w-full mx-auto shadow-xl overflow-y-auto max-h-[calc(100vh-2rem)] border-2`}>
        {/* Кнопка закрытия */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700 transition-colors p-1"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Заголовок */}
        <h2 className={`text-xl sm:text-2xl font-bold mb-1 sm:mb-2 pr-8 ${isDark ? 'text-amber-100' : 'text-gray-900'}`}>
          Оставить заявку
        </h2>
        <p className={`text-sm sm:text-base mb-4 sm:mb-6 ${isDark ? 'text-amber-100/80' : 'text-gray-600'}`}>
          Заполните форму, и мы свяжемся с вами в ближайшее время
        </p>

        {/* Форма */}
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          {Boolean(formData.model || presetModel) && (
            <div>
              <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-amber-100/80' : 'text-gray-700'}`}>
                Выбранная модель
              </label>
              <input
                type="text"
                value={formData.model || presetModel}
                readOnly
                className={`w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg ${isDark ? 'border border-amber-500/30 bg-[#0f0d0b] text-amber-100' : 'border border-gray-300 bg-gray-50 text-gray-800'}`}
              />
            </div>
          )}
          <div>
            <label htmlFor="name" className={`block text-sm font-medium mb-1 ${isDark ? 'text-amber-100/80' : 'text-gray-700'}`}>
              Ваше имя
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg focus:ring-2 focus:ring-brown-500 focus:border-transparent ${isDark ? 'border border-amber-500/30 bg-[#0f0d0b] text-amber-100 placeholder:text-amber-200/40' : 'border border-gray-300'}`}
              placeholder="Например: Иван Иванов"
              required
            />
            <p className={`mt-1 text-xs sm:text-sm ${isDark ? 'text-amber-100/60' : 'text-gray-500'}`}>
              Введите ваше полное имя
            </p>
          </div>

          <div>
            <label htmlFor="phone" className={`block text-sm font-medium mb-1 ${isDark ? 'text-amber-100/80' : 'text-gray-700'}`}>
              Телефон
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={`w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg focus:ring-2 focus:ring-brown-500 focus:border-transparent ${isDark ? 'border border-amber-500/30 bg-[#0f0d0b] text-amber-100 placeholder:text-amber-200/40' : 'border border-gray-300'}`}
              placeholder="+7 (___) ___-__-__"
              pattern="[0-9+\s()-]*"
              required
            />
            <p className={`mt-1 text-xs sm:text-sm ${isDark ? 'text-amber-100/60' : 'text-gray-500'}`}>
              Введите номер телефона в любом удобном формате
            </p>
          </div>

          {/* Статус отправки */}
          {submitStatus === 'success' && (
            <div className={`${isDark ? 'bg-emerald-500/10 text-emerald-200 border border-emerald-400/30' : 'bg-green-50 text-green-700 border border-green-200'} p-3 sm:p-4 rounded-lg text-sm sm:text-base`}>
              Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className={`${isDark ? 'bg-red-500/10 text-red-200 border border-red-400/30' : 'bg-red-50 text-red-700 border border-red-200'} p-3 sm:p-4 rounded-lg text-sm sm:text-base`}>
              {errorMessage}
            </div>
          )}

          {/* Кнопка отправки */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2.5 sm:py-3 px-4 rounded-lg text-sm sm:text-base font-medium transition-colors ${
              isDark
                ? (isSubmitting ? 'bg-amber-400/60 text-[#0d0a08] cursor-not-allowed' : 'bg-amber-500 text-[#0d0a08] hover:bg-amber-400')
                : (isSubmitting ? 'bg-brown-400 text-white cursor-not-allowed' : 'bg-brown-600 hover:bg-brown-700 text-white')
            }`}
          >
            {isSubmitting ? 'Отправка...' : 'Отправить'}
          </button>
        </form>
      </div>
    </div>
  );
} 