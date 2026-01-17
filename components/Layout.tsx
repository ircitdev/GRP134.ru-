
import React, { useState, useEffect } from 'react';
import { PageType } from '../types';
import { NAV_ITEMS, CONTACT_PHONES } from '../constants';
import { 
  IconLocation, 
  IconPhone, 
  IconShip, 
  IconMenu, 
  IconX, 
  IconClock, 
  IconMail,
  IconSun,
  IconMoon,
  IconHome,
  IconArrowRight
} from './Icons';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: PageType;
  onPageChange: (page: PageType) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Sync state with DOM class (set by index.html script)
    const darkModeActive = document.documentElement.classList.contains('dark');
    setIsDark(darkModeActive);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleLogoClick = () => {
    if (currentPage === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onPageChange('home');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 0);
    }
  };

  const wavePattern = isDark 
    ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='20' viewBox='0 0 100 20'%3E%3Cpath d='M0 10 Q 25 0, 50 10 T 100 10' fill='none' stroke='white' stroke-width='1.5'/%3E%3C/svg%3E")`
    : `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='20' viewBox='0 0 100 20'%3E%3Cpath d='M0 10 Q 25 0, 50 10 T 100 10' fill='none' stroke='%23122D54' stroke-width='1.5'/%3E%3C/svg%3E")`;

  return (
    <div className="min-h-screen flex flex-col antialiased transition-colors duration-300 bg-gray-50 dark:bg-[#0a0f1a]">
      {/* Top Bar */}
      <div className={`bg-nautical dark:bg-[#0d1526] text-white py-2 px-4 border-b border-blue-900/30 dark:border-white/5 text-sm hidden md:block transition-all duration-300 ${isScrolled ? 'opacity-0 h-0 overflow-hidden py-0 border-0' : 'opacity-100'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-4 items-center font-medium">
            <IconLocation className="w-4 h-4 mr-2 text-blue-400" />
            <span>г. Камышин, ул. Нижняя, д.1</span>
          </div>
          <div className="flex space-x-6 font-bold">
            {CONTACT_PHONES.map(phone => (
              <a key={phone} href={`tel:${phone.replace(/\D/g,'')}`} className="hover:text-blue-300 transition-colors flex items-center whitespace-nowrap">
                <IconPhone className="w-4 h-4 mr-2 text-blue-400" />
                {phone}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Header / Nav */}
      <div className="sticky top-0 z-50 w-full transition-all duration-500 pointer-events-none">
        <header 
          className={`
            transition-all duration-500 ease-in-out pointer-events-auto
            ${isScrolled 
              ? 'mx-2 mt-4 md:mx-auto md:max-w-7xl bg-white/60 dark:bg-[#122D54]/60 backdrop-blur-[24px] rounded-[1.5rem] md:rounded-[3rem] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] py-2 px-3 md:py-2.5 md:px-5 border border-white/40 dark:border-white/10' 
              : 'w-full bg-gradient-to-r from-white via-gray-50/50 to-white dark:from-[#0d1526] dark:via-[#15233d] dark:to-[#0d1526] shadow-md dark:shadow-none py-3 md:py-5 px-3 md:px-0 border-b border-transparent dark:border-white/5'
            }
          `}
        >
          <div className={`container mx-auto flex justify-between items-center ${isScrolled ? 'px-1' : 'px-4'}`}>
            <div 
              className="flex items-center cursor-pointer group flex-shrink-0" 
              onClick={handleLogoClick}
            >
              <div className={`p-1.5 md:p-2.5 rounded-xl md:rounded-2xl mr-3 transition-all ${isScrolled ? 'bg-nautical text-white dark:bg-white dark:text-nautical shadow-lg scale-90 md:scale-100' : 'bg-nautical text-white group-hover:bg-blue-800'}`}>
                <IconShip className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="min-w-0 mr-4 md:mr-8">
                <h1 className={`text-sm md:text-xl font-black leading-tight uppercase tracking-tight md:tracking-wider transition-colors whitespace-nowrap ${isScrolled ? 'text-nautical dark:text-white' : 'text-nautical dark:text-white'}`}>
                  Грузовая переправа
                </h1>
                <p className={`text-[7px] md:text-[10px] font-bold uppercase tracking-[0.1em] md:tracking-[0.2em] transition-colors truncate ${isScrolled ? 'text-blue-600 dark:text-blue-200' : 'text-gray-500 dark:text-gray-400'}`}>
                  Камышин - Николаевск
                </p>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className={`hidden lg:flex items-center space-x-1 flex-nowrap ${isScrolled ? 'ml-12' : 'ml-6'}`}>
              {NAV_ITEMS.map(item => (
                <button
                  key={item.id}
                  onClick={() => onPageChange(item.id)}
                  className={`px-3 py-2 rounded-xl font-semibold text-sm transition-all tracking-wide flex items-center justify-center whitespace-nowrap ${
                    currentPage === item.id 
                      ? 'text-white bg-nautical dark:text-nautical dark:bg-white shadow-lg scale-105' 
                      : (isScrolled ? 'text-nautical hover:bg-nautical/10 dark:text-white dark:hover:bg-white/20' : 'text-gray-600 hover:text-nautical hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/10')
                  }`}
                  title={item.id === 'home' ? 'Главная' : ''}
                >
                  {item.id === 'home' ? <IconHome className="w-5 h-5" /> : item.label}
                </button>
              ))}
              <div className="w-px h-6 bg-gray-200 dark:bg-white/10 mx-3 flex-shrink-0"></div>
              <button 
                onClick={toggleTheme}
                className={`p-2 rounded-xl transition-all flex-shrink-0 ${isScrolled ? 'text-nautical hover:bg-nautical/10 dark:text-white dark:hover:bg-white/20' : 'text-gray-600 hover:text-nautical hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/10'}`}
                title={isDark ? "Светлая тема" : "Темная тема"}
              >
                {isDark ? <IconSun className="w-5 h-5" /> : <IconMoon className="w-5 h-5" />}
              </button>
            </nav>

            {/* Mobile Actions */}
            <div className="lg:hidden flex items-center space-x-1.5 md:space-x-3 flex-shrink-0">
              <button 
                onClick={toggleTheme}
                className={`p-2 rounded-xl transition-all ${isScrolled ? 'text-nautical dark:text-white bg-nautical/5 dark:bg-white/5' : 'text-nautical dark:text-white'}`}
              >
                {isDark ? <IconSun className="w-5 h-5" /> : <IconMoon className="w-5 h-5" />}
              </button>
              <button 
                className={`p-2 rounded-xl focus:outline-none transition-colors ${isScrolled ? 'text-nautical dark:text-white bg-nautical/5 dark:bg-white/5' : 'text-nautical dark:text-white'}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <IconX className="w-6 h-6" /> : <IconMenu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Nav Overlay */}
          {isMenuOpen && (
            <div className={`lg:hidden absolute top-full left-0 w-full shadow-2xl p-4 md:p-6 animate-fadeIn mt-3 rounded-[2rem] border border-gray-200 dark:border-white/10 ${isScrolled ? 'bg-white/80 dark:bg-[#122D54]/80 backdrop-blur-2xl' : 'bg-white dark:bg-[#0d1526]'}`}>
              <nav className="flex flex-col space-y-2">
                {NAV_ITEMS.map(item => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onPageChange(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full text-left px-5 py-4 rounded-2xl font-semibold text-base transition-all flex items-center ${
                      currentPage === item.id 
                        ? 'text-white bg-nautical dark:text-nautical dark:bg-white shadow-md' 
                        : 'text-gray-800 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-white/5'
                    }`}
                  >
                    {item.id === 'home' && <IconHome className="w-5 h-5 mr-3" />}
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </header>
      </div>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-white dark:bg-[#080c14] text-gray-600 dark:text-gray-400 pt-16 pb-8 relative overflow-hidden border-t border-gray-100 dark:border-white/5">
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08] pointer-events-none transition-opacity duration-500" 
          style={{ backgroundImage: wavePattern, backgroundSize: '100px 20px' }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center mb-8">
                <IconShip className="w-10 h-10 text-nautical dark:text-blue-400 mr-4" />
                <h3 className="text-xl font-black text-nautical dark:text-white uppercase tracking-tighter">Грузовая переправа</h3>
              </div>
              <p className="text-sm leading-relaxed mb-6 font-medium">
                ООО "Грузовая переправа" — надежные речные перевозки грузов и пассажиров между Камышином и Николаевском. Современный флот и профессиональная команда.
              </p>
            </div>

            <div>
              <h4 className="text-nautical dark:text-white font-black mb-8 border-l-4 border-blue-500 pl-4 uppercase text-xs tracking-[0.3em]">Меню</h4>
              <ul className="space-y-4 text-sm font-bold">
                {NAV_ITEMS.map(item => (
                  <li key={item.id}>
                    <button onClick={() => onPageChange(item.id)} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left w-full">
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-nautical dark:text-white font-black mb-8 border-l-4 border-blue-500 pl-4 uppercase text-xs tracking-[0.3em]">Информация</h4>
              <ul className="space-y-4 text-sm font-bold">
                <li className="flex items-start">
                  <IconLocation className="mt-1 mr-4 text-blue-500 w-5 h-5 shrink-0" />
                  <span className="font-medium">г. Камышин, ул. Нижняя, д.1, пом. 8</span>
                </li>
                <li className="flex items-start">
                  <IconClock className="mt-1 mr-4 text-blue-500 w-5 h-5 shrink-0" />
                  <span className="font-medium">Ежедневно: 07:00 – 19:00</span>
                </li>
                <li className="flex items-start">
                  <IconMail className="mt-1 mr-4 text-blue-500 w-5 h-5 shrink-0" />
                  <a href="mailto:info@grp34.ru" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 transition-colors font-bold">info@grp34.ru</a>
                </li>
                <li className="pt-4">
                  <button 
                    onClick={() => onPageChange('contacts')}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-blue-600/20 active:scale-95 flex items-center group"
                  >
                    Задать вопрос
                    <IconArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-nautical dark:text-white font-black mb-8 border-l-4 border-blue-500 pl-4 uppercase text-xs tracking-[0.3em]">Контакты</h4>
              <div className="space-y-5">
                {CONTACT_PHONES.map(phone => (
                  <a 
                    key={phone} 
                    href={`tel:${phone.replace(/\D/g,'')}`} 
                    className="block bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 p-4 rounded-2xl text-center transition-all border border-transparent dark:border-white/5"
                  >
                    <span className="text-[10px] text-gray-500 dark:text-gray-400 font-black block mb-1 uppercase tracking-widest">Диспетчер</span>
                    <span className="text-nautical dark:text-white font-black text-lg whitespace-nowrap">{phone}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-100 dark:border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center text-[11px] font-bold text-gray-500 uppercase tracking-widest gap-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-3 md:space-y-0 text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} ООО "Грузовая переправа"</p>
              <a href="https://itc34.ru" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:opacity-80 transition-opacity">
                Создано в IT Consulting
              </a>
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 text-center">
              <button onClick={() => onPageChange('privacy')} className="hover:text-nautical dark:hover:text-white transition-colors">Политика конфиденциальности</button>
              <button onClick={() => onPageChange('terms')} className="hover:text-nautical dark:hover:text-white transition-colors">Условия перевозки</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
