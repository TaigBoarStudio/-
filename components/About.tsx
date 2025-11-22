import React from 'react';
import { PenTool, Monitor, Sparkles, Layers } from 'lucide-react';

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
              <Sparkles className="w-3 h-3" />
              <span>О Студии</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              ДВА <span className="text-taiga-400">СПЕЦИАЛИСТА.</span><br />
              ОДИН СТАНДАРТ.
            </h2>
            
            <div className="space-y-6 text-lg text-taiga-200/80 leading-relaxed">
              <p>
                Мы отказались от громоздкого продакшена в пользу скорости и эстетики. Мы не раздуваем штат и сметы. 
              </p>
              <p className="font-bold text-white border-l-4 border-boar-500 pl-4">
                Наш выбор — Tilda для веба и Figma для дизайна.
              </p>
              <p>
                Это позволяет запускать проекты за дни, а не месяцы. Мы знаем возможности платформы на 100% и выжимаем из Zero Block максимум, создавая уникальные сайты, которые не отличить от кастомной разработки.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12 border-t border-taiga-800 pt-8">
              <div>
                <div className="text-3xl font-display font-bold text-white">50+</div>
                <div className="text-xs text-taiga-400 uppercase tracking-wider mt-1">Проектов</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-white">Tilda</div>
                <div className="text-xs text-taiga-400 uppercase tracking-wider mt-1">Experts</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-white">100%</div>
                <div className="text-xs text-taiga-400 uppercase tracking-wider mt-1">Качества</div>
              </div>
            </div>
          </div>

          {/* The Duo Cards */}
          <div className="grid gap-6">
            {/* Person 1 */}
            <div className="glass-card p-6 rounded-2xl flex gap-6 items-start group hover:bg-taiga-900/60 transition-colors border-l-4 border-l-transparent hover:border-l-boar-500">
              <div className="p-4 bg-taiga-950 rounded-xl text-taiga-400 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                <Monitor className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Разработчик</h3>
                <p className="text-xs text-boar-500 font-bold uppercase tracking-widest mb-3">Tilda & Technical</p>
                <p className="text-sm text-taiga-300 leading-relaxed">
                  Мастер Zero Block. Настраивает анимации, интеграции, формы, SEO и подключает домены. Делает так, чтобы все работало как часы.
                </p>
              </div>
            </div>

            {/* Person 2 */}
            <div className="glass-card p-6 rounded-2xl flex gap-6 items-start group hover:bg-taiga-900/60 transition-colors border-l-4 border-l-transparent hover:border-l-taiga-400">
              <div className="p-4 bg-taiga-950 rounded-xl text-taiga-400 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                <PenTool className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Дизайнер</h3>
                <p className="text-xs text-taiga-400 font-bold uppercase tracking-widest mb-3">Figma & Visual</p>
                <p className="text-sm text-taiga-300 leading-relaxed">
                  Отвечает за смыслы и эстетику. Создает чистые, понятные макеты, продумывает логику пользователя и визуальный стиль бренда.
                </p>
              </div>
            </div>
            
            {/* Connection Icon */}
            <div className="hidden lg:flex justify-center -mt-3 -mb-3 relative z-10">
               <div className="bg-taiga-950 border border-taiga-800 p-2 rounded-full text-taiga-500">
                 <Layers className="w-5 h-5" />
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;