
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Gallery from './pages/Gallery';
import Contacts from './pages/Contacts';
import Licenses from './pages/Licenses';
import MapPage from './pages/Map';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfCarriage from './pages/TermsOfCarriage';
import CookieBanner from './components/CookieBanner';
import { PageType } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  // SEO & Scroll management
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Dynamic titles for SEO
    let title = "Грузовая паромная переправа Камышин – Николаевск | Официальный сайт";
    let description = "Безопасная паромная переправа через Волгу: Камышин – Николаевск. Перевозка легковых и грузовых авто, спецтехники. Актуальное расписание и тарифы ООО «Грузовая переправа».";
    
    switch (currentPage) {
      case 'home':
        title = "Грузовая паромная переправа Камышин – Николаевск | Официальный сайт ГРП34";
        break;
      case 'schedule':
        title = "Расписание и цены парома Камышин – Николаевск 2024-2025 | Тарифы ГРП";
        description = "Узнайте актуальное расписание рейсов и стоимость перевозки (тарифы) пассажиров, легковых и грузовых автомобилей на пароме через Волгу в Камышине.";
        break;
      case 'gallery':
        title = "Фото флота: паромы «Марш Славянки» и «Окский-25» | Галерея ГРП34";
        description = "Фотогалерея паромной переправы в Камышине. Посмотрите наши суда, процесс погрузки транспорта и виды на Волгу.";
        break;
      case 'contacts':
        title = "Контакты и телефон диспетчера переправы в Камышине | ООО «Грузовая переправа»";
        description = "Свяжитесь с диспетчером паромной переправы Камышин - Николаевск. Адрес офиса, номера телефонов и форма обратной связи.";
        break;
      case 'licenses':
        title = "Лицензии и сертификаты на речные перевозки | Документы ООО «Грузовая переправа»";
        description = "Официальные документы и лицензии Министерства транспорта РФ, подтверждающие право на осуществление паромных переправок грузов и пассажиров.";
        break;
      case 'map':
        title = "Схема проезда к паромным причалам в Камышине и Николаевске | Карта ГРП";
        description = "Подробная карта и описание проезда к местам погрузки на паром в Камышине (улица Нижняя) и Николаевске.";
        break;
      case 'privacy':
        title = "Политика конфиденциальности | Защита данных ООО «Грузовая переправа»";
        description = "Юридическая информация о порядке сбора и обработки персональных данных пользователей на сайте grp34.ru.";
        break;
      case 'terms':
        title = "Правила и условия перевозки на пароме | Безопасность на судне";
        description = "Ознакомьтесь с правилами поведения пассажиров и водителей во время паромной переправы через Волгу. Требования безопасности.";
        break;
    }
    
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'schedule':
        return <Schedule />;
      case 'gallery':
        return <Gallery />;
      case 'contacts':
        return <Contacts />;
      case 'licenses':
        return <Licenses />;
      case 'map':
        return <MapPage />;
      case 'privacy':
        return <PrivacyPolicy />;
      case 'terms':
        return <TermsOfCarriage />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <Layout currentPage={currentPage} onPageChange={setCurrentPage}>
      {renderPage()}
      <CookieBanner />
    </Layout>
  );
};

export default App;
