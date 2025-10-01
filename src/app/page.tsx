import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import ServiceTriad from '@/components/ServiceTriad';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section id="hero">
        <Hero />
      </section>
      <section id="services-triad">
        <ServiceTriad />
      </section>
      <Footer />
    </main>
  );
} 