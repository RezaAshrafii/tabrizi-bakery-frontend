import Hero from '@/components/sections/Hero';
import Navbar from '@/components/layout/Navbar';
import MobileActionBar from '@/components/layout/MobileActionBar';
import Footer from '@/components/layout/Footer';
import Products from '@/components/sections/Products';
import CustomOrders from '@/components/sections/CustomOrders';
import Story from '@/components/sections/Story';
import Gallery from '@/components/sections/Gallery';
import Location from '@/components/sections/Location';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] flex flex-col selection:bg-[#A2752E] selection:text-white">
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        <Hero />
        <Products />
        <CustomOrders />
        <Story />
        <Gallery />
        <Location />
        <CTA />
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
}
