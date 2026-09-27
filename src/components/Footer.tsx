import React from 'react';
import { Shield, Github, Linkedin, Instagram, Mail, Heart } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface FooterProps {
  onOpenRegister: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRegister }) => {
  return (
    <footer className="relative bg-[#07080C] border-t border-white/10 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-[#E62429] flex items-center justify-center text-white font-bold text-sm shadow-[0_0_15px_rgba(230,36,41,0.5)]">
                <Shield className="w-4 h-4" />
              </div>
              <span className="font-cinematic text-2xl tracking-wider text-white">
                MULTIVERSE OF CODE
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              The flagship 36-hour national Marvel-inspired hackathon organized by the{' '}
              <span className="text-slate-200 font-semibold">GeeksForGeeks Student Chapter</span>, Bennett University.
            </p>

            <div className="text-xs text-slate-500 pt-2">
              Plot 8-11, TechZone 2, Greater Noida, Uttar Pradesh 201310
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-widest text-white font-bold">
              Navigation
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#tracks"
                  onClick={() => soundManager.playHUDClick()}
                  className="hover:text-white transition-colors"
                >
                  Multiverse Tracks
                </a>
              </li>
              <li>
                <a
                  href="#infinity-vault"
                  onClick={() => soundManager.playHUDClick()}
                  className="hover:text-white transition-colors"
                >
                  Infinity Stone Vault
                </a>
              </li>
              <li>
                <a
                  href="#schedule"
                  onClick={() => soundManager.playHUDClick()}
                  className="hover:text-white transition-colors"
                >
                  Endgame Schedule
                </a>
              </li>
              <li>
                <a
                  href="#prizes"
                  onClick={() => soundManager.playHUDClick()}
                  className="hover:text-white transition-colors"
                >
                  ₹2.5L Prize Matrix
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={() => soundManager.playHUDClick()}
                  className="hover:text-white transition-colors"
                >
                  Venue & Transport
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Community */}
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-widest text-white font-bold">
              Connect with Chapter
            </div>
            <p className="text-xs text-slate-400">
              For campus inquiries, sponsor partnerships, or travel questions:
            </p>
            <div className="text-sm text-cyan-400 font-medium">
              gfg@bennett.edu.in
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/geeksforgeeks-bennett"
                target="_blank"
                rel="noreferrer"
                onClick={() => soundManager.playHUDClick()}
                aria-label="GFG Bennett GitHub"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/company/gfg-bennett"
                target="_blank"
                rel="noreferrer"
                onClick={() => soundManager.playHUDClick()}
                aria-label="GFG Bennett LinkedIn"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/gfg_bennett"
                target="_blank"
                rel="noreferrer"
                onClick={() => soundManager.playHUDClick()}
                aria-label="GFG Bennett Instagram"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:gfg@bennett.edu.in"
                onClick={() => soundManager.playHUDClick()}
                aria-label="Contact GFG Bennett Email"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © 2026 GeeksForGeeks Student Chapter, Bennett University. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                soundManager.playHUDClick();
                onOpenRegister();
              }}
              className="hover:text-white text-[#E62429] font-bold transition-colors"
            >
              Assemble Your Squad →
            </button>
            <span aria-hidden="true">·</span>
            <span>Code of Conduct</span>
            <span aria-hidden="true">·</span>
            <span>Bennett University SCSE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
