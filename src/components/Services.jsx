import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { siteData } from '../data/siteData';
import Reveal from './Reveal';

export default function Services() {
  const { services } = siteData;

  return (
    <section id="services" className="py-24 sm:py-32 px-6 border-t border-borderSubtle/70">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <Reveal>
          <div className="mb-14 sm:mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-textMuted font-medium">
              Core Disciplines
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl text-cream font-semibold mt-2">
              What We Do
            </h2>
          </div>
        </Reveal>

        {/* Minimal Editorial List */}
        <div className="divide-y divide-borderSubtle">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 80}>
              <div
                className="group py-8 sm:py-10 flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-8 transition-all duration-300 rounded-lg px-3 -mx-3 hover:bg-surface/30 cursor-default"
              >
                {/* Index & Title + Scope */}
                <div className="flex items-start gap-6 sm:gap-10">
                  <span className="text-xs font-mono text-textMuted/70 pt-1.5 select-none group-hover:text-gold transition-colors duration-300">
                    {service.id}
                  </span>
                  
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-medium text-cream group-hover:text-gold group-hover:translate-x-1 transition-all duration-300">
                        {service.title}
                      </h3>
                      <ArrowUpRight className="w-5 h-5 text-gold opacity-0 -translate-x-2 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                    </div>
                    <p className="text-sm text-textMuted mt-2 max-w-lg leading-relaxed font-normal group-hover:text-cream/80 transition-colors duration-300">
                      {service.desc}
                    </p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="md:pt-1.5 pl-12 md:pl-0 flex-shrink-0">
                  <span className="inline-block text-[11px] uppercase tracking-wider text-textMuted/80 px-2.5 py-1 rounded bg-surface/50 border border-borderSubtle/60 group-hover:border-gold/40 group-hover:text-gold/90 transition-all duration-300">
                    {service.category}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
