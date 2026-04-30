import { useState } from 'react';
import Header from '@/components/menu/Header';
import CategoryTabs from '@/components/menu/CategoryTabs';
import MenuCard from '@/components/menu/MenuCard';
import CartDrawer from '@/components/menu/CartDrawer';
import { menuItems } from '@/data/menuItems';
import { categories } from '@/data/translations';
import { useLang } from '@/context/LangContext';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('sets');
  const { lang } = useLang();
  const filtered = menuItems.filter(i => i.category === activeCategory);

  return (
    <div className="min-h-screen bg-background max-w-lg mx-auto">
      <Header />
      <CategoryTabs active={activeCategory} onSelect={setActiveCategory} />

      <main className="px-4 py-4 pb-24">
        <h2 className="text-lg font-semibold text-foreground mb-3">
          {categories[activeCategory]?.[lang] || activeCategory}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {filtered.map(item => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </main>

      <CartDrawer />
    </div>
  );
};

export default Index;
