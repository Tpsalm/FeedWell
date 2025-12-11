import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuGrid } from './components/MenuGrid';
import { ReservationForm } from './components/ReservationForm';
import { Footer } from './components/Footer';
import { Concierge } from './components/Concierge';
import { ViewState } from './types';
import { RESTAURANT_PHONE, RESTAURANT_NAME } from './constants';
import { Phone, MapPin } from 'lucide-react';

const ContactView: React.FC = () => (
  <div className="pt-32 pb-20 bg-slate-900 min-h-screen text-center px-4">
    <h2 className="text-4xl font-serif text-white mb-8">Contact Us</h2>
    <div className="max-w-2xl mx-auto bg-slate-800 p-10 rounded-xl border border-white/5 space-y-8">
       <div className="flex flex-col items-center space-y-3">
         <Phone className="w-8 h-8 text-gold-500" />
         <h3 className="text-xl text-white">Phone</h3>
         <p className="text-slate-400 text-lg">{RESTAURANT_PHONE}</p>
       </div>
       <div className="w-16 h-px bg-slate-700 mx-auto"></div>
       <div className="flex flex-col items-center space-y-3">
         <MapPin className="w-8 h-8 text-gold-500" />
         <h3 className="text-xl text-white">Address</h3>
         <p className="text-slate-400">14, Ajayi Aina Street<br/>Gbagada, Lagos</p>
       </div>
    </div>
  </div>
);

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            <Hero onNavigate={setCurrentView} />
            <div id="featured-menu">
               <MenuGrid />
            </div>
          </>
        );
      case 'menu':
        return <MenuGrid />;
      case 'reservation':
        return <ReservationForm />;
      case 'contact':
        return <ContactView />;
      default:
        return <Hero onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="font-sans bg-slate-900 text-slate-50 min-h-screen flex flex-col selection:bg-gold-500 selection:text-white">
      <Navbar currentView={currentView} onNavigate={setCurrentView} />
      
      <main className="flex-grow">
        {renderView()}
      </main>

      <Concierge />
      <Footer />
    </div>
  );
};

export default App;