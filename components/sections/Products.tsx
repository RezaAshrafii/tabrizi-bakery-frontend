import Image from 'next/image';
import { Phone } from 'lucide-react';
import { siteContent } from '@/content/site';

export default function Products() {
  const { categories, contact } = siteContent;

  return (
    <section id="products" className="py-20 sm:py-28 bg-[#FAF7F2] text-[#1C140F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-[#E5DDD0]">
          <div>
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A2752E]" aria-hidden="true" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#A2752E] font-sans font-semibold">
                Bakery Offerings
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#1C140F]">
              Products & Specialties
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-sm text-[#1C140F]/70 font-sans font-light max-w-md leading-relaxed">
            Persian pastries, baked goods, and specialty grocery items in-store. Selection and availability vary.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {categories.map((item, index) => (
            <article
              key={item.id}
              className="flex flex-col bg-[#FAF7F2] border border-[#E5DDD0] p-3 shadow-xs hover:border-[#A2752E]/60 transition-colors"
            >
              {/* Product Visual */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F3EDE2]">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center"
                />
                <div className="absolute top-2.5 left-2.5 bg-[#1C140F]/90 text-[#FAF7F2] px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] font-sans font-medium">
                  0{index + 1}
                </div>
              </div>

              {/* Product Info */}
              <div className="pt-4 flex flex-col flex-1">
                <span className="text-[10px] uppercase tracking-[0.16em] text-[#A2752E] font-sans font-semibold mb-1">
                  {item.category}
                </span>

                <h3 className="font-serif text-xl font-normal text-[#1C140F] mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-[#1C140F]/75 font-sans font-light leading-relaxed mb-4 flex-1">
                  {item.description}
                </p>

                <div className="pt-2.5 border-t border-[#E5DDD0] flex items-center justify-between text-[11px] text-[#56674E] font-sans">
                  <span>{item.note}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Note Banner */}
        <div className="mt-12 p-6 sm:p-8 bg-[#F3EDE2] border border-[#E5DDD0] flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div className="max-w-2xl">
            <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#1C140F] mb-1">
              Looking for specific items?
            </h3>
            <p className="text-xs sm:text-sm text-[#1C140F]/70 font-sans font-light leading-relaxed">
              Please call us directly to check current product availability.
            </p>
          </div>
          <a
            href={`tel:${contact.phoneRaw}`}
            className="whitespace-nowrap inline-flex items-center gap-2 px-6 py-3.5 bg-[#1C140F] text-[#FAF7F2] text-xs uppercase tracking-[0.16em] font-sans font-medium hover:bg-[#A2752E] transition-colors shadow-xs"
          >
            <Phone size={14} aria-hidden="true" />
            <span>Call {contact.phoneFormatted}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
