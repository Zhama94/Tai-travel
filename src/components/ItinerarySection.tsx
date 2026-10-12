import { useState } from 'react';
import { TOUR_PACKAGES } from '../data/tourData';
import { Currency } from '../types/tour';
import { CURRENCY_RATES } from '../data/tourData';
import { MapPin, Clock, ArrowRight, Mountain, CheckCircle2 } from 'lucide-react';
import { useI18n } from '../context/I18nContext';
import { ITINERARY_LOCALIZATIONS } from '../data/itineraryTranslations';

interface ItinerarySectionProps {
  currentCurrency: Currency;
  onSelectPackageForBooking: (packageId: string) => void;
}

export default function ItinerarySection({
  currentCurrency,
  onSelectPackageForBooking,
}: ItinerarySectionProps) {
  const { t, language } = useI18n();
  const [selectedPackageId, setSelectedPackageId] = useState<string>('songkul-5d');
  const [expandedDay, setExpandedDay] = useState<number>(1);

  const selectedPackage =
    TOUR_PACKAGES.find((pkg) => pkg.id === selectedPackageId) || TOUR_PACKAGES[1];

  const rate = CURRENCY_RATES[currentCurrency];
  const priceFormatted = rate.format(selectedPackage.basePriceUsd);

  // Localization for package names and subtitles
  const getPackageName = (id: string, def: string) => {
    if (language === 'ru') return def;
    if (id === 'songkul-3d') {
      if (language === 'fr') return 'Son-Koul Express';
      if (language === 'de') return 'Song-Köl Express';
      if (language === 'pl') return 'Song-Kul Ekspres';
      return 'Song-Kul Express';
    }
    if (id === 'songkul-5d') {
      if (language === 'fr') return 'Son-Koul Classique : La Piste Nomade';
      if (language === 'de') return 'Klassischer Song-Köl: Der Nomadenpfad';
      if (language === 'pl') return 'Klasyczny Song-Kul: Szlak Koczownika';
      return 'Classic Song-Kul: The Nomad Trail';
    }
    if (id === 'songkul-7d') {
      if (language === 'fr') return 'Grand Tour du Tian Shan : Expédition Complète';
      if (language === 'de') return 'Große Tienschan-Runde: Gesamte Expedition';
      if (language === 'pl') return 'Wielka Pętla Tien-szan: Pełna Ekspedycja';
      return 'Great Tian Shan Circuit: Full Expedition';
    }
    return def;
  };

  const getPackageSubtitle = (id: string, def: string) => {
    if (language === 'ru') return def;
    if (id === 'songkul-3d') {
      if (language === 'fr') return 'Courte et intense immersion au cœur des steppes';
      if (language === 'de') return 'Kurzes und intensives Eintauchen in die Nomadenwelt';
      if (language === 'pl') return 'Krótkie i intensywne zanurzenie w świat nomadów';
      return 'Short and vivid immersion into the nomadic world';
    }
    if (id === 'songkul-5d') {
      if (language === 'fr') return 'Notre itinéraire phare avec immersion complète';
      if (language === 'de') return 'Unsere beliebteste Route mit maximalem Erlebnis';
      if (language === 'pl') return 'Nasza flagowa trasa z pełnym zanurzeniem w kulturę';
      return 'Our flagship journey with complete cultural immersion';
    }
    if (id === 'songkul-7d') {
      if (language === 'fr') return 'Pour cavaliers aventuriers et amoureux des grands espaces';
      if (language === 'de') return 'Für echte Abenteurer und Liebhaber wilder Natur';
      if (language === 'pl') return 'Dla prawdziwych odkrywców i miłośników dzikiej przyrody';
      return 'For true adventurers and lovers of untamed wilderness';
    }
    return def;
  };

  const getPackageDescription = (id: string, def: string) => {
    if (language === 'ru') return def;
    if (id === 'songkul-5d') {
      if (language === 'fr') return 'Une véritable aventure équestre franchissant le haut col de Kalmak-Achou (3 446 m), trois nuits sous yourte au bord du lac Son-Koul, galops en liberté et ciel étoilé.';
      if (language === 'de') return 'Ein echtes Reitabenteuer über den Kalmak-Aschuu-Pass (3.446 m), drei Nächte in traditionellen Jurtenlagern am Ufer des Song-Köl, freies Reiten und unendlicher Sternenhimmel.';
      if (language === 'pl') return 'Prawdziwa wyprawa konna przez wysokogórską przełęcz Kałmak-Aszu (3 446 m n.p.m.), trzy noce w tradycyjnych jurtach nad jeziorem Song-Kul, galopy po płaskowyżu i gwiazdy.';
      return 'An authentic horseback expedition crossing the high Kalmak-Ashuu pass (3,446 m), three nights in traditional yurt camps by the lake, open galloping and starry skies.';
    }
    if (id === 'songkul-3d') {
      if (language === 'fr') return 'Circuit court depuis le village de Kyzart à travers le col de Tuz-Achou menant au lac Son-Koul. Deux nuits en yourte, dégustation nomade et balades équestres.';
      if (language === 'de') return 'Kompakter Reitausflug ab dem Dorf Kyzart über den Tuz-Aschuu-Pass zum Song-Köl. Zwei Jurtenübernachtungen, Nomadenküche und Reiten am Seeufer.';
      if (language === 'pl') return 'Krótka trasa konna z Kyzartu przez przełęcz Tuz-Aszu prosto nad jezioro Song-Kul. Dwa noclegi w jurcie, kuchnia koczowników i jazda brzegiem wody.';
      return 'Compact riding route from Kyzart village via Tuz-Ashuu pass directly to Lake Song-Kul. Two yurt nights, nomad cuisine, and lakeside riding.';
    }
    return def;
  };

  return (
    <section id="itinerary" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#0E627C] uppercase mb-3">
            <Mountain className="w-4 h-4" />
            <span>{t.itinerary.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 font-editorial tracking-tight mb-4">
            {t.itinerary.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {t.itinerary.subtitle}
          </p>
        </div>

        {/* Package Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {TOUR_PACKAGES.map((pkg) => {
            const isSelected = pkg.id === selectedPackage.id;
            return (
              <button
                key={pkg.id}
                onClick={() => {
                  setSelectedPackageId(pkg.id);
                  setExpandedDay(1);
                }}
                className={`relative text-left p-6 rounded-2xl transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-[#0A2540] text-white border-[#0E627C] shadow-xl scale-[1.02]'
                    : 'bg-stone-50 text-slate-800 border-stone-200 hover:border-stone-300 hover:bg-stone-100'
                }`}
              >
                <h3 className="text-xl font-bold font-editorial mb-1">
                  {getPackageName(pkg.id, pkg.name)}
                </h3>
                <p
                  className={`text-xs mb-4 ${
                    isSelected ? 'text-slate-300' : 'text-slate-500'
                  }`}
                >
                  {getPackageSubtitle(pkg.id, pkg.subtitle)}
                </p>

                <div className="flex items-baseline justify-between pt-4 border-t border-white/10 border-stone-200">
                  <div>
                    <span className="text-xs uppercase tracking-wider opacity-70">
                      {t.itinerary.durationLabel}
                    </span>
                    <div className="text-base font-semibold">
                      {pkg.days} {language === 'ru' ? 'дней' : language === 'fr' ? 'jours' : language === 'de' ? 'Tage' : language === 'pl' ? 'dni' : 'days'}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs uppercase tracking-wider opacity-70">
                      {t.itinerary.fromPerson}
                    </span>
                    <div
                      className={`text-lg font-bold ${
                        isSelected ? 'text-[#C99753]' : 'text-[#0E627C]'
                      }`}
                    >
                      {rate.format(pkg.basePriceUsd)}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Package Overview Card */}
        <div className="mb-6 p-5 rounded-2xl bg-stone-50 border border-stone-200 text-sm text-slate-700 leading-relaxed">
          {getPackageDescription(selectedPackage.id, selectedPackage.description)}
        </div>

        {/* Selected Package Metrics Bar */}
        <div className="bg-[#FAF7F2] rounded-2xl p-6 border border-stone-200 mb-10 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0E627C]/10 text-[#0E627C] flex items-center justify-center font-bold">
              KM
            </div>
            <div>
              <div className="text-xs text-slate-500">{t.itinerary.totalDistance}</div>
              <div className="text-base font-bold text-slate-900">
                ~{selectedPackage.totalDistanceKm} km
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center font-bold">
              ALT
            </div>
            <div>
              <div className="text-xs text-slate-500">{t.itinerary.maxAltitude}</div>
              <div className="text-base font-bold text-slate-900">
                {selectedPackage.maxAltitudeM} m
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center font-bold">
              LVL
            </div>
            <div>
              <div className="text-xs text-slate-500">{t.itinerary.difficulty}</div>
              <div className="text-base font-bold text-slate-900">
                {selectedPackage.difficulty} {t.itinerary.suitableForBeginners}
              </div>
            </div>
          </div>

          <button
            onClick={() => onSelectPackageForBooking(selectedPackage.id)}
            className="px-6 py-3 rounded-xl bg-[#0E627C] hover:bg-[#0A4D62] text-white font-semibold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>{t.itinerary.bookThisTour} ({priceFormatted})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Day-by-Day Detailed Program (D-1 to D-5 or D-7 fully localized) */}
        <div className="space-y-4">
          {selectedPackage.schedule.map((day) => {
            const isExpanded = expandedDay === day.dayNumber;

            // Fetch specific localized content for this day
            const localizedDay =
              ITINERARY_LOCALIZATIONS[selectedPackage.id]?.[day.dayNumber]?.[language];

            const title = localizedDay?.title || day.title;
            const route = localizedDay?.route || day.route;
            const altitudeRange = localizedDay?.altitudeRange || day.altitudeRange;
            const saddleHours = localizedDay?.saddleHours || day.saddleHours;
            const accommodation = localizedDay?.accommodation || day.accommodation;
            const meals = localizedDay?.meals || day.meals;
            const description = localizedDay?.description || day.description;
            const highlights = localizedDay?.highlights || day.highlights;

            return (
              <div
                key={day.dayNumber}
                className={`border rounded-2xl transition-all overflow-hidden ${
                  isExpanded
                    ? 'border-[#0E627C]/50 shadow-md bg-stone-50/50'
                    : 'border-stone-200 hover:border-stone-300 bg-white'
                }`}
              >
                <button
                  onClick={() => setExpandedDay(isExpanded ? 0 : day.dayNumber)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold font-editorial text-xl shrink-0 transition-colors ${
                        isExpanded
                          ? 'bg-[#0E627C] text-white shadow-sm'
                          : 'bg-stone-100 text-slate-700'
                      }`}
                    >
                      D{day.dayNumber}
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-slate-900">
                        {title}
                      </h4>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-1">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#0E627C]" />
                          {day.distanceKm} km
                        </span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-amber-600" />
                          {saddleHours} {t.itinerary.inSaddle}
                        </span>
                        <span>·</span>
                        <span className="flex items-center gap-1 text-slate-600 font-medium">
                          {t.itinerary.elevationChange} {altitudeRange}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-slate-400 font-bold text-sm shrink-0">
                    {isExpanded ? t.itinerary.collapseDay : t.itinerary.expandDay}
                  </div>
                </button>

                {isExpanded && (
                  <div className="p-5 sm:p-6 pt-0 border-t border-stone-200/80 animate-fadeIn">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-4">
                      <div className="lg:col-span-7 space-y-4">
                        <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                          {description}
                        </p>

                        <div className="p-4 rounded-xl bg-white border border-stone-200 text-xs sm:text-sm space-y-2">
                          <div>
                            <span className="font-semibold text-slate-900">{t.itinerary.routeLabel} </span>
                            <span className="text-slate-600">{route}</span>
                          </div>
                          <div>
                            <span className="font-semibold text-slate-900">{t.itinerary.nightLabel} </span>
                            <span className="text-slate-600">{accommodation}</span>
                          </div>
                          <div>
                            <span className="font-semibold text-slate-900">{t.itinerary.mealsLabel} </span>
                            <span className="text-slate-600">{meals}</span>
                          </div>
                        </div>

                        <div className="pt-2">
                          <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                            {t.itinerary.highlightsLabel}
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {highlights.map((h, i) => (
                              <span
                                key={i}
                                className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-50 text-[#0E627C] text-xs font-medium rounded-lg border border-sky-100"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#0E627C]" />
                                {h}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="lg:col-span-5 relative rounded-xl overflow-hidden shadow-sm h-56 sm:h-64">
                        <img
                          src={day.image}
                          alt={title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3 text-white text-xs">
                          <span className="font-semibold">{t.itinerary.dayPrefix} {day.dayNumber}:</span> {route.split('—')[0]}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
