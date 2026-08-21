import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-16 bg-[#140E0A] border-t border-[#2C201A] text-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#2C201A] items-start">
          
          {/* Brand Col (6 cols on md) */}
          <div className="md:col-span-6">
            <Link href="/" className="inline-block mb-3">
              <span className="font-serif text-2xl md:text-3xl tracking-[0.2em] font-normal uppercase text-[#FAF7F2] block">
                Tabrizi Bakery
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#A2752E] font-sans font-medium block mt-1">
                Watertown, Massachusetts • Est. 1990
              </span>
            </Link>
            <p className="text-xs text-[#FAF7F2]/65 font-sans font-light max-w-sm leading-relaxed mt-2">
              Traditional Persian flatbreads, aromatic pastries, and heirloom confections crafted with three decades of family dedication.
            </p>
          </div>

          {/* Quick Navigation (3 cols on md) */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.18em] text-[#A2752E] font-sans font-semibold mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FAF7F2]/75 font-sans">
              <li>
                <Link href="#story" className="hover:text-[#A2752E] transition-colors">Our Heritage</Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-[#A2752E] transition-colors">Specialty Menu</Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-[#A2752E] transition-colors">Bakery Atmosphere</Link>
              </li>
              <li>
                <Link href="#visit" className="hover:text-[#A2752E] transition-colors">Location & Hours</Link>
              </li>
            </ul>
          </div>

          {/* Visit & Connect (3 cols on md) */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.18em] text-[#A2752E] font-sans font-semibold mb-4">
              Visit Us
            </h4>
            <p className="text-xs text-[#FAF7F2]/75 font-sans leading-relaxed mb-3">
              56A Mount Auburn St<br />
              Watertown, MA 02472
            </p>
            <a
              href="https://www.instagram.com/tabrizibakery/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#A2752E] hover:underline font-sans inline-block"
            >
              Follow on Instagram →
            </a>
          </div>

        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#FAF7F2]/45 font-sans">
          <p>&copy; {new Date().getFullYear()} Tabrizi Bakery. All rights reserved.</p>
          <p>Preserving the art of authentic Persian baking.</p>
        </div>

      </div>
    </footer>
  );
}
