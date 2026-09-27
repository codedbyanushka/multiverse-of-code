import React from 'react';
import { Trophy, Award, Gift, CheckCircle, Shield, Sparkles } from 'lucide-react';
import { PRIZE_TIERS, SPECIAL_BOUNTIES } from '../data/eventData';
import { soundManager } from '../utils/audio';

export const Prizes: React.FC = () => {
  return (
    <section id="prizes" className="relative py-24 bg-[#090A0F] border-t border-white/5 overflow-hidden">
      {/* Subtle gold glow for the prize section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-2">
            04. The Multiverse Spoils
          </div>
          <h2 className="font-cinematic text-4xl sm:text-6xl text-white tracking-wide">
            ₹2,50,000 PRIZE POOL
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Honoring the sharpest engineering minds. Beyond cold hard cash bounties, champions receive
            exclusive fast-track sponsor interviews and legendary physical trophies.
          </p>
        </div>

        {/* Podium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 items-stretch">
          {PRIZE_TIERS.map((tier) => {
            const isFirst = tier.rank === '01';
            return (
              <div
                key={tier.rank}
                className={`relative rounded-2xl bg-[#0E121B] border p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] ${
                  tier.border
                } ${
                  isFirst
                    ? 'shadow-2xl shadow-amber-950/40 md:-translate-y-3 bg-gradient-to-b from-[#171A24] to-[#0E121B]'
                    : 'shadow-lg'
                }`}
              >
                {isFirst && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-extrabold text-xs tracking-wider uppercase shadow-md flex items-center gap-1.5">
                    <Trophy className="w-3.5 h-3.5" />
                    <span>Grand Champion</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono-nums font-bold tracking-widest text-slate-400">
                      RANK {tier.rank}
                    </span>
                    <Award
                      className={`w-6 h-6 ${
                        isFirst
                          ? 'text-amber-400'
                          : tier.rank === '02'
                          ? 'text-slate-300'
                          : 'text-amber-700'
                      }`}
                    />
                  </div>

                  <h3 className="font-cinematic text-2xl sm:text-3xl text-white tracking-wide">
                    {tier.title}
                  </h3>

                  <div className="mt-4 pb-4 border-b border-white/10">
                    <span className="font-cinematic text-4xl sm:text-5xl font-bold font-mono-nums text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500">
                      {tier.reward}
                    </span>
                    <span className="text-xs text-slate-400 block mt-0.5">
                      Direct Cash Award + Perks
                    </span>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {tier.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 text-center text-xs text-slate-500 font-medium">
                  Verified by Bennett Innovation Foundation
                </div>
              </div>
            );
          })}
        </div>

        {/* Special Category Bounties & Swag Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Track Special Bounties */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0E121B] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#E62429] font-bold mb-3">
                <Shield className="w-4 h-4" />
                <span>Specialized Division Bounties</span>
              </div>
              <h3 className="font-cinematic text-2xl sm:text-3xl text-white mb-4">
                CATEGORY RECOGNITION
              </h3>
              <p className="text-sm text-slate-300 mb-6">
                Special prizes dedicated to championing diverse talent, rookie innovators, and exceptional open-source creators.
              </p>

              <div className="space-y-3">
                {SPECIAL_BOUNTIES.map((bounty) => (
                  <div
                    key={bounty.title}
                    className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between"
                  >
                    <div>
                      <div className="text-sm font-semibold text-white">{bounty.title}</div>
                      <div className="text-xs text-slate-400">Supported by {bounty.sponsor}</div>
                    </div>
                    <div className="font-cinematic text-xl text-amber-400 font-bold font-mono-nums">
                      {bounty.prize}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Attendee Swag & Fueling */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0E121B] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-cyan-400 font-bold mb-3">
                <Gift className="w-4 h-4" />
                <span>The Multiverse Supply Kit</span>
              </div>
              <h3 className="font-cinematic text-2xl sm:text-3xl text-white mb-4">
                ASSEMBLY SWAG & AMENITIES
              </h3>
              <p className="text-sm text-slate-300 mb-6">
                Every confirmed attendee receives the official Bennett Multiverse kit, full access to facilities, and fuel for all 36 hours.
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs text-slate-300 font-medium">
                <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Limited Edition Marvel T-Shirt</span>
                </div>
                <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Holographic Event Badge & Lanyard</span>
                </div>
                <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>24/7 Red Bull & Midnight Fueling</span>
                </div>
                <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Bennett Rest & Sleep Pods</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 text-xs text-slate-500">
              Free 100% for all registered and verified squads.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
