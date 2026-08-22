import { Phone, Mail, AlertCircle } from 'lucide-react';
import { siteContent } from '@/content/site';

export default function CustomOrders() {
  const { customOrders, contact } = siteContent;

  return (
    <section id="custom-orders" className="py-20 sm:py-28 bg-[#F3EDE2] text-[#1C140F] border-t border-[#E5DDD0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Section Eyebrow */}
        <div className="inline-flex items-center justify-center gap-2.5 mb-3 px-3 py-1 bg-[#FAF7F2] border border-[#E5DDD0] text-[#A2752E] text-[11px] uppercase tracking-[0.2em] font-sans font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#A2752E]" aria-hidden="true" />
          <span>Celebrations & Platter Inquiries</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#A2752E]" aria-hidden="true" />
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#1C140F] mb-4">
          {customOrders.title}
        </h2>

        <p className="text-base sm:text-lg text-[#1C140F]/80 font-sans font-light leading-relaxed mb-8 max-w-2xl mx-auto">
          {customOrders.description}
        </p>

        {/* Honest Communication Notice Box */}
        <div className="max-w-xl mx-auto bg-[#FAF7F2] p-6 border border-[#E5DDD0] mb-8 text-left shadow-xs">
          <div className="flex items-start gap-3">
            <AlertCircle size={18} className="text-[#A2752E] shrink-0 mt-0.5" aria-hidden="true" />
            <div className="text-xs text-[#1C140F]/80 font-sans leading-relaxed">
              <strong className="block text-[#1C140F] font-semibold mb-1">Direct Inquiries Only</strong>
              {customOrders.disclaimer}
            </div>
          </div>
        </div>

        {/* Honest Phone and Email Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${contact.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#A2752E] text-[#FAF7F2] text-xs uppercase tracking-[0.16em] font-sans font-semibold hover:bg-[#8e6423] transition-colors shadow-xs"
          >
            <Phone size={15} aria-hidden="true" />
            <span>{customOrders.phoneCtaText}</span>
          </a>
          <a
            href={`mailto:${contact.email}?subject=Custom%20Order%20Inquiry%20-%20Tabrizi%20Bakery`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#FAF7F2] border border-[#1C140F]/30 text-[#1C140F] text-xs uppercase tracking-[0.16em] font-sans font-medium hover:border-[#A2752E] hover:text-[#A2752E] transition-colors"
          >
            <Mail size={15} className="text-[#A2752E]" aria-hidden="true" />
            <span>{customOrders.emailCtaText}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
