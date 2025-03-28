'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

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

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Ошибка при отправке формы');
      }

      setSubmitStatus('success');
      setFormData({ name: '', phone: '', email: '', message: '' });
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-24 bg-brown-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Оставить заявку</h2>
          <p className="text-gray-700 text-lg">
            Свяжемся с вами в течение 60 минут и рассчитаем точную стоимость услуги
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Как к вам обращаться?
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brown-500 focus:border-transparent"
              placeholder="Ваше имя"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Номер телефона
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brown-500 focus:border-transparent"
              placeholder="+7 (___) ___-__-__"
              pattern="[0-9+\s()-]*"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brown-500 focus:border-transparent"
              placeholder="example@email.com"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Сообщение (необязательно)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brown-500 focus:border-transparent"
              rows={4}
              placeholder="Расскажите о вашем мероприятии"
            />
          </div>

          {/* Статус отправки */}
          {submitStatus === 'success' && (
            <div className="p-4 bg-green-50 text-green-700 rounded-lg">
              Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="p-4 bg-red-50 text-red-700 rounded-lg">
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-brown-600 text-white py-4 px-8 rounded-lg font-semibold transition-colors ${
              isSubmitting 
                ? 'bg-brown-400 cursor-not-allowed' 
                : 'hover:bg-brown-700'
            }`}
          >
            {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
          </button>

          <p className="mt-4 text-sm text-gray-600 text-center">
            Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
          </p>
        </form>
      </div>
    </section>
  );
} 