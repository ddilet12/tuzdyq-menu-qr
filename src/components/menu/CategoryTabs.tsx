import { useLang } from '@/context/LangContext';
import { categories } from '@/data/translations';

interface Props {
  active: string;
  onSelect: (cat: string) => void;
}

const CategoryTabs = ({ active, onSelect }: Props) => {
  const { lang } = useLang();

  // Filter categoryOrder to only include categories that actually exist in the translations
  const availableCategories = ['sets', 'breakfast', 'salads', 'cold_appetizers', 'hot_appetizers', 'soups', 'kazakh', 'veal', 'poultry', 'sausages', 'pasta', 'steaks', 'fish', 'fried_fish', 'fish_sets', 'group', 'pizza', 'rolls', 'bakery', 'bread', 'sides', 'burgers', 'kids_menu', 'sauce'].filter(cat => categories[cat]);

  return (
    <div className="sticky top-0 z-30 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="flex gap-2 px-4 py-3 overflow-x-auto hide-scrollbar">
        {availableCategories.map(cat => (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${
              active === cat
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'bg-secondary text-secondary-foreground hover:bg-primary/20'
            }`}
          >
            {categories[cat]?.[lang] || cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;
