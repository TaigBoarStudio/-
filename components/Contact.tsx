import React from 'react';
import { Send, ArrowRight, Zap } from 'lucide-react';
import { Logo } from './Logo';
import { TELEGRAM_URL } from '../types';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-wild-night">
       <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_100%,_rgba(255,140,0,0.05)_0%,_transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="glass-card rounded-[3rem] p-8 md:p-20 border border-white/5 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-10 opacity-5 hidden lg:block">
            <Logo className="w-64 h-64" filled={false} />
          </div>

          <div className="max-w-3xl relative z-10">
            <div className="inline-flex items-center gap-2 text-wild-sunset font-bold text-xs uppercase tracking-[0.3em] mb-6">
              <span className="w-8 h-px bg-wild-sunset"></span>
              CONTACT US
            </div>
            
            <h2 className="text-4xl md:text-7xl font-display font-bold text-white mb-8 leading-[1.1] uppercase">
              ОБСУДИМ ВАШ <br />
              <span className="text-wild-cyan italic">СЛЕДУЮЩИЙ</span> ПРОЕКТ?
            </h2>
            
            <p className="text-white/50 text-xl mb-12 leading-relaxed font-light">
              Напишите нам в Telegram. Мы ответим в течение часа, проконсультируем по этапам и подготовим примерный расчет стоимости.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <a 
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-4 bg-white text-wild-night px-12 py-6 rounded-2xl font-black text-xl hover:bg-wild-sunset hover:text-white transition-all shadow-2xl hover:scale-105 active:scale-95"
              >
                <Send className="w-6 h-6" />
                НАПИСАТЬ В TELEGRAM
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </a>
              
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4 px-6 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                  <div className="w-3 h-3 bg-wild-cyan rounded-full animate-pulse shadow-[0_0_10px_#40e0d0]"></div>
                  <span className="text-white/60 font-medium uppercase tracking-widest text-[10px]">Сейчас в сети</span>
                </div>
                <div className="flex items-center gap-2 text-white/30 text-[10px] uppercase tracking-widest px-6">
                  <Zap className="w-3 h-3 text-wild-sunset" /> Ответ до 60 минут
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;