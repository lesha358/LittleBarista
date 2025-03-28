'use client';

import { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Ошибка при отправке формы');
      }

      setSubmitStatus('success');
      setFormData({ name: '', phone: '', email: '', message: '' });
      
      // Закрываем модальное окно через 2 секунды после успешной отправки
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Затемнение фона */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Модальное окно */}
      <div className="relative bg-white rounded-2xl p-4 sm:p-6 lg:p-8 max-w-md w-full mx-auto shadow-xl overflow-y-auto max-h-[calc(100vh-2rem)]">
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
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2 pr-8">
          Оставить заявку
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
          Заполните форму, и мы свяжемся с вами в ближайшее время
        </p>

        {/* Форма */}
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Ваше имя
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-brown-500 focus:border-transparent"
              placeholder="Например: Иван Иванов"
              required
            />
            <p className="mt-1 text-xs sm:text-sm text-gray-500">
              Введите ваше полное имя
            </p>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Телефон
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-brown-500 focus:border-transparent"
              placeholder="+7 (___) ___-__-__"
              pattern="[0-9+\s()-]*"
              required
            />
            <p className="mt-1 text-xs sm:text-sm text-gray-500">
              Введите номер телефона в любом удобном формате
            </p>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-brown-500 focus:border-transparent"
              placeholder="example@email.com"
              required
            />
            <p className="mt-1 text-xs sm:text-sm text-gray-500">
              Введите действующий email для связи
            </p>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Сообщение
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-brown-500 focus:border-transparent resize-none"
              placeholder="Опишите ваше мероприятие или задайте вопрос"
              required
            />
            <p className="mt-1 text-xs sm:text-sm text-gray-500">
              Укажите тип мероприятия, дату и количество гостей
            </p>
          </div>

          {/* Статус отправки */}
          {submitStatus === 'success' && (
            <div className="p-3 sm:p-4 bg-green-50 text-green-700 rounded-lg text-sm sm:text-base">
              Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="p-3 sm:p-4 bg-red-50 text-red-700 rounded-lg text-sm sm:text-base">
              Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже.
            </div>
          )}

          {/* Кнопка отправки */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2.5 sm:py-3 px-4 rounded-lg text-white text-sm sm:text-base font-medium transition-colors ${
              isSubmitting 
                ? 'bg-brown-400 cursor-not-allowed' 
                : 'bg-brown-600 hover:bg-brown-700'
            }`}
          >
            {isSubmitting ? 'Отправка...' : 'Отправить'}
          </button>
        </form>
      </div>
    </div>
  );
} 