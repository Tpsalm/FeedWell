import React, { useState } from 'react';
import { ViewState } from '../types';
import { Menu as MenuIcon, X, UtensilsCrossed } from 'lucide-react';
import { RESTAURANT_NAME } from '../constants';

interface NavbarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; view: ViewState }[] = [
    { label: 'Home', view: 'home' },
    { label: 'The Menu', view: 'menu' },
    { label: 'Reservations', view: 'reservation' },
    { label: 'Contact', view: 'contact' },
  ];

  const handleNav = (view: ViewState) => {
    onNavigate(view);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-40 top-0 bg-slate-900/80 backdrop-blur-md border-b border-white/5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer space-x-2"
            onClick={() => handleNav('home')}
          >
            <UtensilsCrossed className="h-8 w-8 text-gold-400" />
            <span className="font-serif text-2xl font-bold tracking-widest text-white">
              {RESTAURANT_NAME.toUpperCase()}
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item.view)}
                className={`text-sm tracking-widest uppercase transition-colors duration-200 font-sans font-medium ${
                  currentView === item.view 
                    ? 'text-gold-400' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => handleNav('reservation')}
              className="ml-4 px-6 py-2 border border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-white transition-all duration-300 font-serif italic"
            >
              Book a Table
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute w-full bg-slate-900 border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center py-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item.view)}
                className={`block px-3 py-4 text-base font-medium tracking-widest uppercase ${
                   currentView === item.view ? 'text-gold-400' : 'text-slate-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
