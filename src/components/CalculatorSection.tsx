import { useState } from 'react';
import { Calculator, Check, ArrowRight, Sparkles } from 'lucide-react';
import { Currency, SkillLevel } from '../types/tour';
import { TOUR_PACKAGES, CURRENCY_RATES } from '../data/tourData';
import { useI18n } from '../context/I18nContext';

interface CalculatorSectionProps {
  currentCurrency: Currency;
  onOpenBookingWithDetails: (details: {
    packageId: string;
    participants: number;
    level: SkillLevel;
    addons: string[];
  }) => void;
}

interface AddonOption {
  id: string;
  name: string;
  priceUsd: number;
  perPerson: boolean;
  desc: string;
}

export default function CalculatorSection({
  currentCurrency,
  onOpenBookingWithDetails,
}: CalculatorSectionProps) {
  const { t, language } = useI18n();
  const [selectedPkgId, setSelectedPkgId] = useState<string>('songkul-5d');
  const [participants, setParticipants] = useState<number>(2);
  const [skillLevel, setSkillLevel] = useState<SkillLevel>('beginner');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['eagle-hunting']);

  const selectedPkg =
    TOUR_PACKAGES.find((p) => p.id === selectedPkgId) || TOUR_PACKAGES[1];

  const discountPercent = participants >= 5 ? 0.1 : participants >= 3 ? 0.05 : 0;
  const baseTotalUsd = selectedPkg.basePriceUsd * participants;
  const discountedBaseUsd = baseTotalUsd * (1 - discountPercent);

  const getAddons = (): AddonOption[] => {
    return [
      {
        id: 'eagle-hunting',
        name:
          language === 'ru'
            ? 'Шоу охоты с беркутом (Беркутчи)'
            : language === 'fr'
            ? 'Démonstration de fauconnerie (Aigle royal)'
            : language === 'de'
            ? 'Adlerjagd-Vorführung (Berkutschi)'
            : language === 'pl'
            ? 'Pokaz polowania z orłem (Berkutczi)'
            : 'Eagle Hunting Demonstration (Berkutchi)',
        priceUsd: 60,
        perPerson: true,
        desc:
          language === 'ru'
            ? 'Демонстрация ловчей птицы и фотосессия с горным орлом на руке.'
            : 'Traditional falconry show and photo session with a golden eagle.',
      },
      {
        id: 'yurt-assembly',
        name:
          language === 'ru'
            ? 'Мастер-класс сборки юрты (Боз-үй)'
            : language === 'fr'
            ? 'Atelier de montage de yourte'
            : language === 'de'
            ? 'Jurtenbau-Workshop'
            : language === 'pl'
            ? 'Warsztaty stawiania jurty'
            : 'Yurt Assembly Workshop',
        priceUsd: 35,
        perPerson: true,
        desc:
          language === 'ru'
            ? 'Сборка тундука и кереге своими руками с кочевыми мастерами.'
            : 'Assemble the wooden frame and tunduk crown with nomadic masters.',
      },
      {
        id: 'photoshoot',
        name:
          language === 'ru'
            ? 'Профессиональная фотосессия верхом'
            : language === 'fr'
            ? 'Séance photo professionnelle à cheval'
            : language === 'de'
            ? 'Professionelles Foto-Shooting zu Pferd'
            : language === 'pl'
            ? 'Profesjonalna sesja zdjęciowa w siodle'
            : 'Professional Horseback Photo Session',
        priceUsd: 75,
        perPerson: false,
        desc:
          language === 'ru'
            ? '50+ обработанных снимков от горного фотографа в костюмах.'
            : '50+ edited high-resolution pictures in traditional garments.',
      },
      {
        id: 'vip-transfer',
        name:
          language === 'ru'
            ? 'Индивидуальный джип 4WD из Манаса'
            : language === 'fr'
            ? 'Transfert privé 4x4 depuis l’aéroport'
            : language === 'de'
            ? 'Privater 4WD-Flughafentransfer'
            : language === 'pl'
            ? 'Prywatny transfer 4x4 z lotniska'
            : 'Private 4WD Airport Transfer',
        priceUsd: 50,
        perPerson: false,
        desc:
          language === 'ru'
            ? 'Встреча у трапа самолета и комфортный персональный трансфер.'
            : 'Direct pickup from Manas airport terminal to starting base camp.',
      },
    ];
  };

  const addonsList = getAddons();

  const addonsTotalUsd = selectedAddons.reduce((acc, addonId) => {
    const addon = addonsList.find((a) => a.id === addonId);
    if (!addon) return acc;
    return acc + (addon.perPerson ? addon.priceUsd * participants : addon.priceUsd);
  }, 0);

  const grandTotalUsd = discountedBaseUsd + addonsTotalUsd;
  const perPersonTotalUsd = grandTotalUsd / participants;

  const rate = CURRENCY_RATES[currentCurrency];

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((a) => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const handleBook = () => {
    onOpenBookingWithDetails({
      packageId: selectedPkgId,
      participants,
      level: skillLevel,
      addons: selectedAddons,
    });
  };

  return (
    <section id="calculator" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#0E627C] uppercase mb-3">
            <Calculator className="w-4 h-4" />
            <span>{t.calculator.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 font-editorial tracking-tight mb-4">
            {t.calculator.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {t.calculator.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-stone-200 space-y-8">
            {/* Step 1 */}
            <div>
              <label className="block text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                {t.calculator.step1}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {TOUR_PACKAGES.map((pkg) => {
                  const isChecked = pkg.id === selectedPkgId;
                  return (
                    <button
                      key={pkg.id}
                      onClick={() => setSelectedPkgId(pkg.id)}
                      className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                        isChecked
                          ? 'bg-[#0E627C] text-white border-[#0E627C] shadow-sm'
                          : 'bg-white text-slate-800 border-stone-200 hover:border-stone-300'
                      }`}
                    >
                      <div className="text-xs opacity-80 mb-1">{pkg.days} {language === 'ru' ? 'дней' : 'days'}</div>
                      <div className="font-bold text-sm leading-snug">{pkg.name}</div>
                      <div className={`text-xs mt-2 font-semibold ${isChecked ? 'text-amber-200' : 'text-[#0E627C]'}`}>
                        {rate.format(pkg.basePriceUsd)} {t.calculator.perPersonBadge}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2 */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  {t.calculator.step2}
                </label>
                {discountPercent > 0 && (
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                    {t.calculator.groupDiscount} {(discountPercent * 100).toFixed(0)}%!
                  </span>
                )}
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center bg-white border border-stone-300 rounded-xl p-1">
                  <button
                    onClick={() => setParticipants(Math.max(1, participants - 1))}
                    className="w-10 h-10 rounded-lg bg-stone-100 hover:bg-stone-200 text-slate-800 font-bold flex items-center justify-center cursor-pointer transition-colors"
                  >
                    -
                  </button>
                  <span className="w-14 text-center font-bold text-lg text-slate-900">
                    {participants}
                  </span>
                  <button
                    onClick={() => setParticipants(Math.min(10, participants + 1))}
                    className="w-10 h-10 rounded-lg bg-stone-100 hover:bg-stone-200 text-slate-800 font-bold flex items-center justify-center cursor-pointer transition-colors"
                  >
                    +
                  </button>
                </div>
                <span className="text-xs text-slate-500">
                  {participants === 1
                    ? t.calculator.personCount1
                    : `${participants} ${t.calculator.personCountPlural}`}
                </span>
              </div>
            </div>

            {/* Step 3 */}
            <div>
              <label className="block text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                {t.calculator.step3}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                {[
                  { id: 'beginner', label: t.calculator.levelBeginner, sub: t.calculator.levelBeginnerSub },
                  { id: 'intermediate', label: t.calculator.levelIntermediate, sub: t.calculator.levelIntermediateSub },
                  { id: 'advanced', label: t.calculator.levelAdvanced, sub: t.calculator.levelAdvancedSub },
                ].map((lvl) => (
                  <button
                    key={lvl.id}
                    onClick={() => setSkillLevel(lvl.id as SkillLevel)}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                      skillLevel === lvl.id
                        ? 'bg-amber-100/70 border-amber-500 text-amber-950 font-semibold'
                        : 'bg-white border-stone-200 text-slate-700 hover:bg-stone-50'
                    }`}
                  >
                    <div className="font-bold text-sm">{lvl.label}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{lvl.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4 */}
            <div>
              <label className="block text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                {t.calculator.step4}
              </label>
              <div className="space-y-2.5">
                {addonsList.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  const priceStr = rate.format(addon.priceUsd);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`w-full p-3.5 rounded-xl border text-left flex items-center justify-between gap-4 cursor-pointer transition-all ${
                        isChecked
                          ? 'bg-white border-[#0E627C] shadow-sm'
                          : 'bg-white/60 border-stone-200 hover:bg-white text-slate-700'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded mt-0.5 flex items-center justify-center transition-colors shrink-0 ${
                            isChecked
                              ? 'bg-[#0E627C] text-white'
                              : 'border border-stone-300'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <div>
                          <div className="font-semibold text-sm text-slate-900">
                            {addon.name}
                          </div>
                          <div className="text-xs text-slate-500">{addon.desc}</div>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-xs font-bold text-[#0E627C]">
                          +{priceStr}
                        </span>
                        <div className="text-[10px] text-slate-400">
                          {addon.perPerson ? t.calculator.perPersonBadge : t.calculator.perTourBadge}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Live Quote Summary Card */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-[#0A2540] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#0E627C]/30 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-300 mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>{t.calculator.quoteTitle}</span>
                </div>
                <h3 className="text-2xl font-bold font-editorial mb-4">
                  {selectedPkg.name}
                </h3>

                <div className="space-y-3 py-4 border-y border-white/10 text-xs sm:text-sm">
                  <div className="flex justify-between text-slate-300">
                    <span>
                      {t.calculator.baseTour} ({participants} × {selectedPkg.days} d.):
                    </span>
                    <span className="font-medium text-white">
                      {rate.format(baseTotalUsd)}
                    </span>
                  </div>

                  {discountPercent > 0 && (
                    <div className="flex justify-between text-emerald-400 font-medium">
                      <span>{t.calculator.discountLine} ({(discountPercent * 100).toFixed(0)}%):</span>
                      <span>-{rate.format(baseTotalUsd * discountPercent)}</span>
                    </div>
                  )}

                  {addonsTotalUsd > 0 && (
                    <div className="flex justify-between text-slate-300">
                      <span>{t.calculator.addonsLine} ({selectedAddons.length}):</span>
                      <span className="font-medium text-white">
                        +{rate.format(addonsTotalUsd)}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between text-slate-300">
                    <span>{t.calculator.levelLine}</span>
                    <span className="font-medium capitalize text-amber-200">
                      {skillLevel === 'beginner' ? t.calculator.levelBeginner : skillLevel === 'intermediate' ? t.calculator.levelIntermediate : t.calculator.levelAdvanced}
                    </span>
                  </div>
                </div>

                <div className="pt-6 mb-6">
                  <div className="text-xs uppercase tracking-wider text-slate-400 mb-1">
                    {t.calculator.totalGroup}
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400 font-editorial">
                    {rate.format(grandTotalUsd)}
                  </div>
                  <div className="text-xs text-slate-300 mt-1">
                    {t.calculator.orPerPerson}: <strong>{rate.format(perPersonTotalUsd)}</strong>
                  </div>
                </div>

                <button
                  onClick={handleBook}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#C99753] to-[#B37F38] text-slate-950 font-bold text-sm shadow-lg hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{t.calculator.bookQuoteCta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[11px] text-center text-slate-400 mt-3">
                  {t.calculator.noDepositNotice}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
