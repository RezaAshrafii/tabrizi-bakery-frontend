import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[88vh] pt-32 md:pt-40 pb-20 md:pb-28 flex items-center bg-[#FAF7F2] text-[#1C140F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Brand Legacy & Value Proposition (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Heritage Lineage Eyebrow */}
            <div className="inline-flex items-center gap-3 mb-6 px-3.5 py-1.5 bg-[#F3EDE2] border border-[#E5DDD0] text-[#A2752E] text-[11px] uppercase tracking-[0.22em] font-sans font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A2752E]"></span>
              <span>Watertown, Massachusetts • Est. 1990</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-[4.35rem] font-normal leading-[1.08] tracking-[-0.02em] text-[#1C140F] mb-6">
              Authentic Persian <br />
              <span className="italic font-light text-[#A2752E]">Pastry & Breads,</span> <br />
              Baked with Heritage.
            </h1>

            {/* Narrative Sub-copy */}
            <p className="text-base sm:text-lg text-[#1C140F]/80 leading-relaxed font-sans font-light max-w-xl mb-10">
              For more than thirty years, Tabrizi Bakery has preserved the art of traditional Persian baking on Mount Auburn Street. Every morning begins with stone-baked barbari bread, honey-glazed saffron baklava, and fragrant cardamom confections hand-rolled from generations-old family recipes.
            </p>

            {/* Intent-Driven CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-stretch sm:items-center mb-12">
              <Link
                href="#products"
                className="inline-flex items-center justify-center gap-3 bg-[#1C140F] text-[#FAF7F2] px-8 py-4 text-xs uppercase tracking-[0.2em] font-sans font-medium hover:bg-[#A2752E] transition-colors duration-300 shadow-sm group"
              >
                <span>Explore the Menu</span>
                <ArrowRight size={15} className="transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#visit"
                className="inline-flex items-center justify-center gap-2 border border-[#1C140F]/30 px-7 py-4 text-xs uppercase tracking-[0.2em] font-sans font-medium text-[#1C140F] hover:border-[#A2752E] hover:text-[#A2752E] transition-colors duration-300"
              >
                <MapPin size={14} className="text-[#A2752E]" />
                <span>Visit Our Bakery</span>
              </Link>
            </div>

            {/* Artisanal Heritage Pillars */}
            <div className="pt-8 border-t border-[#E5DDD0] w-full grid grid-cols-3 gap-4 text-left">
              <div>
                <span className="block font-serif text-lg md:text-xl font-medium text-[#1C140F]">30+ Years</span>
                <span className="text-[11px] uppercase tracking-[0.14em] text-[#1C140F]/60 font-sans">Family Owned</span>
              </div>
              <div>
                <span className="block font-serif text-lg md:text-xl font-medium text-[#1C140F]">Fresh Daily</span>
                <span className="text-[11px] uppercase tracking-[0.14em] text-[#1C140F]/60 font-sans">Stone Hearth Breads</span>
              </div>
              <div>
                <span className="block font-serif text-lg md:text-xl font-medium text-[#1C140F]">Pure Saffron</span>
                <span className="text-[11px] uppercase tracking-[0.14em] text-[#1C140F]/60 font-sans">& Rose Water</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Fidelity Editorial Visual (5 cols on lg) */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px] bg-[#F3EDE2] p-3.5 border border-[#E5DDD0] shadow-xl">
              
              {/* LCP Main Visual: Storefront Entrance in full vibrant clarity */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#FAF7F2]">
                <Image
                  src="/images/hero/01-storefront-entrance.webp"
                  alt="Tabrizi Bakery Storefront at 56A Mount Auburn St, Watertown MA"
                  fill
                  priority
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 460px, 480px"
                  className="object-cover object-center"
                />
              </div>

              {/* Refined Archival Plaque */}
              <div className="pt-4 pb-1 px-2 flex items-center justify-between">
                <div>
                  <p className="font-serif text-sm italic text-[#1C140F]">56A Mount Auburn Street</p>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-[#1C140F]/60 font-sans">Watertown, Massachusetts</p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2.5 py-1 bg-[#56674E]/10 text-[#56674E] text-[10px] uppercase tracking-[0.16em] font-sans font-semibold">
                    Open Today
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

