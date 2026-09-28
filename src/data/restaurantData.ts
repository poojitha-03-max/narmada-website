export interface Dish {
  id: string;
  name: string;
  subName?: string;
  scriptName?: string;
  category: 'biryani' | 'curries' | 'tawa-dosa' | 'tandoor' | 'breads-sides' | 'desserts' | 'elixirs';
  price: number; // in INR (₹)
  description: string;
  detailedStory: string;
  origin: string;
  cookingTechnique: string;
  vessel: string;
  spiceLevel: 1 | 2 | 3 | 4; // 1: Mild Royal, 2: Warm Aromatic, 3: Piquant Bangalore, 4: Andhra Fiery
  dietary: ('Vegetarian' | 'Non-Veg' | 'Gluten-Free' | 'Jain-Friendly' | 'Halal' | 'Dairy-Free' | 'Vegan')[];
  pairingRecommendation: {
    drinkName: string;
    note: string;
  };
  keySpices: string[];
  image: string;
  isChefSignature?: boolean;
  serves: string;
}

export interface DiningTable {
  id: string;
  number: number;
  chamber: 'The BTM Amber Grand Hall' | 'Maharaja Family Alcove' | 'Live Tandoor & Dosa Gallery' | '100ft Road Terrace Verandah';
  capacity: number;
  type: 'Chandeliers & Brass' | 'Private Jali Screen' | 'Frontline Culinary View' | 'Outdoor Garden Ambience';
  status: 'available' | 'reserved';
  viewDescription: string;
}

export interface ChainOutlet {
  id: string;
  name: string;
  area: string;
  address: string;
  landmark: string;
  phone: string;
  timing: string;
  valetParking: boolean;
  isFlagship?: boolean;
}

export const CHAIN_OUTLETS: ChainOutlet[] = [
  {
    id: 'btm-flagship',
    name: 'Narmadha BTM Layout (Flagship)',
    area: 'BTM Layout 2nd Stage',
    address: '#42, 100 Feet Ring Road, 2nd Stage, BTM Layout, Bengaluru, Karnataka 560076',
    landmark: 'Opposite Udupi Garden Signal, near Gangothri Circle',
    phone: '+91 80 2668 4920 / +91 98452 11480',
    timing: '11:30 AM – 3:45 PM | 6:30 PM – 11:30 PM',
    valetParking: true,
    isFlagship: true
  },
  {
    id: 'koramangala',
    name: 'Narmadha Koramangala',
    area: 'Koramangala 4th Block',
    address: '#112, 80 Feet Road, 4th Block, Koramangala, Bengaluru, Karnataka 560034',
    landmark: 'Near Maharaja Signal',
    phone: '+91 80 4125 7890',
    timing: '12:00 PM – 3:30 PM | 7:00 PM – 11:30 PM',
    valetParking: true
  },
  {
    id: 'jayanagar',
    name: 'Narmadha Jayanagar',
    area: 'Jayanagar 4th Block',
    address: '#56, 9th Main, 4th Block, Jayanagar, Bengaluru, Karnataka 560011',
    landmark: 'Opposite Jayanagar Complex',
    phone: '+91 80 2244 3311',
    timing: '11:30 AM – 3:30 PM | 6:30 PM – 11:00 PM',
    valetParking: false
  },
  {
    id: 'indiranagar',
    name: 'Narmadha Indiranagar',
    area: 'Indiranagar 100ft Road',
    address: '#884, 100 Feet Road, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560038',
    landmark: 'Near 12th Main Junction',
    phone: '+91 80 4371 9022',
    timing: '12:00 PM – 4:00 PM | 7:00 PM – 11:45 PM',
    valetParking: true
  }
];

export const RESTAURANT_INFO = {
  name: "Narmadha",
  chainTitle: "Narmadha Chain of Restaurants",
  tagline: "The Grand Royal Dining & Andhra Dum Heritage of Bengaluru",
  city: "Bengaluru, Karnataka",
  primaryBranch: "BTM Layout 2nd Stage, Bengaluru",
  hours: "Lunch: 11:30 AM – 3:45 PM | Dinner: 6:30 PM – 11:30 PM",
  location: "#42, 100 Feet Ring Road, BTM Layout 2nd Stage, Bengaluru 560076",
  landmark: "Opp. Udupi Garden Signal, BTM Layout",
  dressCode: "Smart Casual & Family Attire",
  phone: "+91 80 2668 4920 / +91 98452 11480",
  sommelierQuote: "A true Bengaluru feast balances fiery Guntur heat, cooling coconut chutneys, and fragrant dum rice in copper & brassware.",
};

