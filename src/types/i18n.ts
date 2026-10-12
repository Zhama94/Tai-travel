export type Language = 'ru' | 'en' | 'fr' | 'de' | 'pl';

export interface LanguageInfo {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
}

export const SUPPORTED_LANGUAGES: LanguageInfo[] = [
  { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' },
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'pl', name: 'Polish', nativeName: 'Polski', flag: '🇵🇱' },
];

export interface TranslationDictionary {
  nav: {
    about: string;
    itinerary: string;
    inclusions: string;
    calculator: string;
    gallery: string;
    testimonials: string;
    faq: string;
    contacts: string;
    bookNow: string;
    whatsapp: string;
    currency: string;
    language: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleHighlight: string;
    subtitle: string;
    bookCta: string;
    videoCta: string;
    stat1Value: string;
    stat1Label: string;
    stat2Value: string;
    stat2Label: string;
    stat3Value: string;
    stat3Label: string;
    stat4Value: string;
    stat4Label: string;
  };
  about: {
    badge: string;
    title: string;
    subtitle: string;
    statAltitude: string;
    statAltitudeDesc: string;
    statYurts: string;
    statYurtsDesc: string;
    statNature: string;
    statNatureDesc: string;
    statStars: string;
    statStarsDesc: string;
    tabLake: string;
    tabYurts: string;
    tabHorses: string;
    tabCulture: string;
    cardLocation: string;
  };
  itinerary: {
    badge: string;
    title: string;
    subtitle: string;
    durationLabel: string;
    fromPerson: string;
    totalDistance: string;
    maxAltitude: string;
    difficulty: string;
    suitableForBeginners: string;
    bookThisTour: string;
    expandDay: string;
    collapseDay: string;
    inSaddle: string;
    elevationChange: string;
    routeLabel: string;
    nightLabel: string;
    mealsLabel: string;
    highlightsLabel: string;
    dayPrefix: string;
  };
  inclusions: {
    badge: string;
    title: string;
    subtitle: string;
    includedTitle: string;
    includedSub: string;
    comfortPromise: string;
    comfortPromiseBold: string;
    excludedTitle: string;
    excludedSub: string;
    supportTitle: string;
    supportDesc: string;
    gpsTracker: string;
  };
  calculator: {
    badge: string;
    title: string;
    subtitle: string;
    step1: string;
    step2: string;
    step3: string;
    step4: string;
    groupDiscount: string;
    personCount1: string;
    personCountPlural: string;
    levelBeginner: string;
    levelBeginnerSub: string;
    levelIntermediate: string;
    levelIntermediateSub: string;
    levelAdvanced: string;
    levelAdvancedSub: string;
    quoteTitle: string;
    baseTour: string;
    discountLine: string;
    addonsLine: string;
    levelLine: string;
    totalGroup: string;
    orPerPerson: string;
    bookQuoteCta: string;
    noDepositNotice: string;
    perPersonBadge: string;
    perTourBadge: string;
  };
  gallery: {
    badge: string;
    title: string;
    subtitle: string;
    catAll: string;
    catHorses: string;
    catLake: string;
    catYurts: string;
    catMountains: string;
    catCulture: string;
    photoCounter: string;
  };
  testimonials: {
    badge: string;
    title: string;
    scoreText: string;
    experienceLabel: string;
    verifiedReview: string;
    dateLabel: string;
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    gearTitle: string;
    gearSub: string;
    gearNotice: string;
    essentialBadge: string;
  };
  booking: {
    badge: string;
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    dateLabel: string;
    packageLabel: string;
    ridersLabel: string;
    levelLabel: string;
    wishesLabel: string;
    wishesPlaceholder: string;
    submitCta: string;
    whatsappCta: string;
    privacyNotice: string;
    successTitle: string;
    successDesc: string;
    bookingNumberLabel: string;
    openWhatsappCta: string;
    fillAnotherCta: string;
    directContactsTitle: string;
    phoneTitle: string;
    phoneSub: string;
    emailTitle: string;
    locationsTitle: string;
    locationsBishkek: string;
    locationsBase: string;
    hoursTitle: string;
    hoursValue: string;
    socialsTitle: string;
  };
  footer: {
    brandDesc: string;
    ecoPledge: string;
    navTitle: string;
    packagesTitle: string;
    contactTitle: string;
    allRights: string;
    privacy: string;
    terms: string;
    safetyRules: string;
  };
  modals: {
    quickBookingTitle: string;
    quickBookingSub: string;
    estimatedCost: string;
    bookButton: string;
    close: string;
    videoTitle: string;
    videoSubtitle: string;
    pause: string;
    play: string;
    soundOn: string;
    soundOff: string;
  };
}
