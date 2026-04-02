'use client'

import { useState } from 'react'
import ContactModalTrigger from '@/components/ContactModalTrigger'

export type ServiceItem = {
  id: string
  title: string
  description: string
}

type ServiceAccordionProps = {
  headline: string
  items: ServiceItem[]
  cta?: {
    label?: string
    sourceTag?: string
    theme?: 'light' | 'dark'
  }
}

export default function ServiceAccordion({ headline, items, cta }: ServiceAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <div className="flex h-full flex-col rounded-[28px] border border-[#c78149]/22 bg-[linear-gradient(180deg,rgba(255,255,255,.02),rgba(255,255,255,.01)),linear-gradient(180deg,rgba(29,19,14,.94),rgba(15,10,8,.98))] p-5 shadow-[0_18px_40px_rgba(0,0,0,.28)] backdrop-blur">
      <div className="flex items-center gap-3">
        <h3 className="text-sm uppercase tracking-[0.22em] text-[#c78149]/72">{headline}</h3>
      </div>
      <div className="mt-3 divide-y divide-[#c78149]/10">
        {items.map((item) => {
          const isOpen = openId === item.id
          return (
            <button
              key={item.id}
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="w-full text-left py-3 focus:outline-none group"
              aria-expanded={isOpen}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-[#f5eee4] transition-colors group-hover:text-white">
                  {item.title}
                </span>
                <span
                  className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#c78149]/30 text-[#d7c2a7] transition-transform ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                  aria-hidden
                >
                  +
                </span>
              </div>
              {isOpen && (
                <p className="mt-2 text-sm text-[#d7c2a7]">
                  {item.description}
                </p>
              )}
            </button>
          )
        })}
      </div>
      {cta && (
        <div className="mt-4 md:mt-auto">
          <ContactModalTrigger
            label={cta.label || 'Оставить заявку'}
            className="w-full rounded-full border border-[#c78149]/40 bg-white/[0.04] px-4 py-2.5 text-sm text-[#e2d4c8] transition hover:border-[#c9a06c]/60 hover:bg-white/[0.08] hover:text-[#f5eee4]"
            model={headline}
            sourceTag={cta.sourceTag || headline}
            theme={cta.theme || 'dark'}
          />
        </div>
      )}
    </div>
  )
}


