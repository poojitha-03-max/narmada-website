import React from 'react';
import { Sparkles, UtensilsCrossed, ShoppingBag, Volume2, VolumeX, Flame } from 'lucide-react';
import { ambientSound } from '../utils/audioAmbience';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  candlelightMode: boolean;
  setCandlelightMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  cartCount: number;
  openCart: () => void;
  openReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  candlelightMode,
  setCandlelightMode,
  cartCount,
  openCart,
  openReservation
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = React.useState(false);

  const toggleSound = () => {
    const isNowPlaying = ambientSound.toggle();
    setIsPlayingAudio(isNowPlaying);
  };

  const navLinks = [
    { id: 'experience', label: 'The Hall' },
    { id: 'menu', label: 'Repertoire' },
    { id: 'reserve', label: 'Reserve' },
    { id: 'sommelier', label: 'Spice & Wine' },
    { id: 'degustation', label: 'Tasting Menus' },
    { id: 'heritage', label: 'Craft & Lore' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0d0907]/90 backdrop-blur-md border-b border-amber-950/40 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Zone 1: Single text element Brand Zone */}
        <button
          onClick={() => setActiveTab('experience')}
          className="group text-left flex items-center gap-3 cursor-pointer focus-visible:outline-amber-400"
        >
          <div className="w-10 h-10 rounded-full border border-amber-500/40 flex items-center justify-center bg-gradient-to-br from-amber-950/80 to-amber-900/30 group-hover:border-amber-400 transition-colors">
            <span className="font-serif text-lg font-bold text-amber-300">N</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-widest text-amber-100 group-hover:text-amber-300 transition-colors whitespace-nowrap leading-none">
              NARMADHA
            </span>
            <span className="text-[10px] text-amber-400/90 font-medium tracking-wider uppercase mt-0.5">
              BTM Layout · Bengaluru
            </span>
          </div>
        </button>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => setActiveTab(link.id)}
                className={`relative py-1 transition-colors whitespace-nowrap cursor-pointer ${
                  isActive ? 'text-amber-300' : 'text-stone-300 hover:text-amber-200'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-400 to-amber-600 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1-2 primary actions & sensory toggles */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Ambient Candlelight Mode Toggle */}
          <button
            onClick={() => setCandlelightMode(prev => !prev)}
            title={candlelightMode ? "Dim lights to Candlelight Mode" : "Brighten Dining Lights"}
            className={`p-2 sm:px-3 sm:py-1.5 rounded-lg border text-xs flex items-center gap-2 transition-all cursor-pointer ${
              candlelightMode 
                ? 'bg-amber-500/20 border-amber-400/50 text-amber-200 shadow-[0_0_15px_rgba(245,158,11,0.25)]' 
                : 'bg-stone-900/60 border-stone-800 text-stone-400 hover:text-stone-200'
            }`}
          >
            <Flame className={`w-4 h-4 ${candlelightMode ? 'text-amber-400 animate-candle-flame' : 'text-stone-500'}`} />
            <span className="hidden sm:inline font-medium">
              {candlelightMode ? "Candlelight On" : "Candlelight"}
            </span>
          </button>

          {/* Sensory Ambient Acoustic Drone */}
          <button
            onClick={toggleSound}
            title={isPlayingAudio ? "Mute dining room acoustic drone" : "Play dining room acoustic ambience"}
            className={`p-2 rounded-lg border text-xs transition-colors cursor-pointer ${
              isPlayingAudio
                ? 'bg-amber-950/60 border-amber-500/40 text-amber-300'
                : 'bg-stone-900/60 border-stone-800 text-stone-400 hover:text-stone-200'
            }`}
          >
            {isPlayingAudio ? <Volume2 className="w-4 h-4 text-amber-400 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Dine-In / Banquet Order Bag */}
          <button
            onClick={openCart}
            className="relative p-2 rounded-lg bg-stone-900/80 border border-amber-900/30 text-amber-200 hover:border-amber-500/40 hover:text-white transition-all cursor-pointer"
            title="View Table Feast & Bill Split"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-600 text-amber-50 text-[10px] font-bold rounded-full flex items-center justify-center shadow-md">
                {cartCount}
              </span>
            )}
          </button>

          {/* Primary CTA */}
          <button
            onClick={openReservation}
            className="px-4 py-2 text-xs font-semibold tracking-wider uppercase text-[#0d0907] bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 rounded-lg transition-all shadow-[0_0_20px_rgba(217,119,6,0.3)] whitespace-nowrap cursor-pointer"
          >
            Reserve Table
          </button>
        </div>

      </div>

      {/* Mobile subnavigation bar */}
      <div className="lg:hidden flex items-center overflow-x-auto px-4 py-2 border-t border-amber-950/30 bg-[#0d0907]/95 gap-4 text-xs font-medium no-scrollbar">
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => setActiveTab(link.id)}
            className={`whitespace-nowrap px-2 py-1 rounded transition-colors ${
              activeTab === link.id ? 'text-amber-300 bg-amber-950/50' : 'text-stone-400'
            }`}
          >
            {link.label}
          </button>
        ))}
      </div>
    </header>
  );
};
