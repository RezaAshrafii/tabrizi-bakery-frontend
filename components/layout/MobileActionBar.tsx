'use client';

import { Phone, MapPin, Calendar } from 'lucide-react';
import Link from 'next/link';
import { siteContent } from '@/content/site';

export default function MobileActionBar() {
  return (
    <div
      aria-label="Quick action bar"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#1C140F]/95 backdrop-blur-md border-t border-[#362820] px-4 py-2.5 pb-[max(0.65rem,env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(0,0,0,0.35)]"
    >
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2 text-center font-sans">
        {/* Action 1: Call */}
        <a
          href={`tel:${siteContent.contact.phoneRaw}`}
          className="flex flex-col items-center justify-center py-1.5 px-2 bg-[#A2752E] text-[#FAF7F2] rounded-xs active:bg-[#8e6423] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#A2752E]"
          aria-label={`Call bakery directly at ${siteContent.contact.phoneFormatted}`}
        >
          <Phone size={18} aria-hidden="true" className="mb-0.5" />
          <span className="text-[11px] font-medium tracking-wide">Call</span>
        </a>

        {/* Action 2: Directions */}
        <a
          href={siteContent.contact.address.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 bg-[#2C201A] text-[#FAF7F2] border border-[#423126] rounded-xs active:bg-[#362820] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#A2752E]"
          aria-label="Get directions to 56A Mount Auburn Street on Google Maps"
        >
          <MapPin size={18} aria-hidden="true" className="text-[#A2752E] mb-0.5" />
          <span className="text-[11px] font-medium tracking-wide">Directions</span>
        </a>

        {/* Action 3: Inquire / Custom Orders */}
        <Link
          href="#custom-orders"
          className="flex flex-col items-center justify-center py-1.5 px-2 bg-[#2C201A] text-[#FAF7F2] border border-[#423126] rounded-xs active:bg-[#362820] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#A2752E]"
          aria-label="Jump to custom orders and inquiry section"
        >
          <Calendar size={18} aria-hidden="true" className="text-[#A2752E] mb-0.5" />
          <span className="text-[11px] font-medium tracking-wide">Inquire</span>
        </Link>
      </div>
    </div>
  );
}
