import React from 'react';
import { Flame, Sparkles, Shield, Heart } from 'lucide-react';

export const HeritageCraftSection: React.FC = () => {
  const pillars = [
    {
      number: "01",
      title: "Dum Pukht (Sealed Steam)",
      vessel: "Hand-Carved Brass Degchi Handis",
      description: "Invented during the 1784 famine by Nawab Asaf-ud-Daula to feed both artisans and nobility with maximum nourishment and aroma. Basmati rice and marinated meats are enclosed with a dough seal ('purdah') so captured steam recirculates in its own natural juices for hours without water.",
      spices: "Wild Green Cardamom · Javitri · Kashmiri Saffron"
    },
    {
      number: "02",
      title: "Hammered Copper & Slow Embers",
      vessel: "Hammered Copper Kadais & Handis",
      description: "Pure hammered copper offers exceptional thermal conductivity. Our rich gravies—from Dal Bukhara to Shahi Paneer—simmer gently overnight over charcoal ash, allowing cultured churned butter and sun-dried fenugreek to meld into silk.",
      spices: "Kasuri Methi · Degi Mirch · A2 Cultured Butter"
    },
    {
      number: "03",
      title: "The 900°F Clay Hearth & Plantain Leaf",
      vessel: "Clay Tandoor Pit & Cast Iron Tawa",
      description: "From blistered, pillow-soft garlic naans slapped onto cylindrical clay walls to ultra-crisp red rice fermented dosas resting on fragrant green banana leaves, we bridge North Indian royal tandoor mastery with vibrant South Indian tawa heritage.",
      spices: "Stone-Ground Chutneys · Black Mustard · Byadgi Chilli"
    }
  ];

  return (
    <section id="heritage-section" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-400 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>The Artisanal Philosophy</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-stone-100 tracking-tight mb-4 [text-wrap:balance]">
          The Three Sacred Pillars of Royal Craft
        </h2>
        <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed [text-wrap:balance]">
          Every copper kadai, brass handi, and woven basket on our tables represents centuries of culinary lineage preserved without shortcut.
        </p>
      </div>

      {/* 3 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((pillar) => (
          <div
            key={pillar.number}
            className="bg-[#140e0a]/90 border border-amber-900/30 hover:border-amber-500/40 rounded-2xl p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif text-2xl font-bold text-amber-400">
                  {pillar.number}.
                </span>
                <span className="text-[10px] uppercase tracking-wider text-stone-400 bg-stone-900 px-2.5 py-1 rounded border border-stone-800">
                  {pillar.vessel}
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-100 mb-3 leading-snug">
                {pillar.title}
              </h3>

              <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed mb-6">
                {pillar.description}
              </p>
            </div>

            <div className="pt-4 border-t border-amber-950/60 text-xs text-amber-300/80">
              <span className="text-stone-400 block text-[11px] mb-1">Key Botanical Elements</span>
              <span>{pillar.spices}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Table Atmosphere Quotation Banner */}
      <div className="mt-16 bg-gradient-to-r from-amber-950/60 via-[#140e0a] to-amber-950/60 border border-amber-800/30 rounded-2xl p-8 sm:p-12 text-center max-w-4xl mx-auto backdrop-blur-md">
        <Flame className="w-6 h-6 text-amber-400 mx-auto mb-4 animate-candle-flame" />
        <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl text-stone-200 italic mb-4 max-w-2xl mx-auto leading-relaxed">
          "A meal at Narmadha is a celebration of Bengaluru's hearty appetite—where the aroma of dum basmati, fresh ghee on crispy dosas, and simmering copper gravies unite generations around one table."
        </blockquote>
        <div className="text-xs tracking-widest uppercase text-amber-400 font-semibold">
          — Chef Venkatachalam & Khansama Team, Narmadha BTM Layout
        </div>
      </div>
    </section>
  );
};
