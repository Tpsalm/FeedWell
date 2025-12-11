import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { CourseType } from '../types';

export const MenuGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CourseType | 'All'>('All');

  const categories = ['All', ...Object.values(CourseType)];
  
  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.course === activeCategory);

  return (
    <div className="py-24 bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-gold-400 font-serif text-4xl italic mb-4">Culinary Masterpieces</h2>
          <div className="w-24 h-1 bg-gold-600 mx-auto opacity-50"></div>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto font-light">
            Sourced from the finest local purveyors, our dishes are designed to tell a story of flavor, texture, and passion.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as any)}
              className={`px-6 py-2 rounded-full text-sm uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-gold-600 text-white shadow-lg shadow-gold-900/20' 
                  : 'bg-transparent text-slate-400 border border-slate-700 hover:border-gold-500 hover:text-gold-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative bg-slate-800 rounded-xl overflow-hidden shadow-xl border border-white/5 hover:border-gold-500/30 transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-w-16 aspect-h-9 h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
              </div>
              
              <div className="absolute bottom-0 p-6 w-full">
                <div className="flex justify-between items-end mb-2">
                  <h3 className="text-xl font-serif text-white group-hover:text-gold-400 transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-gold-400 font-bold text-lg">${item.price}</span>
                </div>
                <p className="text-slate-400 text-sm font-light leading-relaxed mb-3">
                  {item.description}
                </p>
                <div className="flex gap-2">
                  {item.dietary?.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-slate-700/50 text-slate-300 rounded border border-slate-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
