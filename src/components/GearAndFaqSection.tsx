import { useState } from 'react';
import { HelpCircle, Backpack, ChevronDown, Check } from 'lucide-react';
import { FAQS, GEAR_CHECKLIST } from '../data/tourData';
import { useI18n } from '../context/I18nContext';

export default function GearAndFaqSection() {
  const { t, language } = useI18n();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [checkedGear, setCheckedGear] = useState<Record<string, boolean>>({
    'g-pants': true,
    'g-boots': true,
  });

  const toggleGear = (id: string) => {
    setCheckedGear((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const totalGear = GEAR_CHECKLIST.length;
  const packedCount = Object.values(checkedGear).filter(Boolean).length;
  const packedPercent = Math.round((packedCount / totalGear) * 100);

  const getFaqQuestion = (idx: number, def: string) => {
    if (language === 'ru') return def;
    const enQ = [
      'Is the tour suitable for complete beginners with no riding experience?',
      'What is the summer weather like at Song-Kul? Will we be cold?',
      'How are hygiene and yurt bathroom facilities organized?',
      'What clothes and footwear are required for the riding expedition?',
      'Is there mobile phone network and internet reception at Lake Song-Kul?',
      'What about food? Are vegetarian options available?',
    ];
    return enQ[idx] || def;
  };

  const getGearName = (id: string, def: string) => {
    if (language === 'ru') return def;
    const names: Record<string, string> = {
      'g-pants': 'Flexible riding breeches or seamless leggings',
      'g-boots': 'Hiking boots with low heel or firm trail shoes',
      'g-thermo': 'Thermal underwear base layer',
      'g-fleece': 'Fleece jacket or warm down sweater',
      'g-jacket': 'Windproof & waterproof membrane jacket',
      'g-sunglasses': 'High UV-protection sunglasses (Cat 3-4)',
      'g-spf': 'Sun protection cream SPF 50+ & lip balm',
      'g-powerbank': 'Power bank (10,000 - 20,000 mAh)',
      'g-gloves': 'Lightweight trail riding gloves',
    };
    return names[id] || def;
  };

  return (
    <section id="faq" className="py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* FAQ Column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#0E627C] uppercase mb-3">
              <HelpCircle className="w-4 h-4" />
              <span>{t.faq.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-editorial tracking-tight mb-4">
              {t.faq.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              {t.faq.subtitle}
            </p>

            <div className="space-y-3">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="font-bold text-sm sm:text-base text-slate-900">
                        {getFaqQuestion(idx, faq.question)}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${
                          isOpen ? 'rotate-180 text-[#0E627C]' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-stone-100">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive Packing Gear Checklist Column */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm sticky top-28">
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-stone-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                  <Backpack className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-slate-900">{t.faq.gearTitle}</h3>
                  <p className="text-xs text-slate-500">{t.faq.gearSub}</p>
                </div>
              </div>

              {/* Progress counter */}
              <div className="text-right">
                <div className="text-xs font-bold text-[#0E627C]">
                  {packedCount} / {totalGear}
                </div>
                <div className="w-20 h-2 bg-stone-100 rounded-full overflow-hidden mt-1">
                  <div
                    className="h-full bg-[#0E627C] transition-all duration-300"
                    style={{ width: `${packedPercent}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-3 max-h-[460px] overflow-y-auto pr-1">
              {GEAR_CHECKLIST.map((gear) => {
                const isChecked = !!checkedGear[gear.id];
                return (
                  <div
                    key={gear.id}
                    onClick={() => toggleGear(gear.id)}
                    className={`p-3 rounded-xl border text-left flex items-start gap-3 cursor-pointer transition-colors ${
                      isChecked
                        ? 'bg-emerald-50/50 border-emerald-300'
                        : 'bg-stone-50 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    <div className="mt-0.5 shrink-0">
                      {isChecked ? (
                        <div className="w-5 h-5 rounded bg-emerald-600 text-white flex items-center justify-center">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded border border-stone-300 bg-white" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs font-bold ${
                            isChecked ? 'line-through text-slate-500' : 'text-slate-900'
                          }`}
                        >
                          {getGearName(gear.id, gear.name)}
                        </span>
                        {gear.essential && (
                          <span className="text-[10px] text-amber-700 font-semibold bg-amber-100 px-1.5 py-0.2 rounded">
                            {t.faq.essentialBadge}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                        {gear.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-stone-100 text-[11px] text-slate-500 text-center">
              {t.faq.gearNotice}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
