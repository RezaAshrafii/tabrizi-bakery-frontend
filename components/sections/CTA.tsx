import Link from 'next/link';
import { Phone, MapPin } from 'lucide-react';
import { siteContent } from '@/content/site';

export default function CTA() {
  const { contact } = siteContent;

  return (
    <section className="py-20 sm:py-24 bg-[#1C140F] text-[#FAF7F2] text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="inline-flex items-center justify-center gap-2.5 mb-5 px-3 py-1 bg-[#FAF7F2]/5 border border-[#FAF7F2]/10 text-[#A2752E] text-[11px] uppercase tracking-[0.18em] font-sans font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#A2752E]" aria-hidden="true" />
          <span>Watertown, Massachusetts</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#A2752E]" aria-hidden="true" />
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl mb-5 font-normal tracking-tight text-[#FAF7F2] max-w-2xl mx-auto leading-[1.14]">
          Traditional Persian Pastries & Fresh Breads in Watertown.
        </h2>

        <p className="text-sm sm:text-base text-[#FAF7F2]/75 font-sans font-light max-w-lg mx-auto mb-8 leading-relaxed">
          Stop by 56A Mount Auburn Street for daily sweet selections, or call to place custom party boxes and order inquiries.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href={`tel:${contact.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#A2752E] text-[#FAF7F2] text-xs uppercase tracking-[0.16em] font-sans font-semibold hover:bg-[#8e6423] transition-colors shadow-xs"
          >
            <Phone size={14} aria-hidden="true" />
            <span>Call {contact.phoneFormatted}</span>
          </a>
          <a
            href={contact.address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-[#FAF7F2]/30 text-[#FAF7F2] text-xs uppercase tracking-[0.16em] font-sans font-medium hover:border-[#A2752E] hover:text-[#A2752E] transition-colors"
          >
            <MapPin size={14} className="text-[#A2752E]" aria-hidden="true" />
            <span>Get Directions</span>
          </a>
        </div>
      </div>
    </section>
  );
}
