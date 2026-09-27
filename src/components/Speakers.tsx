import React from 'react';
import { Linkedin, Github, Twitter, ExternalLink, ShieldCheck } from 'lucide-react';
import { SPEAKERS } from '../data/eventData';
import { soundManager } from '../utils/audio';

export const Speakers: React.FC = () => {
  return (
    <section id="mentors" className="relative py-24 bg-[#090A0F] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-widest text-[#E62429] font-bold mb-2">
            05. Guardians & Judges
          </div>
          <h2 className="font-cinematic text-4xl sm:text-6xl text-white tracking-wide">
            MULTIVERSE MENTORS & FACULTY
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base text-balance">
            Guided by veteran researchers, industry tech leads, and Bennett University alumni who have
            scaled distributed systems and published cutting-edge AI research.
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPEAKERS.map((speaker) => (
            <div
              key={speaker.id}
              className="p-6 rounded-2xl bg-[#0E121B] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
            >
              <div>
                {/* Avatar Badge Placeholder with styled initials & superhero halo */}
                <div className="relative mb-5 flex items-center justify-between">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-tr from-[#E62429] to-[#00F0FF] p-[2px] shadow-md">
                    <div className="w-full h-full bg-[#0E121B] rounded-[10px] flex items-center justify-center font-cinematic text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {speaker.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </div>
                  </div>

                  <span className="text-[11px] font-mono-nums font-semibold text-slate-400 border border-white/10 px-2 py-0.5 rounded bg-white/5">
                    {speaker.trackAffiliation.split(':')[0]}
                  </span>
                </div>

                <div className="text-xs text-[#E62429] font-bold uppercase tracking-wider mb-1">
                  {speaker.superheroAlias}
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {speaker.name}
                </h3>

                <div className="text-xs text-slate-400 font-medium mt-0.5">
                  {speaker.role} · <span className="text-slate-300">{speaker.company}</span>
                </div>

                <p className="mt-4 text-xs text-slate-300 leading-relaxed">
                  {speaker.bio}
                </p>
              </div>

              {/* Social Links */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-3 text-slate-400">
                {speaker.socials.linkedin && (
                  <a
                    href={speaker.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => soundManager.playHUDClick()}
                    aria-label={`${speaker.name} LinkedIn`}
                    className="p-1.5 rounded hover:bg-white/10 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {speaker.socials.github && (
                  <a
                    href={speaker.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => soundManager.playHUDClick()}
                    aria-label={`${speaker.name} GitHub`}
                    className="p-1.5 rounded hover:bg-white/10 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {speaker.socials.twitter && (
                  <a
                    href={speaker.socials.twitter}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => soundManager.playHUDClick()}
                    aria-label={`${speaker.name} Twitter`}
                    className="p-1.5 rounded hover:bg-white/10 hover:text-white transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
