import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Flag, Zap } from 'lucide-react';
import { SCHEDULE_DAY_ONE, SCHEDULE_DAY_TWO } from '../data/eventData';
import { soundManager } from '../utils/audio';

export const Schedule: React.FC = () => {
  const [activeDay, setActiveDay] = useState<'day1' | 'day2'>('day1');

  const currentSchedule = activeDay === 'day1' ? SCHEDULE_DAY_ONE : SCHEDULE_DAY_TWO;

  return (
    <section id="schedule" className="relative py-24 bg-[#090A0F] border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-widest text-cyan-400 font-bold mb-2">
            03. The Mission Roadmap
          </div>
          <h2 className="font-cinematic text-4xl sm:text-6xl text-white tracking-wide">
            36-HOUR ENDGAME PROTOCOL
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Every minute calibrated for maximum breakthrough velocity. From the Opening Assemble
            to the Final Stand pitch rounds.
          </p>

          {/* Interactive Day Switcher Buttons */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-xl bg-[#0E121B] border border-white/10">
            <button
              onClick={() => {
                soundManager.playHUDClick();
                setActiveDay('day1');
              }}
              type="button"
              className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-bold tracking-wider uppercase transition-all ${
                activeDay === 'day1'
                  ? 'bg-gradient-to-r from-[#E62429] to-[#990F13] text-white shadow-lg shadow-red-900/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Day 01 · Oct 24 (The Assemble)
            </button>
            <button
              onClick={() => {
                soundManager.playHUDClick();
                setActiveDay('day2');
              }}
              type="button"
              className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-bold tracking-wider uppercase transition-all ${
                activeDay === 'day2'
                  ? 'bg-gradient-to-r from-[#E62429] to-[#990F13] text-white shadow-lg shadow-red-900/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Day 02 · Oct 25 (The Endgame)
            </button>
          </div>
        </div>

        {/* Timeline List */}
        <div className="space-y-4">
          {currentSchedule.map((item) => (
            <div
              key={item.phase}
              className={`p-5 sm:p-6 rounded-2xl bg-[#0E121B] border transition-all duration-200 hover:border-white/20 ${
                item.isMilestone
                  ? 'border-red-500/40 shadow-lg shadow-red-950/20'
                  : 'border-white/10'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                {/* Time & Phase */}
                <div className="sm:w-44 shrink-0">
                  <div className="font-cinematic text-2xl sm:text-3xl text-white font-mono-nums font-bold tracking-wide">
                    {item.time}
                  </div>
                  <div className="text-xs font-mono-nums text-[#E62429] font-bold tracking-wider mt-0.5">
                    {item.phase}
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {item.title}
                    </h3>
                    {item.isMilestone && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-red-400 bg-red-950/60 border border-red-500/30 px-2 py-0.5 rounded">
                        <Flag className="w-3 h-3" />
                        Milestone
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Location & Metadata */}
                  <div className="mt-3 flex items-center gap-2 text-xs text-slate-400 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{item.location}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-slate-500">{item.tag}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
