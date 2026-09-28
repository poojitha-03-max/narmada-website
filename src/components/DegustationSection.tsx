import React, { useState } from 'react';
import { Award, Sparkles, Clock, Check, ChevronRight, Flame } from 'lucide-react';
import { DEGUSTATION_MENUS } from '../data/restaurantData';

interface DegustationSectionProps {
  onSelectDegustation: (menu: typeof DEGUSTATION_MENUS[0]) => void;
  onBookTable: () => void;
}

export const DegustationSection: React.FC<DegustationSectionProps> = ({
  onSelectDegustation,
  onBookTable
}) => {
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);
  const currentMenu = DEGUSTATION_MENUS[selectedMenuIndex];

  return (
    <section id="degustation-section" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-400 mb-3">
          <Award className="w-3.5 h-3.5 text-amber-500" />
          <span>The Chef's Royal Feasts</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-stone-100 tracking-tight mb-4 [text-wrap:balance]">
          Narmadha's Royal Bhojanam & Banquets
        </h2>
        <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed [text-wrap:balance]">
          Celebrate Bengaluru dining with our grand royal bhojanam served on fresh plantain leaves, accompanied by unlimited ghee, steaming brass handi biryanis, and filter kaapi.
        </p>
      </div>

      {/* Tasting Menu Toggle Selector */}
      <div className="flex items-center justify-center gap-4 mb-12 flex-wrap">
        {DEGUSTATION_MENUS.map((menu, idx) => {
          const isActive = selectedMenuIndex === idx;
          return (
            <button
              key={menu.id}
              onClick={() => setSelectedMenuIndex(idx)}
              className={`px-5 py-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-bold shadow-lg scale-105'
                  : 'bg-stone-900/60 border-stone-800 text-stone-400 hover:text-stone-200'
              }`}
            >
              <div className="flex items-center gap-2">
                <span>{menu.title}</span>
                <span className="text-[11px] opacity-80">(₹{menu.price})</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Tasting Menu Showcase */}
      <div className="bg-[#140e0a] border border-amber-900/40 rounded-2xl p-6 sm:p-10 backdrop-blur-md shadow-2xl max-w-4xl mx-auto">
        <div className="flex items-start justify-between border-b border-amber-950/60 pb-6 mb-8 flex-wrap gap-4">
          <div>
            <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-1 flex items-center gap-2">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>BTM Layout Banquet Experience</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-100 mb-2">
              {currentMenu.title}
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 max-w-xl">
              {currentMenu.description}
            </p>
          </div>

          <div className="text-right">
            <div className="text-3xl font-serif font-bold text-amber-300 tabular-nums">
              ₹{currentMenu.price}
            </div>
            <div className="text-xs text-stone-400 flex items-center gap-1.5 justify-end mt-1">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>{currentMenu.duration} progression</span>
            </div>
          </div>
        </div>

        {/* Timeline of Courses */}
        <div className="space-y-4 mb-10">
          {currentMenu.courses.map((course, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-3.5 rounded-xl bg-stone-950/50 border border-stone-900 hover:border-amber-500/30 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-amber-950/70 border border-amber-500/30 flex items-center justify-center shrink-0 text-xs font-serif font-bold text-amber-300">
                0{idx + 1}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-serif text-base sm:text-lg font-semibold text-stone-100">
                  {course.name}
                </h4>
                <p className="text-xs text-stone-400 mt-0.5">
                  {course.note}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-amber-950/60">
          <div className="text-xs text-stone-400">
            * Optional Royal Sommelier beverage pairing available for +₹450 per guest
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => onSelectDegustation(currentMenu)}
              className="flex-1 sm:flex-initial px-5 py-3 rounded-lg border border-amber-500/50 text-amber-200 hover:bg-amber-950/50 text-xs font-semibold transition-all cursor-pointer whitespace-nowrap"
            >
              Add Degustation to Table Order
            </button>
            <button
              onClick={onBookTable}
              className="flex-1 sm:flex-initial px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 text-xs font-bold uppercase tracking-wider rounded-lg shadow-md hover:from-amber-300 hover:to-amber-400 transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
            >
              <span>Book This Experience</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
