import React, { useState } from 'react';
import { MapPin, Navigation, ChevronDown, ChevronUp, Wifi, Coffee, Bed, ShieldCheck, Bus } from 'lucide-react';
import { FAQS, EVENT_DETAILS } from '../data/eventData';
import { soundManager } from '../utils/audio';

export const VenueFaq: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [faqCategory, setFaqCategory] = useState<string>('All');

  const toggleFaq = (index: number) => {
    soundManager.playHUDClick();
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const categories = ['All', 'General', 'Logistics', 'Hacking', 'Prizes'];
  const filteredFaqs = faqCategory === 'All'
    ? FAQS
    : FAQS.filter((f) => f.category === faqCategory);

  return (
    <section id="faq" className="relative py-24 bg-[#090A0F] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-widest text-[#E62429] font-bold mb-2">
            06. Campus & Intel
          </div>
          <h2 className="font-cinematic text-4xl sm:text-6xl text-white tracking-wide">
            VENUE & FREQUENT QUESTIONS
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Everything you need to know about navigating Bennett University campus and your 36-hour sprint.
          </p>
        </div>

        {/* Campus Venue Showcase Card */}
        <div className="rounded-2xl bg-[#0E121B] border border-white/10 p-6 sm:p-8 mb-16 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>The Multiverse Headquarters</span>
              </div>

              <h3 className="font-cinematic text-3xl sm:text-4xl text-white">
                BENNETT UNIVERSITY CAMPUS
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Spread across 68 lush acres in Greater Noida, Bennett University (established by the Times Group)
                features premier research computing clusters, acoustically engineered auditoriums, and round-the-clock
                student amenities designed for high-intensity engineering hackathons.
              </p>

              {/* Campus Perks Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex flex-col items-center text-center">
                  <Wifi className="w-5 h-5 text-cyan-400 mb-1" />
                  <span className="text-xs font-bold text-white">1 Gbps Mesh</span>
                  <span className="text-[10px] text-slate-400">Zero-latency Wi-Fi</span>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex flex-col items-center text-center">
                  <Coffee className="w-5 h-5 text-amber-400 mb-1" />
                  <span className="text-xs font-bold text-white">24/7 Food & Drinks</span>
                  <span className="text-[10px] text-slate-400">Meals & Red Bulls</span>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex flex-col items-center text-center">
                  <Bed className="w-5 h-5 text-purple-400 mb-1" />
                  <span className="text-xs font-bold text-white">Sleeping Pods</span>
                  <span className="text-[10px] text-slate-400">Dedicated M/F Lounges</span>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex flex-col items-center text-center">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 mb-1" />
                  <span className="text-xs font-bold text-white">24/7 Security</span>
                  <span className="text-[10px] text-slate-400">Paramedic & Security</span>
                </div>
              </div>

              {/* Direction Guide */}
              <div className="pt-2 text-xs text-slate-400 flex flex-wrap items-center gap-x-4 gap-y-2">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <Bus className="w-4 h-4 text-cyan-400" />
                  <span>Free GFG Shuttles from Knowledge Park II Metro Station</span>
                </div>
                <span className="text-slate-600">·</span>
                <span>Plot 8-11, TechZone 2, Greater Noida, UP 201310</span>
              </div>
            </div>

            {/* Right Map / Location Card */}
            <div className="lg:col-span-5 p-6 rounded-xl bg-black/60 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono-nums font-bold text-[#E62429] uppercase tracking-wider mb-2">
                  NAVIGATIONAL COORDINATES
                </div>
                <div className="text-lg font-bold text-white mb-2">
                  Bennett University (Times Group)
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  School of Computer Science & Engineering (SCSE) Complex.
                  Central Check-in Desk situated at Main Auditorium Foyer.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="text-xs font-mono-nums text-slate-400">
                  28.4595° N, 77.5835° E
                </div>
                <a
                  href="https://maps.google.com/?q=Bennett+University+Greater+Noida"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => soundManager.playHUDClick()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-[#E62429] text-xs font-bold text-white transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-4xl mx-auto">
          {/* Category Tabs */}
          <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  soundManager.playHUDClick();
                  setFaqCategory(cat);
                  setOpenFaqIndex(0);
                }}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
                  faqCategory === cat
                    ? 'bg-[#E62429] text-white'
                    : 'bg-white/5 text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion Questions */}
          <div className="space-y-3">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={faq.question}
                  className="rounded-xl bg-[#0E121B] border border-white/10 overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02]"
                  >
                    <span className="text-sm sm:text-base font-bold text-white">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-cyan-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm text-slate-300 leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
