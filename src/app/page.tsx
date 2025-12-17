import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import ServiceTriad from '@/components/ServiceTriad';
import FloatingCTA from '@/components/FloatingCTA';

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
      <FloatingCTA />
      <Footer />
    </main>
  );
} 