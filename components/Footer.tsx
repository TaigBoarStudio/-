import React from 'react';
import { Github, Twitter, Instagram } from 'lucide-react';
import { Logo } from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-taiga-950 border-t border-taiga-900 pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-white bg-boar-600 p-2 rounded-lg shadow-[0_0_15px_rgba(234,88,12,0.3)]">
                <Logo className="w-6 h-6" filled={false} />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                TAIGA BOAR
              </span>
            </div>
            <p className="text-taiga-300 max-w-sm mb-6">
              Мы создаем цифровые продукты, которые работают в любых условиях. Надежный код с сибирским характером.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-taiga-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="text-taiga-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-taiga-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Услуги</h4>
            <ul className="space-y-2 text-taiga-400 text-sm">
              <li><a href="#" className="hover:text-boar-500 transition-colors">Разработка сайтов</a></li>
              <li><a href="#" className="hover:text-boar-500 transition-colors">Telegram Боты</a></li>
              <li><a href="#" className="hover:text-boar-500 transition-colors">Mini Apps</a></li>
              <li><a href="#" className="hover:text-boar-500 transition-colors">Northern Design</a></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Компания</h4>
             <ul className="space-y-2 text-taiga-400 text-sm">
               <li><a href="#" className="hover:text-boar-500 transition-colors">О нас</a></li>
               <li><a href="#" className="hover:text-boar-500 transition-colors">Карьера</a></li>
               <li><a href="#" className="hover:text-boar-500 transition-colors">Контакты</a></li>
               <li><a href="#" className="hover:text-boar-500 transition-colors">Блог</a></li>
             </ul>
          </div>
        </div>
        
        <div className="border-t border-taiga-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-taiga-500/50 text-sm">
            © 2024 Taiga Boar Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-taiga-500/50 text-xs">
             <span className="w-1.5 h-1.5 bg-boar-600 rounded-full"></span>
             Designed in Siberia.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;