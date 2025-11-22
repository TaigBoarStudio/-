import React from 'react';
import { Brain, PenTool, Shield, Swords, Terminal, Flame } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10 overflow-hidden">
      {/* Background texture specific for this section */}
      <div className="absolute inset-0 bg-taiga-950">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-taiga-800/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-boar-900/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Manifesto */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-taiga-900/50 border border-taiga-800 text-boar-500 text-xs font-bold uppercase tracking-widest mb-6">
              <Flame className="w-3 h-3" />
              <span>Философия Стаи</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              ДВОЕ.<br />
              ОДНА <span className="text-taiga-400">ЦЕЛЬ.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-taiga-200/80 leading-relaxed">
              <p>
                В мире цифрового шума выживает не самый крупный, а самый эффективный. Мы — не раздутое агентство с десятком бесполезных менеджеров. 
              </p>
              <p className="font-bold text-white border-l-4 border-boar-500 pl-4">
                Мы — спецотряд из двух человек. Архитектор и Визионер. Спина к спине.
              </p>
              <p>
                Наша философия — <span className="text-taiga-300">Цифровой Дарвинизм</span>. Мы создаем продукты, которые эволюционируют, доминируют и приносят добычу своим владельцам. Личная ответственность за каждый пиксель и каждую строчку кода.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12 border-t border-taiga-800 pt-8">
              <div>
                <div className="text-3xl font-display font-bold text-white">10+</div>
                <div className="text-xs text-taiga-400 uppercase tracking-wider mt-1">Лет опыта</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-white">∞</div>
                <div className="text-xs text-taiga-400 uppercase tracking-wider mt-1">Энтузиазма</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-white">24/7</div>
                <div className="text-xs text-taiga-400 uppercase tracking-wider mt-1">На связи</div>
              </div>
            </div>
          </div>

          {/* The Duo Cards */}
          <div className="grid gap-6">
            {/* Person 1 */}
            <div className="glass-card p-6 rounded-2xl flex gap-6 items-start group hover:bg-taiga-900/60 transition-colors border-l-4 border-l-transparent hover:border-l-boar-500">
              <div className="p-4 bg-taiga-950 rounded-xl text-taiga-400 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                <Terminal className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Архитектор</h3>
                <p className="text-xs text-boar-500 font-bold uppercase tracking-widest mb-3">Backend & Logic</p>
                <p className="text-sm text-taiga-300 leading-relaxed">
                  Строит фундамент, который выдержит любую нагрузку. Отвечает за то, "как это работает". Логика, базы данных, безопасность, скорость.
                </p>
              </div>
            </div>

            {/* Person 2 */}
            <div className="glass-card p-6 rounded-2xl flex gap-6 items-start group hover:bg-taiga-900/60 transition-colors border-l-4 border-l-transparent hover:border-l-taiga-400">
              <div className="p-4 bg-taiga-950 rounded-xl text-taiga-400 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                <PenTool className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Визионер</h3>
                <p className="text-xs text-taiga-400 font-bold uppercase tracking-widest mb-3">Design & Frontend</p>
                <p className="text-sm text-taiga-300 leading-relaxed">
                  Создает лицо продукта. Отвечает за то, "как это выглядит и ощущается". Интерфейсы, анимации, пользовательский опыт, эстетика холода.
                </p>
              </div>
            </div>
            
            {/* Connection Icon */}
            <div className="hidden lg:flex justify-center -mt-3 -mb-3 relative z-10">
               <div className="bg-taiga-950 border border-taiga-800 p-2 rounded-full text-taiga-500">
                 <Swords className="w-5 h-5" />
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;