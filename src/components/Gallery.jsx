import React from 'react';
import { siteData } from '../data/siteData';

export default function Gallery() {
  const { gallery } = siteData;

  return (
    <section id="work" className="py-24 sm:py-32 px-6 border-t border-borderSubtle/70">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-textMuted font-medium">
              Field Execution
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl text-cream font-semibold mt-2">
              Behind The Lens
            </h2>
          </div>
          <p className="text-sm text-textMuted mt-3 sm:mt-0 max-w-xs">
            A glimpse into our crew capturing moments at Victorian Walk '26.
          </p>
        </div>

        {/* Photography Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {gallery.map((item) => (
            <div 
              key={item.id}
              className="group relative aspect-[4/3] sm:aspect-[3/2] overflow-hidden rounded-lg bg-surface border border-borderSubtle/60"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
              />
              
              {/* Subtle gradient vignette on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <span className="text-xs tracking-wider uppercase text-cream/90 font-medium">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
