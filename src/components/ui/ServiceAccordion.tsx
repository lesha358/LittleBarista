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
    <div className="p-5 rounded-2xl border border-amber-200/20 bg-[rgba(0,0,0,0.35)] backdrop-blur shadow flex flex-col h-full">
      <div className="flex items-center gap-3">
        <h3 className="text-sm tracking-wider uppercase text-white/60">{headline}</h3>
      </div>
      <div className="mt-3 divide-y divide-amber-200/10">
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
                <span className="text-amber-100/90 group-hover:text-amber-100 transition-colors">
                  {item.title}
                </span>
                <span
                  className={`shrink-0 inline-flex h-6 w-6 items-center justify-center rounded-full border border-amber-200/30 text-amber-200/80 transition-transform ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                  aria-hidden
                >
                  +
                </span>
              </div>
              {isOpen && (
                <p className="mt-2 text-sm text-amber-100/70">
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
            className="w-full px-4 py-2.5 rounded-full bg-amber-500 text-[#0d0a08] hover:bg-amber-400 text-sm"
            model={headline}
            sourceTag={cta.sourceTag || headline}
            theme={cta.theme || 'dark'}
          />
        </div>
      )}
    </div>
  )
}


