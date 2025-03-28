import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import EventGallery from '@/components/EventGallery';
import WorkProcess from '@/components/WorkProcess';
import Cooperation from '@/components/Cooperation';
import PriceExamples from '@/components/PriceExamples';
import WhyUs from '@/components/WhyUs';
import ContactForm from '@/components/ContactForm';
import FloatingCTA from '@/components/FloatingCTA';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section id="hero">
        <Hero />
      </section>
      <section id="gallery">
        <EventGallery />
      </section>
      <section id="process">
        <WorkProcess />
      </section>
      <section id="cooperation">
        <Cooperation />
      </section>
      <section id="pricing">
        <PriceExamples />
      </section>
      <section id="why-us">
        <WhyUs />
      </section>
      <section id="contacts">
        <ContactForm />
      </section>
      <FloatingCTA />
    </main>
  );
} 