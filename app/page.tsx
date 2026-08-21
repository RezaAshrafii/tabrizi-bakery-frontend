import Hero from '@/components/sections/Hero';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Products from '@/components/sections/Products';
import Story from '@/components/sections/Story';
import Gallery from '@/components/sections/Gallery';
import Location from '@/components/sections/Location';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <Products />
      <Story />
      <Gallery />
      <Location />
      <CTA />
      <Footer />
    </main>
  );
}
