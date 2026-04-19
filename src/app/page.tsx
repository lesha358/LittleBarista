import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import ServiceTriad from '@/components/ServiceTriad';
import PortfolioSection from '@/components/PortfolioSection';
import FloatingCTA from '@/components/FloatingCTA';
import ContactFormStatic from '@/components/ContactFormStatic';
import HomeDiscountPopup from '@/components/HomeDiscountPopup';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation theme="dark" />
      <HomeDiscountPopup />
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
        <ContactFormStatic source="Главная: форма внизу" />
        </div>
      </section>
      <FloatingCTA />
      <section id="contacts">
        <Footer theme="dark" />
      </section>
    </main>
  );
} 