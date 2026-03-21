import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import ServiceTriad from '@/components/ServiceTriad';
import FloatingCTA from '@/components/FloatingCTA';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation theme="dark" />
      <section id="hero">
        <Hero />
      </section>
      <ServiceTriad />
      <FloatingCTA />
      <section id="contacts">
        <Footer theme="dark" />
      </section>
    </main>
  );
} 