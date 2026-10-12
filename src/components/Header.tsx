import { useState, useEffect, useRef } from 'react';
import { Compass, Menu, X, Phone, MessageCircle, Mail, Globe, ChevronDown } from 'lucide-react';
import { Currency } from '../types/tour';
import { useI18n } from '../context/I18nContext';
import { SUPPORTED_LANGUAGES, Language } from '../types/i18n';
import WorldClockBar from './WorldClockBar';

interface HeaderProps {
  currentCurrency: Currency;
  onCurrencyChange: (currency: Currency) => void;
  onOpenBookingModal: (tourId?: string) => void;
}

export default function Header({
  currentCurrency,
  onCurrencyChange,
  onOpenBookingModal,
}: HeaderProps) {
  const { language, setLanguage, t } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.itinerary, href: '#itinerary' },
    { label: t.nav.inclusions, href: '#inclusions' },
    { label: t.nav.calculator, href: '#calculator' },
    { label: t.nav.gallery, href: '#gallery' },
    { label: t.nav.testimonials, href: '#testimonials' },
    { label: t.nav.faq, href: '#faq' },
    { label: t.nav.contacts, href: '#contacts' },
  ];

  const currentLangInfo = SUPPORTED_LANGUAGES.find((l) => l.code === language) || SUPPORTED_LANGUAGES[0];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A2540]/95 backdrop-blur-md shadow-lg shadow-black/15 border-b border-white/10'
            : 'bg-gradient-to-b from-black/85 via-black/40 to-transparent'
        }`}
      >
        <WorldClockBar variant="topbar" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0E627C] to-[#26533C] flex items-center justify-center text-amber-200 shadow-md group-hover:scale-105 transition-transform border border-amber-300/30">
                <Compass className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white font-editorial flex items-center gap-1.5">
                  SON-KUL <span className="text-[#C99753] font-sans text-xs tracking-widest uppercase font-semibold">Nomad</span>
                </span>
                <span className="text-[10px] uppercase tracking-wider text-slate-300 font-medium">
                  {language === 'ru' ? 'Конные туры в Кыргызстане' : language === 'fr' ? 'Randonnées équestres Kirghizistan' : language === 'de' ? 'Reittouren in Kirgisistan' : language === 'pl' ? 'Wyprawy konne w Kirgistanie' : 'Horseback Tours in Kyrgyzstan'}
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-200 hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C99753] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right actions: Language Switcher, Currency switcher, WhatsApp & Booking button */}
            <div className="hidden md:flex items-center gap-2.5">
              {/* Language Dropdown Selector */}
              <div className="relative" ref={langDropdownRef}>
                <button
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/15 text-xs font-medium text-white transition-colors cursor-pointer"
                  title="Выбрать язык / Select language"
                  aria-expanded={langDropdownOpen}
                >
                  <span className="text-sm">{currentLangInfo.flag}</span>
                  <span className="font-semibold uppercase tracking-wider text-slate-200">
                    {currentLangInfo.code}
                  </span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </button>

                {langDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-44 bg-[#0A2540] border border-white/15 rounded-xl shadow-2xl py-1.5 z-50 animate-fadeIn">
                    <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-white/10 mb-1">
                      {t.nav.language}
                    </div>
                    {SUPPORTED_LANGUAGES.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLanguage(l.code);
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full px-3 py-2 text-left text-xs flex items-center justify-between transition-colors cursor-pointer ${
                          language === l.code
                            ? 'bg-[#0E627C] text-white font-bold'
                            : 'text-slate-300 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-base">{l.flag}</span>
                          <span>{l.nativeName}</span>
                        </div>
                        <span className="text-[10px] uppercase opacity-75 font-mono">
                          {l.code}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Currency Selector */}
              <div className="flex items-center bg-white/10 backdrop-blur-sm border border-white/15 rounded-lg p-0.5 text-xs text-slate-300">
                {(['USD', 'EUR', 'KGS', 'RUB'] as Currency[]).map((curr) => (
                  <button
                    key={curr}
                    onClick={() => onCurrencyChange(curr)}
                    className={`px-2 py-1 rounded-md font-medium transition-all cursor-pointer ${
                      currentCurrency === curr
                        ? 'bg-[#0E627C] text-white shadow-sm'
                        : 'hover:text-white text-slate-300'
                    }`}
                    title={`Показывать цены в ${curr}`}
                  >
                    {curr}
                  </button>
                ))}
              </div>

              {/* Quick WhatsApp contact link */}
              <a
                href="https://wa.me/996220073174?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20horseback%20tours%20to%20Song-Kul"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-300 hover:text-white bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/30 rounded-lg transition-colors"
                title="WhatsApp: +996 220 073 174"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span className="hidden 2xl:inline">WhatsApp</span>
              </a>

              {/* Quick Gmail contact button */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=abibullakyzyaizhamal94@gmail.com&su=Song-Kul%20Horseback%20Tour%20Inquiry"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-rose-300 hover:text-white bg-rose-950/40 hover:bg-rose-900/60 border border-rose-500/30 rounded-lg transition-colors"
                title="Gmail: abibullakyzyaizhamal94@gmail.com"
              >
                <Mail className="w-4 h-4 text-rose-400" />
                <span className="hidden 2xl:inline">Gmail</span>
              </a>

              {/* Main Booking CTA */}
              <button
                onClick={() => onOpenBookingModal()}
                className="px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-[#C99753] to-[#B37F38] text-slate-950 shadow-md hover:shadow-amber-500/20 hover:brightness-110 active:scale-95 transition-all cursor-pointer"
              >
                {t.nav.bookNow}
              </button>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex items-center gap-2 xl:hidden">
              {/* Quick mobile language flag trigger */}
              <button
                onClick={() => {
                  const currentIndex = SUPPORTED_LANGUAGES.findIndex((l) => l.code === language);
                  const nextIndex = (currentIndex + 1) % SUPPORTED_LANGUAGES.length;
                  setLanguage(SUPPORTED_LANGUAGES[nextIndex].code);
                }}
                className="px-2 py-1 bg-white/10 rounded-lg text-xs flex items-center gap-1 border border-white/15 text-white"
                title="Сменить язык"
              >
                <span>{currentLangInfo.flag}</span>
                <span className="uppercase text-[11px] font-bold">{currentLangInfo.code}</span>
              </button>

              <button
                onClick={() => onOpenBookingModal()}
                className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#C99753] text-slate-950 sm:hidden"
              >
                {t.nav.bookNow}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                aria-label="Главное меню"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-md xl:hidden flex flex-col pt-24 px-6 pb-8 animate-fadeIn overflow-y-auto">
          {/* Mobile World Clock Widget */}
          <div className="pb-4 border-b border-white/10">
            <WorldClockBar variant="compact" />
          </div>

          {/* Mobile Language Selector Grid */}
          <div className="py-4 border-b border-white/10">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-2">
              <Globe className="w-3.5 h-3.5 text-amber-300" />
              <span>{t.nav.language}:</span>
            </div>
            <div className="grid grid-cols-5 gap-1.5">
              {SUPPORTED_LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLanguage(l.code)}
                  className={`py-2 rounded-xl text-center flex flex-col items-center justify-center transition-all ${
                    language === l.code
                      ? 'bg-[#0E627C] text-white font-bold ring-1 ring-white/30'
                      : 'bg-white/10 text-slate-300 hover:bg-white/20'
                  }`}
                >
                  <span className="text-base">{l.flag}</span>
                  <span className="text-[10px] uppercase font-mono mt-0.5">{l.code}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Currency row */}
          <div className="flex justify-between items-center py-4 border-b border-white/10">
            <span className="text-xs font-medium text-slate-400">{t.nav.currency}:</span>
            <div className="flex items-center bg-white/10 rounded-lg p-0.5 text-xs">
              {(['USD', 'EUR', 'KGS', 'RUB'] as Currency[]).map((curr) => (
                <button
                  key={curr}
                  onClick={() => onCurrencyChange(curr)}
                  className={`px-2.5 py-1 rounded font-medium ${
                    currentCurrency === curr ? 'bg-[#0E627C] text-white' : 'text-slate-300'
                  }`}
                >
                  {curr}
                </button>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-3 mt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-100 hover:text-[#C99753] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 pt-6 border-t border-white/10">
            <a
              href="https://wa.me/996220073174?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20horseback%20tours%20to%20Song-Kul"
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600/30 border border-emerald-500/40 text-emerald-200 font-medium text-sm"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              WhatsApp (+996 220 073 174)
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=abibullakyzyaizhamal94@gmail.com&su=Song-Kul%20Horseback%20Tour%20Inquiry"
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-rose-600/30 border border-rose-500/40 text-rose-200 font-medium text-sm"
            >
              <Mail className="w-5 h-5 text-rose-400" />
              Gmail (abibullakyzyaizhamal94@gmail.com)
            </a>

            <a
              href="tel:+996220073174"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 text-white font-medium text-sm"
            >
              <Phone className="w-4 h-4 text-amber-300" />
              +996 220 073 174
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="w-full py-3.5 rounded-xl bg-[#C99753] text-slate-950 font-bold text-base shadow-lg"
            >
              {t.nav.bookNow}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
