'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
  model: string;
}

export default function ContactFormStatic() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
    model: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Используем внешний сервис для отправки формы (например, Formspree, Netlify Forms, или EmailJS)
      // Для демонстрации используем простую отправку через mailto
      const subject = `Новая заявка с сайта Little Barista - ${formData.name}`;
      const body = `
Имя: ${formData.name}
Телефон: ${formData.phone}
Email: ${formData.email}
Модель: ${formData.model}
Сообщение: ${formData.message}
      `.trim();

      // Открываем почтовый клиент
      const mailtoLink = `mailto:chaplinrus@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(mailtoLink);

      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
        model: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        Свяжитесь с нами
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Имя *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Ваше имя"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Телефон *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="+7 (999) 123-45-67"
            />
          </div>
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-2">
            Модель кофемашины
          </label>
          <select
            id="model"
            name="model"
            value={formData.model}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          >
            <option value="">Выберите модель</option>
            <option value="Caravel">Caravel</option>
            <option value="DR Coffee F10">DR Coffee F10</option>
            <option value="JL30">JL30</option>
            <option value="Jofemar">Jofemar</option>
            <option value="Simonelli">Simonelli</option>
            <option value="Другая">Другая</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Сообщение
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="Расскажите о ваших потребностях..."
          />
        </div>

        {submitStatus === 'success' && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
            Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
            Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз.
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-amber-700 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Отправляем...' : 'Отправить заявку'}
        </button>
      </form>
    </motion.div>
  );
}
