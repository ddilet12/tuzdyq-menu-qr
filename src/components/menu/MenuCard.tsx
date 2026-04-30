import { useLang } from '@/context/LangContext';
import { useCart } from '@/context/CartContext';
import { ui } from '@/data/translations';
import type { MenuItem } from '@/data/menuItems';
import { categoryImages, fallbackImage } from '@/data/categoryImages';
import { dishImages } from '@/data/dishImages';
import { Plus, Minus } from 'lucide-react';

const MenuCard = ({ item }: { item: MenuItem }) => {
  const { lang } = useLang();
  const { items, addItem, updateQuantity } = useCart();
  const cartItem = items.find(ci => ci.item.id === item.id);
  const qty = cartItem?.quantity || 0;

  const formatPrice = (p: number) => p.toLocaleString('ru-RU') + ' ' + ui.currency[lang];
  const img = dishImages[item.id] || categoryImages[item.category] || fallbackImage;

  return (
    <div className="group rounded-2xl overflow-hidden bg-card border border-border/50 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
      <div className="aspect-square overflow-hidden bg-secondary/50">
        <img
          src={img}
          alt={item.name[lang]}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-3.5 flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground leading-tight line-clamp-2 min-h-[2.5rem] group-hover:text-primary transition-colors">
          {item.name[lang]}
        </h3>
        {item.description?.[lang] && (
          <p className="text-[11px] text-muted-foreground/80 line-clamp-2 leading-relaxed">{item.description[lang]}</p>
        )}
        <div className="flex items-center justify-between mt-1">
          <span className="text-primary font-bold text-sm tracking-tight">{formatPrice(item.price)}</span>
          <div className="flex items-center gap-2 shrink-0">
            {qty > 0 ? (
              <>
                <button 
                  onClick={(e) => { e.stopPropagation(); updateQuantity(item.id, qty - 1); }}
                  className="w-8 h-8 rounded-full bg-secondary/80 flex items-center justify-center text-foreground hover:bg-secondary transition-colors border border-border/50"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-4 text-center text-xs font-bold text-foreground">{qty}</span>
                <button 
                  onClick={(e) => { e.stopPropagation(); addItem(item); }}
                  className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow transition-all"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </>
            ) : (
              <button 
                onClick={(e) => { e.stopPropagation(); addItem(item); }}
                className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md transition-all active:scale-95"
              >
                <Plus className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
