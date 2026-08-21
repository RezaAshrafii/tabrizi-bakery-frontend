'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1C140F]/95 backdrop-blur-md border-b border-[#362820] shadow-[0_6px_30px_rgba(0,0,0,0.35)]'
          : 'bg-[#1C140F] border-b border-[#2C201A]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 md:h-22 flex items-center justify-between">
        
        {/* Left Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-9 text-[12px] uppercase tracking-[0.2em] font-sans font-medium text-[#FAF7F2]/80 flex-1">
          <Link href="#story" className="hover:text-[#C99A4E] transition-colors">
            Our Story
          </Link>
          <Link href="#products" className="hover:text-[#C99A4E] transition-colors">
            The Menu
          </Link>
          <Link href="#gallery" className="hover:text-[#C99A4E] transition-colors">
            Bakery
          </Link>
        </nav>

        {/* Center Logo / Heritage Mark */}
        <div className="text-center flex-1 lg:flex-none">
          <Link href="/" className="inline-block group" aria-label="Tabrizi Bakery Homepage">
            <span className="font-serif text-2xl md:text-3xl tracking-[0.22em] font-normal uppercase text-[#FAF7F2] block transition-colors group-hover:text-[#C99A4E]">
              Tabrizi
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C99A4E] block mt-0.5 font-sans font-medium">
              Watertown, MA • Est. 1990
            </span>
          </Link>
        </div>

        {/* Right Desktop Nav & Action */}
        <div className="hidden lg:flex items-center justify-end gap-8 text-[12px] uppercase tracking-[0.2em] font-sans font-medium flex-1">
          <Link href="#visit" className="text-[#FAF7F2]/80 hover:text-[#C99A4E] transition-colors">
            Visit & Hours
          </Link>
          <a
            href="tel:+16179260880"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#C99A4E] text-[#FAF7F2] text-[11px] uppercase tracking-[0.2em] font-sans font-medium rounded-none hover:bg-[#C99A4E] hover:text-[#1C140F] transition-all duration-300 shadow-xs"
            aria-label="Call to order at (617) 926-0880"
          >
            <Phone size={13} className="text-[#C99A4E] group-hover:text-[#1C140F]" />
            <span>Call to Order</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden text-[#FAF7F2] p-2 -mr-2 focus:outline-none focus:ring-1 focus:ring-[#C99A4E]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
        >
          {isMobileMenuOpen ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`lg:hidden bg-[#1C140F] border-t border-[#2C201A] border-b border-[#362820] transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <nav className="px-6 py-6 flex flex-col gap-4 text-center font-sans">
          <Link
            href="#story"
            className="text-xs uppercase tracking-[0.2em] py-2.5 text-[#FAF7F2] border-b border-[#2C201A] hover:text-[#C99A4E]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Our Story
          </Link>
          <Link
            href="#products"
            className="text-xs uppercase tracking-[0.2em] py-2.5 text-[#FAF7F2] border-b border-[#2C201A] hover:text-[#C99A4E]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            The Menu
          </Link>
          <Link
            href="#gallery"
            className="text-xs uppercase tracking-[0.2em] py-2.5 text-[#FAF7F2] border-b border-[#2C201A] hover:text-[#C99A4E]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Bakery Gallery
          </Link>
          <Link
            href="#visit"
            className="text-xs uppercase tracking-[0.2em] py-2.5 text-[#FAF7F2] border-b border-[#2C201A] hover:text-[#C99A4E]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Location & Hours
          </Link>
          <div className="pt-2">
            <a
              href="tel:+16179260880"
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#C99A4E] text-[#1C140F] text-xs uppercase tracking-[0.2em] font-semibold"
            >
              <Phone size={14} className="text-[#1C140F]" />
              Call (617) 926-0880
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
