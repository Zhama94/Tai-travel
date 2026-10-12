import { Check, X, Shield, Sparkles, HeartHandshake } from 'lucide-react';
import { INCLUSIONS_LIST, EXCLUSIONS_LIST } from '../data/tourData';
import { useI18n } from '../context/I18nContext';

export default function InclusionsSection() {
  const { t, language } = useI18n();

  const getInclusionTitle = (idx: number, def: string) => {
    if (language === 'ru') return def;
    const enTitles = [
      'Trained Kyrgyz mountain horses',
      'Professional guides & horsemen',
      '3 hot traditional meals a day',
      'Yurt stays with wood stoves',
      'Comfortable 4WD/minivan transfers',
      'Separate luggage transport',
      'Park fees & environmental permits',
      'Safety, first aid & satellite tracker',
    ];
    return enTitles[idx] || def;
  };

  const getExclusionTitle = (idx: number, def: string) => {
    if (language === 'ru') return def;
    const enExcl = [
      'International flights to Bishkek (FRU)',
      'Personal travel & horse riding insurance',
      'Alcoholic drinks & personal souvenirs',
      'Staff tips and gratuities',
    ];
    return enExcl[idx] || def;
  };

  return (
    <section id="inclusions" className="py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#0E627C] uppercase mb-3">
            <Shield className="w-4 h-4" />
            <span>{t.inclusions.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 font-editorial tracking-tight mb-4">
            {t.inclusions.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {t.inclusions.subtitle}
          </p>
        </div>

        {/* Side by side cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Included Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm border border-emerald-200/80 relative">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-100">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Check className="w-6 h-6 stroke-[3]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">{t.inclusions.includedTitle}</h3>
                <p className="text-xs text-slate-500">{t.inclusions.includedSub}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {INCLUSIONS_LIST.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{getInclusionTitle(idx, item.title)}</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Special comfort promise */}
            <div className="mt-8 p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex items-center gap-3.5 text-xs text-amber-900">
              <Sparkles className="w-5 h-5 text-amber-600 shrink-0" />
              <span>
                <strong>{t.inclusions.comfortPromiseBold}</strong> {t.inclusions.comfortPromise}
              </span>
            </div>
          </div>

          {/* Not Included Card & Safety Guarantee */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-100">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
                  <X className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{t.inclusions.excludedTitle}</h3>
                  <p className="text-xs text-slate-500">{t.inclusions.excludedSub}</p>
                </div>
              </div>

              <div className="space-y-4">
                {EXCLUSIONS_LIST.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center shrink-0 mt-0.5 border border-rose-200">
                      <X className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{getExclusionTitle(idx, item.title)}</h4>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Support and Peace of Mind Box */}
            <div className="bg-gradient-to-br from-[#0A2540] to-[#0E627C] rounded-3xl p-6 sm:p-8 text-white shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <HeartHandshake className="w-6 h-6 text-amber-300" />
                <h4 className="text-lg font-bold font-editorial">{t.inclusions.supportTitle}</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-4">
                {t.inclusions.supportDesc}
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-200">
                <span>{t.inclusions.gpsTracker}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
