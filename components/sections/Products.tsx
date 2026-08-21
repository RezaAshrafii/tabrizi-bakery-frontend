import Image from 'next/image';

const specialties = [
  {
    number: '01',
    category: 'Daily Hearth Breads',
    title: 'Sangak & Barbari Flatbread',
    description: 'Traditional Persian flatbreads baked fresh each morning on stone hearths, finished with toasted sesame seeds and an airy, crisp crumb.',
    origin: 'Stone Hearth Baked Daily',
    image: '/images/products/05-barbari-bread.webp',
  },
  {
    number: '02',
    category: 'Handmade Delicacies',
    title: 'Saffron & Honey Baklava',
    description: 'Dozens of golden filo pastry layers filled with crushed walnuts and mountain pistachio, steeped in Persian saffron syrup and cardamom.',
    origin: 'Pure Saffron & Wild Honey',
    image: '/images/products/01-baklava-closeup.webp',
  },
  {
    number: '03',
    category: 'Heritage Confections',
    title: 'Persian Tea Cookies (Shirini)',
    description: 'Delicate heirloom tea confections including Nan-e Berenji (rice flour & poppy seed), chickpea shortbreads, and aromatic rose water sweets.',
    origin: 'Damascus Rose & Pistachio',
    image: '/images/products/12-persian-cookie-selection.webp',
  },
  {
    number: '04',
    category: 'Gifts & Gatherings',
    title: 'Signature Pastry Boxes',
    description: 'Custom curated assortments and celebration platters crafted for family gatherings, weddings, and traditional Persian holidays.',
    origin: 'Custom Platters Available',
    image: '/images/products/07-premium-pastry-platter.webp',
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 md:py-32 bg-[#FAF7F2] text-[#1C140F] border-t border-[#E5DDD0]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 pb-8 border-b border-[#E5DDD0]">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A2752E]"></span>
              <span className="text-[11px] uppercase tracking-[0.22em] text-[#A2752E] font-sans font-semibold">
                The Heritage Collection
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#1C140F]">
              Our Daily Specialties
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-[#1C140F]/70 font-sans font-light max-w-sm leading-relaxed">
            Handcrafted every morning in our Watertown kitchen using authentic botanical spices and multi-generational techniques.
          </p>
        </div>

        {/* Editorial Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {specialties.map((item) => (
            <article
              key={item.title}
              className="group flex flex-col bg-[#FAF7F2] transition-all duration-300"
            >
              {/* Product Visual - Editorial Frame */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#F3EDE2] p-2 border border-[#E5DDD0]">
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute top-4 left-4 bg-[#1C140F] text-[#FAF7F2] px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] font-sans font-medium">
                  {item.number}
                </div>
              </div>

              {/* Product Info */}
              <div className="pt-6 flex flex-col flex-1">
                <span className="text-[11px] uppercase tracking-[0.18em] text-[#A2752E] font-sans font-semibold mb-2">
                  {item.category}
                </span>
                
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#1C140F] mb-3 group-hover:text-[#A2752E] transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-sm text-[#1C140F]/75 font-sans font-light leading-relaxed mb-6 flex-1">
                  {item.description}
                </p>

                <div className="pt-3 border-t border-[#E5DDD0] flex items-center justify-between">
                  <span className="text-[11px] text-[#56674E] font-sans font-medium">
                    {item.origin}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Heritage Custom Orders Note */}
        <div className="mt-16 p-8 md:p-10 bg-[#F3EDE2] border border-[#E5DDD0] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="font-serif text-2xl font-normal text-[#1C140F] mb-2">Celebration Platters & Custom Orders</h4>
            <p className="text-sm text-[#1C140F]/70 font-sans font-light leading-relaxed">
              We curate custom pastry boxes, traditional Nowruz sweets, and fresh daily bread orders for weddings, family gatherings, and holiday celebrations across Greater Boston.
            </p>
          </div>
          <a
            href="tel:+16179260880"
            className="whitespace-nowrap px-7 py-4 bg-[#1C140F] text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-sans font-medium hover:bg-[#A2752E] transition-colors duration-300 shadow-xs"
          >
            Inquire by Phone: (617) 926-0880
          </a>
        </div>

      </div>
    </section>
  );
}

