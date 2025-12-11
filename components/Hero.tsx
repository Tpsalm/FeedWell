import React from 'react';
import { ViewState } from '../types';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onNavigate: (view: ViewState) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-subtle-zoom"
        style={{
          backgroundImage: 'url("https://picsum.photos/seed/restaurant_ambience/1920/1080")', 
          filter: 'brightness(0.4)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <span className="text-gold-400 tracking-[0.3em] uppercase text-sm mb-4 animate-fade-in-up">
          Est. 2024
        </span>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight animate-fade-in-up delay-100">
          Taste the <br/> <span className="italic text-gold-400">Extraordinary</span>
        </h1>
        <p className="font-sans text-slate-300 max-w-lg mb-10 text-lg md:text-xl font-light leading-relaxed animate-fade-in-up delay-200">
          A symphony of flavors crafted for the discerning palate. Experience dining reimagined at FeedWell.
        </p>
        <div className="flex flex-col md:flex-row gap-4 animate-fade-in-up delay-300">
          <button 
            onClick={() => onNavigate('menu')}
            className="px-8 py-3 bg-white text-slate-900 hover:bg-slate-200 transition-colors font-medium tracking-wide"
          >
            View Menu
          </button>
          <button 
            onClick={() => onNavigate('reservation')}
            className="px-8 py-3 border border-white text-white hover:bg-white/10 transition-colors font-medium tracking-wide"
          >
            Reservations
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-400">
        <ChevronDown className="w-8 h-8" />
      </div>
    </div>
  );
};
