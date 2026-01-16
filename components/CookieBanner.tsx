
import React, { useState, useEffect } from 'react';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Показываем баннер через 40 секунд (40000 мс)
      const timer = setTimeout(() => setIsVisible(true), 40000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[100] max-w-[calc(100vw-3rem)] md:max-w-md animate-fadeIn">
      <div className="bg-white/95 backdrop-blur-md border border-gray-200 shadow-2xl rounded-3xl p-6 flex flex-col gap-4">
        <div className="flex items-start gap-4">
          <div className="flex w-10 h-10 bg-blue-50 text-blue-600 rounded-2xl items-center justify-center shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-nautical text-sm uppercase tracking-wider mb-1">Использование cookie</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Мы используем <span className="font-bold">cookie</span> для улучшения работы сайта и анализа трафика. Продолжая просмотр, вы соглашаетесь с нашей <button onClick={() => window.location.hash = 'privacy'} className="underline hover:text-blue-600">политикой обработки данных</button>.
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleAccept}
            className="flex-1 bg-nautical text-white font-bold py-3 px-6 rounded-xl hover:bg-blue-900 transition-all active:scale-95 shadow-lg shadow-blue-900/10 text-sm"
          >
            Принять
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="px-4 py-3 text-gray-400 hover:text-gray-600 transition-colors text-sm font-medium"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
