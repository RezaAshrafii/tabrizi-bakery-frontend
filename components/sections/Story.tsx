import Image from 'next/image';
import { siteContent } from '@/content/site';

export default function Story() {
  const { story } = siteContent;

  return (
    <section id="story" className="py-20 sm:py-28 bg-[#FAF7F2] text-[#1C140F] border-t border-[#E5DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative bg-[#F3EDE2] p-3 border border-[#E5DDD0] shadow-sm">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#FAF7F2]">
                <Image
                  src="/images/interior/03-bakery-interior-counter.webp"
                  alt="Interior counter and display shelving at Tabrizi Bakery on Mount Auburn Street"
                  fill
                  sizes="(max-width: 1024px) 90vw, 440px"
                  className="object-cover object-center"
                />
              </div>
              <div className="pt-3 pb-1 px-1 flex items-center justify-between border-t border-[#E5DDD0]/70 mt-2">
                <span className="font-serif text-xs italic text-[#1C140F]">Bakery Counter & Shelves</span>
                <span className="text-[10px] uppercase tracking-[0.14em] text-[#A2752E] font-sans font-semibold">
                  Watertown, MA
                </span>
              </div>
            </div>
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A2752E]" aria-hidden="true" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#A2752E] font-sans font-semibold">
                {story.badge}
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-[1.12] tracking-tight text-[#1C140F] mb-6">
              {story.heading}
            </h2>

            <div className="space-y-4 text-[#1C140F]/80 font-sans font-light text-base leading-relaxed max-w-xl mb-8">
              {story.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Factual Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#E5DDD0]">
              {story.values.map((val) => (
                <div key={val.title} className="bg-[#F3EDE2] p-4 border border-[#E5DDD0]">
                  <div className="text-xs uppercase tracking-[0.14em] text-[#A2752E] font-sans font-semibold mb-1">
                    {val.title}
                  </div>
                  <p className="text-xs text-[#1C140F]/70 font-sans leading-relaxed">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
