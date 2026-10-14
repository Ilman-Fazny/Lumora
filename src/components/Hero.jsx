import React from 'react';
import { siteData } from '../data/siteData';

export default function Hero() {
  const { brand } = siteData;

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-6 overflow-hidden">
      {/* Ambient Gold Radial Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full pointer-events-none ambient-glow blur-3xl opacity-60"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Subtle pill tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-borderSubtle bg-surface/50 text-[11px] uppercase tracking-widest text-textMuted mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          <span>{brand.badge} · {brand.location}</span>
        </div>

        {/* Cinematic Headline */}
        <h1 className="font-heading font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.08] text-cream mb-6">
          <span>{brand.headlineMain}</span>
          <br />
          <span className="text-gold/95 font-extrabold">{brand.headlineSub}</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-xl text-base sm:text-lg text-textMuted leading-relaxed mb-10 font-normal">
          {brand.description}
        </p>

        {/* Primary CTA (The Gold Button) */}
        <div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gold text-bg font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-gold/90 hover:shadow-gold-glow hover:-translate-y-0.5 active:translate-y-0"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
