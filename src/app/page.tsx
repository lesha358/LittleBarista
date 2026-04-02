import { Suspense } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import ServiceTriad from '@/components/ServiceTriad';
import PortfolioSection from '@/components/PortfolioSection';
import FloatingCTA from '@/components/FloatingCTA';
import ContactFormStatic from '@/components/ContactFormStatic';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation theme="dark" />
      <section id="hero">
        <Hero />
      </section>
      <ServiceTriad />
      <PortfolioSection />
      <section id="contact-form" className="services-premium scroll-mt-28">
        <div className="services-container">
          <div className="services-head">
            <p className="services-kicker">Контакты</p>
            <h2>Обсудим ваше мероприятие</h2>
            <p className="services-subtitle max-w-3xl mx-auto">
              Оставьте заявку — предложим формат под ваш поток гостей, тайминг и площадку.
            </p>
          </div>
          <Suspense
            fallback={
              <div className="mx-auto max-w-2xl rounded-[28px] border border-[#7b5230]/35 bg-[rgba(29,19,14,.92)] p-8 text-center text-[#c7a679]">
                Загрузка формы...
              </div>
            }
          >
            <ContactFormStatic source="Главная: форма внизу" />
          </Suspense>
        </div>
      </section>
      <FloatingCTA />
      <section id="contacts">
        <Footer theme="dark" />
      </section>
    </main>
  );
} 