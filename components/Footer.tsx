import React from 'react';
import { RESTAURANT_PHONE, RESTAURANT_NAME } from '../constants';
import { Phone, MapPin, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif text-white">{RESTAURANT_NAME}</h3>
            <p className="font-light text-sm leading-relaxed max-w-xs">
              Elevating the dining experience through sustainable ingredients, culinary innovation, and impeccable service.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif text-white">Contact Us</h4>
            <div className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-gold-500" />
              <span className="text-sm">{RESTAURANT_PHONE}</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-4 h-4 text-gold-500" />
              <span className="text-sm">14, Ajayi Aina Street, Gbagada, Lagos</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-4 h-4 text-gold-500" />
              <span className="text-sm">reservations@{RESTAURANT_NAME.toLowerCase()}.com</span>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif text-white">Opening Hours</h4>
            <div className="grid grid-cols-2 text-sm gap-2">
              <span>Mon - Thu</span>
              <span className="text-white">5:00 PM - 10:00 PM</span>
              <span>Fri - Sat</span>
              <span className="text-white">5:00 PM - 11:00 PM</span>
              <span>Sunday</span>
              <span className="text-white">4:00 PM - 9:00 PM</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-slate-600">&copy; 2024 {RESTAURANT_NAME}. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold-500 transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-gold-500 transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-gold-500 transition-colors"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};