import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 md:py-32 bg-[#1C140F] text-[#FAF7F2] text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Heritage Mark Eyebrow */}
        <div className="inline-flex items-center justify-center gap-3 mb-6 px-3.5 py-1.5 bg-[#FAF7F2]/5 border border-[#FAF7F2]/10 text-[#A2752E] text-[11px] uppercase tracking-[0.2em] font-sans font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#A2752E]"></span>
          <span>Watertown, Massachusetts</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#A2752E]"></span>
        </div>
        
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl mb-6 font-normal tracking-tight text-[#FAF7F2] max-w-3xl mx-auto leading-[1.12]">
          Experience Authentic Persian Baking on Mount Auburn Street.
        </h2>

        <p className="text-base sm:text-lg text-[#FAF7F2]/75 font-sans font-light max-w-xl mx-auto mb-10 leading-relaxed">
          Step into our bakery for fresh stone-baked barbari breads, golden saffron baklava, and handmade confections baked every morning from original family recipes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#visit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FAF7F2] text-[#1C140F] text-xs uppercase tracking-[0.18em] font-sans font-medium hover:bg-[#A2752E] hover:text-white transition-colors duration-300 shadow-sm group"
          >
            <span>Visit Bakery</span>
            <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="tel:+16179260880"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#FAF7F2]/30 text-[#FAF7F2] text-xs uppercase tracking-[0.18em] font-sans font-medium hover:border-[#A2752E] hover:text-[#A2752E] transition-colors duration-300"
          >
            <Phone size={14} className="text-[#A2752E]" />
            <span>Call (617) 926-0880</span>
          </a>
        </div>

      </div>
    </section>
  );
}
