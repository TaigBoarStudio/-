import React from 'react';
import { ChevronDown, Send, Sparkles } from 'lucide-react';
import { NavLink } from '../types';

const Hero: React.FC = () => {
  // Define specific glow positions to avoid the center area where the boar is
  const glowZones = [
    { left: '5%', top: '10%', size: '300px', delay: '0s', opacity: 'bg-wild-cyan/10' },   // Top Left
    { left: '80%', top: '5%', size: '400px', delay: '2s', opacity: 'bg-wild-cyan/5' },    // Top Right
    { left: '-5%', top: '60%', size: '350px', delay: '4s', opacity: 'bg-wild-cyan/10' },  // Mid Left
    { left: '85%', top: '70%', size: '450px', delay: '1s', opacity: 'bg-wild-cyan/5' },   // Bottom Right
    { left: '15%', top: '85%', size: '250px', delay: '3s', opacity: 'bg-wild-cyan/10' },  // Bottom Left
    { left: '40%', top: '-10%', size: '500px', delay: '5s', opacity: 'bg-wild-cyan/5' },  // Top Center (very high)
  ];

  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-wild-night">
      {/* Main Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.postimg.cc/3w13zjcf/Google-AI-Studio-2025-12-13T15-09-29-758Z.png"
          alt="Taiga Boar Atmosphere"
          className="w-full h-full object-cover select-none pointer-events-none"
        />
        {/* Atmosphere Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-wild-night via-wild-night/40 to-transparent"></div>
        <div className="absolute inset-0 bg-wild-indigo/10 mix-blend-multiply"></div>
      </div>

      {/* Optimized Glowing Particles (Peripheral only) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {glowZones.map((glow, i) => (
          <div 
            key={i}
            className={`absolute ${glow.opacity} rounded-full blur-[120px] animate-float`}
            style={{
              left: glow.left,
              top: glow.top,
              width: glow.size,
              height: glow.size,
              animationDuration: '10s',
              animationDelay: glow.delay
            }}
          ></div>
        ))}
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10 relative">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-wild-indigo/60 border border-wild-cyan/30 backdrop-blur-lg mb-8 animate-fade-in-up">
          <Sparkles className="w-4 h-4 text-wild-cyan animate-pulse" />
          <span className="text-wild-cyan text-xs font-bold tracking-[0.2em] uppercase">MADE IN SIBERIA</span>
        </div>
        
        <h1 className="text-7xl md:text-[11rem] font-display font-bold text-white tracking-tighter mb-4 leading-[0.85] select-none uppercase">
          TAIGA<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-wild-sunset via-wild-gold to-wild-sunset bg-[length:200%_auto] animate-aurora">
            BOAR
          </span>
        </h1>
        
        <p className="mt-8 max-w-2xl text-lg md:text-xl text-white/80 mb-12 font-light leading-relaxed tracking-wide drop-shadow-xl">
          Создаем цифровые экосистемы с таежным характером. <br className="hidden md:block"/>
          <span className="text-wild-cyan font-medium">Tilda</span> • <span className="text-wild-cyan font-medium">Design</span> • <span className="text-wild-cyan font-medium">Telegram</span>
        </p>
        
        <div className="flex justify-center">
          <a 
            href={NavLink.PORTFOLIO}
            className="group relative inline-flex items-center justify-center px-12 py-5 text-lg font-bold text-white border border-white/10 bg-white/5 rounded-full hover:bg-white/10 hover:border-wild-cyan/50 transition-all backdrop-blur-md shadow-2xl"
          >
            Смотреть кейсы
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce text-wild-cyan/50">
        <ChevronDown className="w-6 h-6" />
      </div>
    </div>
  );
};

export default Hero;