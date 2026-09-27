import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Shield, Menu, X } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface NavbarProps {
  onOpenRegister: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsMuted(soundManager.getMuted());
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const nextState = !isMuted;
    soundManager.setMuted(nextState);
    setIsMuted(nextState);
  };

  const navLinks = [
    { name: 'Tracks', href: '#tracks' },
    { name: 'Infinity Vault', href: '#infinity-vault' },
    { name: 'Endgame Schedule', href: '#schedule' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'Mentors', href: '#mentors' },
    { name: 'Venue & FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090A0F]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/50 py-3'
          : 'bg-gradient-to-b from-[#090A0F]/90 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar 3-Zone Contract: Brand, Clean Links, Actions */}
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            onClick={() => soundManager.playHUDClick()}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded bg-[#E62429] flex items-center justify-center text-white font-black text-sm tracking-tighter shadow-[0_0_15px_rgba(230,36,41,0.5)] group-hover:scale-105 transition-transform">
              <Shield className="w-4 h-4" />
            </div>
            <span className="font-cinematic text-xl sm:text-2xl tracking-wider text-white group-hover:text-[#E62429] transition-colors whitespace-nowrap">
              MULTIVERSE OF CODE
            </span>
          </a>

          {/* Zone 2: Clean 4-6 text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => soundManager.playHUDClick()}
                className="hover:text-white transition-colors relative py-1 hover:underline underline-offset-8 decoration-[#E62429] decoration-2 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary actions (SFX Toggle + Register CTA) */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleSound}
              type="button"
              title={isMuted ? 'Enable Stark HUD Audio FX' : 'Mute Audio FX'}
              aria-label={isMuted ? 'Enable Audio FX' : 'Mute Audio FX'}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 hover:border-cyan-500/50 transition-colors"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-slate-400" />
              ) : (
                <Volume2 className="w-4 h-4 text-cyan-400 animate-pulse" />
              )}
            </button>

            <button
              onClick={() => {
                soundManager.playHUDClick();
                onOpenRegister();
              }}
              type="button"
              className="px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#E62429] to-[#B3191D] hover:from-[#FF2D33] hover:to-[#CC1E22] rounded-lg shadow-[0_0_20px_rgba(230,36,41,0.4)] hover:shadow-[0_0_28px_rgba(230,36,41,0.7)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0"
            >
              Assemble Now
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/5 text-slate-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 bg-[#0E121B] border border-white/10 rounded-xl space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  soundManager.playHUDClick();
                  setMobileMenuOpen(false);
                }}
                className="block text-sm font-medium text-slate-300 hover:text-[#E62429] py-1.5"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
