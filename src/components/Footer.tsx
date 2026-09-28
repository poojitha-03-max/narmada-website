import React from 'react';
import { Flame, Clock, MapPin, Phone, Mail, Building2 } from 'lucide-react';
import { RESTAURANT_INFO, CHAIN_OUTLETS } from '../data/restaurantData';

interface FooterProps {
  onNavClick: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  return (
    <footer className="border-t border-amber-950/50 bg-[#0a0705] text-stone-400 text-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border border-amber-500/40 flex items-center justify-center bg-amber-950/60">
                <span className="font-serif text-sm font-bold text-amber-300">N</span>
              </div>
              <span className="font-serif text-xl font-bold tracking-widest text-amber-100">
                NARMADHA
              </span>
            </div>
            <p className="text-xs text-stone-400 font-light leading-relaxed">
              Bengaluru's premier Andhra Dum Biryani and Royal Dining destination. Serving authentic sealed handi biryanis, hammered copper curries, and crispy banana leaf dosas.
            </p>
            <div className="pt-1 text-[11px] text-amber-400/90 font-medium">
              Flagship: BTM Layout 2nd Stage, Bangalore
            </div>
          </div>

          {/* Hours & Service */}
          <div className="space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-300 mb-3 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>BTM Dining Hours</span>
            </div>
            <p className="text-stone-300 font-medium">Lunch Service</p>
            <p className="text-stone-400 text-[11px] mb-2">Daily: 11:30 AM – 3:45 PM</p>
            <p className="text-stone-300 font-medium">Dinner Service</p>
            <p className="text-stone-400 text-[11px]">Daily: 6:30 PM – 11:30 PM</p>
            <p className="text-[11px] text-emerald-400 pt-1">Open All 7 Days (Late dinner on weekends)</p>
          </div>

          {/* Location & Dress Code */}
          <div className="space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-300 mb-3 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>BTM Layout Location</span>
            </div>
            <p className="text-stone-300">{RESTAURANT_INFO.location}</p>
            <p className="text-stone-400 text-[11px] pt-1">Landmark: {RESTAURANT_INFO.landmark}</p>
            <p className="text-stone-400 text-[11px]">Complimentary valet parking available at East Portico.</p>
            <div className="pt-2">
              <span className="text-stone-300 block font-medium">Chain Outlets in Bengaluru</span>
              <span className="text-[11px] text-stone-400">BTM Layout · Koramangala · Jayanagar · Indiranagar</span>
            </div>
          </div>

          {/* Inquiries & Banquets */}
          <div className="space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-300 mb-3 flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-amber-400 animate-candle-flame" />
              <span>BTM Bookings & Banquets</span>
            </div>
            <div className="flex items-center gap-2 text-stone-300">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{RESTAURANT_INFO.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-stone-400 text-[11px]">
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>reservations@narmadharestaurants.in</span>
            </div>
            <div className="pt-3">
              <button
                onClick={() => onNavClick('reserve')}
                className="text-amber-400 hover:text-amber-300 font-medium underline underline-offset-4 cursor-pointer"
              >
                Reserve Table at BTM Layout &rarr;
              </button>
            </div>
          </div>

        </div>

        {/* Quiet Bottom Copyright */}
        <div className="pt-8 border-t border-amber-950/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-400">
          <div>
            © {new Date().getFullYear()} Narmadha Chain of Restaurants, Bengaluru. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => onNavClick('experience')} className="hover:text-amber-300 transition-colors cursor-pointer">
              The Grand Hall
            </button>
            <button onClick={() => onNavClick('menu')} className="hover:text-amber-300 transition-colors cursor-pointer">
              Repertoire
            </button>
            <button onClick={() => onNavClick('sommelier')} className="hover:text-amber-300 transition-colors cursor-pointer">
              Spice Cellar
            </button>
            <button onClick={() => onNavClick('heritage')} className="hover:text-amber-300 transition-colors cursor-pointer">
              Craft & Outlets
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
