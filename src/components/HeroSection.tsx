import React from 'react';
import { Flame, Clock, Wine, Users, Calendar, ArrowRight, Sparkles, MapPin } from 'lucide-react';
import { RESTAURANT_INFO, MENU_ITEMS, Dish } from '../data/restaurantData';

interface HeroSectionProps {
  onReserveClick: () => void;
  onExploreMenu: () => void;
  onSelectDish: (dish: Dish) => void;
  candlelightMode: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onReserveClick,
  onExploreMenu,
  onSelectDish,
  candlelightMode
}) => {
  const biryaniDish = MENU_ITEMS.find(d => d.id === 'narmadha-dum-biryani') || MENU_ITEMS[0];
  const curryDish = MENU_ITEMS.find(d => d.id === 'shahi-paneer-butter-kadai') || MENU_ITEMS[1];
  const dosaDish = MENU_ITEMS.find(d => d.id === 'dakshin-masala-dosa') || MENU_ITEMS[2];

  return (
    <div className="relative w-full">
      {/* Hero Visual Container */}
      <div className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Background Image: Luxurious Mahogany Dining Room */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_dining_hall_1790582794932.jpg"
            alt="Narmadha Restaurant BTM Layout Dining Hall with dark mahogany wood and chandeliers"
            className={`w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ${
              candlelightMode ? 'brightness-75 contrast-125' : 'brightness-90 contrast-110'
            }`}
            referrerPolicy="no-referrer"
          />
          {/* Measured Contrast Scrims */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0806] via-[#0c0806]/75 to-[#0c0806]/40" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#0c0806]/40 to-[#0c0806]/90" />
          
          {/* Warm Candlelight Aura Layer */}
          {candlelightMode && (
            <div className="absolute inset-0 bg-amber-500/10 pointer-events-none mix-blend-color-dodge transition-opacity duration-700 animate-pulse" />
          )}
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
          {/* Heritage & Location Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/75 border border-amber-500/30 text-amber-300 text-xs font-medium tracking-wider mb-6 backdrop-blur-md">
            <Flame className="w-3.5 h-3.5 text-amber-400 animate-candle-flame" />
            <span className="font-semibold text-amber-200">NARMADHA CHAIN OF RESTAURANTS</span>
            <span aria-hidden="true" className="text-amber-500/60">·</span>
            <span className="text-stone-300">Flagship: BTM Layout 2nd Stage, Bengaluru</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#fbf7f0] tracking-tight leading-[1.08] mb-6 max-w-4xl mx-auto [text-wrap:balance]">
            The Legendary Dum Biryani & Royal Copper Feasts of BTM Layout
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-stone-300 max-w-2xl mx-auto font-light leading-relaxed mb-10 [text-wrap:balance]">
            Experience Bengaluru's revered culinary institution. Aromatic brass handi dum biryanis, bubbling copper kadai curries, and crispy banana leaf dosas in a warm, candlelit mahogany sanctuary.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={onReserveClick}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-stone-950 font-semibold rounded-lg shadow-[0_0_30px_rgba(245,158,11,0.35)] transition-all hover:scale-[1.02] flex items-center justify-center gap-3 cursor-pointer"
            >
              <span>Reserve Table at BTM Layout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreMenu}
              className="w-full sm:w-auto px-8 py-4 bg-stone-900/80 hover:bg-stone-800/90 text-amber-200 border border-amber-600/40 rounded-lg backdrop-blur-md transition-all hover:border-amber-400 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Explore Narmadha Menu</span>
            </button>
          </div>

          {/* Interactive Table Feast Showcase Strip (Directly from User Photo) */}
          <div className="w-full max-w-5xl mx-auto bg-[#140e0a]/85 border border-amber-900/40 rounded-2xl p-4 sm:p-6 backdrop-blur-xl shadow-2xl">
            <div className="flex items-center justify-between border-b border-amber-950/80 pb-3 mb-4 flex-wrap gap-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
                <Flame className="w-3.5 h-3.5 text-amber-400 animate-candle-flame" />
                <span>Narmadha's Signature Table Spread</span>
              </div>
              <div className="text-xs text-stone-400 flex items-center gap-3">
                <span>Click any dish to preview craft & spices</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              {/* Feature Dish 1: Biryani */}
              <div
                onClick={() => onSelectDish(biryaniDish)}
                className="group relative flex items-center gap-3 p-3 rounded-xl bg-stone-900/50 hover:bg-amber-950/40 border border-stone-800/80 hover:border-amber-500/50 transition-all cursor-pointer"
              >
                <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-amber-900/40">
                  <img
                    src={biryaniDish.image}
                    alt={biryaniDish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] text-amber-400 font-medium uppercase tracking-wider">Brass Handi · ₹{biryaniDish.price}</div>
                  <h4 className="font-serif text-sm font-semibold text-stone-100 group-hover:text-amber-200 truncate">
                    {biryaniDish.name}
                  </h4>
                  <p className="text-xs text-stone-400 truncate">Slow-cooked with mirchi ka salan</p>
                </div>
              </div>

              {/* Feature Dish 2: Butter Copper Curry */}
              <div
                onClick={() => onSelectDish(curryDish)}
                className="group relative flex items-center gap-3 p-3 rounded-xl bg-stone-900/50 hover:bg-amber-950/40 border border-stone-800/80 hover:border-amber-500/50 transition-all cursor-pointer"
              >
                <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-amber-900/40">
                  <img
                    src={curryDish.image}
                    alt={curryDish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] text-amber-400 font-medium uppercase tracking-wider">Copper Kadai · ₹{curryDish.price}</div>
                  <h4 className="font-serif text-sm font-semibold text-stone-100 group-hover:text-amber-200 truncate">
                    {curryDish.name}
                  </h4>
                  <p className="text-xs text-stone-400 truncate">Charcoal simmer & cream swirl</p>
                </div>
              </div>

              {/* Feature Dish 3: Masala Dosa */}
              <div
                onClick={() => onSelectDish(dosaDish)}
                className="group relative flex items-center gap-3 p-3 rounded-xl bg-stone-900/50 hover:bg-amber-950/40 border border-stone-800/80 hover:border-amber-500/50 transition-all cursor-pointer"
              >
                <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-amber-900/40">
                  <img
                    src={dosaDish.image}
                    alt={dosaDish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] text-amber-400 font-medium uppercase tracking-wider">Banana Leaf & Brass · ₹{dosaDish.price}</div>
                  <h4 className="font-serif text-sm font-semibold text-stone-100 group-hover:text-amber-200 truncate">
                    {dosaDish.name}
                  </h4>
                  <p className="text-xs text-stone-400 truncate">Benne roast & trio chutneys</p>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Key Facts Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs text-stone-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>100 Feet Ring Road, BTM 2nd Stage, Bangalore</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Lunch & Dinner: 11:30 AM - 11:30 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Valet Parking at East Gate</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
