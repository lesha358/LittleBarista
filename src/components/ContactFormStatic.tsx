'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';

interface FormData {
  name: string;
  phone: string;
  model?: string;
}

interface ContactFormStaticProps {
  /** Подпись в Telegram, откуда заявка */
  source?: string;
}

export default function ContactFormStatic({ source = 'Форма: Статическая карточка' }: ContactFormStaticProps) {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    model: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Получаем модель из URL параметров
  useEffect(() => {
    const model = searchParams.get('model');
    if (model) {
      setFormData(prev => ({
        ...prev,
        model: decodeURIComponent(model)
      }));
    }
  }, [searchParams]);

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
        source,
      });

      if (!tg.ok) {
        throw new Error(tg.error || 'Не удалось отправить сообщение в Telegram');
      }

      setSubmitStatus('success');
      setFormData({ name: '', phone: '', model: '' });
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
      className="mx-auto max-w-2xl rounded-[30px] border border-[#7b5230]/35 bg-[linear-gradient(180deg,rgba(255,255,255,.03),rgba(255,255,255,.01)),linear-gradient(180deg,rgba(29,19,14,.94),rgba(15,10,8,.98))] p-8 shadow-[0_24px_60px_rgba(0,0,0,.35),0_0_40px_rgba(214,160,91,.06)]"
    >
      <h2
        className="mb-6 text-center text-3xl text-[#f5e8d3]"
        style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, serif' }}
      >
        Оставить заявку
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#d7c2a7]">
              Имя *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-[#7b5230]/35 bg-black/20 px-4 py-3 text-[#f5e8d3] placeholder:text-[#8f7352] transition-all duration-200 focus:border-[#d2a063]/45 focus:outline-none focus:ring-2 focus:ring-[#d2a063]/25"
              placeholder="Ваше имя"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="mb-2 block text-sm font-medium text-[#d7c2a7]">
              Телефон *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-[#7b5230]/35 bg-black/20 px-4 py-3 text-[#f5e8d3] placeholder:text-[#8f7352] transition-all duration-200 focus:border-[#d2a063]/45 focus:outline-none focus:ring-2 focus:ring-[#d2a063]/25"
              placeholder="+7 (999) 123-45-67"
            />
          </div>
        </div>

        {formData.model && (
          <div>
            <label className="mb-2 block text-sm font-medium text-[#d7c2a7]">
              Выбранная модель кофемашины
            </label>
            <div className="w-full rounded-xl border border-[#7b5230]/35 bg-black/20 px-4 py-3 text-[#f5e8d3]">
              {formData.model}
            </div>
          </div>
        )}

        {submitStatus === 'success' && (
          <div className="rounded-xl border border-[#5f7b4d] bg-[#172113] px-4 py-3 text-[#d7f0c6]">
            Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="rounded-xl border border-[#8f4d47] bg-[#261411] px-4 py-3 text-[#f0c2bc]">
            Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз.
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-full border-2 border-[#c9a06c] bg-gradient-to-b from-[#faf3e8] via-[#f0e2cf] to-[#e5d0b0] px-6 py-4 font-semibold text-[#1a1008] shadow-[0_10px_36px_rgba(0,0,0,.42),inset_0_1px_0_rgba(255,255,255,.65),0_0_28px_rgba(200,150,80,.22)] transition-all duration-200 hover:-translate-y-0.5 hover:from-[#fffaf3] hover:via-[#f7ebdc] hover:to-[#edd9be] hover:border-[#ddb66a] focus:outline-none focus:ring-2 focus:ring-[#e8c48a] focus:ring-offset-2 focus:ring-offset-[#0d0705] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? 'Отправляем...' : 'Отправить заявку'}
        </button>
      </form>
    </motion.div>
  );
}
