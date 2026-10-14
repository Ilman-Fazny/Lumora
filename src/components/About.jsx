import React from 'react';
import { siteData } from '../data/siteData';

export default function About() {
  const { about } = siteData;

  return (
    <section id="about" className="py-24 sm:py-32 px-6 border-t border-borderSubtle/70">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-textMuted font-medium mb-4">
          The Advantage
        </p>
        
        <h2 className="font-heading text-3xl sm:text-5xl text-cream font-bold mb-8 tracking-tight">
          {about.title}
        </h2>

        <p className="text-base sm:text-lg text-cream/70 leading-relaxed font-normal mb-12">
          {about.statement}
        </p>

        {/* Minimal metadata strip */}
        <div className="inline-flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-6 border-t border-borderSubtle/60 text-xs text-textMuted tracking-wider uppercase font-mono">
          {about.stats.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="text-cream/50">{stat.label}:</span>
              <span className="text-cream font-medium">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
