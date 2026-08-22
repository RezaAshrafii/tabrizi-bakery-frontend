import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { siteContent } from '@/content/site';

export default function Footer() {
  const { contact, meta } = siteContent;

  return (
    <footer className="pt-14 pb-24 lg:pb-14 bg-[#140E0A] border-t border-[#2C201A] text-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#2C201A] items-start">
          {/* Brand Col */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-block mb-2">
              <span className="font-serif text-2xl tracking-[0.16em] font-normal uppercase text-[#FAF7F2] block">
                {meta.siteName}
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#A2752E] font-sans font-medium block mt-0.5">
                Watertown, Massachusetts
              </span>
            </Link>
            <p className="text-xs text-[#FAF7F2]/65 font-sans font-light max-w-sm leading-relaxed mt-2">
              Persian pastries, baked goods, and specialty grocery items in Watertown, MA.
            </p>
            <div className="mt-4 p-3 bg-[#1C140F] border border-[#2C201A] text-[11px] text-[#FAF7F2]/50 font-sans leading-tight">
              <strong>Preview Notice:</strong> {meta.demoNotice}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.16em] text-[#A2752E] font-sans font-semibold mb-3">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF7F2]/75 font-sans">
              <li>
                <Link href="#products" className="hover:text-[#A2752E] transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#custom-orders" className="hover:text-[#A2752E] transition-colors">
                  Custom Orders
                </Link>
              </li>
              <li>
                <Link href="#story" className="hover:text-[#A2752E] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#visit" className="hover:text-[#A2752E] transition-colors">
                  Location & Hours
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Verification */}
          <div className="md:col-span-4">
            <h4 className="text-[11px] uppercase tracking-[0.16em] text-[#A2752E] font-sans font-semibold mb-3">
              Contact & Directions
            </h4>
            <p className="text-xs text-[#FAF7F2]/75 font-sans leading-relaxed mb-2">
              {contact.address.street}
              <br />
              {contact.address.city}, {contact.address.state} {contact.address.zip}
            </p>
            <p className="text-xs text-[#FAF7F2]/75 font-sans mb-3">
              Phone:{' '}
              <a href={`tel:${contact.phoneRaw}`} className="text-[#A2752E] hover:underline">
                {contact.phoneFormatted}
              </a>
            </p>
            <div className="flex items-center gap-4 text-xs font-sans">
              <a
                href={contact.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A2752E] hover:underline inline-flex items-center gap-1"
              >
                <span>Instagram</span>
                <ExternalLink size={11} aria-hidden="true" />
              </a>
              <span className="text-[#FAF7F2]/30">•</span>
              <a
                href={contact.social.reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A2752E] hover:underline inline-flex items-center gap-1"
              >
                <span>Google Reviews</span>
                <ExternalLink size={11} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#FAF7F2]/45 font-sans">
          <p>&copy; {new Date().getFullYear()} Tabrizi Bakery. Concept presentation for client review.</p>
          <p>Watertown, MA 02472</p>
        </div>
      </div>
    </footer>
  );
}
