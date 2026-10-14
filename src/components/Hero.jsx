import React from 'react';
import { siteData } from '../data/siteData';

export default function Hero() {
  const { brand } = siteData;

  return (
    <section className="relative min-h-[70vh] sm:min-h-[85vh] flex items-center justify-center px-6 overflow-hidden">
      {/* Ambient Gold Radial Glow — calm breathing animation */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full pointer-events-none ambient-glow blur-3xl animate-calm-breathe"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Subtle pill tag */}
        <div className="animate-fade-1 inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-borderSubtle bg-surface/50 text-[11px] uppercase tracking-widest text-textMuted mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          <span>{brand.badge} · {brand.location}</span>
        </div>

        {/* Cinematic Headline */}
        <h1 className="animate-fade-2 font-heading font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.08] text-cream mb-6">
          <span>{brand.headlineMain}</span>
          <br />
          <span className="text-gold/95 font-extrabold">{brand.headlineSub}</span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-3 max-w-xl text-base sm:text-lg text-textMuted leading-relaxed mb-10 font-normal">
          {brand.description}
        </p>

        {/* Primary CTA (The Gold Button) */}
        <div className="animate-fade-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gold text-bg font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-gold/90 hover:shadow-gold-glow hover:-translate-y-0.5 active:translate-y-0"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Subtle Floating Scroll Prompt */}
      <div className="animate-fade-4 absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40 hover:opacity-80 transition-opacity pointer-events-none select-none">
        <span className="text-[9px] uppercase tracking-[0.25em] font-mono text-textMuted">Explore</span>
        <div className="w-3.5 h-6 rounded-full border border-borderSubtle flex items-start justify-center p-0.5">
          <div className="w-1 h-1.5 rounded-full bg-gold animate-bounce" />
        </div>
      </div>
    </section>
  );
}
