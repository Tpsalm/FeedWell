import React, { useState } from 'react';
import { Calendar, Clock, User, CheckCircle } from 'lucide-react';

export const ReservationForm: React.FC = () => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
    request: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setStep('success');
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (step === 'success') {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-slate-900 px-4">
        <div className="max-w-md w-full bg-slate-800 p-10 rounded-2xl shadow-2xl border border-gold-500/20 text-center animate-fade-in-up">
          <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
          <h2 className="text-3xl font-serif text-white mb-4">Reservation Confirmed</h2>
          <p className="text-slate-300 mb-8 font-light">
            Thank you, {formData.name}. We look forward to welcoming you on {formData.date} at {formData.time}.
          </p>
          <button 
            onClick={() => setStep('form')}
            className="text-gold-400 hover:text-gold-300 underline"
          >
            Make another reservation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24 bg-slate-900 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 shadow-2xl rounded-2xl overflow-hidden">
          
          {/* Decorative Side */}
          <div className="lg:col-span-2 relative bg-slate-800 hidden lg:block">
            <img 
              src="https://picsum.photos/seed/restaurant_interior/600/800" 
              alt="Interior" 
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gold-900/30 mix-blend-multiply"></div>
            <div className="relative z-10 p-10 h-full flex flex-col justify-end">
              <h3 className="text-3xl font-serif text-white mb-2">Secure Your Table</h3>
              <p className="text-slate-200 font-light text-sm">Experience the ambiance that everyone is talking about.</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-3 bg-white p-8 md:p-12">
            <div className="text-center lg:text-left mb-8">
              <h2 className="text-2xl font-serif text-slate-800 mb-2">Book a Table</h2>
              <div className="h-0.5 w-12 bg-gold-500 lg:mx-0 mx-auto"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-500 mb-2 font-semibold">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                    <input
                      required
                      type="date"
                      name="date"
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-gold-500 text-slate-700 bg-slate-50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-500 mb-2 font-semibold">Time</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                    <select
                      required
                      name="time"
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-gold-500 text-slate-700 bg-slate-50 appearance-none"
                    >
                      <option value="">Select Time</option>
                      <option value="17:00">5:00 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="21:00">9:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-500 mb-2 font-semibold">Guests</label>
                <div className="relative">
                  <User className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                  <select
                    required
                    name="guests"
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-gold-500 text-slate-700 bg-slate-50 appearance-none"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                      <option key={n} value={n}>{n} Guest{n > 1 ? 's' : ''}</option>
                    ))}
                    <option value="9+">9+ (Contact us)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-500 mb-2 font-semibold">Name</label>
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-gold-500 text-slate-700 bg-slate-50"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-500 mb-2 font-semibold">Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-gold-500 text-slate-700 bg-slate-50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-500 mb-2 font-semibold">Special Requests</label>
                <textarea
                  name="request"
                  rows={3}
                  onChange={handleChange}
                  placeholder="Allergies, special occasions..."
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-gold-500 text-slate-700 bg-slate-50"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-slate-900 text-white py-4 rounded-lg font-serif text-lg hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl"
              >
                Confirm Reservation
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
