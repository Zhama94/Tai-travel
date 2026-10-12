import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ItinerarySection from './components/ItinerarySection';
import InclusionsSection from './components/InclusionsSection';
import CalculatorSection from './components/CalculatorSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import GearAndFaqSection from './components/GearAndFaqSection';
import BookingFormSection from './components/BookingFormSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import VideoModal from './components/VideoModal';
import LightboxModal from './components/LightboxModal';
import { Currency, GalleryItem, SkillLevel } from './types/tour';
import { I18nProvider, useI18n } from './context/I18nContext';
import { MessageCircle, ArrowUp, Mail } from 'lucide-react';

function LandingPageContent() {
  const { t } = useI18n();
  const [currentCurrency, setCurrentCurrency] = useState<Currency>('USD');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const [bookingPrefill, setBookingPrefill] = useState<{
    packageId: string;
    participants: number;
    level: SkillLevel;
    addons: string[];
  }>({
    packageId: 'songkul-5d',
    participants: 2,
    level: 'beginner',
    addons: [],
  });

  const handleOpenBookingModal = (tourId?: string) => {
    if (tourId) {
      setBookingPrefill((prev) => ({ ...prev, packageId: tourId }));
    }
    setBookingModalOpen(true);
  };

  const handleOpenBookingWithDetails = (details: {
    packageId: string;
    participants: number;
    level: SkillLevel;
    addons: string[];
  }) => {
    setBookingPrefill(details);
    setBookingModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1E293B] flex flex-col font-sans selection:bg-[#0E627C] selection:text-white">
      {/* Fixed Header with Language Switcher */}
      <Header
        currentCurrency={currentCurrency}
        onCurrencyChange={setCurrentCurrency}
        onOpenBookingModal={handleOpenBookingModal}
      />

      {/* Main Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenBookingModal={() => handleOpenBookingModal()}
          onOpenVideoModal={() => setVideoModalOpen(true)}
        />

        {/* 2. About Song-Kul Lake & Nomadic Culture */}
        <AboutSection />

        {/* 3. Detailed Day-by-Day Itinerary */}
        <ItinerarySection
          currentCurrency={currentCurrency}
          onSelectPackageForBooking={handleOpenBookingModal}
        />

        {/* 4. What's Included / Excluded & Care Standards */}
        <InclusionsSection />

        {/* 5. Interactive Price & Addons Calculator */}
        <CalculatorSection
          currentCurrency={currentCurrency}
          onOpenBookingWithDetails={handleOpenBookingWithDetails}
        />

        {/* 6. High-Res Photo Gallery */}
        <GallerySection onOpenLightbox={(item) => setLightboxItem(item)} />

        {/* 7. Real Travelers Testimonials Slider */}
        <TestimonialsSection />

        {/* 8. Gear Checklist & FAQ Accordion */}
        <GearAndFaqSection />

        {/* 9. Final Booking Form & Contacts */}
        <BookingFormSection initialPackageId={bookingPrefill.packageId} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Instant Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white backdrop-blur-md flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer border border-white/10"
          aria-label="Back to top"
          title="Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>

        {/* Gmail Direct Message Floating Bubble */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=abibullakyzyaizhamal94@gmail.com&su=Song-Kul%20Horseback%20Tour%20Inquiry"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-rose-600 hover:bg-rose-500 text-white shadow-xl shadow-rose-950/20 hover:scale-105 active:scale-95 transition-all group"
          title="Gmail: abibullakyzyaizhamal94@gmail.com"
        >
          <Mail className="w-5 h-5" />
          <span className="text-xs font-bold tracking-wide hidden sm:inline">
            Gmail
          </span>
        </a>

        {/* WhatsApp Direct Chat Floating Bubble */}
        <a
          href="https://wa.me/996220073174?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20horseback%20tours%20to%20Song-Kul"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950/20 hover:scale-105 active:scale-95 transition-all group"
          title="WhatsApp"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
          <MessageCircle className="w-5 h-5" />
          <span className="text-xs font-bold tracking-wide hidden sm:inline">
            WhatsApp
          </span>
        </a>
      </div>

      {/* Modals */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedPackageId={bookingPrefill.packageId}
        preselectedParticipants={bookingPrefill.participants}
        preselectedLevel={bookingPrefill.level}
        currentCurrency={currentCurrency}
      />

      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />

      <LightboxModal
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
        onSelect={(item) => setLightboxItem(item)}
      />
    </div>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <LandingPageContent />
    </I18nProvider>
  );
}
