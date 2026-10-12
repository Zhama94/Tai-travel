import { Compass, Phone, Mail, MessageCircle, Send, Instagram } from 'lucide-react';
import { useI18n } from '../context/I18nContext';

export default function Footer() {
  const { t, language } = useI18n();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#071829] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand & mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0E627C] to-[#26533C] flex items-center justify-center text-amber-200 border border-amber-300/30">
                <Compass className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white font-editorial">
                  SON-KUL <span className="text-[#C99753] font-sans text-xs tracking-widest uppercase font-semibold">Nomad Tours</span>
                </span>
                <span className="text-[10px] uppercase tracking-wider text-slate-400">
                  {language === 'ru' ? 'Аутентичные конные туры в Кыргызстане' : 'Authentic Horseback Expeditions in Kyrgyzstan'}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              {t.footer.brandDesc}
            </p>

            <div className="flex items-center gap-2 text-xs text-amber-300/90 font-medium pt-1">
              <span>{t.footer.ecoPledge}</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-4 font-sans">
              {t.footer.navTitle}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#itinerary" className="hover:text-white transition-colors">
                  {t.nav.itinerary}
                </a>
              </li>
              <li>
                <a href="#inclusions" className="hover:text-white transition-colors">
                  {t.nav.inclusions}
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">
                  {t.nav.calculator}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  {t.nav.testimonials}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  {t.nav.faq}
                </a>
              </li>
            </ul>
          </div>

          {/* Tour packages */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-4 font-sans">
              {t.footer.packagesTitle}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#itinerary" className="hover:text-white transition-colors">
                  Song-Kul Express (3 d.)
                </a>
              </li>
              <li>
                <a href="#itinerary" className="hover:text-white transition-colors">
                  Classic Song-Kul (5 d.)
                </a>
              </li>
              <li>
                <a href="#itinerary" className="hover:text-white transition-colors">
                  Tian Shan Circuit (7 d.)
                </a>
              </li>
              <li>
                <a href="#contacts" className="hover:text-white transition-colors">
                  Custom & Private Expeditions
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">
                  Group Discounts up to 10%
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts & Socials */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-4 font-sans">
              {t.footer.contactTitle}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-300" />
                <a href="tel:+996220073174" className="hover:text-white transition-colors">
                  +996 220 073 174
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=abibullakyzyaizhamal94@gmail.com&su=Song-Kul%20Horseback%20Tour%20Inquiry"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors truncate"
                  title="Gmail: abibullakyzyaizhamal94@gmail.com"
                >
                  abibullakyzyaizhamal94@gmail.com
                </a>
              </li>
              <li className="pt-2 text-[11px] text-slate-400">
                Bishkek · Naryn · Kochkor · Song-Kul
              </li>
            </ul>

            <div className="flex items-center gap-2.5 mt-4">
              <a
                href="https://wa.me/996220073174"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 text-emerald-400 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://t.me/sonkul_tours"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 text-sky-400 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-colors"
                title="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 text-pink-400 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright and legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} Son-Kul Nomad Tours. {t.footer.allRights}</p>
          <div className="flex items-center gap-6">
            <span>{t.footer.privacy}</span>
            <span>{t.footer.terms}</span>
            <span>{t.footer.safetyRules}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
