'use client';

import { useEffect, useState } from 'react';
import ContactModal from './ContactModal';

const DISMISS_UNTIL_KEY = 'lb_home_discount_popup_dismiss_until';
const SHOW_DELAY_MS = 8000;
const DISMISS_MS = 3 * 60 * 1000;

function setDismissCooldown() {
  const dismissUntil = Date.now() + DISMISS_MS;
  localStorage.setItem(DISMISS_UNTIL_KEY, String(dismissUntil));
}

export default function HomeDiscountPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const dismissUntilRaw = localStorage.getItem(DISMISS_UNTIL_KEY);
    const dismissUntil = dismissUntilRaw ? Number(dismissUntilRaw) : 0;
    const isCooldownActive = Number.isFinite(dismissUntil) && dismissUntil > Date.now();

    if (isCooldownActive) {
      return;
    }

    const timer = window.setTimeout(() => {
      setIsOpen(true);
    }, SHOW_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setDismissCooldown();
    setIsOpen(false);
  };

  const handleSuccess = () => {
    setDismissCooldown();
  };

  return (
    <ContactModal
      isOpen={isOpen}
      onClose={handleClose}
      onSuccess={handleSuccess}
      sourceTag="Главная: попап скидка 10%"
      theme="dark"
      title="Оставьте заявку и получите скидку 10% на первый заказ под ключ"
      subtitle="Оставьте имя и телефон, и мы свяжемся с вами, чтобы обсудить формат мероприятия и закрепить скидку."
      submitText="Получить скидку 10%"
    />
  );
}
