import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Cpu, Layers, ShieldCheck, Share2, Database } from 'lucide-react';
import { MULTIVERSE_TRACKS } from '../data/eventData';
import { MultiverseTrack } from '../types';
import { soundManager } from '../utils/audio';

interface TracksProps {
  onSelectTrack: (trackId: string) => void;
}

export const Tracks: React.FC<TracksProps> = ({ onSelectTrack }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredTracks = activeFilter === 'all'
    ? MULTIVERSE_TRACKS
    : MULTIVERSE_TRACKS.filter(t => t.id === activeFilter);

  const getTrackIcon = (id: string) => {
    switch (id) {
      case 'stark-ai': return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'wakanda-ux': return <Layers className="w-5 h-5 text-purple-400" />;
      case 'kamar-taj-cyber': return <ShieldCheck className="w-5 h-5 text-amber-400" />;
      case 'webslingers-collab': return <Share2 className="w-5 h-5 text-red-400" />;
      case 'guardians-data': return <Database className="w-5 h-5 text-emerald-400" />;
      default: return <Sparkles className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="tracks" className="relative py-24 bg-[#090A0F] border-t border-white/5 overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#E62429] font-bold mb-2">
              01. The Multiverse Realms
            </div>
            <h2 className="font-cinematic text-4xl sm:text-6xl text-white tracking-wide">
              CHOOSE YOUR ALLIANCE
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl text-balance">
              Compete under one of the 5 specialized domain guilds. Each track offers tailored mentorship,
              industry sponsor challenges, and distinct prize bounties.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="mt-6 md:mt-0 flex items-center gap-1.5 p-1.5 bg-[#0E121B] border border-white/10 rounded-xl overflow-x-auto max-w-full">
            <button
              onClick={() => {
                soundManager.playHUDClick();
                setActiveFilter('all');
              }}
              type="button"
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeFilter === 'all'
                  ? 'bg-[#E62429] text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Realms
            </button>
            {MULTIVERSE_TRACKS.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  soundManager.playHUDClick();
                  setActiveFilter(t.id);
                }}
                type="button"
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  activeFilter === t.id
                    ? 'bg-white/15 text-white border border-white/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {t.codename}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTracks.map((track) => {
            const isFeatured = track.id === 'stark-ai' && activeFilter === 'all';
            return (
              <div
                key={track.id}
                className={`group relative rounded-2xl bg-[#0E121B] border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden flex flex-col justify-between ${
                  isFeatured ? 'lg:col-span-2' : 'col-span-1'
                }`}
              >
                {/* Visual Image Banner for Marquee Tracks */}
                {track.image && (
                  <div className={`relative w-full ${isFeatured ? 'h-64 sm:h-72' : 'h-48'} overflow-hidden`}>
                    <img
                      src={track.image}
                      alt={track.alliance}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E121B] via-[#0E121B]/40 to-transparent" />
                    
                    {/* Top right bounty tag */}
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/15 text-xs font-mono-nums font-bold text-amber-300">
                      Bounty: {track.bounty}
                    </div>
                  </div>
                )}

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Track Header Lockup */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                          {getTrackIcon(track.id)}
                        </div>
                        <span className="text-xs font-mono-nums font-bold text-slate-400 tracking-wider">
                          {track.codename}
                        </span>
                      </div>
                      {!track.image && (
                        <div className="text-xs font-mono-nums font-bold text-amber-300">
                          {track.bounty}
                        </div>
                      )}
                    </div>

                    <h3 className="font-cinematic text-2xl sm:text-3xl text-white tracking-wide group-hover:text-cyan-300 transition-colors">
                      {track.alliance}
                    </h3>

                    <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                      {track.description}
                    </p>

                    {/* Unboxed Metadata: Tech Stack */}
                    <div className="mt-5 pt-4 border-t border-white/5">
                      <div className="text-xs text-slate-500 uppercase tracking-wider mb-2 font-medium">
                        Recommended Toolchain & SDKs
                      </div>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-300 font-mono-nums">
                        {track.techStack.map((tech, idx) => (
                          <React.Fragment key={tech}>
                            <span className="hover:text-cyan-400 transition-colors">{tech}</span>
                            {idx < track.techStack.length - 1 && (
                              <span aria-hidden="true" className="text-slate-600">·</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-medium">
                      Mentors: Bennett Faculty & Industry Leads
                    </span>
                    <button
                      onClick={() => {
                        soundManager.playHUDClick();
                        onSelectTrack(track.id);
                      }}
                      type="button"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#E62429] border border-white/10 hover:border-transparent text-xs font-bold text-slate-200 hover:text-white transition-all transform hover:scale-105"
                    >
                      <span>Join Alliance</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
