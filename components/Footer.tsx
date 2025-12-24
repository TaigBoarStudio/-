
import React from 'react';
import { Sparkles, Send, Globe, Mail } from 'lucide-react';
import { TELEGRAM_URL } from '../types';

const Footer: React.FC = () => {
  return (
    <footer className="bg-wild-night border-t border-white/5 py-24 relative overflow-hidden z-10">
       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-wild-sunset/30 to-transparent"></div>
       
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
            <div>
               <span className="text-white/10 text-6xl md:text-9xl font-display font-bold select-none leading-none uppercase">TAIGA</span>
               <p className="mt-8 text-white/30 max-w-sm text-sm leading-relaxed uppercase tracking-widest">
                 Бутик цифрового дизайна. <br />
                 Создаем продукты, которые работают на ваш результат с 2021 года.
               </p>
            </div>
            
            <div className="flex flex-wrap gap-8 lg:justify-end">
               <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/40 hover:text-wild-sunset transition-colors group">
                 <div className="p-4 rounded-xl bg-white/5 border border-white/5 group-hover:border-wild-sunset transition-colors">
                   <Send className="w-5 h-5" />
                 </div>
                 <span className="font-bold uppercase tracking-widest text-xs">Telegram</span>
               </a>
               <div className="flex items-center gap-3 text-white/40 cursor-not-allowed">
                 <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                   <Globe className="w-5 h-5" />
                 </div>
                 <span className="font-bold uppercase tracking-widest text-xs">Behance</span>
               </div>
               <div className="flex items-center gap-3 text-white/40 cursor-not-allowed">
                 <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                   <Mail className="w-5 h-5" />
                 </div>
                 <span className="font-bold uppercase tracking-widest text-xs">Email</span>
               </div>
            </div>
         </div>
         
         <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3 opacity-60">
              <Sparkles className="w-4 h-4 text-wild-cyan animate-pulse" />
              <span className="font-display font-bold text-sm tracking-[0.4em] text-white uppercase">
                TAIGA BOAR STUDIO © 2025
              </span>
            </div>
            <p className="text-white/20 text-[10px] uppercase tracking-[0.5em]">
              Designed for impact. Built for results.
            </p>
         </div>
       </div>
    </footer>
  );
};

export default Footer;
