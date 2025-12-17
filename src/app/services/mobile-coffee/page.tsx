import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import PhotoCarousel from '@/components/PhotoCarousel';
import WorkProcess from '@/components/WorkProcess';
import Cooperation from '@/components/Cooperation';
import Pricing from '@/components/Pricing';
import WhyUs from '@/components/WhyUs';
import ContactFormStatic from '@/components/ContactFormStatic';
import FloatingCTA from '@/components/FloatingCTA';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import { Suspense } from 'react';
import { generateMetadata } from '@/lib/metadata';

export const metadata = generateMetadata({
  title: 'Выездная кофейня — Little Barista',
  description: 'Выездная кофейная станция с бариста для вашего мероприятия. Меню, оборудование, полный сервис.',
  path: '/services/mobile-coffee',
});

export default function MobileCoffeePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section id="hero">
        <Hero />
      </section>
      <section id="formats" className="relative container px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="p-6 bg-white rounded-2xl border border-brown-200 shadow-sm hover:shadow-md transition-shadow text-center">
            <h3 className="text-xl font-semibold text-brown-900">Выставки</h3>
            <div className="mt-2 w-14 h-0.5 bg-brown-300 mx-auto" />
            <p className="mt-3 text-brown-800/90 text-sm">
              Профессиональное обслуживание на ваших мероприятиях
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-brown-200 shadow-sm hover:shadow-md transition-shadow text-center">
            <h3 className="text-xl font-semibold text-brown-900">Конференции</h3>
            <div className="mt-2 w-14 h-0.5 bg-brown-300 mx-auto" />
            <p className="mt-3 text-brown-800/90 text-sm">
              Свежий кофе и закуски для участников
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-brown-200 shadow-sm hover:shadow-md transition-shadow text-center">
            <h3 className="text-xl font-semibold text-brown-900">Кофе-брейки</h3>
            <div className="mt-2 w-14 h-0.5 bg-brown-300 mx-auto" />
            <p className="mt-3 text-brown-800/90 text-sm">
              Организация перерывов на мероприятиях
            </p>
          </div>
        </div>
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-screen h-28 md:h-32 bg-gradient-to-b from-brown-50/80 to-transparent" />
      </section>
      <section id="gallery">
        <PhotoCarousel />
      </section>
      <section id="cooperation">
        <Cooperation />
      </section>
      <section id="process">
        <WorkProcess />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="why-us">
        <WhyUs />
      </section>
      <section id="contact-form">
        <Suspense fallback={<div>Загрузка формы...</div>}>
          <ContactFormStatic />
        </Suspense>
      </section>
      <section id="contacts">
        <Contacts />
      </section>
      <FloatingCTA />
      <Footer />
    </main>
  );
}
