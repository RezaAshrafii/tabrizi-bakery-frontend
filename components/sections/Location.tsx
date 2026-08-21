import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

export default function Location() {
  return (
    <section id="visit" className="py-24 md:py-32 bg-[#FAF7F2] text-[#1C140F] border-t border-[#E5DDD0]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Details & Practical Info (6 cols on lg) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <div className="flex items-center gap-3 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A2752E]"></span>
              <span className="text-[11px] uppercase tracking-[0.22em] text-[#A2752E] font-sans font-semibold">
                Watertown Destination
              </span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#1C140F] mb-4">
              Visit Our Bakery
            </h2>
            
            <p className="text-sm sm:text-base text-[#1C140F]/75 font-sans font-light leading-relaxed mb-10 max-w-lg">
              Located on historic Mount Auburn Street, Tabrizi Bakery welcomes guests with the aroma of freshly baked flatbreads, warm hospitality, and traditional Persian pastries.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-sans mb-8">
              
              {/* Address Block */}
              <div className="bg-[#F3EDE2] p-6 border border-[#E5DDD0]">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#A2752E] font-semibold mb-3">
                  <MapPin size={14} />
                  <span>Bakery Address</span>
                </div>
                <address className="not-italic text-sm leading-relaxed text-[#1C140F]/90 mb-4">
                  56A Mount Auburn Street<br />
                  Watertown, MA 02472
                </address>
                <a
                  href="https://maps.google.com/?q=56A+Mount+Auburn+St,+Watertown,+MA+02472"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] font-medium text-[#1C140F] border-b border-[#1C140F]/40 pb-0.5 hover:text-[#A2752E] hover:border-[#A2752E] transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink size={12} />
                </a>
              </div>

              {/* Hours Block */}
              <div className="bg-[#F3EDE2] p-6 border border-[#E5DDD0]">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#A2752E] font-semibold mb-3">
                  <Clock size={14} />
                  <span>Baking Hours</span>
                </div>
                <ul className="text-xs text-[#1C140F]/90 space-y-2 leading-relaxed font-sans">
                  <li className="flex justify-between">
                    <span>Tue – Fri</span>
                    <span className="font-medium">10:00 am – 7:00 pm</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">10:00 am – 7:30 pm</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">11:00 am – 6:00 pm</span>
                  </li>
                  <li className="flex justify-between text-[#1C140F]/50 pt-1 border-t border-[#E5DDD0]">
                    <span>Monday</span>
                    <span>Closed (Baking Day)</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Direct Contact Links */}
            <div className="p-6 bg-[#F3EDE2] border border-[#E5DDD0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] uppercase tracking-[0.16em] text-[#1C140F]/60 font-sans block mb-1">
                  Telephone Orders
                </span>
                <a
                  href="tel:+16179260880"
                  className="font-serif text-xl font-medium text-[#1C140F] hover:text-[#A2752E] transition-colors inline-flex items-center gap-2"
                >
                  <Phone size={16} className="text-[#A2752E]" />
                  (617) 926-0880
                </a>
              </div>
              <a
                href="mailto:tabrizibakery@gmail.com"
                className="text-xs text-[#1C140F]/80 font-sans hover:text-[#A2752E] transition-colors inline-flex items-center gap-1.5"
              >
                <Mail size={13} className="text-[#A2752E]" />
                tabrizibakery@gmail.com
              </a>
            </div>

          </div>

          {/* Right Column: Framed Interactive Map (6 cols on lg) */}
          <div className="lg:col-span-6">
            <div className="w-full h-[460px] lg:h-[520px] bg-[#F3EDE2] border border-[#E5DDD0] p-3.5 shadow-xl">
              <div className="w-full h-full relative overflow-hidden bg-[#FAF7F2]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.4354228966453!2d-71.18683522339599!3d42.36522507119293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37813a36db8a1%3A0xc48c0dbb121fb6bd!2s56A%20Mt%20Auburn%20St%2C%20Watertown%2C%20MA%2002472!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tabrizi Bakery Location on Google Maps"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
