import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number;
  radius: number;
  color: string;
  alpha: number;
  type: 'dot' | 'cross' | 'ring';
  streamSpeed: number;
}

export const StarkParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 160,
      isActive: false,
    };

    const colors = [
      '#00F0FF', // Arc Cyan
      '#00F0FF',
      '#E62429', // Stark Red
      '#F2B418', // Stark Gold
      '#38BDF8', // Sky Blue
    ];

    let particles: Particle[] = [];

    const initParticles = () => {
      // Scale count based on width, optimal for performance
      const count = Math.floor(Math.min(95, Math.max(45, (width * height) / 16000)));
      particles = [];

      for (let i = 0; i < count; i++) {
        const typeRoll = Math.random();
        const type: 'dot' | 'cross' | 'ring' =
          typeRoll > 0.88 ? 'cross' : typeRoll > 0.72 ? 'ring' : 'dot';
        const color = colors[Math.floor(Math.random() * colors.length)];
        const baseRadius = type === 'cross' ? 2.5 : type === 'ring' ? 2.2 : Math.random() * 1.5 + 0.8;

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: -Math.random() * 0.7 - 0.2, // Upward data-stream flow
          baseRadius,
          radius: baseRadius,
          color,
          alpha: Math.random() * 0.5 + 0.25,
          type,
          streamSpeed: Math.random() * 0.5 + 0.5,
        });
      }
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.parentElement?.clientHeight || window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
      initParticles();
    };

    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.isActive = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.isActive = false;
    };

    const heroParent = canvas.parentElement;
    if (heroParent) {
      heroParent.addEventListener('mousemove', handleMouseMove);
      heroParent.addEventListener('mouseleave', handleMouseLeave);
    }

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint cursor HUD targeting reticle when active
      if (mouse.isActive && mouse.x > 0 && mouse.y > 0) {
        ctx.save();
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.18)';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 6]);

        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 45, 0, Math.PI * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 8, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(230, 36, 41, 0.35)';
        ctx.stroke();

        ctx.restore();
      }

      // Update & Draw Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Natural data-stream vertical drift
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around bounds (seamless vertical stream)
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        } else if (p.y > height + 10) {
          p.y = -10;
        }
        if (p.x < -10) p.x = width + 10;
        else if (p.x > width + 10) p.x = -10;

        // Mouse interaction (Stark magnetic repulsion & holographic resonance)
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius && mouse.isActive) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          // Gently push particle away with HUD springiness
          p.x -= Math.cos(angle) * force * 2.8;
          p.y -= Math.sin(angle) * force * 2.8;
          p.radius = p.baseRadius * (1 + force * 1.2);
        } else {
          p.radius = p.baseRadius;
        }

        // Draw particle based on HUD archetype
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.strokeStyle = p.color;

        if (p.type === 'cross') {
          // HUD micro crosshair
          const size = p.radius * 2;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(p.x - size, p.y);
          ctx.lineTo(p.x + size, p.y);
          ctx.moveTo(p.x, p.y - size);
          ctx.lineTo(p.x, p.y + size);
          ctx.stroke();
        } else if (p.type === 'ring') {
          // Arc Reactor mini ring
          ctx.lineWidth = 0.9;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 1.5, 0, Math.PI * 2);
          ctx.stroke();
        } else {
          // Glowing nano dot
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();

        // Connect adjacent particles with subtle Stark neural web lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const cdx = p.x - p2.x;
          const cdy = p.y - p2.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);

          if (cdist < 88) {
            const lineAlpha = (1 - cdist / 88) * 0.22;
            ctx.save();
            ctx.strokeStyle = p.color === p2.color ? p.color : 'rgba(0, 240, 255, 0.4)';
            ctx.globalAlpha = lineAlpha;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.restore();
          }
        }

        // Connect to mouse cursor with subtle filament when close
        if (mouse.isActive && dist < 110) {
          const filamentAlpha = (1 - dist / 110) * 0.35;
          ctx.save();
          ctx.strokeStyle = 'rgba(0, 240, 255, 0.6)';
          ctx.globalAlpha = filamentAlpha;
          ctx.lineWidth = 0.9;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
          ctx.restore();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      if (heroParent) {
        heroParent.removeEventListener('mousemove', handleMouseMove);
        heroParent.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 z-[5] pointer-events-none w-full h-full mix-blend-screen"
    />
  );
};
