import React, { useState } from 'react';
import { X, Flame, Wine, Sparkles, Plus, Minus, Check, Clock, Utensils } from 'lucide-react';
import { Dish } from '../data/restaurantData';

interface DishDetailModalProps {
  dish: Dish | null;
  onClose: () => void;
  onAddToCart: (dish: Dish, quantity: number, spiceCustom: string) => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({
  dish,
  onClose,
  onAddToCart
}) => {
  const [quantity, setQuantity] = useState(1);
  const [spicePreference, setSpicePreference] = useState('Traditional Royal');
  const [added, setAdded] = useState(false);

  if (!dish) return null;

  const handleAdd = () => {
    onAddToCart(dish, quantity, spicePreference);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl bg-[#140e0a] border border-amber-800/40 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 flex flex-col md:flex-row max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-stone-900/80 border border-stone-700 text-stone-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left Column: Visual & Vessel Details */}
        <div className="w-full md:w-5/12 relative bg-stone-950 flex flex-col shrink-0 min-h-[260px] md:min-h-full">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#140e0a] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#140e0a]" />

          {/* Floating Vessel Metadata */}
          <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#0c0806]/85 backdrop-blur-md border border-amber-500/30 text-xs">
            <div className="text-[10px] uppercase tracking-wider text-amber-400 font-semibold mb-0.5">
              Traditional Service Vessel
            </div>
            <div className="text-stone-200 font-medium flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{dish.vessel}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Culinary Lore & Customization */}
        <div className="w-full md:w-7/12 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between">
          <div>
            {/* Header Metadata */}
            <div className="flex items-center justify-between text-xs text-stone-400 mb-2">
              <span className="text-amber-400 uppercase tracking-wider font-medium">{dish.origin}</span>
              {dish.scriptName && (
                <span className="font-serif text-stone-400 text-sm tracking-widest">{dish.scriptName}</span>
              )}
            </div>

            {/* Title & Price */}
            <div className="flex items-start justify-between gap-4 mb-3">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-100 leading-tight">
                {dish.name}
              </h2>
              <div className="text-2xl font-serif font-bold text-amber-300 tabular-nums shrink-0">
                ₹{dish.price}
              </div>
            </div>

            {/* Sub-header */}
            {dish.subName && (
              <p className="text-xs text-amber-400/90 font-medium mb-4 italic">
                {dish.subName}
              </p>
            )}

            {/* Culinary Lore Prose */}
            <div className="mb-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1.5 flex items-center gap-1.5">
                <Utensils className="w-3 h-3 text-amber-400" />
                <span>The Culinary Story</span>
              </h4>
              <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                {dish.detailedStory}
              </p>
            </div>

            {/* Heirloom Spices & Cooking Technique */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 p-3 rounded-xl bg-stone-900/60 border border-amber-950/40 text-xs">
              <div>
                <span className="text-stone-400 block text-[11px] mb-1">Technique</span>
                <span className="text-stone-200 font-medium">{dish.cookingTechnique}</span>
              </div>
              <div>
                <span className="text-stone-400 block text-[11px] mb-1">Portion & Heat</span>
                <span className="text-stone-200 font-medium">{dish.serves} · Heat {dish.spiceLevel}/4</span>
              </div>
            </div>

            {/* Heirloom Spices Pills (Clean unboxed with separators) */}
            <div className="mb-6">
              <span className="text-[11px] text-stone-400 block mb-1.5 font-medium">
                Pivotal Hand-Ground Spices:
              </span>
              <div className="text-xs text-amber-300/90 flex flex-wrap items-center gap-1.5">
                {dish.keySpices.map((spice, i) => (
                  <React.Fragment key={spice}>
                    <span className="px-2 py-0.5 rounded bg-amber-950/40 border border-amber-900/30 text-amber-200 text-[11px]">
                      {spice}
                    </span>
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Sommelier Pairing Callout */}
            <div className="p-3.5 rounded-xl bg-amber-950/25 border border-amber-500/20 mb-6 flex items-start gap-3">
              <Wine className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-semibold text-amber-300 block mb-0.5">
                  Sommelier Pairing: {dish.pairingRecommendation.drinkName}
                </span>
                <p className="text-stone-300 font-light">
                  {dish.pairingRecommendation.note}
                </p>
              </div>
            </div>

            {/* Spice Intensity Customization */}
            <div className="mb-6">
              <label className="text-xs text-stone-300 block mb-2 font-medium">
                Customize Table Spice Tempering:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['Mild Royal', 'Traditional Royal', 'Awadhi Bold'].map(lvl => (
                  <button
                    key={lvl}
                    onClick={() => setSpicePreference(lvl)}
                    className={`py-1.5 px-2 text-xs rounded-lg border transition-all cursor-pointer ${
                      spicePreference === lvl
                        ? 'bg-amber-500/20 border-amber-400 text-amber-200 font-medium'
                        : 'bg-stone-900 border-stone-800 text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions: Quantity & Add to Cart */}
          <div className="pt-4 border-t border-amber-950/60 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 border border-stone-800 rounded-lg p-1 bg-stone-900">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-7 h-7 rounded text-stone-400 hover:text-white flex items-center justify-center cursor-pointer"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="text-sm font-semibold text-amber-200 w-6 text-center tabular-nums">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-7 h-7 rounded text-stone-400 hover:text-white flex items-center justify-center cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={handleAdd}
              disabled={added}
              className="flex-1 py-3 px-6 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-stone-950 font-semibold text-xs sm:text-sm rounded-lg transition-all shadow-[0_0_20px_rgba(245,158,11,0.25)] flex items-center justify-center gap-2 cursor-pointer"
            >
              {added ? (
                <>
                  <Check className="w-4 h-4 text-stone-950" />
                  <span>Added to Table Feast</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-stone-950" />
                  <span>Add {quantity} to Feast (₹{dish.price * quantity})</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
