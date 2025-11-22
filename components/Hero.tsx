import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { NavLink } from '../types';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Aurora Borealis Background */}
      <div className="absolute inset-0 overflow-hidden -z-20">
        {/* Deep Taiga Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-b from-taiga-950 via-taiga-900 to-taiga-950"></div>
        
        {/* Aurora Globs */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-taiga-500/20 rounded-full blur-[120px] animate-aurora mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900/30 rounded-full blur-[120px] animate-pulse-slow mix-blend-screen"></div>
        <div className="absolute top-[20%] right-[20%] w-[40%] h-[40%] bg-boar-600/10 rounded-full blur-[100px] animate-float"></div>
      </div>

      {/* Snow Effect (Simulated with CSS for performance) */}
      <div className="absolute inset-0 pointer-events-none -z-10 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-white rounded-full animate-snow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 20}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDuration: `${Math.random() * 5 + 10}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10 relative">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-taiga-900/40 border border-taiga-500/30 backdrop-blur-md mb-8 animate-fade-in-up shadow-[0_0_15px_rgba(20,184,166,0.2)]">
          <span className="w-2 h-2 rounded-full bg-boar-500 animate-pulse"></span>
          <span className="text-taiga-100 text-sm font-medium tracking-wide">MADE IN SIBERIA</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-bold text-white tracking-tight mb-6 leading-[0.9] drop-shadow-2xl">
          TAIGA <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-boar-400 via-boar-500 to-boar-600">
            BOAR
          </span>
        </h1>
        
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-taiga-100/80 mb-10 font-light leading-relaxed">
          Суровый код с сибирским характером. <br className="hidden md:block"/>
          Создаем веб-продукты, которые выживают в любых условиях.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a 
            href={NavLink.CONTACT}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-boar-600 rounded-full overflow-hidden transition-all hover:bg-boar-500 shadow-[0_0_20px_rgba(234,88,12,0.4)] hover:shadow-[0_0_30px_rgba(234,88,12,0.6)]"
          >
            <span className="relative flex items-center gap-2">
              Начать охоту <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </a>
          <a 
            href={NavLink.PORTFOLIO}
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-taiga-100 border border-taiga-500/30 rounded-full hover:bg-taiga-900/50 hover:text-white transition-all backdrop-blur-sm"
          >
            Смотреть добычу
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-taiga-500/50">
        <ChevronDown className="w-8 h-8" />
      </div>
    </div>
  );
};

export default Hero;