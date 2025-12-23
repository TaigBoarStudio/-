import React from 'react';
import { Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-wild-night border-t border-white/5 py-24 relative overflow-hidden z-10">
       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-wild-sunset/30 to-transparent"></div>
       
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
         <div className="mb-12">
            <span className="text-white/20 text-[10rem] font-display font-bold select-none leading-none opacity-20 uppercase">TAIGA</span>
         </div>
         
         <div className="relative z-10 flex flex-col items-center gap-6">
            <div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-700 cursor-default">
              <Sparkles className="w-5 h-5 text-wild-cyan animate-pulse" />
              <span className="font-display font-bold text-lg tracking-[0.4em] text-white uppercase">
                TAIGA BOAR STUDIO © 2025
              </span>
            </div>
            <p className="text-white/20 text-xs uppercase tracking-widest">
              Built with precision. Designed for the wild.
            </p>
         </div>
       </div>
    </footer>
  );
};

export default Footer;