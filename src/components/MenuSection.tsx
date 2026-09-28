import React, { useState } from 'react';
import { Flame, Plus, Check, Info, Sparkles, Filter, Wine } from 'lucide-react';
import { MENU_ITEMS, Dish } from '../data/restaurantData';

interface MenuSectionProps {
  onSelectDish: (dish: Dish) => void;
  onAddToCart: (dish: Dish) => void;
  cartItemIds: Record<string, number>;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onSelectDish,
  onAddToCart,
  cartItemIds
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDietary, setSelectedDietary] = useState<string>('all');
  const [addedAnimationId, setAddedAnimationId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Masterpieces' },
    { id: 'biryani', label: 'Dum & Biryani' },
    { id: 'curries', label: 'Copper Handi Curries' },
    { id: 'tawa-dosa', label: 'Tawa & Dosa' },
    { id: 'tandoor', label: 'Clay Tandoor' },
    { id: 'breads-sides', label: 'Breads & Raita' },
    { id: 'desserts', label: 'Royal Confections' },
    { id: 'elixirs', label: 'Mixology & Elixirs' }
  ];

  const dietaryOptions = [
    { id: 'all', label: 'All Diets' },
    { id: 'Vegetarian', label: 'Vegetarian' },
    { id: 'Non-Veg', label: 'Royal Non-Veg' },
    { id: 'Gluten-Free', label: 'Gluten-Free' },
    { id: 'Jain-Friendly', label: 'Jain Friendly' },
  ];

  const filteredDishes = MENU_ITEMS.filter(dish => {
    const matchesCategory = selectedCategory === 'all' || dish.category === selectedCategory;
    const matchesDietary = selectedDietary === 'all' || dish.dietary.includes(selectedDietary as any);
    return matchesCategory && matchesDietary;
  });

  const handleAddWithFeedback = (e: React.MouseEvent, dish: Dish) => {
    e.stopPropagation();
    onAddToCart(dish);
    setAddedAnimationId(dish.id);
    setTimeout(() => {
      setAddedAnimationId(null);
    }, 1200);
  };

  return (
    <section id="menu-section" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-400 mb-3">
          <Flame className="w-3.5 h-3.5 text-amber-500 animate-candle-flame" />
          <span>Hand-Hammered Copper & Traditional Brass Service</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-stone-100 tracking-tight mb-4 [text-wrap:balance]">
          Narmadha's Grand Culinary Repertoire
        </h2>
        <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed [text-wrap:balance]">
          From the famed Dum Biryani in heavy brass degchis to crispy Bangalore Benne Dosas and fiery Andhra Guntur roasts, each preparation is crafted fresh in our BTM Layout kitchens.
        </p>
      </div>

      {/* Category Segmented Control */}
      <div className="flex items-center justify-start lg:justify-center overflow-x-auto gap-2 p-1.5 bg-[#140e0a] border border-amber-950/60 rounded-xl mb-6 no-scrollbar">
        {categories.map(cat => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-semibold shadow-md'
                  : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900/60'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Dietary Sub-Filters */}
      <div className="flex items-center justify-between flex-wrap gap-4 mb-10 pb-4 border-b border-amber-950/40 text-xs">
        <div className="flex items-center gap-2 text-stone-400">
          <Filter className="w-3.5 h-3.5 text-amber-400" />
          <span>Filter by Dietary:</span>
          <div className="flex items-center gap-1.5 ml-2">
            {dietaryOptions.map(opt => (
              <button
                key={opt.id}
                onClick={() => setSelectedDietary(opt.id)}
                className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                  selectedDietary === opt.id
                    ? 'bg-amber-950/70 border border-amber-500/40 text-amber-200'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="text-stone-400">
          Showing <span className="text-amber-300 font-semibold tabular-nums">{filteredDishes.length}</span> specialties
        </div>
      </div>

      {/* Dishes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDishes.map(dish => {
          const cartQuantity = cartItemIds[dish.id] || 0;
          const isJustAdded = addedAnimationId === dish.id;

          return (
            <div
              key={dish.id}
              onClick={() => onSelectDish(dish)}
              className="group relative flex flex-col bg-[#140e0a]/90 border border-amber-900/30 hover:border-amber-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(217,119,6,0.25)] hover:-translate-y-1 cursor-pointer"
            >
              {/* Product Visual Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#140e0a] via-transparent to-transparent opacity-80" />
                
                {/* Vessel Type Tag */}
                <div className="absolute top-3 left-3 bg-[#0d0907]/80 backdrop-blur-md border border-amber-500/30 px-2.5 py-1 rounded-md text-[11px] font-medium text-amber-300 flex items-center gap-1.5 shadow-md">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>{dish.vessel}</span>
                </div>

                {/* Price in Tabular Numerals */}
                <div className="absolute bottom-3 right-3 bg-[#0d0907]/90 backdrop-blur-md border border-amber-500/40 px-3 py-1 rounded-lg text-amber-200 font-serif text-lg font-bold tabular-nums shadow-lg">
                  ₹{dish.price}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Origin & Script metadata */}
                  <div className="flex items-center justify-between text-xs text-stone-400 mb-1.5">
                    <span>{dish.origin}</span>
                    {dish.scriptName && (
                      <span className="font-serif text-stone-400 tracking-wider">
                        {dish.scriptName}
                      </span>
                    )}
                  </div>

                  {/* Dish Title */}
                  <h3 className="font-serif text-xl font-bold text-stone-100 group-hover:text-amber-300 transition-colors mb-2 leading-snug">
                    {dish.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-stone-400 line-clamp-2 leading-relaxed mb-4">
                    {dish.description}
                  </p>

                  {/* Key Spices (Zero-Pill Unboxed Text with Separators) */}
                  <div className="text-[11px] text-amber-400/90 flex flex-wrap items-center gap-1 mb-4">
                    <span className="text-stone-400 font-medium">Spices:</span>
                    {dish.keySpices.slice(0, 3).map((spice, idx) => (
                      <React.Fragment key={spice}>
                        <span>{spice}</span>
                        {idx < 2 && <span aria-hidden="true" className="text-stone-400">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Card Actions & Pairings */}
                <div className="pt-3 border-t border-amber-950/50 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1 text-xs text-stone-400" title={`Spice Level: ${dish.spiceLevel} of 4`}>
                    <span className="text-[11px]">Heat:</span>
                    {Array.from({ length: 4 }).map((_, i) => (
                      <span
                        key={i}
                        className={`w-1.5 h-1.5 rounded-full ${
                          i < dish.spiceLevel ? 'bg-amber-400' : 'bg-stone-800'
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectDish(dish);
                      }}
                      className="p-1.5 rounded-lg text-stone-400 hover:text-amber-300 hover:bg-stone-800/80 transition-colors"
                      title="View Craft, Lore & Secret Spices"
                    >
                      <Info className="w-4 h-4" />
                    </button>

                    <button
                      onClick={(e) => handleAddWithFeedback(e, dish)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
                        isJustAdded
                          ? 'bg-emerald-600 text-white'
                          : cartQuantity > 0
                          ? 'bg-amber-950 border border-amber-500/50 text-amber-200 hover:bg-amber-900/60'
                          : 'bg-stone-800 hover:bg-amber-600 text-stone-200 hover:text-stone-950'
                      }`}
                    >
                      {isJustAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added</span>
                        </>
                      ) : cartQuantity > 0 ? (
                        <>
                          <span>In Table Order ({cartQuantity})</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Table</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
