import { Play, Calendar, ShieldCheck, ArrowRight, Mountain, Sparkles } from 'lucide-react';
import { useI18n } from '../context/I18nContext';

interface HeroProps {
  onOpenBookingModal: () => void;
  onOpenVideoModal: () => void;
}

export default function Hero({ onOpenBookingModal, onOpenVideoModal }: HeroProps) {
  const { t } = useI18n();

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Deep Cinematic Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2200&q=85"
          alt="Song-Kul Horseback Tours, Kyrgyzstan"
          className="w-full h-full object-cover object-center scale-105 animate-subtleZoom"
        />
        {/* Layered overlays for contrast and anti-glare */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-transparent to-slate-950/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/20 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Tagline kicker */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium text-amber-200 mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>{t.hero.badge}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.08] font-editorial mb-6 text-balance">
            {t.hero.titleLine1} <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-amber-100 italic">
              {t.hero.titleHighlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-200 font-light leading-relaxed mb-8 max-w-2xl text-balance">
            {t.hero.subtitle}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-12">
            <button
              onClick={onOpenBookingModal}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#C99753] to-[#B37F38] text-slate-950 font-bold text-base shadow-xl shadow-amber-900/20 hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <span>{t.hero.bookCta}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenVideoModal}
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 text-white font-semibold text-base transition-all flex items-center justify-center gap-3 cursor-pointer group"
            >
              <div className="w-8 h-8 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </div>
              <span>{t.hero.videoCta}</span>
            </button>
          </div>
        </div>

        {/* Highlight Stats Bar */}
        <div className="mt-4 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-sky-950/60 border border-sky-400/20 text-sky-300">
              <Mountain className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white font-editorial">{t.hero.stat1Value}</div>
              <div className="text-xs text-slate-300 font-medium">{t.hero.stat1Label}</div>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-amber-950/60 border border-amber-400/20 text-amber-300">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white font-editorial">{t.hero.stat2Value}</div>
              <div className="text-xs text-slate-300 font-medium">{t.hero.stat2Label}</div>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-400/20 text-emerald-300">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white font-editorial">{t.hero.stat3Value}</div>
              <div className="text-xs text-slate-300 font-medium">{t.hero.stat3Label}</div>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-indigo-950/60 border border-indigo-400/20 text-indigo-300">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white font-editorial">{t.hero.stat4Value}</div>
              <div className="text-xs text-slate-300 font-medium">{t.hero.stat4Label}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
