'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink, Map } from 'lucide-react';
import { siteContent } from '@/content/site';

export default function Location() {
  const { contact, hours, trust } = siteContent;
  const [showMap, setShowMap] = useState(false);

  return (
    <section id="visit" className="py-20 sm:py-28 bg-[#FAF7F2] text-[#1C140F] border-t border-[#E5DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Details & Practical Contact */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A2752E]" aria-hidden="true" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#A2752E] font-sans font-semibold">
                Visit & Contact
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#1C140F] mb-3">
              Location & Hours
            </h2>

            <p className="text-sm sm:text-base text-[#1C140F]/75 font-sans font-light leading-relaxed mb-8 max-w-lg">
              Located on Mount Auburn Street in Watertown. Stop by during store hours or reach out by phone or email.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans mb-6">
              {/* Address Card */}
              <div className="bg-[#F3EDE2] p-5 border border-[#E5DDD0]">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#A2752E] font-semibold mb-2.5">
                  <MapPin size={14} aria-hidden="true" />
                  <span>Bakery Address</span>
                </div>
                <address className="not-italic text-xs sm:text-sm leading-relaxed text-[#1C140F]/90 mb-3">
                  {contact.address.street}
                  <br />
                  {contact.address.city}, {contact.address.state} {contact.address.zip}
                </address>
                <a
                  href={contact.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#A2752E] hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink size={12} aria-hidden="true" />
                </a>
              </div>

              {/* Hours Card */}
              <div className="bg-[#F3EDE2] p-5 border border-[#E5DDD0]">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#A2752E] font-semibold mb-2.5">
                  <Clock size={14} aria-hidden="true" />
                  <span>Store Hours</span>
                </div>
                <ul className="text-xs text-[#1C140F]/90 space-y-1.5 leading-relaxed font-sans">
                  {hours.schedule.map((slot) => (
                    <li
                      key={slot.days}
                      className={`flex justify-between ${
                        slot.isClosed ? 'text-[#1C140F]/55 pt-1 border-t border-[#E5DDD0]' : ''
                      }`}
                    >
                      <span>{slot.days}</span>
                      <span className="font-medium">{slot.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="p-5 bg-[#F3EDE2] border border-[#E5DDD0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-[11px] uppercase tracking-[0.14em] text-[#1C140F]/60 font-sans block mb-1">
                  Phone Inquiries
                </span>
                <a
                  href={`tel:${contact.phoneRaw}`}
                  className="font-serif text-xl font-medium text-[#1C140F] hover:text-[#A2752E] transition-colors inline-flex items-center gap-2"
                >
                  <Phone size={16} className="text-[#A2752E]" aria-hidden="true" />
                  {contact.phoneFormatted}
                </a>
              </div>
              <a
                href={`mailto:${contact.email}`}
                className="text-xs text-[#1C140F]/80 font-sans hover:text-[#A2752E] transition-colors inline-flex items-center gap-1.5"
              >
                <Mail size={13} className="text-[#A2752E]" aria-hidden="true" />
                {contact.email}
              </a>
            </div>

            {/* Reviews Link Card */}
            <div className="p-4 bg-[#FAF7F2] border border-[#E5DDD0] flex items-center justify-between">
              <div>
                <h4 className="text-xs font-semibold text-[#1C140F] font-sans">{trust.heading}</h4>
                <p className="text-[11px] text-[#1C140F]/65 font-sans">{trust.subcopy}</p>
              </div>
              <a
                href={contact.social.reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-[#A2752E] font-medium hover:underline shrink-0 ml-3"
              >
                <span>Reviews</span>
                <ExternalLink size={12} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Column: Performance-conscious Click-to-Load Map */}
          <div className="lg:col-span-6">
            <div className="w-full h-[400px] lg:h-[480px] bg-[#F3EDE2] border border-[#E5DDD0] p-3 shadow-sm flex flex-col">
              {showMap ? (
                <div className="w-full h-full relative overflow-hidden bg-[#FAF7F2]">
                  <iframe
                    src={contact.address.embedMapUrl}
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Tabrizi Bakery Location on Google Maps"
                  />
                </div>
              ) : (
                <div className="w-full h-full bg-[#FAF7F2] border border-[#E5DDD0] flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#F3EDE2] border border-[#E5DDD0] flex items-center justify-center text-[#A2752E] mb-4">
                    <Map size={24} aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#1C140F] mb-1">
                    Mount Auburn Street, Watertown
                  </h3>
                  <p className="text-xs text-[#1C140F]/70 font-sans max-w-sm mb-5">
                    Click below to load the interactive Google Map, or open directions directly on your device.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      onClick={() => setShowMap(true)}
                      className="px-5 py-2.5 bg-[#1C140F] text-[#FAF7F2] text-xs uppercase tracking-[0.14em] font-sans font-medium hover:bg-[#A2752E] transition-colors"
                    >
                      Load Interactive Map
                    </button>
                    <a
                      href={contact.address.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-[#FAF7F2] border border-[#1C140F]/30 text-[#1C140F] text-xs uppercase tracking-[0.14em] font-sans font-medium hover:border-[#A2752E] hover:text-[#A2752E] transition-colors inline-flex items-center justify-center gap-1.5"
                    >
                      <span>Get Directions</span>
                      <ExternalLink size={12} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