export const MENU_ITEMS: Dish[] = [
  {
    id: "narmadha-dum-biryani",
    name: "Narmadha Special Dum Biryani",
    subName: "Heritage Awadhi & Andhra Dum Brass Handi",
    scriptName: "ನರ್ಮದಾ ಸ್ಪೆಷಲ್ ದಮ್ ಬಿರಿಯಾನಿ",
    category: "biryani",
    price: 390,
    description: "Tender slow-braised mutton or chicken layered with aged long-grain basmati, golden brown onions, fresh mint, and whole spices, steamed in a sealed brass handi. Served with Mirchi Ka Salan and Cucumber Raita.",
    detailedStory: "A Bengaluru legend since our founding. Prepared using the traditional Dum Pukht technique where heavy beaten brass handis are sealed with dough. Slow steam tenderizes the marinade and infuses each grain with saffron, green cardamom, and caramelized shallots. Served table-side steaming hot.",
    origin: "Awadh & Hyderabad Court Lineage, Perfected in BTM Bangalore",
    cookingTechnique: "Dum Pukht (Slow Sealed Brass Handi on Charcoal Ash)",
    vessel: "Hand-Carved Brass Degchi Handi with Lid",
    spiceLevel: 3,
    dietary: ["Non-Veg", "Halal"],
    pairingRecommendation: {
      drinkName: "Narmadha Masala Majjiga (Spiced Buttermilk)",
      note: "Chilled cultured buttermilk with ginger, crushed curry leaves, and green chillies to balance the biryani spices."
    },
    keySpices: ["Kashmiri Saffron", "Shahi Jeera", "Dagad Phool (Stone Flower)", "Green Cardamom", "Ghee Fried Onions"],
    image: "/src/assets/images/dish_nawabi_biryani_1790582813764.jpg",
    isChefSignature: true,
    serves: "2 Guests"
  },
  {
    id: "shahi-paneer-butter-kadai",
    name: "Narmadha Royal Copper Kadai Paneer",
    subName: "Simmered in Hammered Copper with Fresh Cream",
    scriptName: "ಕಡಾಯಿ ಪನೀರ್ ರಾಯಲ್",
    category: "curries",
    price: 320,
    description: "Fresh artisanal malai paneer cubes simmered in a velvety San Marzano tomato-cashew reduction, farm butter, and sun-dried Kasuri methi in an authentic hammered copper kadai.",
    detailedStory: "Served bubbling hot in a traditional heavy-gauge copper kadai with solid brass handles. The copper allows gentle, uniform heat that thickens the cream and lets the smoked fenugreek leaves permeate the tender paneer.",
    origin: "North Indian Royal Kitchens, BTM Layout Specialty",
    cookingTechnique: "Gentle Charcoal Simmer in Heavy Hammered Copper",
    vessel: "Traditional Hammered Copper Kadai with Brass Handles",
    spiceLevel: 2,
    dietary: ["Vegetarian", "Gluten-Free", "Jain-Friendly"],
    pairingRecommendation: {
      drinkName: "Fresh Sweet Lime & Mint Cooler",
      note: "Crisp Bengaluru citrus cleanses the rich buttery tomato and cashew emulsion."
    },
    keySpices: ["Kasuri Methi", "Degi Mirch", "Cardamom", "Fresh Malai Butter", "Cashew Silk"],
    image: "/src/assets/images/dish_copper_curry_1790582827256.jpg",
    isChefSignature: true,
    serves: "2 Guests"
  },
  {
    id: "dakshin-masala-dosa",
    name: "Narmadha Special Benne Masala Dosa",
    subName: "Crispy Golden Red Rice Crepe on Banana Leaf",
    scriptName: "ಬೆಂಗಳೂರು ಬೆಣ್ಣೆ ಮಸಾಲೆ ದೋಸೆ",
    category: "tawa-dosa",
    price: 160,
    description: "Crispy, golden butter-roasted fermented lentil and red rice crepe brushed with fiery red garlic-shallot chutney, stuffed with turmeric mustard potato palya. Served on a copper platter with banana leaf liner and trio of fresh chutneys.",
    detailedStory: "The pride of Bengaluru! Cooked on a thick century-old cast iron tawa using pure desi butter (benne). Plated on a grand copper tray lined with fresh South Indian plantain leaf, accompanied by stone-ground coconut chutney, spicy roasted tomato-shallot chutney, and piping-hot vegetable sambar.",
    origin: "Bengaluru & Mysore Tawa Heritage",
    cookingTechnique: "Cast Iron Slow Crisping with Pure Desi Butter",
    vessel: "Hammered Copper Platter with Fresh Plantain Leaf",
    spiceLevel: 2,
    dietary: ["Vegetarian", "Gluten-Free"],
    pairingRecommendation: {
      drinkName: "Authentic Degree Filter Kaapi",
      note: "Freshly brewed chicory-coffee decoction with frothy frothed buffalo milk."
    },
    keySpices: ["Black Mustard Seeds", "Curry Leaves", "Byadgi Red Chilli", "Hing (Asafoetida)", "Desi Benne (Butter)"],
    image: "/src/assets/images/dish_crispy_dosa_1790582838511.jpg",
    isChefSignature: true,
    serves: "1-2 Guests"
  },
  {
    id: "guntur-kodi-vepudu",
    name: "Andhra Guntur Kodi Vepudu",
    subName: "Fiery Pan-Roasted Chicken with Curry Leaves",
    scriptName: "గుంటూరు కోడి వేపుడు / ಆಂಧ್ರ ಚಿಕನ್",
    category: "tandoor",
    price: 360,
    description: "Country chicken morsels tossed in a smoking cast-iron wok with crushed Guntur sun-dried chillies, toasted coriander, garlic cloves, and mountain curry leaves.",
    detailedStory: "A cornerstone of Narmadha's Andhra heritage. The fiery heat of Guntur chillies is tempered by roasted coriander seeds and caramelized shallots, producing a dry, aromatic roast that awakens the palate.",
    origin: "Guntur & Rayalaseema, Andhra Pradesh",
    cookingTechnique: "High Heat Iron Wok Toss with Aromatic Curry Oil",
    vessel: "Polished Brass Katori Tray",
    spiceLevel: 4,
    dietary: ["Non-Veg", "Halal"],
    pairingRecommendation: {
      drinkName: "Chilled Coconut Water & Basil Sparkler",
      note: "Natural electrolytes and tender coconut soothe the fiery Guntur chilli warmth."
    },
    keySpices: ["Guntur Sannam Chillies", "Curry Leaves", "Black Peppercorns", "Fennel Seeds", "Ginger-Garlic Paste"],
    image: "/src/assets/images/dish_nawabi_biryani_1790582813764.jpg",
    isChefSignature: true,
    serves: "2 Guests"
  },
  {
    id: "royal-shahi-dessert-platter",
    name: "Kesar Badam Kulfi & Warm Shahi Tukda",
    subName: "Heritage Royal Confection with Edible Silver Vark",
    scriptName: "ಕೇಸರಿ ಬಾದಾಮಿ ಕುಲ್ಫಿ",
    category: "desserts",
    price: 190,
    description: "Dense 12-hour condensed milk kulfi infused with Kashmiri saffron, slivered Mamra almonds, and pistachios, served alongside ghee-crisped brioche soaked in rabri and 24K silver leaf.",
    detailedStory: "The quintessential celebratory finish at Narmadha. Handcrafted in heavy brass kadhais and frozen in traditional clay moulds to achieve an unctuous, velvety texture perfumed with wild cardamom and rosewater.",
    origin: "Hyderabadi & Awadhi Royal Courts",
    cookingTechnique: "Slow Reduction in Heavy Brass Kadhai",
    vessel: "Antique Footed Brass Dessert Goblet",
    spiceLevel: 1,
    dietary: ["Vegetarian"],
    pairingRecommendation: {
      drinkName: "Cardamom & Saffron Warm Milk Elixir",
      note: "Steeped with whole almonds and saffron threads to conclude the feast in royal style."
    },
    keySpices: ["Kashmiri Saffron", "Mamra Almonds", "Green Cardamom", "Edible Silver Vark"],
    image: "/src/assets/images/dish_royal_dessert_1790582857130.jpg",
    isChefSignature: true,
    serves: "2 Guests"
  },
  {
    id: "dal-dastaan-bukhara",
    name: "Narmadha Dal Makhani (Charcoal Simmered)",
    subName: "24-Hour Simmered Black Lentils in Copper Handi",
    scriptName: "ದಾಲ್ ಮಖನಿ ರಾಯಲ್",
    category: "curries",
    price: 280,
    description: "Whole black urad lentils and kidney beans slow-cooked for 24 continuous hours on dying wood charcoal embers with vine tomatoes, garlic, and rich butter.",
    detailedStory: "Simmered continuously in our BTM Layout kitchens from early morning. The slow heat dissolves the lentils into a rich, smoky creaminess without any artificial starch.",
    origin: "Grand Trunk Road, Perfected at Narmadha BTM",
    cookingTechnique: "24-Hour Wood Charcoal Embers",
    vessel: "Hammered Copper Handi with Brass Collar",
    spiceLevel: 1,
    dietary: ["Vegetarian", "Gluten-Free", "Jain-Friendly"],
    pairingRecommendation: {
      drinkName: "Garlic Butter Naan Basket",
      note: "Puffed hot from the tandoor to scoop up the velvety black dal."
    },
    keySpices: ["Kashmiri Degi Mirch", "Kasuri Methi", "Churned Desi Makhan", "Sun-Dried Ginger"],
    image: "/src/assets/images/dish_copper_curry_1790582827256.jpg",
    serves: "2-3 Guests"
  },
  {
    id: "tandoor-artisanal-bread-basket",
    name: "Tandoori Garlic Naan & Butter Roti Basket",
    subName: "Live 900°F Clay Tandoor Pit Breads",
    scriptName: "ತಂದೂರಿ ನಾನ್ ಬುಟ್ಟಿ",
    category: "breads-sides",
    price: 140,
    description: "Basket of Truffle Butter Garlic Naan, Whole Wheat Laccha Paratha, and Tandoori Roti with fresh coriander, nigella seeds, and melted butter.",
    detailedStory: "Slapped by hand against the intense clay walls of our BTM Layout tandoor ovens. Blistered golden in seconds with soft, airy centers.",
    origin: "North Indian Tandoor Tradition",
    cookingTechnique: "Live 900°F Clay Tandoor Pit",
    vessel: "Handwoven Cane Basket with Linen Napkin",
    spiceLevel: 1,
    dietary: ["Vegetarian", "Halal"],
    pairingRecommendation: {
      drinkName: "House Cultured Mint Raita & Chutneys",
      note: "Cooling spiced yogurt with toasted cumin and fresh garden spearmint."
    },
    keySpices: ["Kalonji Seeds", "Garlic Confit", "Toasted Cumin", "Desi Ghee"],
    image: "/src/assets/images/dish_copper_curry_1790582827256.jpg",
    serves: "2-3 Guests"
  },
  {
    id: "bengaluru-degree-kaapi",
    name: "Narmadha Degree Filter Kaapi",
    subName: "Traditional Brass Davarah & Tumbler Service",
    scriptName: "ಫಿಲ್ಟರ್ ಕಾಫಿ / డిగ్రీ కాఫీ",
    category: "elixirs",
    price: 60,
    description: "Slow-dripped Chikmagalur and Coorg peaberry coffee decoction frothed with high-fat fresh milk, poured high into traditional brass davarah-tumbler.",
    detailedStory: "Served steaming hot in gleaming brassware with thick velvety crema. The aromatic ritual of pouring back and forth cools the kaapi and aerates the decoction.",
    origin: "Chikmagalur & Bengaluru Coffee Culture",
    cookingTechnique: "Slow Drip Brass Filter Decoction",
    vessel: "Traditional Hand-Polished Brass Davarah & Tumbler",
    spiceLevel: 1,
    dietary: ["Vegetarian", "Gluten-Free"],
    pairingRecommendation: {
      drinkName: "Benne Masala Dosa",
      note: "The quintessential Bengaluru morning and evening breakfast pairing."
    },
    keySpices: ["Chikmagalur Peaberry", "French Chicory 15%", "Whole Buffalo Milk"],
    image: "/src/assets/images/dish_royal_dessert_1790582857130.jpg",
    serves: "1 Guest"
  }
];

