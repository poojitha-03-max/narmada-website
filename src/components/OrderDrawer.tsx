import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, Users, Receipt, Sparkles, Check, Flame, ChevronRight } from 'lucide-react';
import { Dish } from '../data/restaurantData';

export interface CartItem {
  dish: Dish;
  quantity: number;
  spiceCustom?: string;
}

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (dishId: string, quantity: number) => void;
  onClearOrder: () => void;
  onReserveTable: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onClearOrder,
  onReserveTable
}) => {
  const [splitDiners, setSplitDiners] = useState(2);
  const [tipPercent, setTipPercent] = useState(18);
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [orderDispatched, setOrderDispatched] = useState(false);
  const [kitchenStage, setKitchenStage] = useState(0);

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.dish.price * item.quantity, 0);
  const tax = subtotal * 0.05; // 5% Restaurant GST
  const tip = subtotal * (tipPercent / 100);
  const total = subtotal + tax + tip;
  const perPerson = splitDiners > 0 ? total / splitDiners : total;

  const handleSendToKitchen = () => {
    setOrderDispatched(true);
    setKitchenStage(1);
    setTimeout(() => setKitchenStage(2), 2000);
    setTimeout(() => setKitchenStage(3), 4000);
    setTimeout(() => setKitchenStage(4), 6000);
  };

  const resetOrder = () => {
    setOrderDispatched(false);
    setKitchenStage(0);
    onClearOrder();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md bg-[#140e0a] border-l border-amber-900/40 h-full flex flex-col justify-between shadow-2xl z-10 overflow-hidden">
        
        {/* Header */}
        <div className="p-5 border-b border-amber-950/60 flex items-center justify-between bg-[#0d0907]">
          <div className="flex items-center gap-2">
            <Receipt className="w-4 h-4 text-amber-400" />
            <span className="font-serif text-lg font-bold text-stone-100">
              Narmadha Table Feast & Order
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 text-stone-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-5">
          {orderDispatched ? (
            /* Live Kitchen Progress View */
            <div className="py-6 text-center">
              <div className="w-14 h-14 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center mx-auto mb-4 text-amber-300">
                <Flame className="w-7 h-7 animate-candle-flame" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-100 mb-1">
                Order Dispatched to BTM Kitchen!
              </h3>
              <p className="text-xs text-amber-400 font-mono mb-6">
                Ticket #NRM-BTM-842 · Table Service Active
              </p>

              {/* Progress Steps */}
              <div className="space-y-4 text-left max-w-xs mx-auto mb-8 text-xs">
                {[
                  { step: 1, title: "Spices Tempered in Ghee", desc: "Curry leaves, mustard & Guntur chillies" },
                  { step: 2, title: "Tandoor & Cast Iron Tawa", desc: "Slapping naans & crisping benne dosas" },
                  { step: 3, title: "Dum Pukht Sealed Handi", desc: "Aromas infusing under dough seal" },
                  { step: 4, title: "Copper Plating & Table Delivery", desc: "Served on banana leaf & brass with chutneys" }
                ].map(s => {
                  const isDone = kitchenStage >= s.step;
                  const isCurrent = kitchenStage === s.step;
                  return (
                    <div key={s.step} className="flex items-start gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 transition-colors ${
                        isDone ? 'bg-amber-400 text-stone-950' : 'bg-stone-900 text-stone-500'
                      }`}>
                        {isDone ? <Check className="w-3.5 h-3.5" /> : s.step}
                      </div>
                      <div>
                        <div className={`font-semibold ${isCurrent ? 'text-amber-300' : isDone ? 'text-stone-200' : 'text-stone-500'}`}>
                          {s.title}
                        </div>
                        <div className="text-[10px] text-stone-400">{s.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={resetOrder}
                className="w-full py-2.5 bg-stone-900 hover:bg-stone-800 text-stone-300 text-xs font-semibold rounded-lg border border-stone-800 transition-colors cursor-pointer"
              >
                Start New Table Order
              </button>
            </div>
          ) : items.length === 0 ? (
            /* Empty State */
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-12 h-12 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-600 mb-3">
                <Receipt className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg font-bold text-stone-300 mb-1">
                Your Table Feast is Empty
              </h4>
              <p className="text-xs text-stone-500 max-w-xs mb-6">
                Explore our signature Dum Biryanis in brass handis, copper kadai curries, and crispy Benne Dosas.
              </p>
              <button
                onClick={onClose}
                className="px-5 py-2.5 bg-stone-900 hover:bg-amber-950/60 border border-amber-900/40 text-amber-300 text-xs font-medium rounded-lg transition-colors cursor-pointer"
              >
                Browse Narmadha Menu
              </button>
            </div>
          ) : (
            /* Items List & Bill Split */
            <div className="space-y-6">
              {/* Itemized List */}
              <div className="space-y-3">
                {items.map(item => (
                  <div
                    key={item.dish.id}
                    className="p-3 rounded-xl bg-stone-950/60 border border-stone-800 flex items-center justify-between gap-3 text-xs"
                  >
                    <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-stone-800">
                      <img
                        src={item.dish.image}
                        alt={item.dish.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="font-serif font-bold text-stone-200 truncate">
                        {item.dish.name}
                      </div>
                      <div className="text-[11px] text-stone-400">
                        ₹{item.dish.price} each · {item.spiceCustom || 'Traditional'}
                      </div>
                    </div>

                    {/* Quantity Stepper */}
                    <div className="flex items-center gap-1.5 border border-stone-800 rounded-lg p-1 bg-stone-900">
                      <button
                        onClick={() => onUpdateQuantity(item.dish.id, item.quantity - 1)}
                        className="w-5 h-5 rounded text-stone-400 hover:text-white flex items-center justify-center cursor-pointer"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-semibold text-amber-200 w-4 text-center tabular-nums">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.dish.id, item.quantity + 1)}
                        className="w-5 h-5 rounded text-stone-400 hover:text-white flex items-center justify-center cursor-pointer"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Total for item */}
                    <div className="font-serif font-bold text-amber-300 tabular-nums w-12 text-right">
                      ₹{item.dish.price * item.quantity}
                    </div>
                  </div>
                ))}
              </div>

              {/* Special Kitchen Note */}
              <div>
                <label className="text-xs text-stone-400 block mb-1 font-medium">
                  Chef Preparation Notes:
                </label>
                <input
                  type="text"
                  placeholder="e.g. Extra spicy mirchi salan, crispy dosa, low chilli for children"
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-800 rounded-lg px-3 py-2 text-xs text-stone-200 focus:outline-amber-400 placeholder-stone-600"
                />
              </div>

              {/* Bill Split Section */}
              <div className="bg-stone-950/80 border border-amber-950/60 rounded-xl p-4 text-xs space-y-3">
                <div className="flex items-center justify-between font-semibold text-stone-200 pb-2 border-b border-stone-800">
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-amber-400" />
                    <span>Split Bill Among Diners</span>
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSplitDiners(Math.max(1, splitDiners - 1))}
                      className="w-5 h-5 rounded bg-stone-900 text-stone-400 hover:text-white flex items-center justify-center cursor-pointer"
                    >
                      -
                    </button>
                    <span className="text-amber-300 font-bold tabular-nums">
                      {splitDiners} {splitDiners === 1 ? 'Guest' : 'Guests'}
                    </span>
                    <button
                      onClick={() => setSplitDiners(splitDiners + 1)}
                      className="w-5 h-5 rounded bg-stone-900 text-stone-400 hover:text-white flex items-center justify-center cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Tip Buttons */}
                <div className="flex items-center justify-between pt-1">
                  <span className="text-stone-400">Hospitality Gratuity:</span>
                  <div className="flex items-center gap-1">
                    {[0, 5, 8, 10].map(pct => (
                      <button
                        key={pct}
                        onClick={() => setTipPercent(pct)}
                        className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors cursor-pointer ${
                          tipPercent === pct
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                            : 'bg-stone-900 text-stone-400'
                        }`}
                      >
                        {pct === 0 ? 'None' : `${pct}%`}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Breakdown */}
                <div className="space-y-1.5 pt-2 border-t border-stone-900 text-[11px] text-stone-400">
                  <div className="flex justify-between">
                    <span>Subtotal ({items.reduce((s, i) => s + i.quantity, 0)} items)</span>
                    <span className="text-stone-200 font-medium tabular-nums">₹{subtotal.toFixed(0)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Restaurant GST (5%)</span>
                    <span className="text-stone-200 font-medium tabular-nums">₹{tax.toFixed(0)}</span>
                  </div>
                  {tip > 0 && (
                    <div className="flex justify-between">
                      <span>Hospitality Gratuity ({tipPercent}%)</span>
                      <span className="text-stone-200 font-medium tabular-nums">₹{tip.toFixed(0)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-xs font-bold text-amber-300 pt-1 border-t border-stone-800">
                    <span>Total Table Bill</span>
                    <span className="tabular-nums">₹{total.toFixed(0)}</span>
                  </div>
                  {splitDiners > 1 && (
                    <div className="flex justify-between text-[11px] text-emerald-400 font-semibold pt-0.5">
                      <span>Per Person ({splitDiners} way split)</span>
                      <span className="tabular-nums">₹{perPerson.toFixed(0)} each</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {!orderDispatched && items.length > 0 && (
          <div className="p-5 border-t border-amber-950/60 bg-[#0d0907] space-y-3">
            <button
              onClick={handleSendToKitchen}
              className="w-full py-3.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-stone-950 font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Send Feast to Kitchen (₹{total.toFixed(0)})</span>
            </button>
            <div className="flex items-center justify-between text-[11px] text-stone-500">
              <button
                onClick={onClearOrder}
                className="hover:text-stone-300 transition-colors cursor-pointer"
              >
                Clear Selection
              </button>
              <button
                onClick={() => {
                  onClose();
                  onReserveTable();
                }}
                className="text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
              >
                Pair with Table Reservation &rarr;
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
