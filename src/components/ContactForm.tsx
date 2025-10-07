'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { reachGoalAll } from '@/lib/analytics';

// Типизация для window.ym берётся из утилиты analytics, здесь декларация не нужна

type ContactFormProps = {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  presetModel?: string;
};

// Компонент формы с использованием useSearchParams
function ContactFormWithSearchParams({ title, subtitle, ctaText, presetModel }: ContactFormProps) {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    model: '' as string,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const modelFromQuery = searchParams?.get('model') || '';
    const initialModel = presetModel || modelFromQuery;
    if (initialModel) {
      setFormData(prev => ({ ...prev, model: initialModel }));
    }
  }, [searchParams, presetModel]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { sendTelegramClient } = await import('../lib/telegram');
      const tg = await sendTelegramClient({
        name: formData.name,
        phone: formData.phone,
        model: formData.model,
        source: 'Форма: Оставить заявку',
      });

      if (!tg.ok) {
        throw new Error(tg.error || 'Не удалось отправить сообщение в Telegram');
      }

      // Отправляем событие в Яндекс Метрику (во все счётчики)
      reachGoalAll('form_success')

      setSubmitStatus('success');
      setFormData({ name: '', phone: '', model: '' });
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6 bg-cream-50 p-8 rounded-2xl shadow-xl border-2 border-brown-200 relative overflow-hidden">
        {/* Декоративный элемент */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-brown-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-brown-100 rounded-full -ml-12 -mb-12 opacity-50"></div>

        <div className="grid md:grid-cols-2 gap-6 relative z-10">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Ваше имя
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brown-500 focus:border-transparent"
              placeholder="Иван Иванов"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Телефон
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brown-500 focus:border-transparent"
              placeholder="+7 (999) 123-45-67"
            />
          </div>
        </div>

        {formData.model && (
          <div className="relative z-10">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Выбранная модель
            </label>
            <input
              type="text"
              value={formData.model}
              readOnly
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-800"
            />
          </div>
        )}

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

        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`button-primary text-lg px-8 py-4 group ${
              isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
            }`}
          >
            <span className="relative z-10 text-white">
              {isSubmitting ? 'Отправка...' : ctaText}
            </span>
            <div className="absolute inset-0 bg-brown-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </button>
        </div>

        <p className="text-sm text-gray-600 text-center">
          Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
        </p>
      </form>
    </div>
  );
}

// Основной компонент с Suspense boundary
export default function ContactForm({ title = 'Оставить заявку', subtitle = 'Заполните форму, и мы свяжемся с вами в ближайшее время', ctaText = 'Отправить заявку', presetModel = '' }: ContactFormProps) {
  return (
    <section className="section-container section-padding gradient-section">
      <div className="container">
        <div className="section-title">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        <Suspense fallback={
          <div className="max-w-2xl mx-auto">
            <div className="space-y-6 bg-cream-50 p-8 rounded-2xl shadow-xl border-2 border-brown-200 relative overflow-hidden">
              <div className="animate-pulse">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="h-12 bg-gray-200 rounded-lg"></div>
                  <div className="h-12 bg-gray-200 rounded-lg"></div>
                </div>
                <div className="mt-6 h-12 bg-gray-200 rounded-lg"></div>
              </div>
            </div>
          </div>
        }>
          <ContactFormWithSearchParams 
            title={title}
            subtitle={subtitle}
            ctaText={ctaText}
            presetModel={presetModel}
          />
        </Suspense>
      </div>
    </section>
  );
} 