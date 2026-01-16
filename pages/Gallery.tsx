
import React, { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { IconZoom, IconX } from '../components/Icons';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: 'https://storage.googleapis.com/uspeshnyy-projects/smit/grp134.ru/gallery1.jpg', title: 'Паром на Волге в Камышине' },
    { src: 'https://storage.googleapis.com/uspeshnyy-projects/smit/grp134.ru/gallery2.jpg', title: 'Погрузка грузового транспорта' },
    { src: 'https://storage.googleapis.com/uspeshnyy-projects/smit/grp134.ru/gallery3.jpg', title: 'Вид на Волгу' },
    { src: 'https://storage.googleapis.com/uspeshnyy-projects/smit/grp134.ru/gallery4.jpg', title: 'Паром «Марш Славянки»' },
    { src: 'https://storage.googleapis.com/uspeshnyy-projects/smit/grp134.ru/gallery5.jpg', title: 'Паром «Окский-25»' },
    { src: 'https://storage.googleapis.com/uspeshnyy-projects/smit/grp134.ru/gallery6.jpg', title: 'Переправа спецтехники' },
    { src: 'https://storage.googleapis.com/uspeshnyy-projects/smit/grp134.ru/gallery7.jpg', title: 'Панорама переправы' },
  ];

  return (
    <div className="py-16 container mx-auto px-4 animate-fadeIn transition-colors duration-300">
      <div className="text-center mb-16">
        <h1 className="text-[var(--fluid-h2)] font-bold text-nautical dark:text-white mb-4 leading-tight">Галерея переправы</h1>
        <div className="w-24 h-1.5 bg-blue-500 mx-auto rounded-full"></div>
        <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium text-lg">
          Фотографии нашего флота и рабочих моментов переправы Камышин – Николаевск.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, idx) => (
          <ScrollReveal key={idx} stagger={(idx % 4) + 1}>
            <div 
              className="group relative overflow-hidden rounded-3xl shadow-lg bg-gray-200 dark:bg-gray-800 aspect-[4/3] border border-gray-100 dark:border-white/5 cursor-pointer"
              onClick={() => setSelectedImage(img.src)}
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nautical/80 dark:from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-md p-4 rounded-full scale-50 group-hover:scale-100 transition-transform duration-300">
                  <IconZoom className="w-8 h-8 text-white" />
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-white font-bold text-base translate-y-4 group-hover:translate-y-0 transition-transform duration-300 block">
                    {img.title}
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-5 md:p-12"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-8 right-8 text-white hover:text-blue-400 transition-colors bg-white/10 p-4 rounded-full z-10"
            onClick={() => setSelectedImage(null)}
          >
            <IconX className="w-8 h-8 md:w-10 md:h-10" />
          </button>
          <img 
            src={selectedImage} 
            alt="Увеличенное фото" 
            className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
