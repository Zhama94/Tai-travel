import { useState } from 'react';
import { X, Play, Volume2, VolumeX, Compass } from 'lucide-react';
import { useI18n } from '../context/I18nContext';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  const { t } = useI18n();
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/20 aspect-video flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
          aria-label={t.modals.close}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=85"
            alt="Song-Kul video preview"
            className={`w-full h-full object-cover transition-transform duration-10000 ${
              isPlaying ? 'scale-110' : 'scale-100'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
        </div>

        <div className="relative z-10 p-6 flex items-center gap-3 text-white">
          <div className="w-8 h-8 rounded-lg bg-[#0E627C] flex items-center justify-center text-amber-200">
            <Compass className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-bold text-sm sm:text-base">
              {t.modals.videoTitle}
            </h4>
            <p className="text-xs text-slate-300">{t.modals.videoSubtitle}</p>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-center my-auto">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-amber-400/90 hover:bg-amber-400 text-slate-950 flex items-center justify-center shadow-2xl transition-transform hover:scale-105 cursor-pointer"
          >
            {isPlaying ? (
              <div className="flex gap-1.5 items-center justify-center">
                <span className="w-1.5 h-6 bg-slate-950 rounded-full" />
                <span className="w-1.5 h-6 bg-slate-950 rounded-full" />
              </div>
            ) : (
              <Play className="w-8 h-8 fill-current ml-1" />
            )}
          </button>
        </div>

        <div className="relative z-10 p-6 flex items-center justify-between text-white text-xs bg-gradient-to-t from-black/90 to-transparent">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="hover:text-amber-300 transition-colors cursor-pointer"
            >
              {isPlaying ? t.modals.pause : t.modals.play}
            </button>
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="flex items-center gap-1 hover:text-amber-300 transition-colors cursor-pointer"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              <span>{isMuted ? t.modals.soundOff : t.modals.soundOn}</span>
            </button>
          </div>

          <div className="text-slate-300 text-[11px] hidden sm:block">
            Tuz-Ashuu & Kalmak-Ashuu Passes · 3,016 m Yurt Camps
          </div>
        </div>
      </div>
    </div>
  );
}
