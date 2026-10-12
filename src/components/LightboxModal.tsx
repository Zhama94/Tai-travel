import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { GalleryItem } from '../types/tour';
import { GALLERY_ITEMS } from '../data/tourData';
import { useI18n } from '../context/I18nContext';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export default function LightboxModal({ item, onClose, onSelect }: LightboxModalProps) {
  const { t, language } = useI18n();
  if (!item) return null;

  const currentIndex = GALLERY_ITEMS.findIndex((g) => g.id === item.id);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIdx = (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    onSelect(GALLERY_ITEMS[prevIdx]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIdx = (currentIndex + 1) % GALLERY_ITEMS.length;
    onSelect(GALLERY_ITEMS[nextIdx]);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
        aria-label={t.modals.close}
      >
        <X className="w-6 h-6" />
      </button>

      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
        aria-label="Previous photo"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
        aria-label="Next photo"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div
        className="relative max-w-5xl w-full max-h-[88vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black max-h-[75vh]">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-auto h-auto max-h-[75vh] max-w-full object-contain"
          />
        </div>

        <div className="w-full mt-4 text-center text-white">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 uppercase tracking-wider mb-1">
            <MapPin className="w-3.5 h-3.5" />
            <span>{item.location}</span>
          </div>
          <h3 className="text-xl font-bold font-editorial">{item.title}</h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl mx-auto">
            {item.caption}
          </p>
          <div className="text-[11px] text-slate-500 mt-2">
            {t.gallery.photoCounter} {currentIndex + 1} / {GALLERY_ITEMS.length}
          </div>
        </div>
      </div>
    </div>
  );
}
