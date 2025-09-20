import Hero from '@/components/Hero';
import Advantages from '@/components/Advantages';
import ServiceTriad from '@/components/ServiceTriad';
import WhyUs from '@/components/WhyUs';
import Pricing from '@/components/Pricing';
import WorkProcess from '@/components/WorkProcess';
import FeaturedRecipes from '@/components/FeaturedRecipes';
import EventTypes from '@/components/EventTypes';
import PhotoCarousel from '@/components/PhotoCarousel';
import Cooperation from '@/components/Cooperation';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import FloatingCTA from '@/components/FloatingCTA';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Advantages />
      <ServiceTriad />
      <WhyUs />
      <Pricing />
      <WorkProcess />
      <FeaturedRecipes />
      <EventTypes />
      <PhotoCarousel />
      <Cooperation />
      <Contacts />
      <Footer />
      <FloatingCTA />
    </main>
  );
} 