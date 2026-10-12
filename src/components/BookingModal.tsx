import { useState, useEffect } from 'react';
import { X, Send, MessageCircle, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { TOUR_PACKAGES, CURRENCY_RATES } from '../data/tourData';
import { Currency, SkillLevel } from '../types/tour';
import { useI18n } from '../context/I18nContext';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedPackageId?: string;
  preselectedParticipants?: number;
  preselectedLevel?: SkillLevel;
  currentCurrency: Currency;
}

export default function BookingModal({
  isOpen,
  onClose,
  preselectedPackageId = 'songkul-5d',
  preselectedParticipants = 2,
  preselectedLevel = 'beginner',
  currentCurrency,
}: BookingModalProps) {
  const { t, language } = useI18n();
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('2026-07-20');
  const [packageId, setPackageId] = useState(preselectedPackageId);
  const [participants, setParticipants] = useState(preselectedParticipants);
  const [level, setLevel] = useState<SkillLevel>(preselectedLevel);
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [bookingCode, setBookingCode] = useState('');

  useEffect(() => {
    if (preselectedPackageId) setPackageId(preselectedPackageId);
    if (preselectedParticipants) setParticipants(preselectedParticipants);
    if (preselectedLevel) setLevel(preselectedLevel);
  }, [preselectedPackageId, preselectedParticipants, preselectedLevel]);

  if (!isOpen) return null;

  const selectedPkg = TOUR_PACKAGES.find((p) => p.id === packageId) || TOUR_PACKAGES[1];
  const rate = CURRENCY_RATES[currentCurrency];
  const estimatedCost = rate.format(selectedPkg.basePriceUsd * participants);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    const code = `SK-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingCode(code);
    setSubmitted(true);

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.5 },
        colors: ['#0E627C', '#C99753', '#26533C'],
      });
    } catch {
      // safe fallback
    }
  };

  const waMsg = encodeURIComponent(
    `Hello! Confirming booking for Song-Kul horse tour.\nCode: ${bookingCode || 'New'}\nName: ${fullName}\nTour: ${selectedPkg.name}\nDate: ${date}\nParticipants: ${participants}\nPhone: ${phone}`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-lg bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 shadow-2xl border border-stone-300 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-stone-200 transition-colors cursor-pointer"
          aria-label={t.modals.close}
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 font-editorial mb-1">
              {t.booking.successTitle}
            </h3>
            <p className="text-xs text-slate-600 mb-4">
              {t.booking.bookingNumberLabel} <strong className="text-[#0E627C] font-mono">{bookingCode}</strong>.
            </p>

            <div className="p-3.5 bg-white rounded-xl border border-stone-200 text-xs space-y-1.5 text-left mb-6">
              <div className="flex justify-between">
                <span className="text-slate-500">{t.booking.packageLabel}:</span>
                <span className="font-semibold text-slate-900">{selectedPkg.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">{t.booking.dateLabel}:</span>
                <span className="font-semibold text-slate-900">{date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">{t.booking.ridersLabel}:</span>
                <span className="font-semibold text-slate-900">{participants}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">{t.modals.estimatedCost}</span>
                <span className="font-bold text-[#0E627C]">{estimatedCost}</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href={`https://wa.me/996220073174?text=${waMsg}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.booking.openWhatsappCta}</span>
              </a>

              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-xl bg-stone-200 hover:bg-stone-300 text-slate-800 text-xs font-semibold cursor-pointer"
              >
                {t.modals.close}
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-5">
              <span className="text-[11px] font-bold text-[#0E627C] uppercase tracking-wider">
                {t.modals.quickBookingTitle}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 font-editorial">
                {t.hero.bookCta}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {t.modals.quickBookingSub}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                  {t.booking.nameLabel}
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder={t.booking.namePlaceholder}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-stone-300 focus:border-[#0E627C] outline-none text-xs text-slate-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                    {t.booking.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t.booking.phonePlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-stone-300 focus:border-[#0E627C] outline-none text-xs text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                    {t.booking.emailLabel}
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.booking.emailPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-stone-300 focus:border-[#0E627C] outline-none text-xs text-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                  {t.booking.packageLabel}
                </label>
                <select
                  value={packageId}
                  onChange={(e) => setPackageId(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-stone-300 focus:border-[#0E627C] outline-none text-xs text-slate-900 cursor-pointer"
                >
                  {TOUR_PACKAGES.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} ({p.days} {language === 'ru' ? 'дней' : 'days'} / {rate.format(p.basePriceUsd)})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                    {t.booking.dateLabel}
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-stone-300 focus:border-[#0E627C] outline-none text-xs text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                    {t.booking.ridersLabel}
                  </label>
                  <select
                    value={participants}
                    onChange={(e) => setParticipants(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-stone-300 focus:border-[#0E627C] outline-none text-xs text-slate-900 cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                  {t.booking.levelLabel}
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {[
                    { id: 'beginner', label: t.calculator.levelBeginner },
                    { id: 'intermediate', label: t.calculator.levelIntermediate },
                    { id: 'advanced', label: t.calculator.levelAdvanced },
                  ].map((l) => (
                    <button
                      type="button"
                      key={l.id}
                      onClick={() => setLevel(l.id as SkillLevel)}
                      className={`py-2 rounded-lg text-center font-medium border cursor-pointer ${
                        level === l.id
                          ? 'bg-[#0E627C] text-white border-[#0E627C]'
                          : 'bg-white border-stone-200 text-slate-700'
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                  {t.booking.wishesLabel}
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={t.booking.wishesPlaceholder}
                  className="w-full px-3.5 py-2 rounded-xl bg-white border border-stone-300 focus:border-[#0E627C] outline-none text-xs text-slate-900 resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between text-xs pb-1">
                <span className="text-slate-500">{t.modals.estimatedCost}</span>
                <span className="font-bold text-slate-900 text-sm">{estimatedCost}</span>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#C99753] hover:bg-[#b58340] text-slate-950 font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{t.modals.bookButton}</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
