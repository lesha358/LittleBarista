import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import EventTypes from '@/components/EventTypes';
import PhotoCarousel from '@/components/PhotoCarousel';
import WorkProcess from '@/components/WorkProcess';
import Cooperation from '@/components/Cooperation';
import Pricing from '@/components/Pricing';
import WhyUs from '@/components/WhyUs';
import ContactForm from '@/components/ContactForm';
import FloatingCTA from '@/components/FloatingCTA';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section id="hero">
        <Hero />
      </section>
      <section id="event-types">
        <EventTypes />
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
        <ContactForm />
      </section>
      <section id="contacts">
        <Contacts />
      </section>
      <FloatingCTA />
      <Footer />
    </main>
  );
} 