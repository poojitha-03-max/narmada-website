import React, { useState } from 'react';
import { Wine, Sparkles, Flame, GlassWater, Award } from 'lucide-react';
import { MENU_ITEMS, Dish } from '../data/restaurantData';

export const SommelierSection: React.FC = () => {
  const pairingDishes = MENU_ITEMS.filter(d => ['narmadha-dum-biryani', 'shahi-paneer-butter-kadai', 'dakshin-masala-dosa', 'guntur-kodi-vepudu', 'royal-shahi-dessert-platter'].includes(d.id));
  const [selectedDishId, setSelectedDishId] = useState<string>(pairingDishes[0]?.id || 'narmadha-dum-biryani');

  const currentDish = pairingDishes.find(d => d.id === selectedDishId) || pairingDishes[0];

  const sommelierData: Record<string, {
    cocktail: { name: string; ingredients: string; profile: string };
    wine: { name: string; vintage: string; profile: string };
    elixir: { name: string; ingredients: string; profile: string };
    harmonyRationale: string;
  }> = {
    'narmadha-dum-biryani': {
      cocktail: {
        name: "Old Monk & Spiced Jaggery Old Fashioned",
        ingredients: "Aged 7yr Dark Rum, torched cinnamon quill, sugarcane jaggery, bitter orange",
        profile: "Warm, caramelized, peppery finish"
      },
      wine: {
        name: "Sula Dindori Reserve Shiraz",
        vintage: "Nashik Valley 2021",
        profile: "Ripe blackberry, cracked black pepper, velvety oak tannins"
      },
      elixir: {
        name: "Narmadha Masala Majjiga (Spiced Buttermilk)",
        ingredients: "Cultured clay pot curd, ginger, green chillies, tempered curry leaves & mustard",
        profile: "Probiotic digestive that cuts through the rich mutton & biryani spices"
      },
      harmonyRationale: "The high aromatic spice and caramelized shallots of our slow-braised dum biryani demand either the oak-tannin structure of a reserve Shiraz or a chilled spicy majjiga to refresh the palate."
    },
    'shahi-paneer-butter-kadai': {
      cocktail: {
        name: "Cardamom Bloom Gin & Tonic",
        ingredients: "Hapusa Himalayan Juniper Gin, clarified lime, green cardamom cordial, Indian tonic",
        profile: "Crisp botanical citrus with warm spice aromatic lift"
      },
      wine: {
        name: "Domaine Zind-Humbrecht Gewürztraminer",
        vintage: "Alsace 2020",
        profile: "Lychee, exotic ginger, white blossoms, gentle off-dry richness"
      },
      elixir: {
        name: "Cultured Mint & Roasted Cumin Chhaas",
        ingredients: "Clay-pot churned buttermilk, toasted black cumin, Himalayan pink salt, fresh spearmint",
        profile: "Probiotic, velvety and instant digestive freshness"
      },
      harmonyRationale: "The lush tomato-butter-cashew silk in our copper kadai requires aromatic white wine with natural floral sweetness or bright gin botanicals to illuminate the fragrant sun-dried fenugreek leaves."
    },
    'dakshin-masala-dosa': {
      cocktail: {
        name: "Malabar Coconut & Curry Leaf Sour",
        ingredients: "Single Malt Amrut Whisky, toasted coconut water reduction, curry leaf oil float",
        profile: "Nutty, tropical, savory-sour precision"
      },
      wine: {
        name: "KRSMA Sauvignon Blanc",
        vintage: "Hampi Hills 2022",
        profile: "Zesty gooseberry, lemongrass, crisp mineral flint"
      },
      elixir: {
        name: "Smoked Nimbu Shikanji",
        ingredients: "Charred key lime, hand-crushed cumin, mint sprig, black sea salt, club soda",
        profile: "Effervescent, tangy and electric"
      },
      harmonyRationale: "Fermentation in the crispy lentil crepe produces gentle lactic tartness. The bright acidity of Sauvignon Blanc mirrors the spicy tomato chutney while crisp citrus cuts through the rich A2 ghee."
    },
    'royal-shahi-dessert-platter': {
      cocktail: {
        name: "Saffron Gold Royal Flip",
        ingredients: "Cognac VSOP, condensed saffron cream, grated nutmeg, edible gold flake",
        profile: "Decadent, velvety royal nightcap"
      },
      wine: {
        name: "Château d'Yquem Sauternes",
        vintage: "Bordeaux 2017",
        profile: "Candied apricot, honeysuckle, dried saffron threads, marmalade"
      },
      elixir: {
        name: "Imperial Kashmiri Saffron Kahwa",
        ingredients: "Kangra green tea leaves, slivered Mamra almonds, saffron strands, green cardamom pods",
        profile: "Aromatic warmth that settles the feast with regal dignity"
      },
      harmonyRationale: "The high butterfat of 12-hour reduced milk rabri and pistachio kulfi is balanced by the honeyed acidity of aged Sauternes or the digestive warmth of steeped saffron green tea."
    },
    'galouti-kebab-sheermal': {
      cocktail: {
        name: "Peshawari Clove Smoked Negroni",
        ingredients: "Botanical Gin, Campari, Sweet Vermouth, smoked clove ice sphere",
        profile: "Bittersweet, smoky and intensely aromatic"
      },
      wine: {
        name: "Barolo DOCG (Nebbiolo)",
        vintage: "Piedmont 2018",
        profile: "Dried roses, tar, leather, high structured acidity"
      },
      elixir: {
        name: "Paan Leaf & Fennel Clarified Nectar",
        ingredients: "Fresh Betel leaf infusion, roasted Lucknow fennel seeds, gulkand essence",
        profile: "Royal court palate freshener"
      },
      harmonyRationale: "With 32 secret court spices including kabab chini and vetiver, the melt-in-mouth texture requires structured tannins and gentle smoke to elevate the clove charcoal infusion."
    }
  };

  const pairing = sommelierData[currentDish.id] || sommelierData['narmadha-dum-biryani'];

  return (
    <section id="sommelier-section" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-400 mb-3">
          <Wine className="w-3.5 h-3.5 text-amber-500" />
          <span>The Cellar & Spice Laboratory</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-stone-100 tracking-tight mb-4 [text-wrap:balance]">
          Narmadha's Spice & Beverage Harmony
        </h2>
        <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed [text-wrap:balance]">
          Fine dining in Bengaluru reaches its peak when fiery Guntur and Awadhi masalas are matched with Karnataka single malts, Hampi valley reserve wines, and cooling probiotic majjiga elixirs.
        </p>
      </div>

      {/* Dish Selector Tabs */}
      <div className="flex items-center justify-center overflow-x-auto gap-3 pb-4 mb-10 no-scrollbar">
        {pairingDishes.map(dish => {
          const isSelected = selectedDishId === dish.id;
          return (
            <button
              key={dish.id}
              onClick={() => setSelectedDishId(dish.id)}
              className={`px-4 py-2.5 rounded-xl border text-xs font-semibold flex items-center gap-2.5 transition-all whitespace-nowrap cursor-pointer ${
                isSelected
                  ? 'bg-amber-950/80 border-amber-400 text-amber-200 shadow-[0_0_20px_rgba(245,158,11,0.2)]'
                  : 'bg-stone-900/60 border-stone-800 text-stone-400 hover:text-stone-200 hover:bg-stone-900'
              }`}
            >
              <div className="w-6 h-6 rounded-full overflow-hidden shrink-0 border border-amber-500/40">
                <img src={dish.image} alt={dish.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <span>{dish.name}</span>
            </button>
          );
        })}
      </div>

      {/* Sommelier Display Showcase */}
      <div className="bg-[#140e0a] border border-amber-900/40 rounded-2xl p-6 sm:p-10 backdrop-blur-md shadow-2xl">
        <div className="flex items-center justify-between border-b border-amber-950/60 pb-6 mb-8 flex-wrap gap-4">
          <div>
            <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold block mb-1">
              Curated Pairing For
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-100">
              {currentDish.name}
            </h3>
            <p className="text-xs text-stone-400 mt-1">
              Service Vessel: {currentDish.vessel} · Heat Intensity {currentDish.spiceLevel}/4
            </p>
          </div>

          <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-500/20 text-xs text-amber-300 max-w-sm">
            <span className="font-semibold block mb-0.5">Head Sommelier Note</span>
            <p className="text-stone-400 text-[11px] leading-relaxed">
              "{pairing.harmonyRationale}"
            </p>
          </div>
        </div>

        {/* 3 Pairing Zones: Cocktail, Wine, Elixir */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* 1. Handcrafted Signature Cocktail */}
          <div className="bg-stone-950/70 border border-stone-800 hover:border-amber-500/40 rounded-xl p-6 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <Flame className="w-3 h-3 text-amber-500 animate-candle-flame" />
                  <span>Artisanal Cocktail</span>
                </span>
                <span className="text-stone-400 text-xs font-serif tabular-nums">₹450</span>
              </div>

              <h4 className="font-serif text-lg font-bold text-stone-100 mb-2">
                {pairing.cocktail.name}
              </h4>
              <p className="text-xs text-stone-400 leading-relaxed mb-4">
                {pairing.cocktail.ingredients}
              </p>
            </div>

            <div className="pt-3 border-t border-stone-900 text-[11px] text-amber-300/80 font-medium">
              Profile: {pairing.cocktail.profile}
            </div>
          </div>

          {/* 2. Reserve Estate Wine */}
          <div className="bg-stone-950/70 border border-stone-800 hover:border-amber-500/40 rounded-xl p-6 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <Wine className="w-3 h-3 text-amber-500" />
                  <span>Cellar Wine Selection</span>
                </span>
                <span className="text-stone-400 text-xs font-serif tabular-nums">₹650 / gls</span>
              </div>

              <h4 className="font-serif text-lg font-bold text-stone-100 mb-1">
                {pairing.wine.name}
              </h4>
              <p className="text-xs text-amber-400/90 mb-2">
                {pairing.wine.vintage}
              </p>
              <p className="text-xs text-stone-400 leading-relaxed mb-4">
                {pairing.wine.profile}
              </p>
            </div>

            <div className="pt-3 border-t border-stone-900 text-[11px] text-amber-300/80 font-medium">
              Structure: Cellar temperature 16°C
            </div>
          </div>

          {/* 3. Non-Alcoholic Royal Elixir */}
          <div className="bg-stone-950/70 border border-stone-800 hover:border-amber-500/40 rounded-xl p-6 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <GlassWater className="w-3 h-3 text-amber-500" />
                  <span>Zero-Proof Royal Elixir</span>
                </span>
                <span className="text-stone-400 text-xs font-serif tabular-nums">₹120</span>
              </div>

              <h4 className="font-serif text-lg font-bold text-stone-100 mb-2">
                {pairing.elixir.name}
              </h4>
              <p className="text-xs text-stone-400 leading-relaxed mb-4">
                {pairing.elixir.ingredients}
              </p>
            </div>

            <div className="pt-3 border-t border-stone-900 text-[11px] text-amber-300/80 font-medium">
              Profile: {pairing.elixir.profile}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
