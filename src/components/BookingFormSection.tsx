import { useState } from 'react';
import {
  Send,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  CheckCircle2,
  Calendar,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { TOUR_PACKAGES } from '../data/tourData';
import { SkillLevel } from '../types/tour';
import { useI18n } from '../context/I18nContext';
import WorldClockBar from './WorldClockBar';

interface BookingFormSectionProps {
  initialPackageId?: string;
}

export default function BookingFormSection({ initialPackageId = 'songkul-5d' }: BookingFormSectionProps) {
  const { t, language } = useI18n();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [tourDate, setTourDate] = useState('2026-07-15');
  const [packageId, setPackageId] = useState(initialPackageId);
  const [participants, setParticipants] = useState('2');
  const [ridingLevel, setRidingLevel] = useState<SkillLevel>('beginner');
  const [comments, setComments] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  const selectedPkg = TOUR_PACKAGES.find((p) => p.id === packageId) || TOUR_PACKAGES[1];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    const randomCode = `SONKUL-${Math.floor(1000 + Math.random() * 9000)}`;
    setConfirmationCode(randomCode);
    setSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0E627C', '#C99753', '#26533C', '#F4EBE1'],
      });
    } catch {
      // safe fallback
    }
  };

  const waMessage = encodeURIComponent(
    `Hello! I would like to book a horseback tour to Song-Kul.\nName: ${fullName || 'Guest'}\nTour: ${selectedPkg.name}\nDate: ${tourDate}\nParticipants: ${participants}\nExperience: ${ridingLevel}\nPhone: ${phone}\n${comments ? `Notes: ${comments}` : ''}`
  );

  return (
    <section id="contacts" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#0E627C] uppercase mb-3">
            <Calendar className="w-4 h-4" />
            <span>{t.booking.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 font-editorial tracking-tight mb-4">
            {t.booking.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {t.booking.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Booking Form Column */}
          <div className="lg:col-span-7 bg-[#FAF7F2] rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm">
            {submitted ? (
              <div className="text-center py-8 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 font-editorial mb-2">
                  {t.booking.successTitle}
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                  {t.booking.bookingNumberLabel} <strong className="text-[#0E627C] font-mono text-base">{confirmationCode}</strong>.
                  <br />
                  {t.booking.successDesc}
                </p>

                <div className="p-4 rounded-2xl bg-white border border-stone-200 text-left text-xs space-y-2 mb-6 max-w-md mx-auto">
                  <div className="flex justify-between">
                    <span className="text-slate-500">{t.booking.packageLabel}:</span>
                    <span className="font-semibold text-slate-900">{selectedPkg.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">{t.booking.dateLabel}:</span>
                    <span className="font-semibold text-slate-900">{tourDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">{t.booking.ridersLabel}:</span>
                    <span className="font-semibold text-slate-900">{participants}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">{t.booking.nameLabel}:</span>
                    <span className="font-semibold text-slate-900">{fullName} ({phone})</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={`https://wa.me/996220073174?text=${waMessage}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>{t.booking.openWhatsappCta}</span>
                  </a>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 rounded-xl bg-stone-200 hover:bg-stone-300 text-slate-800 font-medium text-sm transition-colors cursor-pointer"
                  >
                    {t.booking.fillAnotherCta}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      {t.booking.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder={t.booking.namePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 focus:border-[#0E627C] focus:ring-2 focus:ring-[#0E627C]/20 outline-none text-slate-900 text-sm transition-all"
                    />
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      {t.booking.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t.booking.phonePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 focus:border-[#0E627C] focus:ring-2 focus:ring-[#0E627C]/20 outline-none text-slate-900 text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      {t.booking.emailLabel}
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.booking.emailPlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 focus:border-[#0E627C] focus:ring-2 focus:ring-[#0E627C]/20 outline-none text-slate-900 text-sm transition-all"
                    />
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      {t.booking.dateLabel}
                    </label>
                    <input
                      type="date"
                      value={tourDate}
                      onChange={(e) => setTourDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 focus:border-[#0E627C] focus:ring-2 focus:ring-[#0E627C]/20 outline-none text-slate-900 text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Tour package select */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      {t.booking.packageLabel}
                    </label>
                    <select
                      value={packageId}
                      onChange={(e) => setPackageId(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 focus:border-[#0E627C] focus:ring-2 focus:ring-[#0E627C]/20 outline-none text-slate-900 text-sm transition-all cursor-pointer"
                    >
                      {TOUR_PACKAGES.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.name} ({p.days} {language === 'ru' ? 'дней' : 'days'})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Participants */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      {t.booking.ridersLabel}
                    </label>
                    <select
                      value={participants}
                      onChange={(e) => setParticipants(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 focus:border-[#0E627C] focus:ring-2 focus:ring-[#0E627C]/20 outline-none text-slate-900 text-sm transition-all cursor-pointer"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Riding skill */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {t.booking.levelLabel}
                  </label>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    {[
                      { id: 'beginner', label: t.calculator.levelBeginner },
                      { id: 'intermediate', label: t.calculator.levelIntermediate },
                      { id: 'advanced', label: t.calculator.levelAdvanced },
                    ].map((lvl) => (
                      <button
                        type="button"
                        key={lvl.id}
                        onClick={() => setRidingLevel(lvl.id as SkillLevel)}
                        className={`py-2.5 px-2 rounded-xl text-center border font-medium cursor-pointer transition-colors ${
                          ridingLevel === lvl.id
                            ? 'bg-[#0E627C] text-white border-[#0E627C]'
                            : 'bg-white border-stone-300 text-slate-700 hover:bg-stone-50'
                        }`}
                      >
                        {lvl.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Comments */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {t.booking.wishesLabel}
                  </label>
                  <textarea
                    rows={3}
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    placeholder={t.booking.wishesPlaceholder}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 focus:border-[#0E627C] focus:ring-2 focus:ring-[#0E627C]/20 outline-none text-slate-900 text-sm transition-all resize-none"
                  />
                </div>

                {/* Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-4 rounded-xl bg-gradient-to-r from-[#C99753] to-[#B37F38] text-slate-950 font-bold text-base shadow-md hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t.booking.submitCta}</span>
                  </button>

                  <a
                    href={`https://wa.me/996220073174?text=${waMessage}`}
                    target="_blank"
                    rel="noreferrer"
                    className="py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2 text-center"
                    title="WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>{t.booking.whatsappCta}</span>
                  </a>
                </div>

                <p className="text-[11px] text-slate-500 text-center">
                  {t.booking.privacyNotice}
                </p>
              </form>
            )}
          </div>

          {/* Contacts Information Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0A2540] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-white/10">
              <h3 className="text-2xl font-bold font-editorial mb-6">
                {t.booking.directContactsTitle}
              </h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-amber-300 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">{t.booking.phoneTitle}</div>
                    <a
                      href="tel:+996220073174"
                      className="text-base font-bold text-white hover:text-amber-300 transition-colors"
                    >
                      +996 220 073 174
                    </a>
                    <div className="text-xs text-emerald-300 mt-0.5">{t.booking.phoneSub}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-amber-300 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">{t.booking.emailTitle} (Gmail)</div>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=abibullakyzyaizhamal94@gmail.com&su=Song-Kul%20Horseback%20Tour%20Inquiry"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm sm:text-base font-bold text-white hover:text-amber-300 transition-colors break-all"
                    >
                      abibullakyzyaizhamal94@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-amber-300 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">{t.booking.locationsTitle}</div>
                    <div className="font-semibold text-white">{t.booking.locationsBishkek}</div>
                    <div className="text-xs text-slate-300 mt-1">
                      {t.booking.locationsBase}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-amber-300 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">{t.booking.hoursTitle}</div>
                    <div className="font-semibold text-white">{t.booking.hoursValue}</div>
                  </div>
                </div>
              </div>

              {/* Live World Clocks (Bishkek, France, Japan) */}
              <div className="pt-5 mt-5 border-t border-white/10">
                <WorldClockBar variant="card" />
              </div>

              {/* Social links */}
              <div className="pt-6 mt-6 border-t border-white/10">
                <div className="text-xs text-slate-400 uppercase tracking-wider mb-3">
                  {t.booking.socialsTitle}
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://wa.me/996220073174"
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-xl bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors"
                    title="WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>

                  <a
                    href="https://t.me/sonkul_tours"
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-xl bg-sky-600/30 border border-sky-500/40 text-sky-300 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-colors"
                    title="Telegram"
                  >
                    <Send className="w-5 h-5" />
                  </a>

                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-xl bg-pink-600/30 border border-pink-500/40 text-pink-300 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors"
                    title="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
