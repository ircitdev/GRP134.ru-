
import React, { useState } from 'react';
import { IconZoom, IconX } from '../components/Icons';
import ScrollReveal from '../components/ScrollReveal';

const Licenses: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const licenses = [
    {
      title: 'МИНИСТЕРСТВО ТРАНСПОРТА РОССИЙСКОЙ ФЕДЕРАЦИИ ФЕДЕРАЛЬНАЯ СЛУЖБА ПО НАДЗОРУ В СФЕРЕ ТРАНСПОРТА',
      subtitle: 'ЛИЦЕНЗИЯ на перевозки',
      series: 'Серия МР-2 002014 от 18 апреля 2016',
      org: 'Обществу с ограниченной ответственностью "Грузовая переправа"',
      image: 'https://storage.googleapis.com/uspeshnyy-projects/smit/grp134.ru/lic1.jpg'
    },
    {
      title: 'МИНИСТЕРСТВО ТРАНСПОРТА РОССИЙСКОЙ ФЕДЕРАЦИИ ФЕДЕРАЛЬНАЯ СЛУЖБА ПО НАДЗОРУ В СФЕРЕ ТРАНСПОРТА',
      subtitle: 'ЛИЦЕНЗИЯ на деятельность',
      series: 'Серия МР-1 002015 от 18 апреля 2016 г.',
      org: 'Обществу с ограниченной ответственностью "Грузовая переправа"',
      image: 'https://storage.googleapis.com/uspeshnyy-projects/smit/grp134.ru/lic2.jpg'
    }
  ];

  return (
    <div className="py-16 md:py-24 container mx-auto px-4 animate-fadeIn">
      <div className="text-center mb-16">
        <h1 className="text-[var(--fluid-h2)] font-bold text-nautical dark:text-white mb-4 leading-tight tracking-tight">Лицензии на речные перевозки</h1>
        <div className="w-24 h-1.5 bg-blue-500 mx-auto rounded-full"></div>
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto font-medium text-lg">
          Все виды деятельности ООО «Грузовая переправа» лицензированы в соответствии с законодательством Российской Федерации.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {licenses.map((lic, idx) => (
          <ScrollReveal key={idx} stagger={idx + 1}>
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden h-full flex flex-col hover:shadow-2xl transition-all duration-300">
              <div 
                className="relative aspect-[1/1.41] overflow-hidden cursor-zoom-in group"
                onClick={() => setSelectedImage(lic.image)}
              >
                <img 
                  src={lic.image} 
                  alt={`Лицензия ООО Грузовая переправа - ${lic.subtitle}`} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <IconZoom className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <div className="p-8 flex-grow">
                <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-3">Официальный документ</p>
                <h3 className="text-sm font-bold text-gray-800 leading-snug mb-4 h-12 overflow-hidden line-clamp-3">
                  {lic.title}
                </h3>
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-lg font-bold text-nautical mb-1">{lic.subtitle}</p>
                  <p className="text-gray-600 font-medium mb-3">{lic.series}</p>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-widest">{lic.org}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Lightbox / Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-blue-400 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <IconX className="w-10 h-10" />
          </button>
          <img 
            src={selectedImage} 
            alt="Лицензия (увеличенное изображение)" 
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Licenses;
