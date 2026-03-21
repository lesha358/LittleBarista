'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import ContactModal from './ContactModal';
import { reachGoalAll } from '@/lib/analytics';

type ContactModalTriggerProps = {
  label: string;
  className?: string;
  model?: string;
  sourceTag?: string;
  theme?: 'light' | 'dark';
};

export default function ContactModalTrigger({ label, className = '', model = '', sourceTag = 'Аренда кофемашин', theme = 'light' }: ContactModalTriggerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <button onClick={() => { reachGoalAll('cta_click'); setIsOpen(true); }} className={className}>
        {label}
      </button>
      {mounted && typeof document !== 'undefined' && createPortal(
        <ContactModal 
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          presetModel={model}
          sourceTag={model ? `${sourceTag}: ${model}` : sourceTag}
          theme={theme}
        />,
        document.body
      )}
    </>
  );
}


