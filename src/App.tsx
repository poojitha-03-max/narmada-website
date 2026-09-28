/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MenuSection } from './components/MenuSection';
import { ReservationSection } from './components/ReservationSection';
import { SommelierSection } from './components/SommelierSection';
import { DegustationSection } from './components/DegustationSection';
import { HeritageCraftSection } from './components/HeritageCraftSection';
import { DishDetailModal } from './components/DishDetailModal';
import { OrderDrawer, CartItem } from './components/OrderDrawer';
import { Footer } from './components/Footer';
import { MENU_ITEMS, Dish, DEGUSTATION_MENUS } from './data/restaurantData';
import { Sparkles, Check, Flame } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('experience');
  const [candlelightMode, setCandlelightMode] = useState<boolean>(true);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    // Pre-populate with iconic table feast from the photograph as a preview!
    { dish: MENU_ITEMS[0], quantity: 1, spiceCustom: 'Traditional Royal' }, // Awadhi Dum Biryani
    { dish: MENU_ITEMS[1], quantity: 1, spiceCustom: 'Traditional Royal' }, // Copper Kadai Paneer
    { dish: MENU_ITEMS[2], quantity: 1, spiceCustom: 'Traditional Royal' }, // Crispy Masala Dosa
    { dish: MENU_ITEMS[5], quantity: 1, spiceCustom: 'Traditional Royal' }, // Tandoori Naan Basket
  ]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [selectedDishForModal, setSelectedDishForModal] = useState<Dish | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleAddToCart = (dish: Dish, quantity = 1, spiceCustom = 'Traditional Royal') => {
    setCartItems(prev => {
      const existing = prev.find(item => item.dish.id === dish.id);
      if (existing) {
        return prev.map(item =>
          item.dish.id === dish.id
            ? { ...item, quantity: item.quantity + quantity, spiceCustom: spiceCustom || item.spiceCustom }
            : item
        );
      }
      return [...prev, { dish, quantity, spiceCustom }];
    });
    showToast(`Added ${dish.name} to Table Feast`);
  };

  const handleUpdateQuantity = (dishId: string, quantity: number) => {
    if (quantity <= 0) {
      setCartItems(prev => prev.filter(item => item.dish.id !== dishId));
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item.dish.id === dishId ? { ...item, quantity } : item
        )
      );
    }
  };

  const handleClearOrder = () => {
    setCartItems([]);
    showToast("Table feast order cleared");
  };

  const handleSelectDegustation = (menu: typeof DEGUSTATION_MENUS[0]) => {
    // Add representative tasting menu items
    const biryani = MENU_ITEMS.find(d => d.id === 'narmadha-dum-biryani') || MENU_ITEMS[0];
    const curry = MENU_ITEMS.find(d => d.id === 'shahi-paneer-butter-kadai');
    const dessert = MENU_ITEMS.find(d => d.id === 'royal-shahi-dessert-platter');

    if (biryani && curry && dessert) {
      handleAddToCart(biryani, 1, 'Tasting Progression');
      handleAddToCart(curry, 1, 'Tasting Progression');
      handleAddToCart(dessert, 1, 'Tasting Progression');
    }
    setIsCartOpen(true);
    showToast(`Added ${menu.title} courses to your table feast!`);
  };

  const cartItemIds = cartItems.reduce<Record<string, number>>((acc, item) => {
    acc[item.dish.id] = item.quantity;
    return acc;
  }, {});

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className={`min-h-screen bg-[#0c0806] text-[#fbf7f0] transition-colors duration-700 ${
      candlelightMode ? 'candlelight-active' : ''
    }`}>
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        candlelightMode={candlelightMode}
        setCandlelightMode={setCandlelightMode}
        cartCount={totalCartCount}
        openCart={() => setIsCartOpen(true)}
        openReservation={() => setActiveTab('reserve')}
      />

      {/* Main View Router */}
      <main>
        {activeTab === 'experience' && (
          <>
            <HeroSection
              onReserveClick={() => setActiveTab('reserve')}
              onExploreMenu={() => setActiveTab('menu')}
              onSelectDish={(dish) => setSelectedDishForModal(dish)}
              candlelightMode={candlelightMode}
            />
            <MenuSection
              onSelectDish={(dish) => setSelectedDishForModal(dish)}
              onAddToCart={(dish) => handleAddToCart(dish)}
              cartItemIds={cartItemIds}
            />
            <SommelierSection />
            <DegustationSection
              onSelectDegustation={handleSelectDegustation}
              onBookTable={() => setActiveTab('reserve')}
            />
            <HeritageCraftSection />
            <ReservationSection onSuccessToast={showToast} />
          </>
        )}

        {activeTab === 'menu' && (
          <div className="pt-6">
            <MenuSection
              onSelectDish={(dish) => setSelectedDishForModal(dish)}
              onAddToCart={(dish) => handleAddToCart(dish)}
              cartItemIds={cartItemIds}
            />
            <SommelierSection />
          </div>
        )}

        {activeTab === 'reserve' && (
          <div className="pt-6">
            <ReservationSection onSuccessToast={showToast} />
          </div>
        )}

        {activeTab === 'sommelier' && (
          <div className="pt-6">
            <SommelierSection />
            <DegustationSection
              onSelectDegustation={handleSelectDegustation}
              onBookTable={() => setActiveTab('reserve')}
            />
          </div>
        )}

        {activeTab === 'degustation' && (
          <div className="pt-6">
            <DegustationSection
              onSelectDegustation={handleSelectDegustation}
              onBookTable={() => setActiveTab('reserve')}
            />
            <ReservationSection onSuccessToast={showToast} />
          </div>
        )}

        {activeTab === 'heritage' && (
          <div className="pt-6">
            <HeritageCraftSection />
            <SommelierSection />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer onNavClick={(tab) => {
        setActiveTab(tab);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }} />

      {/* Dish Lore & Customization Modal */}
      <DishDetailModal
        dish={selectedDishForModal}
        onClose={() => setSelectedDishForModal(null)}
        onAddToCart={(dish, qty, spice) => handleAddToCart(dish, qty, spice)}
      />

      {/* Dine-In / Banquet Feast Order Drawer */}
      <OrderDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onClearOrder={handleClearOrder}
        onReserveTable={() => {
          setIsCartOpen(false);
          setActiveTab('reserve');
        }}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#140e0a] border border-amber-500/50 text-amber-200 text-xs px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2.5 backdrop-blur-md animate-bounce">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
