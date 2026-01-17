
import React, { useEffect, useState } from 'react';
import { PageType } from '../types';
import { NAVIGATION_CLOSED, CONTACT_PHONES } from '../constants';
import ScrollReveal from '../components/ScrollReveal';
import { 
  IconAlert, 
  IconWallet, 
  IconPhone, 
  IconTruck, 
  IconShield, 
  IconClock, 
  IconArrowRight,
  IconMap,
  IconZoom,
  IconX,
  IconAnchor,
  IconChevronDown,
  IconShip
} from '../components/Icons';

interface HomeProps {
  onNavigate: (page: PageType) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedLicense, setSelectedLicense] = useState<string | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bgTranslate = scrollY * 0.35;
  const contentTranslate = scrollY * -0.12;

  const licenses = [
    {
      title: 'ЛИЦЕНЗИЯ на перевозки пассажиров',
      series: 'Серия МР-2 002014',
      image: 'https://storage.googleapis.com/uspeshnyy-projects/smit/grp134.ru/lic1.jpg'
    },
    {
      title: 'ЛИЦЕНЗИЯ на перевозки грузов',
      series: 'Серия МР-1 002015',
      image: 'https://storage.googleapis.com/uspeshnyy-projects/smit/grp134.ru/lic2.jpg'
    }
  ];

  const faqs = [
    {
      question: 'Где получить актуальную информацию о работе переправы?',
      answer: 'Актуальную информацию о работе переправы можно получить на нашем сайте в разделе «Расписание и тарифы», а также у диспетчера по телефонам: ' + CONTACT_PHONES.join(', ') + '. Помните, что работа парома напрямую зависит от погодных условий, силы ветра и ледовой обстановки на Волге.'
    },
    {
      question: 'Нужно ли бронировать место заранее?',
      answer: 'Бронирование мест заранее не требуется. Погрузка на паромы осуществляется в порядке живой очереди. Для перевозки крупногабаритной спецтехники рекомендуем предварительно проконсультироваться с диспетчером.'
    },
    {
      question: 'Сколько времени занимает переправа?',
      answer: 'Чистое время в пути составляет около 40-50 минут. Пожалуйста, закладывайте дополнительные 20 минут на погрузку и выгрузку.'
    }
  ];

  const seagullPattern = (color: string) => `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='200' viewBox='0 0 250 200'%3E%3Cpath d='M20 40 C 45 15 75 15 85 40 C 95 15 125 15 150 40' fill='none' stroke='${encodeURIComponent(color)}' stroke-width='1.2' stroke-linecap='round' opacity='0.35'/%3E%3Cpath d='M160 120 C 175 110 195 110 200 120 C 205 110 225 110 240 120' fill='none' stroke='${encodeURIComponent(color)}' stroke-width='0.8' stroke-linecap='round' opacity='0.25'/%3E%3Cpath d='M60 160 C 70 154 82 154 85 160 C 88 154 100 154 110 160' fill='none' stroke='${encodeURIComponent(color)}' stroke-width='0.6' stroke-linecap='round' opacity='0.2'/%3E%3C/svg%3E")`;

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <article className="animate-fadeIn transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative h-[100dvh] bg-[#0a0f1a] overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full will-change-transform"
          style={{ transform: `translateY(${bgTranslate}px)` }}
        >
          {/* Fallback Image - LCP Candidate */}
          <picture className="absolute inset-0 w-full h-full">
            <source 
              media="(max-width: 767px)" 
              srcSet="https://storage.googleapis.com/uspeshnyy-projects/smit/grp134.ru/herosection_m.jpg" 
            />
            <img 
              src="https://storage.googleapis.com/uspeshnyy-projects/smit/grp134.ru/herosection.jpg" 
              alt="Грузовая паромная переправа через Волгу в Камышине" 
              className="w-full h-full object-cover scale-110"
              fetchPriority="high"
            />
          </picture>
          
          {/* Mobile Video Background */}
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover scale-110 pointer-events-none md:hidden transition-opacity duration-1000"
          >
            <source src="https://storage.googleapis.com/uspeshnyy-projects/smit/grp134.ru/hero_m.mov" type="video/quicktime" />
            <source src="https://storage.googleapis.com/uspeshnyy-projects/smit/grp134.ru/hero_m.mov" />
          </video>

          {/* Desktop Video Background */}
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover scale-110 pointer-events-none hidden md:block transition-opacity duration-1000"
          >
            <source src="https://storage.googleapis.com/uspeshnyy-projects/smit/grp134.ru/hero.mp4" type="video/mp4" />
          </video>

          {/* Visual overlays */}
          <div className="absolute inset-0 bg-black/30 md:bg-black/10 backdrop-brightness-75 pointer-events-none"></div>
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/80 md:bg-gradient-to-r md:from-black/90 md:via-black/40 md:to-transparent pointer-events-none"></div>
        
        <div 
          className="relative container mx-auto px-6 h-full flex flex-col justify-start items-start pt-6 md:pt-20 will-change-transform"
          style={{ transform: `translateY(${contentTranslate}px)` }}
        >
          <div className="max-w-5xl w-full">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start w-full mb-8 md:mb-10">
              {/* Left Column: Navigation Notice */}
              {NAVIGATION_CLOSED && (
                <div 
                  className={`hero-appear bg-gradient-to-r from-red-600/90 to-red-700/90 backdrop-blur-xl text-white px-6 py-4 md:px-8 md:py-5 rounded-2xl md:rounded-[2rem] mb-6 md:mb-0 border border-white/20 inline-flex items-center w-fit shadow-[0_20px_60px_-15px_rgba(220,38,38,0.5)] animate-pulse ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: '200ms' }}
                >
                  <div className="bg-white/20 p-2.5 md:p-3 rounded-xl md:rounded-2xl mr-4 md:mr-5">
                     <IconAlert className="w-6 h-6 md:w-8 md:h-8 text-white flex-shrink-0" />
                  </div>
                  <div>
                    <h4 className="font-black uppercase tracking-widest text-[10px] md:text-xs mb-1 opacity-80 whitespace-nowrap">Навигация 2026</h4>
                    <span className="font-bold text-xs md:text-base block whitespace-nowrap">Приостановлена до апреля</span>
                  </div>
                </div>
              )}
              
              {/* Right Column: Company Badge (Desktop Only) */}
              <div 
                className={`hero-appear hidden md:block ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: '400ms' }}
              >
                <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md border border-white/10 px-6 py-2.5 rounded-full shadow-2xl">
                  <IconAnchor className="w-4 h-4 text-blue-400" />
                  <span className="text-white text-[10px] font-black tracking-[0.3em] uppercase">
                    ООО «Грузовая переправа»
                  </span>
                </div>
              </div>
            </div>
            
            <h1 
              className={`hero-appear text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-8 tracking-tighter drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] leading-[1.1] md:whitespace-nowrap ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '600ms' }}
            >
              Волжский <br className="md:hidden" /> Паром
            </h1>
            
            <p 
              className={`hero-appear text-lg md:text-2xl lg:text-3xl font-medium text-white/95 mb-14 max-w-4xl drop-shadow-lg leading-relaxed ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '800ms' }}
            >
              Надежный и быстрый путь через Волгу:<br className="hidden md:block" /> Камышин – Николаевск для пассажиров и любого вида транспорта.
            </p>
            
            <div 
              className={`hero-appear flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-6 w-full sm:w-auto ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '1000ms' }}
            >
              <button 
                onClick={() => onNavigate('schedule')}
                className="bg-white/10 backdrop-blur-xl border border-white/30 text-white font-black px-6 py-3 rounded-2xl shadow-xl hover:bg-white/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center text-sm md:text-base group w-fit sm:w-auto"
              >
                <div className="bg-blue-600/80 p-2 rounded-xl mr-3 group-hover:scale-110 transition-transform shadow-lg shadow-blue-600/20">
                   <IconWallet className="w-4 h-4 text-white" />
                </div>
                Тарифы и график
              </button>
              <button 
                onClick={() => onNavigate('contacts')}
                className="bg-white/10 backdrop-blur-2xl text-white font-black px-8 py-4 rounded-2xl shadow-xl hover:bg-white/20 hover:scale-105 active:scale-95 transition-all hidden sm:flex items-center justify-center border border-white/20 text-base group"
              >
                <div className="bg-white/20 p-2 rounded-xl mr-4 group-hover:bg-white/30 transition-all">
                   <IconPhone className="w-4 h-4 text-white" />
                </div>
                Диспетчер
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-60">
           <div className="w-px h-12 bg-gradient-to-b from-transparent to-white mb-2"></div>
           <IconChevronDown className="w-6 h-6 text-white" />
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="relative z-10 -mt-20 py-24 md:py-32 bg-gradient-to-b from-transparent via-blue-50/20 to-white dark:from-transparent dark:via-blue-900/5 dark:to-[#0a0f1a] overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.1] dark:opacity-[0.15] pointer-events-none animate-seagull-slow" 
          style={{ 
            backgroundImage: seagullPattern('#122D54'),
            backgroundSize: '300px 240px'
          }}
        ></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            <ScrollReveal stagger={1}>
              <div className="group bg-white/80 dark:bg-gray-800/60 backdrop-blur-2xl p-12 rounded-[3rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.4)] border border-white dark:border-white/5 h-full hover:-translate-y-4 transition-all duration-500">
                <div className="w-20 h-20 bg-blue-50/80 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-3xl flex items-center justify-center mb-10 shadow-inner group-hover:scale-110 transition-transform">
                  <IconTruck className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-black text-nautical dark:text-white mb-6 tracking-tight">Любой транспорт</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium text-lg">
                  Перевозим легковые авто, микроавтобусы и спецтехнику. Наш флот готов к перевозке техники массой до 600 тонн.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal stagger={2}>
              <div className="group bg-white/80 dark:bg-gray-800/60 backdrop-blur-2xl p-12 rounded-[3rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.4)] border border-white dark:border-white/5 h-full hover:-translate-y-4 transition-all duration-500">
                <div className="w-20 h-20 bg-green-50/80 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-3xl flex items-center justify-center mb-10 shadow-inner group-hover:scale-110 transition-transform">
                  <IconShield className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-black text-nautical dark:text-white mb-6 tracking-tight">Безопасность</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium text-lg">
                  Суда ежегодно проходят техническое освидетельствование и полностью укомплектованы для безопасных перевозок.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal stagger={3}>
              <div className="group bg-white/80 dark:bg-gray-800/60 backdrop-blur-2xl p-12 rounded-[3rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.4)] border border-white dark:border-white/5 h-full hover:-translate-y-4 transition-all duration-500">
                <div className="w-20 h-20 bg-orange-50/80 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded-3xl flex items-center justify-center mb-10 shadow-inner group-hover:scale-110 transition-transform">
                  <IconClock className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-black text-nautical dark:text-white mb-6 tracking-tight">Экономия времени</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium text-lg">
                  Регулярные рейсы — самый быстрый способ пересечь Волгу, сокращая путь на сотни километров объезда.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Fleet Section */}
      <section className="bg-white dark:bg-[#0a0f1a] py-24 md:py-40 overflow-hidden transition-colors">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <ScrollReveal className="order-2 lg:order-1">
            <span className="text-blue-600 dark:text-blue-400 font-black uppercase tracking-[0.4em] text-xs mb-6 block">Надежный флот ООО «Грузовая переправа»</span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-nautical dark:text-white mb-12 tracking-tighter leading-none">Наш Флот</h2>
            <div className="space-y-12">
              <div className="flex group">
                <div className="flex-shrink-0 mt-2">
                  <div className="bg-blue-600 w-5 h-5 rounded-full group-hover:scale-150 transition-transform ring-8 ring-blue-100 dark:ring-blue-900/20 shadow-lg shadow-blue-600/20"></div>
                </div>
                <div className="ml-10">
                  <h3 className="font-black text-3xl text-gray-900 dark:text-white mb-4 tracking-tight">«Марш Славянки» <span className="text-blue-600/40 dark:text-blue-400/40 font-bold ml-2 text-xl">(Проект Р-144К)</span></h3>
                  <p className="text-gray-800 dark:text-gray-300 font-medium text-xl leading-relaxed">Специализированное судно со сквозным проездом для максимально быстрой погрузки.</p>
                </div>
              </div>
              <div className="flex group">
                <div className="flex-shrink-0 mt-2">
                  <div className="bg-blue-600 w-5 h-5 rounded-full group-hover:scale-150 transition-transform ring-8 ring-blue-100 dark:ring-blue-900/20 shadow-lg shadow-blue-600/20"></div>
                </div>
                <div className="ml-10">
                  <h3 className="font-black text-3xl text-gray-900 dark:text-white mb-4 tracking-tight">«Окский-25» <span className="text-blue-600/40 dark:text-blue-400/40 font-bold ml-2 text-xl">(Проект 559Б)</span></h3>
                  <p className="text-gray-800 dark:text-gray-300 font-medium text-xl leading-relaxed">Мощный грузопассажирский паром для всех типов легкового и грузового транспорта.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-20 p-10 bg-blue-50/50 dark:bg-blue-900/10 rounded-[3rem] border-l-[8px] border-blue-600 mb-16 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                 <IconShip className="w-32 h-32" />
              </div>
              <p className="text-gray-900 dark:text-gray-100 font-bold italic text-base md:text-xl leading-relaxed relative z-10">
                "Каждое судно управляется командой профессионалов с многолетним опытом речной навигации."
              </p>
            </div>
            
            <button 
              onClick={() => onNavigate('gallery')}
              className="inline-flex items-center justify-center bg-nautical dark:bg-blue-600 text-white font-black px-14 py-6 rounded-[2.5rem] hover:opacity-90 hover:scale-105 active:scale-95 transition-all shadow-2xl group text-xl"
            >
              Перейти в галерею
              <IconArrowRight className="w-7 h-7 ml-5 group-hover:translate-x-3 transition-transform" />
            </button>
          </ScrollReveal>
          
          <ScrollReveal className="order-1 lg:order-2 grid grid-cols-1 lg:grid-cols-2 gap-8 h-fit">
            <div className="lg:hidden relative overflow-hidden rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] h-[250px]">
              <img src="https://storage.googleapis.com/uspeshnyy-projects/smit/grp134.ru/main4.jpg" alt="Паромная переправа" loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>

            <div className="hidden lg:block relative overflow-hidden rounded-[3.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] h-[550px]">
              <img src="https://storage.googleapis.com/uspeshnyy-projects/smit/grp134.ru/main1.jpg" alt="Паром Марш Славянки" loading="lazy" decoding="async" className="w-full h-full object-cover hover:scale-110 transition-transform duration-[1.5s]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="hidden lg:grid grid-rows-2 gap-8">
               <div className="relative overflow-hidden rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]">
                 <img src="https://storage.googleapis.com/uspeshnyy-projects/smit/grp134.ru/main2.jpg" alt="Погрузка транспорта" loading="lazy" decoding="async" className="w-full h-full object-cover hover:scale-110 transition-transform duration-[1.5s]" />
               </div>
               <div className="relative overflow-hidden rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]">
                 <img src="https://storage.googleapis.com/uspeshnyy-projects/smit/grp134.ru/main3.jpg" alt="Паромная переправа" loading="lazy" decoding="async" className="w-full h-full object-cover hover:scale-110 transition-transform duration-[1.5s]" />
               </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Map Section with Background Gradient */}
      <section className="py-24 md:py-40 bg-gradient-to-br from-gray-50 via-blue-50/50 to-gray-100 dark:from-[#0d1526] dark:via-[#111d33] dark:to-[#0a0f1a] transition-colors relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 dark:bg-blue-400/5 blur-[120px] -z-10 rounded-full"></div>
        
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-16 lg:mb-24">
            <span className="text-blue-600 dark:text-blue-400 font-black uppercase tracking-[0.4em] text-xs mb-6 block">Локация причалов</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-nautical dark:text-white mb-8 tracking-tight leading-tight">Схема проезда</h2>
            <div className="w-24 h-2 bg-blue-600 mx-auto rounded-full shadow-lg shadow-blue-600/20 mb-8"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium text-lg md:text-xl">
              Места швартовки парома оборудованы удобными подъездами для всех видов транспорта.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <ScrollReveal stagger={1}>
                <div className="bg-white/80 dark:bg-gray-800/40 backdrop-blur-sm p-10 rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] dark:shadow-none border border-white dark:border-white/5 group hover:shadow-[0_30px_70px_-20px_rgba(0,0,0,0.12)] transition-all duration-500">
                  <div className="flex items-start mb-6">
                    <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 p-5 rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                      <IconMap className="w-8 h-8" />
                    </div>
                    <div className="ml-6">
                      <h4 className="font-black text-gray-400 dark:text-gray-500 uppercase text-[9px] tracking-[0.3em] mb-2">Из Камышина</h4>
                      <h3 className="text-2xl font-black text-nautical dark:text-white tracking-tight">Улица Нижняя</h3>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium text-lg">
                    Причал расположен в конце набережной. Ориентируйтесь на указатели «Паромная переправа». Съезд оборудован пандусом.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal stagger={2}>
                <div className="bg-white/80 dark:bg-gray-800/40 backdrop-blur-sm p-10 rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] dark:shadow-none border border-white dark:border-white/5 group hover:shadow-[0_30px_70px_-20px_rgba(0,0,0,0.12)] transition-all duration-500">
                  <div className="flex items-start mb-6">
                    <div className="bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 p-5 rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                      <IconAnchor className="w-8 h-8" />
                    </div>
                    <div className="ml-6">
                      <h4 className="font-black text-gray-400 dark:text-gray-500 uppercase text-[9px] tracking-[0.3em] mb-2">Из Николаевска</h4>
                      <h3 className="text-2xl font-black text-nautical dark:text-white tracking-tight">Старая Николаевка</h3>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium text-lg">
                    Переправа находится в районе центрального съезда к Волге. В период навигации установлены информационные щиты.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal stagger={3} className="pt-6">
                <button 
                  onClick={() => onNavigate('map')}
                  className="inline-flex items-center justify-center bg-nautical dark:bg-blue-600 text-white font-black px-12 py-5 rounded-2xl hover:opacity-90 hover:scale-[1.02] active:scale-95 transition-all shadow-2xl group text-lg w-full sm:w-auto"
                >
                  Развернуть карту
                  <IconArrowRight className="w-6 h-6 ml-4 group-hover:translate-x-2 transition-transform" />
                </button>
              </ScrollReveal>
            </div>

            <ScrollReveal stagger={4} className="h-full">
              <div className="relative overflow-hidden rounded-[3.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)] bg-gray-200 dark:bg-gray-800 h-[450px] lg:h-[650px] group border border-white dark:border-white/5">
                <iframe 
                  src="https://yandex.ru/map-widget/v1/-/CKuAR8yl" 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  allowFullScreen={true} 
                  className="relative z-0 filter dark:invert dark:hue-rotate-180 dark:brightness-75 transition-all duration-700 md:scale-100 scale-[0.9] origin-center"
                  title="Схема проезда на главной"
                ></iframe>
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.1)] rounded-[3.5rem]"></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-nautical dark:bg-[#080c14] relative overflow-hidden transition-colors">
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none animate-wave-move" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='20' viewBox='0 0 100 20'%3E%3Cpath d='M0 10 Q 25 0, 50 10 T 100 10' fill='none' stroke='%23ffffff' stroke-width='3'/%3E%3C/svg%3E")`, backgroundSize: '100px 20px' }}></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-12 tracking-tight drop-shadow-2xl leading-[1.1]">Переправа<br />Камышин — Николаевск</h2>
            <p className="max-w-3xl mx-auto text-blue-100/80 mb-20 text-xl md:text-3xl font-medium leading-relaxed">
              Планируете поездку? Мы подготовили подробную информацию о тарифах и схеме проезда.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <button 
                onClick={() => onNavigate('schedule')}
                className="inline-flex items-center justify-center bg-white text-nautical font-black px-14 py-6 rounded-[2.5rem] hover:bg-blue-50 hover:scale-105 active:scale-95 transition-all shadow-2xl text-xl group w-full sm:w-auto"
              >
                График и тарифы
                <IconArrowRight className="w-7 h-7 ml-5 group-hover:translate-x-3 transition-transform" />
              </button>
              <button 
                onClick={() => onNavigate('map')}
                className="inline-flex items-center justify-center bg-blue-600 text-white font-black px-14 py-6 rounded-[2.5rem] hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all shadow-2xl text-xl group border border-blue-400 w-full sm:w-auto"
              >
                <IconMap className="w-7 h-7 mr-5" />
                Карта причалов
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Licenses Block */}
      <section className="py-28 bg-white dark:bg-[#0a0f1a] transition-colors">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-nautical dark:text-white mb-8 tracking-tight leading-tight">Лицензии и сертификаты</h2>
            <div className="w-24 h-2 bg-blue-600 mx-auto rounded-full shadow-lg shadow-blue-600/20"></div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {licenses.map((lic, idx) => (
              <ScrollReveal key={idx} stagger={idx + 1}>
                <div 
                  className="bg-gray-50/50 dark:bg-gray-800/40 backdrop-blur-sm rounded-[3.5rem] p-10 border border-gray-100 dark:border-white/5 flex flex-col items-center hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] transition-all duration-500 group cursor-pointer"
                  onClick={() => setSelectedLicense(lic.image)}
                >
                  <div className="relative aspect-[1/1.4] w-64 overflow-hidden rounded-[2rem] shadow-2xl mb-10 bg-gray-200 dark:bg-gray-700">
                    <img src={lic.image} alt={`${lic.title} ООО Грузовая переправа`} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-nautical/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-md">
                      <div className="bg-white/20 p-5 rounded-full backdrop-blur-xl border border-white/30">
                        <IconZoom className="w-10 h-10 text-white" />
                      </div>
                    </div>
                  </div>
                  <h3 className="font-black text-nautical dark:text-white text-center mb-4 text-xl tracking-tight leading-snug">{lic.title}</h3>
                  <p className="text-blue-600 dark:text-blue-400 text-sm font-black uppercase tracking-widest">{lic.series}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-28 bg-gray-50 dark:bg-[#0d1526]/40 transition-colors overflow-hidden border-t border-gray-100 dark:border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <ScrollReveal className="text-center mb-20">
            <span className="text-blue-600 dark:text-blue-400 font-black uppercase tracking-[0.4em] text-xs mb-6 block">Частые вопросы</span>
            <h2 className="text-4xl md:text-5xl font-black text-nautical dark:text-white mb-8 tracking-tight leading-tight">Полезно знать</h2>
            <div className="w-24 h-2 bg-blue-600 mx-auto rounded-full shadow-lg shadow-blue-600/20"></div>
          </ScrollReveal>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} stagger={index + 1}>
                <div className={`group border border-gray-200 dark:border-white/10 rounded-[2.5rem] overflow-hidden transition-all duration-500 ${openFaqIndex === index ? 'bg-white dark:bg-gray-800 shadow-2xl scale-[1.02]' : 'bg-white/60 dark:bg-white/5'}`}>
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left px-10 py-9 flex items-center justify-between focus:outline-none"
                  >
                    <span className="font-black text-xl md:text-2xl text-nautical dark:text-white pr-6 tracking-tight">{faq.question}</span>
                    <div className={`p-3 rounded-full transition-all duration-500 shadow-md ${openFaqIndex === index ? 'bg-blue-600 text-white rotate-180' : 'bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400'}`}>
                      <IconChevronDown className="w-7 h-7" />
                    </div>
                  </button>
                  <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openFaqIndex === index ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-10 pb-10 text-gray-700 dark:text-gray-300 font-medium leading-relaxed border-t border-gray-100 dark:border-white/5 pt-8 text-xl">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          <div className="mt-16 p-10 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-[3rem] shadow-2xl text-center relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-125 transition-transform duration-[2s]">
               <IconAlert className="w-40 h-40" />
             </div>
             <p className="text-xl md:text-2xl font-bold relative z-10 leading-relaxed">
                Внимание: Работа парома напрямую зависит от погодных условий, силы ветра и ледовой обстановки на Волге.
             </p>
          </div>
        </div>
      </section>

      {/* Lightbox for Licenses */}
      {selectedLicense && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-2xl flex items-center justify-center p-6 md:p-12"
          onClick={() => setSelectedLicense(null)}
        >
          <button className="absolute top-10 right-10 text-white hover:text-blue-400 transition-colors bg-white/10 p-5 rounded-full border border-white/20" onClick={() => setSelectedLicense(null)}>
            <IconX className="w-10 h-10" />
          </button>
          <img src={selectedLicense} alt="Увеличенное изображение лицензии ГРП" className="max-w-full max-h-full object-contain rounded-3xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] animate-scaleIn" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </article>
  );
};

export default Home;
