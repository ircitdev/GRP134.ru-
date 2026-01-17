
import React, { useState, useEffect } from 'react';
import { IconShip } from './Icons';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const duration = 2000; // 2 seconds for a smooth feel
    const interval = 20; // update every 20ms
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(onComplete, 600); // Wait for fade out animation
          }, 300);
          return 100;
        }
        return Math.min(prev + step + (Math.random() * 2), 100);
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-nautical dark:bg-[#0a0f1a] transition-all duration-700 ease-in-out ${
        isExiting ? 'opacity-0 invisible scale-110' : 'opacity-100 visible'
      }`}
    >
      <div className="relative mb-12">
        {/* Animated Background Rings */}
        <div className="absolute inset-0 -m-8 rounded-full border border-blue-400/20 animate-ping"></div>
        <div className="absolute inset-0 -m-12 rounded-full border border-blue-400/10 animate-[ping_3s_infinite]"></div>
        
        {/* Logo Container */}
        <div className="relative bg-white dark:bg-blue-600 p-6 rounded-[2.5rem] shadow-[0_0_50px_rgba(59,130,246,0.5)] animate-bounce-slow">
          <IconShip className="w-16 h-16 text-nautical dark:text-white" />
        </div>
      </div>

      <div className="w-64 text-center">
        <div className="flex justify-between items-end mb-4">
          <span className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">Загрузка</span>
          <span className="text-white text-4xl font-black tabular-nums tracking-tighter">
            {Math.round(progress)}<span className="text-blue-400 ml-1 text-2xl">%</span>
          </span>
        </div>
        
        {/* Progress Bar Track */}
        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-white/5">
          {/* Progress Fill */}
          <div 
            className="h-full bg-gradient-to-r from-blue-600 via-blue-400 to-white transition-all duration-150 ease-out rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)]"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <p className="mt-6 text-blue-200/50 text-[10px] font-bold uppercase tracking-[0.2em] animate-pulse">
          ООО «Грузовая переправа»
        </p>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-5%); animation-timing-function: cubic-bezier(0.8,0,1,1); }
          50% { transform: none; animation-timing-function: cubic-bezier(0,0,0.2,1); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
      `}} />
    </div>
  );
};

export default Preloader;
