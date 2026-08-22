'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { siteContent } from '@/content/site';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#1C140F]/95 backdrop-blur-md border-b border-[#362820] shadow-[0_6px_30px_rgba(0,0,0,0.35)]'
            : 'bg-[#1C140F] border-b border-[#2C201A]'
        }`}
      >
        {/* Top utility banner for quick orientation */}
        <div className="bg-[#140E0A] border-b border-[#2C201A]/60 px-4 py-1 text-center text-[11px] font-sans text-[#FAF7F2]/75 hidden sm:flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#56674E]"></span>
            <span>Watertown, MA • Mount Auburn St</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${siteContent.contact.phoneRaw}`}
              className="hover:text-[#A2752E] transition-colors"
            >
              Call: {siteContent.contact.phoneFormatted}
            </a>
            <span className="text-[#FAF7F2]/30">|</span>
            <Link href="#visit" className="hover:text-[#A2752E] transition-colors">
              Hours & Directions
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between">
          {/* Left Desktop Nav */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-8 text-[12px] uppercase tracking-[0.18em] font-sans font-medium text-[#FAF7F2]/80 flex-1"
          >
            <Link href="#products" className="hover:text-[#A2752E] transition-colors">
              Products
            </Link>
            <Link href="#custom-orders" className="hover:text-[#A2752E] transition-colors">
              Custom Orders
            </Link>
            <Link href="#story" className="hover:text-[#A2752E] transition-colors">
              About
            </Link>
          </nav>

          {/* Center Logo */}
          <div className="text-left sm:text-center flex-1 lg:flex-none">
            <Link href="/" className="inline-block group" aria-label="Tabrizi Bakery Homepage">
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.16em] font-normal uppercase text-[#FAF7F2] block transition-colors group-hover:text-[#A2752E]">
                {siteContent.meta.siteName}
              </span>
              <span className="text-[10px] uppercase tracking-[0.24em] text-[#A2752E] block mt-0.5 font-sans font-medium">
                Watertown, Massachusetts
              </span>
            </Link>
          </div>

          {/* Right Desktop Nav & Actions */}
          <div className="hidden lg:flex items-center justify-end gap-6 text-[12px] uppercase tracking-[0.18em] font-sans font-medium flex-1">
            <Link href="#visit" className="text-[#FAF7F2]/80 hover:text-[#A2752E] transition-colors">
              Visit & Hours
            </Link>
            <a
              href={`tel:${siteContent.contact.phoneRaw}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#A2752E] text-[#FAF7F2] text-[11px] uppercase tracking-[0.16em] font-sans font-semibold hover:bg-[#8e6423] transition-colors shadow-xs"
              aria-label={`Call bakery at ${siteContent.contact.phoneFormatted}`}
            >
              <Phone size={13} aria-hidden="true" />
              <span>Call ({siteContent.contact.phoneFormatted})</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden text-[#FAF7F2] p-2 -mr-2 focus:outline-none focus:ring-2 focus:ring-[#A2752E]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
          >
            {isMobileMenuOpen ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          id="mobile-navigation"
          className={`lg:hidden bg-[#1C140F] border-t border-[#2C201A] border-b border-[#362820] transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <nav className="px-6 py-5 flex flex-col gap-3 text-center font-sans">
            <Link
              href="#products"
              className="text-xs uppercase tracking-[0.18em] py-2 text-[#FAF7F2] border-b border-[#2C201A] hover:text-[#A2752E]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="#custom-orders"
              className="text-xs uppercase tracking-[0.18em] py-2 text-[#FAF7F2] border-b border-[#2C201A] hover:text-[#A2752E]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Custom Orders & Inquiries
            </Link>
            <Link
              href="#story"
              className="text-xs uppercase tracking-[0.18em] py-2 text-[#FAF7F2] border-b border-[#2C201A] hover:text-[#A2752E]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#visit"
              className="text-xs uppercase tracking-[0.18em] py-2 text-[#FAF7F2] border-b border-[#2C201A] hover:text-[#A2752E]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Location, Hours & Directions
            </Link>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`tel:${siteContent.contact.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#A2752E] text-[#FAF7F2] text-xs uppercase tracking-[0.18em] font-semibold"
              >
                <Phone size={14} aria-hidden="true" />
                Call {siteContent.contact.phoneFormatted}
              </a>
              <a
                href={siteContent.contact.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 border border-[#FAF7F2]/30 text-[#FAF7F2] text-xs uppercase tracking-[0.16em]"
              >
                <MapPin size={14} aria-hidden="true" />
                Get Directions
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
