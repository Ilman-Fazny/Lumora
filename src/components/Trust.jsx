import React from 'react';
import { siteData } from '../data/siteData';

export default function Trust() {
  const { trust } = siteData;

  if (!trust) return null;

  return (
    <section className="py-20 sm:py-24 px-6 border-t border-borderSubtle/70 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-14">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-textMuted font-medium">
              {trust.badge}
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl text-cream font-semibold mt-2">
              {trust.headline}
            </h2>
          </div>
          <p className="text-sm text-textMuted mt-2 sm:mt-0 max-w-xs">
            Delivering flawless physical coordination and cinematic output under pressure.
          </p>
        </div>

        {/* 3-column minimal trust cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trust.highlights.map((item, index) => (
            <div 
              key={index} 
              className="p-6 sm:p-8 rounded-lg bg-surface/60 border border-borderSubtle/60 hover:border-gold/40 transition-colors duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono tracking-widest uppercase text-gold/80 block mb-3">
                  Engagement 0{index + 1}
                </span>
                <h3 className="font-heading text-xl text-cream font-medium mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-textMuted leading-relaxed">
                  {item.role}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-borderSubtle/50 flex items-center justify-between text-xs">
                <span className="text-textMuted uppercase tracking-wider font-mono">Scope & Impact</span>
                <span className="text-cream/90 font-medium font-mono">{item.metric}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
