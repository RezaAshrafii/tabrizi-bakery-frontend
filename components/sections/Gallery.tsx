import Image from 'next/image';
import { siteContent } from '@/content/site';

export default function Gallery() {
  const { gallery } = siteContent;

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#F3EDE2] text-[#1C140F] border-t border-[#E5DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center gap-2.5 mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A2752E]" aria-hidden="true" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#A2752E] font-sans font-semibold">
              {gallery.badge}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#A2752E]" aria-hidden="true" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#1C140F] mb-3">
            {gallery.heading}
          </h2>
          <p className="text-sm sm:text-base text-[#1C140F]/70 font-sans font-light">
            {gallery.description}
          </p>
        </div>

        {/* 4-Image Clean Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {gallery.items.map((item) => (
            <div
              key={item.title}
              className="bg-[#FAF7F2] border border-[#E5DDD0] p-3 shadow-xs"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#F3EDE2]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="pt-3 pb-1 px-1 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-normal text-[#1C140F]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#1C140F]/65 font-sans font-light">
                    {item.caption}
                  </p>
                </div>
                <span className="text-[10px] uppercase tracking-[0.14em] text-[#A2752E] font-sans font-medium">
                  Watertown, MA
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
