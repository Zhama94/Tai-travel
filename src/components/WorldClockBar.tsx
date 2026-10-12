import { Clock } from 'lucide-react';
import { useWorldTime } from '../hooks/useWorldTime';
import { useI18n } from '../context/I18nContext';

interface WorldClockBarProps {
  variant?: 'topbar' | 'compact' | 'card';
}

export default function WorldClockBar({ variant = 'topbar' }: WorldClockBarProps) {
  const times = useWorldTime();
  const { language } = useI18n();

  const labels = {
    bishkek:
      language === 'ru'
        ? 'Бишкек'
        : language === 'fr'
        ? 'Bichkek'
        : language === 'de'
        ? 'Bischkek'
        : language === 'pl'
        ? 'Biszkek'
        : 'Bishkek',
    france:
      language === 'ru'
        ? 'Франция'
        : language === 'fr'
        ? 'France'
        : language === 'de'
        ? 'Frankreich'
        : language === 'pl'
        ? 'Francja'
        : 'France',
    japan:
      language === 'ru'
        ? 'Япония'
        : language === 'fr'
        ? 'Japon'
        : language === 'de'
        ? 'Japan'
        : language === 'pl'
        ? 'Japonia'
        : 'Japan',
    base:
      language === 'ru'
        ? 'база'
        : language === 'fr'
        ? 'base'
        : language === 'de'
        ? 'Basis'
        : language === 'pl'
        ? 'baza'
        : 'base',
    worldTimeTitle:
      language === 'ru'
        ? 'Время в регионах:'
        : language === 'fr'
        ? 'Heure locale :'
        : language === 'de'
        ? 'Uhrzeit nach Regionen:'
        : language === 'pl'
        ? 'Czas w strefach:'
        : 'World time:',
  };

  if (variant === 'card') {
    return (
      <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-white font-sans font-medium">
        <div className="flex items-center gap-2 text-sm font-sans font-medium text-amber-300 mb-3">
          <Clock className="w-4 h-4" />
          <span className="font-sans text-sm font-medium">{labels.worldTimeTitle}</span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center font-sans">
          <div className="bg-black/20 p-2.5 rounded-xl border border-white/10 font-sans">
            <div className="text-sm font-sans font-medium text-slate-300 flex items-center justify-center gap-1">
              <span>🇰🇬</span>
              <span className="font-sans font-medium">{labels.bishkek}</span>
            </div>
            <div className="text-sm sm:text-base font-sans font-medium text-amber-200 mt-1">
              {times.bishkek}
            </div>
            <div className="text-xs font-sans font-medium text-emerald-400 mt-0.5 uppercase">
              UTC+6 ({labels.base})
            </div>
          </div>

          <div className="bg-black/20 p-2.5 rounded-xl border border-white/10 font-sans">
            <div className="text-sm font-sans font-medium text-slate-300 flex items-center justify-center gap-1">
              <span>🇫🇷</span>
              <span className="font-sans font-medium">{labels.france}</span>
            </div>
            <div className="text-sm sm:text-base font-sans font-medium text-white mt-1">
              {times.paris}
            </div>
            <div className="text-xs font-sans font-medium text-slate-400 mt-0.5 uppercase">
              UTC+2 (CET)
            </div>
          </div>

          <div className="bg-black/20 p-2.5 rounded-xl border border-white/10 font-sans">
            <div className="text-sm font-sans font-medium text-slate-300 flex items-center justify-center gap-1">
              <span>🇯🇵</span>
              <span className="font-sans font-medium">{labels.japan}</span>
            </div>
            <div className="text-sm sm:text-base font-sans font-medium text-white mt-1">
              {times.tokyo}
            </div>
            <div className="text-xs font-sans font-medium text-slate-400 mt-0.5 uppercase">
              UTC+9 (JST)
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="flex flex-wrap items-center gap-3 text-sm font-sans font-medium text-slate-200">
        <div className="flex items-center gap-1.5 bg-black/25 px-2.5 py-1 rounded-lg border border-white/10 font-sans">
          <span className="text-sm">🇰🇬</span>
          <span className="text-sm font-sans font-medium text-slate-300">{labels.bishkek}:</span>
          <span className="text-sm font-sans font-medium text-amber-300">{times.bishkek}</span>
        </div>
        <div className="flex items-center gap-1.5 bg-black/25 px-2.5 py-1 rounded-lg border border-white/10 font-sans">
          <span className="text-sm">🇫🇷</span>
          <span className="text-sm font-sans font-medium text-slate-300">{labels.france}:</span>
          <span className="text-sm font-sans font-medium text-white">{times.paris}</span>
        </div>
        <div className="flex items-center gap-1.5 bg-black/25 px-2.5 py-1 rounded-lg border border-white/10 font-sans">
          <span className="text-sm">🇯🇵</span>
          <span className="text-sm font-sans font-medium text-slate-300">{labels.japan}:</span>
          <span className="text-sm font-sans font-medium text-white">{times.tokyo}</span>
        </div>
      </div>
    );
  }

  // Default Top Bar variant - styled exactly like the menu bar font (font-sans font-medium text-sm)
  return (
    <div className="bg-[#051322]/95 border-b border-white/10 text-slate-200 text-sm py-2 px-4 font-sans font-medium">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* World Clocks ticker */}
        <div className="flex items-center gap-3 sm:gap-6 flex-wrap font-sans font-medium">
          <div className="flex items-center gap-2 text-sm font-sans font-medium text-slate-300">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <Clock className="w-4 h-4 text-amber-300" />
            <span className="hidden sm:inline font-sans text-sm font-medium text-slate-300">{labels.worldTimeTitle}</span>
          </div>

          <div className="flex items-center gap-4 text-sm font-sans font-medium">
            {/* Bishkek */}
            <div className="flex items-center gap-1.5 hover:text-white transition-colors cursor-default" title="Кыргызстан (База туров)">
              <span>🇰🇬</span>
              <span className="font-sans text-sm font-medium text-slate-300">{labels.bishkek}:</span>
              <span className="font-sans text-sm font-medium text-amber-300">{times.bishkek}</span>
            </div>

            {/* France / Paris */}
            <div className="flex items-center gap-1.5 hover:text-white transition-colors cursor-default" title="Франция (Париж)">
              <span>🇫🇷</span>
              <span className="font-sans text-sm font-medium text-slate-300">{labels.france}:</span>
              <span className="font-sans text-sm font-medium text-slate-200">{times.paris}</span>
            </div>

            {/* Japan / Tokyo */}
            <div className="flex items-center gap-1.5 hover:text-white transition-colors cursor-default" title="Япония (Токио)">
              <span>🇯🇵</span>
              <span className="font-sans text-sm font-medium text-slate-300">{labels.japan}:</span>
              <span className="font-sans text-sm font-medium text-slate-200">{times.tokyo}</span>
            </div>
          </div>
        </div>

        {/* Right side contact & season note */}
        <div className="hidden lg:flex items-center gap-4 text-sm font-sans font-medium text-slate-300">
          <span>🌿 Сезон 2026: Июнь — Октябрь</span>
          <span>·</span>
          <a
            href="https://wa.me/996220073174"
            target="_blank"
            rel="noreferrer"
            className="text-emerald-400 hover:text-emerald-300 font-sans text-sm font-medium transition-colors"
          >
            WhatsApp: +996 220 073 174
          </a>
        </div>
      </div>
    </div>
  );
}