export const DINING_TABLES: DiningTable[] = [
  {
    id: "btm-01",
    number: 1,
    chamber: "The BTM Amber Grand Hall",
    capacity: 2,
    type: "Chandeliers & Brass",
    status: "available",
    viewDescription: "Facing the main brass chandelier with direct view of the restaurant dining floor."
  },
  {
    id: "btm-02",
    number: 2,
    chamber: "The BTM Amber Grand Hall",
    capacity: 4,
    type: "Chandeliers & Brass",
    status: "reserved",
    viewDescription: "Center mahogany dining table with warm ambient candlelight and brass diya fixtures."
  },
  {
    id: "btm-03",
    number: 3,
    chamber: "The BTM Amber Grand Hall",
    capacity: 4,
    type: "Chandeliers & Brass",
    status: "available",
    viewDescription: "Spacious dark wood table beside antique brass carved wall panels."
  },
  {
    id: "btm-04",
    number: 4,
    chamber: "The BTM Amber Grand Hall",
    capacity: 6,
    type: "Chandeliers & Brass",
    status: "available",
    viewDescription: "Large family banquet dining table surrounded by dark wood craftsmanship."
  },
  {
    id: "btm-05",
    number: 5,
    chamber: "Maharaja Family Alcove",
    capacity: 4,
    type: "Private Jali Screen",
    status: "available",
    viewDescription: "Intimate private booth partitioned by teakwood jali screens with silk cushions."
  },
  {
    id: "btm-06",
    number: 6,
    chamber: "Maharaja Family Alcove",
    capacity: 6,
    type: "Private Jali Screen",
    status: "available",
    viewDescription: "Royal AC family suite with dedicated brass handi table service."
  },
  {
    id: "btm-07",
    number: 7,
    chamber: "Live Tandoor & Dosa Gallery",
    capacity: 2,
    type: "Frontline Culinary View",
    status: "available",
    viewDescription: "Front-row seats facing the live tandoor and sizzling cast-iron dosa tawas."
  },
  {
    id: "btm-08",
    number: 8,
    chamber: "Live Tandoor & Dosa Gallery",
    capacity: 4,
    type: "Frontline Culinary View",
    status: "available",
    viewDescription: "Aroma of roasting garlic naans and golden butter dosas sizzling on iron."
  },
  {
    id: "btm-09",
    number: 9,
    chamber: "100ft Road Terrace Verandah",
    capacity: 4,
    type: "Outdoor Garden Ambience",
    status: "available",
    viewDescription: "Open-air rooftop seating catching Bengaluru's pleasant evening breeze over BTM Ring Road."
  },
  {
    id: "btm-10",
    number: 10,
    chamber: "100ft Road Terrace Verandah",
    capacity: 6,
    type: "Outdoor Garden Ambience",
    status: "reserved",
    viewDescription: "Corner terrace table with fairy lights and views of the BTM Layout skyline."
  }
];

