import Image from 'next/image';

const galleryItems = [
  {
    src: '/images/interior/02-bakery-display-front.webp',
    alt: 'Tabrizi Bakery fresh pastry display cases',
    title: 'Daily Pastry Counter',
    caption: 'Fresh morning bakes and golden pastries displayed daily.',
  },
  {
    src: '/images/gallery/13-bakery-display-case.webp',
    alt: 'Traditional Persian sweets and delicacies in glass counter',
    title: 'Heirloom Confections',
    caption: 'Handcrafted baklava, cookies, and holiday specialties.',
  },
  {
    src: '/images/gallery/16-bakery-shelf-products.webp',
    alt: 'Bakery shelves with authentic Persian ingredients and sweets',
    title: 'Pantry & Specialties',
    caption: 'Imported teas, saffron confections, and dry pastries.',
  },
  {
    src: '/images/gallery/17-dessert-display-counter.webp',
    alt: 'Specialty dessert display counter at Tabrizi Bakery',
    title: 'Specialty Desserts',
    caption: 'Cakes and chilled confections prepared for celebrations.',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#FAF7F2] text-[#1C140F] border-t border-[#E5DDD0]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center justify-center gap-3 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A2752E]"></span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#A2752E] font-sans font-semibold">
              The Atmosphere
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#A2752E]"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#1C140F] mb-4">
            Inside the Bakery
          </h2>
          <p className="text-sm sm:text-base text-[#1C140F]/70 font-sans font-light">
            A glimpse into our Mount Auburn Street shop, where every morning begins with the aromas of cardamom, saffron, and stone-baked hearth breads.
          </p>
        </div>

        {/* 4-Image Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {galleryItems.map((item) => (
            <div
              key={item.title}
              className="bg-[#FAF7F2] border border-[#E5DDD0] p-3 shadow-xs group"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#F3EDE2]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-103"
                />
              </div>
              <div className="pt-4 pb-2 px-2 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-lg font-normal text-[#1C140F]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#1C140F]/65 font-sans font-light">
                    {item.caption}
                  </p>
                </div>
                <span className="text-[10px] uppercase tracking-[0.15em] text-[#A2752E] font-sans font-medium">
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

