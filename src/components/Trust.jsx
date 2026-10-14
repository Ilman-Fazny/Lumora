import React from 'react';
import { siteData } from '../data/siteData';
import Reveal from './Reveal';

export default function Trust() {
  const { trust } = siteData;

  if (!trust) return null;

  return (
    <section className="py-20 sm:py-24 px-6 border-t border-borderSubtle/70 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-14">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
                </span>
                <p className="text-xs uppercase tracking-[0.25em] text-textMuted font-medium">
                  {trust.badge}
                </p>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl text-cream font-semibold mt-1">
                {trust.headline}
              </h2>
            </div>
            <p className="text-sm text-textMuted mt-2 sm:mt-0 max-w-xs">
              Delivering flawless physical coordination and cinematic output under pressure.
            </p>
          </div>
        </Reveal>

        {/* 3-column minimal trust cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trust.highlights.map((item, index) => (
            <Reveal key={index} delay={index * 100}>
              <div 
                className="group h-full p-6 sm:p-8 rounded-lg bg-surface/60 border border-borderSubtle/60 hover:border-gold/50 hover:bg-surface/90 hover:-translate-y-1.5 hover:shadow-gold-glow transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-mono tracking-widest uppercase text-gold/80 block mb-3 group-hover:text-gold transition-colors duration-300">
                    Engagement 0{index + 1}
                  </span>
                  <h3 className="font-heading text-xl text-cream font-medium mb-1 group-hover:text-gold transition-colors duration-300">
                    {item.name}
                  </h3>
                  {item.client && (
                    <p className="text-[11px] uppercase tracking-wider text-gold/80 font-mono mb-3">
                      {item.client}
                    </p>
                  )}
                  <p className="text-sm text-textMuted leading-relaxed group-hover:text-cream/80 transition-colors duration-300">
                    {item.role}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-borderSubtle/50 flex items-center justify-between text-xs">
                  <span className="text-textMuted uppercase tracking-wider font-mono">Scope & Impact</span>
                  <span className="text-cream/90 font-medium font-mono group-hover:text-gold transition-colors duration-300">{item.metric}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
