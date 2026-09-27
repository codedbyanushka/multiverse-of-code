import React, { useState } from 'react';
import { Globe, Cpu, Sparkles, Zap, Clock, Heart, Key, Check, Shield } from 'lucide-react';
import { INFINITY_STONES } from '../data/eventData';
import { InfinityStone } from '../types';
import { soundManager } from '../utils/audio';

export const InfinityVault: React.FC = () => {
  const [activeStone, setActiveStone] = useState<InfinityStone>(INFINITY_STONES[0]);
  const [copiedCode, setCopiedCode] = useState(false);

  const getStoneIcon = (name: string) => {
    switch (name) {
      case 'Globe': return <Globe className="w-6 h-6" />;
      case 'Cpu': return <Cpu className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'Zap': return <Zap className="w-6 h-6" />;
      case 'Clock': return <Clock className="w-6 h-6" />;
      case 'Heart': return <Heart className="w-6 h-6" />;
      default: return <Shield className="w-6 h-6" />;
    }
  };

  const handleCopyCode = () => {
    soundManager.playHUDClick();
    navigator.clipboard.writeText(activeStone.secretBonus);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="infinity-vault" className="relative py-24 bg-[#090A0F] border-t border-white/5 overflow-hidden">
      {/* Dynamic ambient glow based on selected stone */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] opacity-20 pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: activeStone.color }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-2">
            02. The Gauntlet Terminal
          </div>
          <h2 className="font-cinematic text-4xl sm:text-6xl text-white tracking-wide">
            THE INFINITY STONE VAULT
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base text-balance">
            Six cosmic artifacts forged to power your hackathon journey. Inspect each stone to unlock
            exclusive infrastructure grants, hardware lab passes, and emergency time rifts.
          </p>
        </div>

        {/* Stone Selectors Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-10">
          {INFINITY_STONES.map((stone) => {
            const isSelected = activeStone.id === stone.id;
            return (
              <button
                key={stone.id}
                onClick={() => {
                  soundManager.playStonePower();
                  setActiveStone(stone);
                }}
                type="button"
                className={`p-4 rounded-xl text-center transition-all duration-300 border flex flex-col items-center gap-3 relative overflow-hidden group ${
                  isSelected
                    ? 'bg-[#151B27] border-white/30 scale-105 shadow-xl'
                    : 'bg-[#0E121B] border-white/10 hover:border-white/20 hover:bg-[#121722]'
                }`}
              >
                {/* Glow ring indicator */}
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg`}
                  style={{
                    backgroundColor: `${stone.color}22`,
                    border: `1.5px solid ${stone.color}`,
                    color: stone.color,
                    boxShadow: isSelected ? `0 0 25px ${stone.color}66` : 'none',
                  }}
                >
                  {getStoneIcon(stone.iconName)}
                </div>

                <div className="flex flex-col items-center">
                  <span className="font-cinematic text-lg sm:text-xl text-white tracking-wider">
                    {stone.name}
                  </span>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider font-mono-nums">
                    {stone.id.toUpperCase()}
                  </span>
                </div>

                {isSelected && (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{ backgroundColor: stone.color }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Stone Console Card */}
        <div className="rounded-2xl bg-[#0E121B] border border-white/15 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Hologram Pillar */}
            <div className="lg:col-span-4 flex flex-col items-center text-center p-6 rounded-xl bg-black/40 border border-white/5">
              <div
                className="w-28 h-28 rounded-full flex items-center justify-center relative mb-4"
                style={{
                  backgroundColor: `${activeStone.color}15`,
                  border: `2px solid ${activeStone.color}`,
                  boxShadow: `0 0 50px ${activeStone.color}55`,
                }}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center animate-spin"
                  style={{ animationDuration: '20s' }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white"
                    style={{ backgroundColor: activeStone.color }}
                  >
                    {getStoneIcon(activeStone.iconName)}
                  </div>
                </div>
              </div>

              <h3 className="font-cinematic text-3xl text-white tracking-wide">
                {activeStone.name}
              </h3>
              <p className="text-xs text-slate-400 font-medium tracking-wide mt-1">
                {activeStone.lore}
              </p>
            </div>

            {/* Right Detailed Specs */}
            <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: activeStone.color }}
                  />
                  <span>Active Multiverse Power-Up Granted</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  {activeStone.perk}
                </h4>
              </div>

              {/* Secret Bonus Code Box */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold uppercase tracking-wider">
                    <Key className="w-3.5 h-3.5" />
                    <span>Secret Easter Egg Code</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Redeem at check-in desk for bonus stickers & Bennett hackathon credits.
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <code className="px-3 py-1.5 rounded-lg bg-black/60 border border-white/10 font-mono-nums text-xs text-cyan-300 font-bold tracking-wider">
                    {activeStone.secretBonus}
                  </code>
                  <button
                    onClick={handleCopyCode}
                    type="button"
                    className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors flex items-center gap-1.5 shrink-0"
                  >
                    {copiedCode ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <span>Copy</span>
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span>Bennett Innovation Hub Verified</span>
                <span aria-hidden="true">·</span>
                <span>Active for All 36 Hours</span>
                <span aria-hidden="true">·</span>
                <span>Unlocked on Squad Registration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
