import React, { useState, useEffect } from 'react';
import { Sparkles, Terminal, ArrowRight, ShieldAlert, Cpu } from 'lucide-react';
import { StarkParticleCanvas } from './StarkParticleCanvas';
import { EVENT_DETAILS } from '../data/eventData';
import { soundManager } from '../utils/audio';

interface HeroProps {
  onOpenRegister: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegister }) => {
  // Real-time Countdown Timer
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const diff = EVENT_DETAILS.targetDate - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Hero Asset with measured scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_marvel_multiverse_1790537944134.jpg"
          alt="Cinematic Multiverse Command Center"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse"
          style={{ animationDuration: '8s' }}
          referrerPolicy="no-referrer"
        />
        {/* Measured Scrim Gradient for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F] via-[#090A0F]/85 to-[#090A0F]/65 backdrop-blur-[2px]" />
        <div className="absolute inset-0 cyber-grid opacity-25" />
      </div>

      {/* Stark Tech Interactive Canvas Particle Data-Stream */}
      <StarkParticleCanvas />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top quiet kicker with typographic separator */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-slate-300 mb-6 backdrop-blur-sm">
          <span className="text-[#E62429] font-bold tracking-wider">GEEKSFORGEEKS BENNETT UNIVERSITY</span>
          <span aria-hidden="true" className="text-slate-500">·</span>
          <span>OCTOBER 24–25, 2026</span>
          <span aria-hidden="true" className="text-slate-500">·</span>
          <span className="text-cyan-400">GREATER NOIDA</span>
        </div>

        {/* Hero Title with cinematic scale */}
        <h1 className="font-cinematic text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-wider leading-[0.9] max-w-5xl mx-auto text-balance drop-shadow-2xl">
          WHERE EARTH&apos;S <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E62429] via-[#FF5757] to-[#F2B418] drop-shadow-[0_0_35px_rgba(230,36,41,0.5)]">
            MIGHTIEST GEEKS
          </span>{' '}
          ASSEMBLE
        </h1>

        {/* Value Proposition */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed text-balance">
          The premier 36-hour Marvel-themed national hackathon hosted by the{' '}
          <strong className="text-white font-semibold">GeeksForGeeks Student Chapter</strong> at{' '}
          <span className="text-white font-semibold">Bennett University</span>. Forge neural agents,
          build resilient systems, and battle across 5 multiverse realms for glory and a{' '}
          <span className="text-amber-400 font-bold">₹2,50,000 bounty pool</span>.
        </p>

        {/* Primary Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => {
              soundManager.playHUDClick();
              onOpenRegister();
            }}
            type="button"
            className="w-full sm:w-auto px-8 py-4 text-base font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#E62429] to-[#990F13] hover:from-[#FF2D33] hover:to-[#B3191D] rounded-xl shadow-[0_0_30px_rgba(230,36,41,0.6)] hover:shadow-[0_0_45px_rgba(230,36,41,0.85)] transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3 border border-red-400/40"
          >
            <span>Assemble Your Squad</span>
            <ArrowRight className="w-5 h-5 text-red-200" />
          </button>

          <a
            href="#tracks"
            onClick={() => soundManager.playHUDClick()}
            className="w-full sm:w-auto px-8 py-4 text-base font-semibold tracking-wide text-slate-200 bg-[#0E121B]/80 hover:bg-[#151B27] rounded-xl border border-white/15 hover:border-cyan-400/50 hover:text-white transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 backdrop-blur-md"
          >
            <span>Explore 5 Tracks</span>
            <Terminal className="w-4 h-4 text-cyan-400" />
          </a>
        </div>

        {/* Real-time Multiverse Countdown Deck */}
        <div className="mt-12 w-full max-w-4xl p-5 sm:p-6 rounded-2xl bg-[#0E121B]/70 border border-white/10 backdrop-blur-xl shadow-2xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-4 mb-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
              <ShieldAlert className="w-4 h-4 text-[#E62429]" />
              <span>Multiverse Launch Protocol T-Minus</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono-nums">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>LIVE REGISTRATION ACTIVE</span>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
            <div className="p-3 sm:p-4 rounded-xl bg-black/40 border border-white/5">
              <div className="font-cinematic text-3xl sm:text-5xl text-white font-mono-nums font-bold">
                {String(timeLeft.days).padStart(2, '0')}
              </div>
              <div className="text-[11px] sm:text-xs font-medium text-slate-400 uppercase tracking-wider mt-1">
                Days
              </div>
            </div>
            <div className="p-3 sm:p-4 rounded-xl bg-black/40 border border-white/5">
              <div className="font-cinematic text-3xl sm:text-5xl text-white font-mono-nums font-bold">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <div className="text-[11px] sm:text-xs font-medium text-slate-400 uppercase tracking-wider mt-1">
                Hours
              </div>
            </div>
            <div className="p-3 sm:p-4 rounded-xl bg-black/40 border border-white/5">
              <div className="font-cinematic text-3xl sm:text-5xl text-white font-mono-nums font-bold">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <div className="text-[11px] sm:text-xs font-medium text-slate-400 uppercase tracking-wider mt-1">
                Minutes
              </div>
            </div>
            <div className="p-3 sm:p-4 rounded-xl bg-black/40 border border-white/5">
              <div className="font-cinematic text-3xl sm:text-5xl text-[#E62429] font-mono-nums font-bold">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
              <div className="text-[11px] sm:text-xs font-medium text-slate-400 uppercase tracking-wider mt-1">
                Seconds
              </div>
            </div>
          </div>
        </div>

        {/* Quantified Event Highlights Bar */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl text-left">
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
            <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">Bounty Pool</div>
            <div className="font-cinematic text-2xl sm:text-3xl text-amber-400 font-bold mt-1">₹2,50,000</div>
            <div className="text-xs text-slate-500 mt-0.5">Cash + Cloud Credits</div>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
            <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">Sprint Duration</div>
            <div className="font-cinematic text-2xl sm:text-3xl text-cyan-400 font-bold mt-1">36 Hours</div>
            <div className="text-xs text-slate-500 mt-0.5">Non-stop Engineering</div>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
            <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">Multiverse Tracks</div>
            <div className="font-cinematic text-2xl sm:text-3xl text-purple-400 font-bold mt-1">5 Realms</div>
            <div className="text-xs text-slate-500 mt-0.5">AI to Quantum Web3</div>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
            <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">Assembly</div>
            <div className="font-cinematic text-2xl sm:text-3xl text-[#E62429] font-bold mt-1">500+ Hackers</div>
            <div className="text-xs text-slate-500 mt-0.5">Bennett & Pan-India</div>
          </div>
        </div>
      </div>
    </section>
  );
};
