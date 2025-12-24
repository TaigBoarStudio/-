
import React from 'react';
import { ChevronDown, Send, Sparkles } from 'lucide-react';
import { NavLink, TELEGRAM_URL } from '../types';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-wild-night">
      {/* Background Container restored to original brightness style */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.postimg.cc/3w13zjcf/Google-AI-Studio-2025-12-13T15-09-29-758Z.png"
          alt="Taiga Boar Studio Atmosphere"
          className="w-full h-full object-cover select-none pointer-events-none opacity-90 transition-opacity duration-1000"
        />
        {/* Simple gradient for basic contrast at the bottom and top */}
        <div className="absolute inset-0 bg-gradient-to-t from-wild-night via-transparent to-wild-night/20"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10 relative pt-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-wild-indigo/60 border border-wild-cyan/30 backdrop-blur-lg mb-8 animate-fade-in-up">
          <Sparkles className="w-4 h-4 text-wild-cyan animate-pulse" />
          <span className="text-wild-cyan text-xs font-bold tracking-[0.2em] uppercase">PREMIUM DIGITAL SOLUTIONS</span>
        </div>
        
        <h1 className="text-6xl md:text-[10rem] font-display font-bold text-white tracking-tighter mb-6 leading-[0.85] select-none uppercase drop-shadow-2xl">
          TAIGA<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-wild-sunset via-wild-gold to-wild-sunset bg-[length:200%_auto] animate-aurora">
            BOAR
          </span>
        </h1>
        
        <p className="mt-4 max-w-3xl text-xl md:text-3xl text-white mb-4 font-bold leading-tight uppercase tracking-tight drop-shadow-2xl">
          Проектируем и запускаем цифровые продукты, <br className="hidden md:block"/>
          <span className="text-wild-sunset">которые приносят клиентов</span>
        </p>
        
        <p className="max-w-xl text-white text-lg md:text-xl mb-12 font-medium drop-shadow-2xl">
          Уникальный дизайн, кастомная разработка и Telegram — под ключ, без шаблонов и лишней болтовни.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <a 
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 px-12 py-5 text-xl font-black bg-wild-sunset text-white rounded-full hover:bg-white hover:text-wild-night transition-all shadow-[0_0_50px_rgba(255,140,0,0.5)] hover:scale-105 active:scale-95"
          >
            <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            ОБСУДИТЬ ПРОЕКТ
          </a>

          <a 
            href={NavLink.PORTFOLIO}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(NavLink.PORTFOLIO)?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white border border-white/20 bg-white/10 rounded-full hover:bg-white/20 transition-all backdrop-blur-md"
          >
            Смотреть кейсы
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce text-wild-cyan/80">
        <ChevronDown className="w-8 h-8" />
      </div>
    </div>
  );
};

export default Hero;