export const DEGUSTATION_MENUS = [
  {
    id: "narmadha-royal-bhojanam",
    title: "Narmadha Royal Bhojanam (Grand Andhra Feast)",
    price: 650,
    duration: "2 hours",
    description: "An authentic multi-course royal thali served on fresh banana leaves with unlimited ghee, gongura, and steaming sambar.",
    courses: [
      { name: "Welcome Drink: Spiced Neer Majjiga & Rasam Shot", note: "Tempered with mustard, curry leaves, and ginger" },
      { name: "Guntur Kodi Vepudu / Paneer Pepper Fry", note: "Crisp shallot and black pepper pan toss" },
      { name: "Crispy Mini Benne Dosa Royale", note: "Served with stone-ground coconut and tomato chutneys" },
      { name: "Narmadha Special Dum Biryani Degh", note: "Steaming hot in brass handi with mirchi ka salan" },
      { name: "Dal Makhani & Truffle Garlic Naan", note: "Simmered in copper with cultured white butter" },
      { name: "Saffron Kulfi & Degree Filter Kaapi", note: "Served in hand-polished brass tumbler" }
    ]
  },
  {
    id: "btm-maharaja-banquet",
    title: "The BTM Layout Maharaja Tasting Banquet",
    price: 950,
    duration: "2.5 hours",
    description: "Our flagship dining experience combining Andhra spice masterwork, royal Awadhi dum cooking, and clay tandoor specialties.",
    courses: [
      { name: "Amuse: Smoked Tamarind & Pepper Broth", note: "Clarifying spicy rasam with coriander dust" },
      { name: "Melt-in-Mouth Galouti on Sheermal & Guntur Tikka", note: "Smoked over live clove embers" },
      { name: "Mysore Ghee Masala Dosa Platter", note: "Served on banana leaf copper tray" },
      { name: "Royal Copper Kadai Murgh / Shahi Paneer", note: "Simmered 18 hours in copper with fresh cream" },
      { name: "Grand Narmadha Dum Gosht Biryani", note: "Table-side seal opening of the brass degchi" },
      { name: "Shahi Tukda with Gold Vark & Rabri", note: "Accompanied by Chikmagalur Filter Kaapi" }
    ]
  }
];
