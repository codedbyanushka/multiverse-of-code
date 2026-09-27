import React, { useState, useEffect } from 'react';

export const ScrollProgressHUD: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateScrollProgress();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[100] h-[3.5px] bg-[#0E121B]/90 backdrop-blur-sm pointer-events-none border-b border-red-950/50"
    >
      {/* Background Stark Track Glow */}
      <div className="absolute inset-0 bg-red-950/20" />

      {/* Dynamic Red-Themed Iron Man HUD Progress Bar */}
      <div
        className="h-full relative transition-[width] duration-75 ease-out will-change-[width]"
        style={{
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #990F13 0%, #E62429 60%, #FF3838 88%, #F2B418 100%)',
          boxShadow: '0 0 12px 1px rgba(230, 36, 41, 0.75)',
        }}
      >
        {/* Leading Edge Arc Reactor Pip */}
        {scrollProgress > 0 && (
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 rounded-full bg-[#FFE6A3] border border-[#FF3838] shadow-[0_0_8px_2px_rgba(255,200,60,0.9),0_0_16px_4px_rgba(230,36,41,0.8)]" />
        )}

        {/* Subtle holographic scanline shimmer along the active bar */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-60 animate-pulse pointer-events-none" />
      </div>

      {/* Micro Stark HUD Numeric Telemetry Pip in Top Right */}
      <div className="absolute right-3 top-2 px-1.5 py-0.5 rounded bg-black/75 border border-red-500/30 text-[9px] font-mono-nums font-bold tracking-widest text-red-300 backdrop-blur-md opacity-80 flex items-center gap-1.5 shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-[#E62429] animate-ping" />
        <span>HUD // {Math.round(scrollProgress)}%</span>
      </div>
    </div>
  );
};
