import Image from 'next/image';

export default function Story() {
  return (
    <section id="story" className="py-24 md:py-32 bg-[#F3EDE2] text-[#1C140F] border-t border-[#E5DDD0]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Showcase (5 cols on lg) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative bg-[#FAF7F2] p-3.5 border border-[#E5DDD0] shadow-xl">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#FAF7F2]">
                <Image
                  src="/images/interior/03-bakery-interior-counter.webp"
                  alt="Inside Tabrizi Bakery - Service counter and fresh pastry cases"
                  fill
                  sizes="(max-width: 1024px) 90vw, 460px"
                  className="object-cover object-center"
                />
              </div>
              <div className="pt-4 pb-1 px-2 flex items-center justify-between border-t border-[#E5DDD0]/70 mt-2">
                <span className="font-serif text-sm italic text-[#1C140F]">The Bakery Counter on Mount Auburn</span>
                <span className="text-[10px] uppercase tracking-[0.16em] text-[#A2752E] font-sans font-semibold">
                  Family Owned
                </span>
              </div>
            </div>
          </div>

          {/* Narrative & Craft Pillars (7 cols on lg) */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            
            <div className="flex items-center gap-3 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A2752E]"></span>
              <span className="text-[11px] uppercase tracking-[0.22em] text-[#A2752E] font-sans font-semibold">
                The Family Legacy
              </span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-tight text-[#1C140F] mb-8">
              Decades of Hearth Craft & Persian Tradition in Watertown.
            </h2>
            
            <div className="space-y-5 text-[#1C140F]/80 font-sans font-light text-base sm:text-lg leading-relaxed max-w-xl mb-10">
              <p>
                In 1990, the Tabrizi family founded our bakery with a simple dedication: to honor the centuries-old culinary heritage of northwestern Iran. Originating in Tabriz—a Silk Road city celebrated for its master confectioners and artisan hearth breads—our recipes have been handed down through generations.
              </p>
              <p>
                Every morning at dawn, we hand-stretch the dough for traditional Barbari bread, hand-brush dozens of golden filo layers with pure clarified butter, and infuse our confections with genuine Persian saffron, crushed mountain pistachios, and aromatic Damascus rose water. No shortcuts, no artificial essences—just honest, time-honored baking.
              </p>
            </div>

            {/* Heritage Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-[#E5DDD0]">
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-[#A2752E] font-sans font-semibold mb-1">
                  Heirloom Craft
                </div>
                <p className="text-xs text-[#1C140F]/70 font-sans leading-relaxed">
                  Generations of Persian baking knowledge preserved in every handmade recipe.
                </p>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-[#A2752E] font-sans font-semibold mb-1">
                  Pure Botanicals
                </div>
                <p className="text-xs text-[#1C140F]/70 font-sans leading-relaxed">
                  Real saffron threads, freshly ground cardamom, and fragrant distilled rose water.
                </p>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-[#A2752E] font-sans font-semibold mb-1">
                  Watertown Staple
                </div>
                <p className="text-xs text-[#1C140F]/70 font-sans leading-relaxed">
                  Welcoming neighbours, food lovers, and travelers from across New England since 1990.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

