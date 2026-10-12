import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, MessageSquareQuote, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/tourData';
import { useI18n } from '../context/I18nContext';

export default function TestimonialsSection() {
  const { t } = useI18n();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlay]);

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#0E627C] uppercase mb-3">
            <MessageSquareQuote className="w-4 h-4" />
            <span>{t.testimonials.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 font-editorial tracking-tight mb-4">
            {t.testimonials.title}
          </h2>
          <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="font-bold text-slate-900">4.98 / 5.0</span>
            <span className="text-slate-400">·</span>
            <span>{t.testimonials.scoreText}</span>
          </div>
        </div>

        {/* Testimonials Slider Card */}
        <div
          className="max-w-4xl mx-auto relative bg-[#FAF7F2] rounded-3xl p-6 sm:p-10 md:p-12 border border-stone-200 shadow-md"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          {/* Top quote icon & Tour info */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-stone-200">
            <div className="flex items-center gap-4">
              <img
                src={current.avatar}
                alt={current.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-[#0E627C] shadow-sm"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-slate-900 text-lg">{current.name}</h3>
                  <span className="text-lg" title={current.location}>
                    {current.countryFlag}
                  </span>
                </div>
                <div className="text-xs text-slate-500">{current.location}</div>
              </div>
            </div>

            <div className="text-right">
              <span className="inline-block px-3 py-1 bg-white border border-stone-200 rounded-full text-xs font-semibold text-[#0E627C]">
                {current.tour}
              </span>
              <div className="text-[11px] text-slate-500 mt-1">
                {t.testimonials.experienceLabel}{' '}
                <span className="font-medium text-slate-700">{current.riderExperience}</span>
              </div>
            </div>
          </div>

          {/* Stars */}
          <div className="flex items-center gap-1 text-amber-400 mb-6">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>

          {/* Review text */}
          <blockquote className="text-slate-700 text-base sm:text-lg md:text-xl font-editorial italic leading-relaxed mb-8">
            «{current.review}»
          </blockquote>

          {/* Verified traveler badge */}
          <div className="flex items-center gap-2 text-xs font-medium text-emerald-700 mb-8">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>
              {t.testimonials.verifiedReview} {current.date}
            </span>
          </div>

          {/* Slider controls bottom bar */}
          <div className="flex items-center justify-between pt-6 border-t border-stone-200">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx ? 'w-8 bg-[#0E627C]' : 'w-2.5 bg-stone-300 hover:bg-stone-400'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-white border border-stone-200 text-slate-700 hover:text-slate-900 hover:bg-stone-100 flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-white border border-stone-200 text-slate-700 hover:text-slate-900 hover:bg-stone-100 flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
