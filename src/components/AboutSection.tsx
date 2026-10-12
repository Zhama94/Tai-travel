import { useState } from 'react';
import { Compass, Flame, Moon, Trees } from 'lucide-react';
import { useI18n } from '../context/I18nContext';

export default function AboutSection() {
  const { t, language } = useI18n();
  const [activeTab, setActiveTab] = useState<'lake' | 'yurts' | 'horses' | 'culture'>('lake');

  const tabContent = {
    lake: {
      title:
        language === 'ru'
          ? 'Зеркало Тянь-Шаня на высоте 3 016 метров'
          : language === 'fr'
          ? 'Miroir du Tian Shan à 3 016 m d’altitude'
          : language === 'de'
          ? 'Spiegel des Tienschan auf 3.016 m Höhe'
          : language === 'pl'
          ? 'Zwierciadło Tien-szan na wysokości 3 016 m n.p.m.'
          : 'Mirror of the Tian Shan at 3,016 Meters',
      subtitle:
        language === 'ru'
          ? 'Второе по величине озеро Кыргызстана и царство нетронутой природы'
          : language === 'fr'
          ? 'Le deuxième plus grand lac du Kirghizistan et royaume sauvage'
          : language === 'de'
          ? 'Der zweitgrößte See Kirgisistans und Reich unberührter Natur'
          : language === 'pl'
          ? 'Drugie co do wielkości jezioro Kirgistanu i królestwo dzikiej przyrody'
          : 'Kyrgyzstan’s second-largest lake and sanctuary of wild nature',
      desc:
        language === 'ru'
          ? 'Озеро Сон-Куль (Сонкёль) расположено в огромной высокогорной котловине среди альпийских лугов хребта Сонкультоо. Здесь нет фабрик, асфальтированных шоссе и линий электропередач. Вода в озере меняет оттенки от ультрамаринового до глубокого бирюзового.'
          : language === 'fr'
          ? 'Le lac Son-Koul s’étend dans une vaste cuvette alpine entourée des crêtes du Sonkoultoo. Sans usines ni routes asphaltées, ses eaux changent d’azur à turquoise profond selon le soleil et le vent.'
          : language === 'de'
          ? 'Der Song-Köl-See liegt in einem riesigen Hochgebirgskessel, umrahmt von den Hängen des Songköltoo. Keine Fabriken, keine asphaltierten Straßen – das Wasser wechselt je nach Lichteinfall von Ultramarin zu Türkis.'
          : language === 'pl'
          ? 'Jezioro Song-Kul leży w rozległej kotlinie wysokogórskiej wśród łąk pasma Songköltoo. Brak tu fabryk i asfaltowych dróg, a woda mieni się odcieniami od ultramaryny po głęboki turkus.'
          : 'Lake Song-Kul rests in a high alpine basin bordered by the Songköltoo range. With no factories or paved highways, its water shifts from brilliant ultramarine to deep turquoise.',
      points: [
        language === 'ru' ? 'Площадь зеркала 270 км² на высоте 3 016 м' : 'Surface area of 270 km² at 3,016 m altitude',
        language === 'ru' ? 'Доступно с июня по начало октября' : 'Accessible exclusively from June to early October',
        language === 'ru' ? 'Приют для горных гусей, журавлей-красавок и козерогов' : 'Habitat for bar-headed geese, demoiselle cranes, and ibex',
      ],
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    },
    yurts: {
      title:
        language === 'ru'
          ? 'Аутентичный ночлег в юртах (Боз-үй)'
          : language === 'fr'
          ? 'Nuits authentiques sous yourte nomade (Boz-Üi)'
          : language === 'de'
          ? 'Authentische Nächte in Filzjurten (Boz-Üi)'
          : language === 'pl'
          ? 'Autentyczny nocleg w jurcie koczowników (Boz-Üi)'
          : 'Authentic Yurt Experience (Boz-Üi)',
      subtitle:
        language === 'ru'
          ? 'Тысячелетняя мудрость кочевого дома с живым теплом печи'
          : language === 'fr'
          ? 'Sagesse millénaire de l’habitat nomade et chaleur du poêle'
          : language === 'de'
          ? 'Jahrtausendealte Weisheit nomadischer Behausung mit warmem Ofen'
          : language === 'pl'
          ? 'Tysiącletnia mądrość domu koczowników i ciepło pieca'
          : 'Ancient nomadic craftsmanship warmed by iron stoves',
      desc:
        language === 'ru'
          ? 'Юрта — это совершенная экосистема из деревянного каркаса (кереге) и толстого натурального войлока. В центре установлена чугунная печь, согревающая даже в прохладные высокогорные ночи. Вы засыпаете под шелест ветра и мерцание звезд через тундук.'
          : language === 'fr'
          ? 'La yourte traditionnelle est conçue en bois et feutre de laine de mouton. Un poêle central en fonte réchauffe l’intérieur même lors des nuits fraîches en montagne. On s’endort bercé par le vent sous la couronne étoilée du tunduk.'
          : language === 'de'
          ? 'Die Jurte besteht aus Holzgitter (Kerege) und dickem Naturwollfilz. Der gusseiserne Ofen im Zentrum spendet selbst in kühlen Gebirgsnächten wohlige Wärme unter dem Sternenkranz des Tündük.'
          : language === 'pl'
          ? 'Jurta to konstrukcja z drewnianej kratownicy i grubego filcu owczego. Żeliwny piecyk w środku zapewnia przytulne ciepło nawet w chłodne noce na hali pod koroną tunduku.'
          : 'The yurt is an eco-friendly dwelling of willow lattices and thick sheep wool felt. A central wood stove provides cozy warmth during crisp mountain evenings.',
      points: [
        language === 'ru' ? 'Экологичные материалы: дерево и чистый войлок' : 'Natural materials: timber frames and virgin wool felt',
        language === 'ru' ? 'Комфортные постели с теплыми одеялами' : 'Comfortable beds with thick quilts and clean linens',
        language === 'ru' ? 'Чаепитие с домашним каймаком и горячими боорсоками' : 'Tea ceremonies with local clotted cream (kaymak) and fried bread',
      ],
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80',
    },
    horses: {
      title:
        language === 'ru'
          ? 'Кыргызские горные скакуны'
          : language === 'fr'
          ? 'Les chevaux de montagne kirghizes'
          : language === 'de'
          ? 'Kirgisische Gebirgspferde'
          : language === 'pl'
          ? 'Kirgiskie konie górskie'
          : 'Hardy Kyrgyz Mountain Horses',
      subtitle:
        language === 'ru'
          ? 'Невероятная выносливость, добрый нрав и абсолютная надежность'
          : language === 'fr'
          ? 'Endurance exceptionnelle, tempérament calme et pied sûr'
          : language === 'de'
          ? 'Unglaubliche Ausdauer, sanftes Wesen und absolute Trittsicherheit'
          : language === 'pl'
          ? 'Niezwykła wytrzymałość, łagodny charakter i pewny krok'
          : 'Remarkable endurance, surefootedness, and kind temperament',
      desc:
        language === 'ru'
          ? 'Лошадь для кочевника — "крылья человека" (ат — адамдын канаты). Наши лошади выращены на высокогорных пастбищах, они спокойны на каменистых тропах, терпеливы к новичкам и чутко реагируют на поводья.'
          : language === 'fr'
          ? 'Pour le nomade, le cheval est "les ailes de l’homme". Élevés sur les hauts plateaux, ils négocient les sentiers escarpés avec une maîtrise innée et se montrent doux et prévenants avec les débutants.'
          : language === 'de'
          ? 'Für Nomaden ist das Pferd "die Flügel des Menschen". Sie wachsen auf den Höhenweiden auf, bleiben auf schmalen Steigen gelassen und eignen sich auch ideal für Reitanfänger.'
          : language === 'pl'
          ? 'Dla koczownika koń to „skrzydła człowieka”. Te konie wyrosły na halach, pewnie stawiają kroki na kamienistych szlakach i są niezwykle cierpliwe wobec początkujących.'
          : 'To nomadic people, horses are "the wings of man". Raised on high alpine pastures, they navigate steep rock trails calmly and accommodate riders of all experience levels.',
      points: [
        language === 'ru' ? 'Идеальная порода для горных переходов и перевалов' : 'Specialized mountain breed bred for high-altitude passes',
        language === 'ru' ? 'Индивидуальный подбор коня под каждого всадника' : 'Personal matching of horse temperament to rider experience',
        language === 'ru' ? 'Удобные туристические и национальные седла' : 'Comfortable trail riding saddles with soft fleece covers',
      ],
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    },
    culture: {
      title:
        language === 'ru'
          ? 'Гостеприимство и традиции Джайлоо'
          : language === 'fr'
          ? 'Hospitalité et traditions du Jailoo'
          : language === 'de'
          ? 'Gastfreundschaft und Bräuche des Dschailoo'
          : language === 'pl'
          ? 'Gościnność i tradycje Dżajloo'
          : 'Nomadic Hospitality on the Jailoo',
      subtitle:
        language === 'ru'
          ? 'Погрузитесь в образ жизни, который почти не изменился за века'
          : language === 'fr'
          ? 'Plongez dans un mode de vie préservé depuis des siècles'
          : language === 'de'
          ? 'Tauchen Sie ein in eine jahrhundertealte Lebensweise'
          : language === 'pl'
          ? 'Zanurz się w kulturze, która trwa niezmiennie od wieków'
          : 'Experience an authentic lifestyle untouched by centuries',
      desc:
        language === 'ru'
          ? 'Каждое лето чабаны поднимаются со своими семьями на Джайлоо. Здесь вас встретят как почетных гостей: предложат целебный кымыз, расскажут легенды и сыграют мелодии на комузе.'
          : language === 'fr'
          ? 'Chaque été, les bergers montent au Jailoo avec leurs troupeaux. Vous serez accueillis avec honneur : dégustation de kymyz (lait de jument fermenté), récits épiques et mélodies au komuz.'
          : language === 'de'
          ? 'Jeden Sommer ziehen Hirten mit ihren Familien auf die Sommerweiden. Als Gast werden Sie herzlich empfangen mit frischem Kymyz, Sagen aus dem Manas-Epos und Klängen der Komuz.'
          : language === 'pl'
          ? 'Każdego lata pasterze przenoszą się z rodzinami na hale Dżajloo. Przyjmą Cię z szacunkiem: poczęstują kumysem, opowiedzą legendy i zagrają na tradycyjnym komuzie.'
          : 'Every summer shepherd families ascend to the Jailoo summer pastures. Guests are welcomed with warmth: fresh kymyz, stories of the Manas epic, and melodies on the komuz lute.',
      points: [
        language === 'ru' ? 'Национальные блюда: куурдак, бешбармак, кымыз' : 'Traditional cuisine: kuurdak, beshbarmak, fresh kymyz',
        language === 'ru' ? 'Конные игры кочевников (Кыз куу, Улак тартыш)' : 'Nomadic horse games demonstrations (Kyz Kuumai, Kok-Boru)',
        language === 'ru' ? 'Настоящий цифровой детокс без городской суеты' : 'A genuine digital detox free from city sirens and screen alerts',
      ],
      image: 'https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=1200&q=80',
    },
  };

  const current = tabContent[activeTab];

  return (
    <section id="about" className="py-24 bg-[#FAF7F2] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0E627C]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#26533C]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#0E627C] uppercase mb-3">
            <Compass className="w-4 h-4" />
            <span>{t.about.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 font-editorial tracking-tight mb-5">
            {t.about.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {t.about.subtitle}
          </p>
        </div>

        {/* 4 Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200/80 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0E627C] flex items-center justify-center mb-4">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{t.about.statAltitude}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {t.about.statAltitudeDesc}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200/80 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
              <Flame className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{t.about.statYurts}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {t.about.statYurtsDesc}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200/80 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
              <Trees className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{t.about.statNature}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {t.about.statNatureDesc}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200/80 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center mb-4">
              <Moon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{t.about.statStars}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {t.about.statStarsDesc}
            </p>
          </div>
        </div>

        {/* Interactive Deep-Dive Explorer Tabs */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm border border-stone-200">
          {/* Tabs bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 pb-8 border-b border-stone-200">
            <button
              onClick={() => setActiveTab('lake')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl font-medium text-sm transition-all cursor-pointer ${
                activeTab === 'lake'
                  ? 'bg-[#0E627C] text-white shadow-md'
                  : 'bg-stone-100 text-slate-600 hover:bg-stone-200'
              }`}
            >
              {t.about.tabLake}
            </button>
            <button
              onClick={() => setActiveTab('yurts')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl font-medium text-sm transition-all cursor-pointer ${
                activeTab === 'yurts'
                  ? 'bg-[#0E627C] text-white shadow-md'
                  : 'bg-stone-100 text-slate-600 hover:bg-stone-200'
              }`}
            >
              {t.about.tabYurts}
            </button>
            <button
              onClick={() => setActiveTab('horses')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl font-medium text-sm transition-all cursor-pointer ${
                activeTab === 'horses'
                  ? 'bg-[#0E627C] text-white shadow-md'
                  : 'bg-stone-100 text-slate-600 hover:bg-stone-200'
              }`}
            >
              {t.about.tabHorses}
            </button>
            <button
              onClick={() => setActiveTab('culture')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl font-medium text-sm transition-all cursor-pointer ${
                activeTab === 'culture'
                  ? 'bg-[#0E627C] text-white shadow-md'
                  : 'bg-stone-100 text-slate-600 hover:bg-stone-200'
              }`}
            >
              {t.about.tabCulture}
            </button>
          </div>

          {/* Tab Content Display */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-8">
            <div className="order-2 lg:order-1">
              <span className="text-xs uppercase tracking-wider text-[#C99753] font-bold">
                {current.subtitle}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-editorial mt-1 mb-4">
                {current.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-base mb-6">
                {current.desc}
              </p>

              <div className="space-y-3">
                {current.points.map((pt, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span className="text-sm font-medium text-slate-700">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 relative rounded-2xl overflow-hidden shadow-lg h-72 sm:h-96">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs bg-black/40 backdrop-blur-md py-2 px-3 rounded-lg border border-white/20">
                {t.about.cardLocation}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
