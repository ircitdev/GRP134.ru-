
import React, { useState } from 'react';
import { IconMap, IconAnchor, LoadingSpinner } from '../components/Icons';
import ScrollReveal from '../components/ScrollReveal';

const MapPage: React.FC = () => {
  const [isIframeLoading, setIsIframeLoading] = useState(true);

  return (
    <div className="py-16 md:py-24 container mx-auto px-4 animate-fadeIn">
      <div className="text-center mb-12 max-w-5xl mx-auto">
        <h1 className="text-[var(--fluid-h2)] font-black text-nautical dark:text-white mb-6 leading-tight tracking-tight">
          Схема проезда парома г. Камышин — Старая Николаевка
        </h1>
        <div className="w-24 h-1.5 bg-blue-500 mx-auto rounded-full mb-8"></div>
        <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">
          Для вашего удобства мы подготовили интерактивную карту с указанием мест швартовки и маршрута следования парома.
        </p>
      </div>

      {/* Yandex Map Section */}
      <ScrollReveal className="bg-white dark:bg-gray-800/40 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-white/5 mb-16 relative">
        <div className="bg-nautical p-4 text-white flex items-center justify-between">
           <div className="flex items-center">
             <IconMap className="w-5 h-5 mr-3 text-blue-400" />
             <span className="font-bold text-sm uppercase tracking-wider">Интерактивная карта</span>
           </div>
           <a 
             href="https://yandex.ru/maps/?from=api-maps&ll=45.466520%2C50.092127&mode=usermaps&origin=jsapi_2_1_76&um=constructor%3AVtEe7HFwtDoxQNBg7mloNoW4QCGX639p&utm_medium=mapframe&utm_source=maps&z=13"
             target="_blank"
             rel="noopener noreferrer"
             className="text-xs bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-bold transition-colors"
           >
             Открыть в Яндекс.Картах
           </a>
        </div>
        <div className="relative w-full aspect-square sm:aspect-video lg:h-[650px] bg-gray-100 dark:bg-gray-900 overflow-hidden">
          {isIframeLoading && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-gray-100/80 dark:bg-gray-900/80 backdrop-blur-sm animate-fadeIn">
              <LoadingSpinner className="w-10 h-10 text-nautical dark:text-blue-400 mb-4" />
              <p className="text-nautical dark:text-white font-black text-xs uppercase tracking-widest">Загрузка карты...</p>
            </div>
          )}
          <iframe 
            src="https://yandex.ru/map-widget/v1/-/CKuAR8yl" 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            allowFullScreen={true} 
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${isIframeLoading ? 'opacity-0' : 'opacity-100'} filter dark:invert dark:hue-rotate-180 dark:brightness-75`}
            title="Схема проезда"
            onLoad={() => setIsIframeLoading(false)}
          ></iframe>
        </div>
      </ScrollReveal>

      {/* Navigation Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <ScrollReveal stagger={1} className="h-full">
          <div className="bg-white dark:bg-gray-800/60 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-gray-50 dark:border-white/5 flex items-start h-full">
            <div className="bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 p-4 rounded-2xl mr-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-nautical dark:text-white text-xl mb-3">Со стороны Камышина</h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Причал расположен в конце улицы Нижняя. При движении по городу ориентируйтесь на указатели «Паромная переправа». Съезд к реке оборудован удобным пандусом для погрузки всех видов транспорта.
              </p>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal stagger={2} className="h-full">
          <div className="bg-white dark:bg-gray-800/60 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-gray-50 dark:border-white/5 flex items-start h-full">
            <div className="bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 p-4 rounded-2xl mr-6">
              <IconAnchor className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-bold text-nautical dark:text-white text-xl mb-3">Со стороны Николаевска</h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Переправа находится в районе Старой Николаевки. Основной путь проходит через центральный съезд к Волге. В период навигации на подъездах установлены информационные щиты.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default MapPage;
