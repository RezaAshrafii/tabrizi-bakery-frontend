import Image from 'next/image';
import Link from 'next/link';
import { Phone, MapPin, ArrowRight } from 'lucide-react';
import { siteContent } from '@/content/site';

export default function Hero() {
  const { hero, contact } = siteContent;

  return (
    <section className="relative w-full min-h-[82vh] pt-28 sm:pt-36 pb-16 sm:pb-24 flex items-center bg-[#FAF7F2] text-[#1C140F] overflow-hidden border-b border-[#E5DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Location Eyebrow */}
            <div className="inline-flex items-center gap-2.5 mb-5 px-3 py-1 bg-[#F3EDE2] border border-[#E5DDD0] text-[#A2752E] text-[11px] uppercase tracking-[0.18em] font-sans font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A2752E]" aria-hidden="true" />
              <span>{hero.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3.5xl sm:text-5xl lg:text-[4.1rem] font-normal leading-[1.1] tracking-[-0.02em] text-[#1C140F] mb-5">
              {hero.headline}{' '}
              <span className="italic font-normal text-[#A2752E]">{hero.headlineHighlight}</span>{' '}
              {hero.headlineEnd}
            </h1>

            {/* Honest Subcopy */}
            <p className="text-base sm:text-lg text-[#1C140F]/80 leading-relaxed font-sans font-light max-w-xl mb-8">
              {hero.subcopy}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto items-stretch sm:items-center mb-10">
              <a
                href={hero.primaryCta.href}
                className="inline-flex items-center justify-center gap-2.5 bg-[#A2752E] text-[#FAF7F2] px-7 py-3.5 text-xs uppercase tracking-[0.16em] font-sans font-semibold hover:bg-[#8e6423] transition-colors shadow-xs"
              >
                <Phone size={15} aria-hidden="true" />
                <span>{hero.primaryCta.text}</span>
              </a>
              <a
                href={hero.secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#FAF7F2] border border-[#1C140F]/30 px-6 py-3.5 text-xs uppercase tracking-[0.16em] font-sans font-medium text-[#1C140F] hover:border-[#A2752E] hover:text-[#A2752E] transition-colors"
              >
                <MapPin size={15} className="text-[#A2752E]" aria-hidden="true" />
                <span>{hero.secondaryCta.text}</span>
              </a>
              <Link
                href="#products"
                className="inline-flex items-center justify-center gap-1.5 text-xs text-[#1C140F]/70 font-sans hover:text-[#A2752E] py-2 sm:py-0 sm:pl-2 transition-colors"
              >
                <span>View Products</span>
                <ArrowRight size={13} aria-hidden="true" />
              </Link>
            </div>

            {/* Highlights Bar */}
            <div className="pt-6 border-t border-[#E5DDD0] w-full grid grid-cols-3 gap-3 sm:gap-4 text-left">
              {hero.features.map((feat) => (
                <div key={feat.title}>
                  <span className="block font-serif text-base sm:text-lg font-medium text-[#1C140F]">
                    {feat.title}
                  </span>
                  <span className="text-[11px] text-[#1C140F]/65 font-sans leading-tight block">
                    {feat.subtitle}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Storefront Visual */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[460px] bg-[#F3EDE2] p-3 border border-[#E5DDD0] shadow-md">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#FAF7F2]">
                <Image
                  src="/images/hero/01-storefront-entrance.webp"
                  alt="Storefront of Tabrizi Bakery located at 56A Mount Auburn Street in Watertown, MA"
                  fill
                  priority
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 440px, 460px"
                  className="object-cover object-center"
                />
              </div>

              <div className="pt-3 pb-1 px-1.5 flex items-center justify-between">
                <div>
                  <p className="font-serif text-sm font-medium text-[#1C140F]">{contact.address.street}</p>
                  <p className="text-[10px] uppercase tracking-[0.14em] text-[#1C140F]/60 font-sans">
                    {contact.address.city}, {contact.address.state}
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2 py-0.5 bg-[#56674E]/15 text-[#56674E] text-[10px] uppercase tracking-[0.14em] font-sans font-semibold">
                    Open Weekly
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
