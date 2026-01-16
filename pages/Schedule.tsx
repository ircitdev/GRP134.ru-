
import React from 'react';
import { SCHEDULE, PRICING, NAVIGATION_CLOSED, NAVIGATION_NOTICE, CONTACT_PHONES } from '../constants';
import ScrollReveal from '../components/ScrollReveal';
import { 
  IconShip, 
  IconList, 
  IconTag, 
  IconInfo, 
  IconHandshake, 
  IconClock,
  IconAlert,
  IconPhone
} from '../components/Icons';

const Schedule: React.FC = () => {
  return (
    <div className="py-16 container mx-auto px-4 animate-fadeIn transition-colors duration-300">
      <header className="text-center mb-12">
        <h1 className="text-[var(--fluid-h2)] font-bold text-nautical dark:text-white mb-4 leading-tight tracking-tight">Расписание и тарифы 2025-2026</h1>
        <div className="w-24 h-1.5 bg-blue-500 mx-auto rounded-full"></div>
        
        {NAVIGATION_CLOSED && (
          <ScrollReveal className="mt-10 max-w-4xl mx-auto bg-red-50 dark:bg-red-900/10 border-2 border-red-100 dark:border-red-900/30 p-8 rounded-[2.5rem] shadow-sm">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center mb-6">
                <IconAlert className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-black text-red-700 dark:text-red-400 mb-4 uppercase tracking-wider">Навигация завершена</h2>
              <p className="text-red-600 dark:text-red-300 text-lg font-bold leading-relaxed text-center">
                {NAVIGATION_NOTICE}
              </p>
            </div>
          </ScrollReveal>
        )}
      </header>

      <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
        {/* Important Weather Notice Block */}
        <ScrollReveal className="bg-blue-600 text-white p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden">
           <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
              <div className="bg-white/20 p-5 rounded-2xl">
                 <IconClock className="w-10 h-10" />
              </div>
              <div>
                 <h3 className="text-xl font-black mb-2 uppercase tracking-wide">Важная информация</h3>
                 <p className="text-lg opacity-90 leading-relaxed font-medium">
                    Работа переправы напрямую зависит от погодных условий, силы ветра и ледовой обстановки на Волге. Для уточнения возможности рейса свяжитесь с диспетчером.
                 </p>
              </div>
              <a href={`tel:${CONTACT_PHONES[0].replace(/\D/g,'')}`} className="bg-white text-blue-600 font-black px-8 py-4 rounded-2xl hover:bg-blue-50 transition-colors shadow-lg whitespace-nowrap">
                Позвонить
              </a>
           </div>
        </ScrollReveal>

        {/* Pricing Section */}
        <ScrollReveal className="bg-white dark:bg-gray-800/40 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-white/5 transition-colors">
          <div className="bg-nautical dark:bg-[#0d1526] p-7 text-white flex flex-col md:flex-row justify-between items-center gap-4">
            <h2 className="text-2xl font-black flex items-center uppercase tracking-wide">
              <IconList className="w-7 h-7 mr-4 text-blue-400" />
              Стоимость перевозки
            </h2>
            <span className="text-sm bg-blue-800/50 px-5 py-2 rounded-full border border-blue-700 font-bold flex items-center whitespace-nowrap uppercase tracking-widest">
              <IconTag className="w-4 h-4 mr-2" /> Прейскурант ГРП
            </span>
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
             <table className="w-full text-left border-collapse">
               <thead className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-100 dark:border-white/5">
                 <tr>
                   <th className="px-8 py-5 text-[10px] font-black text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em]">Категория транспорта</th>
                   <th className="px-8 py-5 text-[10px] font-black text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em] text-right whitespace-nowrap">Цена (руб.)</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                 {PRICING.map((item, idx) => (
                   <ScrollReveal 
                    key={idx} 
                    as="tr" 
                    className="reveal-light hover:bg-blue-50/50 dark:hover:bg-white/5 transition-colors group"
                    style={{ transitionDelay: `${(idx % 8) * 40}ms` }}
                   >
                     <td className="px-8 py-5 text-gray-800 dark:text-gray-200 font-bold text-lg">
                       {item.category}
                     </td>
                     <td className="px-8 py-5 text-right">
                       <span className={`inline-block px-5 py-2 rounded-xl font-black whitespace-nowrap text-lg ${
                         item.price === 'БЕСПЛАТНО' 
                         ? 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 border border-green-100' 
                         : 'text-nautical dark:text-white bg-gray-100 dark:bg-gray-900/40 border border-gray-200 dark:border-white/10'
                       }`}>
                         {item.price}
                       </span>
                     </td>
                   </ScrollReveal>
                 ))}
               </tbody>
             </table>
          </div>

          {/* Mobile List View */}
          <div className="md:hidden divide-y divide-gray-100 dark:divide-white/5">
            {PRICING.map((item, idx) => (
              <ScrollReveal 
                key={idx} 
                className="reveal-light p-6 flex flex-col hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                style={{ transitionDelay: `${(idx % 6) * 50}ms` }}
              >
                <div className="mb-4">
                  <span className="text-[9px] font-black text-blue-500 uppercase tracking-[0.3em] mb-2 block">Тип транспорта</span>
                  <h3 className="text-gray-800 dark:text-gray-100 font-black leading-snug text-lg">{item.category}</h3>
                </div>
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-50 dark:border-white/5">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Стоимость</span>
                  <span className={`px-5 py-2.5 rounded-xl font-black text-base ${
                    item.price === 'БЕСПЛАТНО' 
                    ? 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20' 
                    : 'text-nautical dark:text-white bg-gray-100 dark:bg-gray-900/50 shadow-sm'
                  }`}>
                    {item.price}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="p-8 md:p-10 bg-gray-50 dark:bg-gray-900/30">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800/60 rounded-[2rem] p-7 shadow-sm border border-gray-100 dark:border-white/5">
                  <h3 className="font-black text-nautical dark:text-white mb-3 flex items-center text-lg uppercase tracking-tight">
                    <IconInfo className="w-6 h-6 mr-3 text-blue-500 flex-shrink-0" />
                    Для пассажиров
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                    Пассажиры в автотранспорте перевозятся бесплатно. Для пеших пассажиров в Камышине действует фиксированный тариф.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800/60 rounded-[2rem] p-7 shadow-sm border border-gray-100 dark:border-white/5">
                  <h3 className="font-black text-nautical dark:text-white mb-3 flex items-center text-lg uppercase tracking-tight">
                    <IconHandshake className="w-6 h-6 mr-3 text-green-500 flex-shrink-0" />
                    Корпоративные услуги
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                    Предлагаем специальные условия для регулярных перевозок грузов и спецтехники. Обращайтесь к диспетчеру для заключения договора.
                  </p>
                </div>
             </div>
          </div>
        </ScrollReveal>

        {/* Schedule Section */}
        <section className="bg-white dark:bg-gray-800/40 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-white/5">
          <div className="bg-gray-800 dark:bg-[#080c14] p-7 text-white flex justify-between items-center">
            <h2 className="text-2xl font-black flex items-center uppercase tracking-wide">
              <IconClock className="w-7 h-7 mr-4 text-gray-400" />
              График рейсов
            </h2>
          </div>

          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-900/50 text-gray-500 dark:text-gray-400 text-[10px] font-black uppercase tracking-[0.2em]">
                  <th className="px-8 py-5">Время</th>
                  <th className="px-8 py-5">Из</th>
                  <th className="px-8 py-5">В</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                {SCHEDULE.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                    <td className="px-8 py-5 font-black text-xl text-nautical dark:text-blue-400">{item.departure}</td>
                    <td className="px-8 py-5 font-bold text-gray-600 dark:text-gray-300">{item.from}</td>
                    <td className="px-8 py-5 font-bold text-gray-600 dark:text-gray-300">{item.to}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="md:hidden divide-y divide-gray-100 dark:divide-white/5">
            {SCHEDULE.map((item, idx) => (
              <div key={idx} className="p-7 flex items-center hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 shadow-sm">
                  <span className="font-black text-blue-600 dark:text-blue-400 text-xl">{item.departure}</span>
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2">Маршрут рейса</p>
                  <div className="flex items-center text-gray-800 dark:text-gray-100 font-black text-lg">
                    <span className="truncate">{item.from}</span>
                    <IconShip className="w-5 h-5 mx-3 text-gray-300" />
                    <span className="truncate">{item.to}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-6 bg-gray-100 dark:bg-gray-900/50 text-center">
             <p className="text-[11px] text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider leading-relaxed">
               В период навигации рейсы выполняются по расписанию. При неблагоприятных погодных условиях возможны задержки или отмена рейсов.
             </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Schedule;
