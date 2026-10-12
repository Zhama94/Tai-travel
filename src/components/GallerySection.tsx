import { useState } from 'react';
import { Camera, Eye, MapPin } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/tourData';
import { GalleryItem } from '../types/tour';
import { useI18n } from '../context/I18nContext';

interface GallerySectionProps {
  onOpenLightbox: (item: GalleryItem) => void;
}

export default function GallerySection({ onOpenLightbox }: GallerySectionProps) {
  const { t, language } = useI18n();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: t.gallery.catAll },
    { id: 'horses', label: t.gallery.catHorses },
    { id: 'lake', label: t.gallery.catLake },
    { id: 'yurts', label: t.gallery.catYurts },
    { id: 'mountains', label: t.gallery.catMountains },
    { id: 'culture', label: t.gallery.catCulture },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#0E627C] uppercase mb-3">
            <Camera className="w-4 h-4" />
            <span>{t.gallery.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 font-editorial tracking-tight mb-4">
            {t.gallery.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#0E627C] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className="group relative rounded-2xl overflow-hidden bg-stone-200 shadow-sm border border-stone-200/80 cursor-pointer h-72 sm:h-80"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-4 h-4" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-[11px] font-semibold text-amber-300 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {item.location}
                </div>
                <h3 className="text-base font-bold font-editorial leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
