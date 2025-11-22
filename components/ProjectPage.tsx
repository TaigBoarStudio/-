import React, { useEffect } from 'react';
import { ArrowLeft, ExternalLink, Zap, BarChart3, Clock, Code, CheckCircle2 } from 'lucide-react';

interface ProjectPageProps {
  onBack: () => void;
}

const ProjectPage: React.FC<ProjectPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-taiga-950 text-white pt-20 animate-fade-in relative z-10">
      {/* Navigation Bar for Project */}
      <div className="fixed top-24 left-4 md:left-8 z-40">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 px-4 py-2 bg-taiga-900/80 backdrop-blur border border-taiga-800 rounded-full hover:bg-boar-600 hover:text-white transition-all shadow-lg"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium hidden md:inline">Назад в логово</span>
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-taiga-950/40 to-taiga-950 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
          alt="Neon Shop Cover" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute bottom-0 left-0 w-full p-4 md:p-12 z-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-boar-600 text-white text-xs font-bold uppercase tracking-widest rounded-sm shadow-[0_0_10px_rgba(234,88,12,0.4)]">
                E-Commerce
              </span>
              <span className="px-3 py-1 bg-taiga-900/50 border border-taiga-700 text-taiga-300 text-xs font-bold uppercase tracking-widest rounded-sm backdrop-blur">
                2024
              </span>
            </div>
            <h1 className="text-5xl md:text-8xl font-display font-bold text-white mb-4 leading-none drop-shadow-2xl">
              NEON <span className="text-transparent bg-clip-text bg-gradient-to-r from-boar-400 to-purple-600">E-SHOP</span>
            </h1>
            <p className="text-xl text-taiga-200 max-w-2xl">
              Разработка футуристичного интернет-магазина уличной одежды с 3D-примеркой и интеграцией крипто-платежей.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Quick Stats */}
        <div className="glass-card rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 border border-taiga-500/10">
          <div className="space-y-2">
            <div className="text-taiga-400 text-sm uppercase tracking-wider flex items-center gap-2">
              <Zap className="w-4 h-4 text-boar-500" /> Скорость
            </div>
            <div className="text-3xl font-display font-bold">0.4s</div>
            <div className="text-xs text-taiga-300/70">Загрузка страницы</div>
          </div>
          <div className="space-y-2">
            <div className="text-taiga-400 text-sm uppercase tracking-wider flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-boar-500" /> Конверсия
            </div>
            <div className="text-3xl font-display font-bold">+140%</div>
            <div className="text-xs text-taiga-300/70">Рост продаж</div>
          </div>
          <div className="space-y-2">
            <div className="text-taiga-400 text-sm uppercase tracking-wider flex items-center gap-2">
              <Clock className="w-4 h-4 text-boar-500" /> Сроки
            </div>
            <div className="text-3xl font-display font-bold">28 Дней</div>
            <div className="text-xs text-taiga-300/70">От прототипа до релиза</div>
          </div>
          <div className="space-y-2">
             <a href="#" className="group block h-full flex flex-col justify-center">
               <div className="flex items-center gap-2 text-boar-500 font-bold group-hover:text-white transition-colors">
                 Смотреть сайт <ExternalLink className="w-4 h-4" />
               </div>
             </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16">
            
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-boar-500">01.</span>
                ЦЕЛЬ (THE HUNT)
              </h2>
              <div className="prose prose-invert prose-lg text-taiga-200/80">
                <p>
                  Клиент — бренд уличной одежды, которому стало тесно в Instagram. Старый сайт на конструкторе не выдерживал нагрузку во время дропов коллекций и выглядел как "привет из 2010-го".
                </p>
                <p>
                  <strong>Задача:</strong> Создать платформу, которая выдержит наплыв 50 000 пользователей за час, будет поддерживать оплату TON и USDT, и выглядеть так, будто сайт прилетел из 2077 года.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-boar-500">02.</span>
                АТАКА (THE ATTACK)
              </h2>
              <div className="bg-taiga-900/50 p-6 rounded-xl border border-taiga-800 mb-6">
                 <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                   <Code className="w-5 h-5 text-boar-500" /> Технический стек
                 </h3>
                 <div className="flex flex-wrap gap-2">
                   {['Next.js 14', 'TypeScript', 'Tailwind', 'Three.js', 'Node.js', 'PostgreSQL'].map(tech => (
                     <span key={tech} className="px-3 py-1 bg-taiga-950 border border-taiga-800 rounded text-sm text-taiga-300">
                       {tech}
                     </span>
                   ))}
                 </div>
              </div>
              <div className="prose prose-invert prose-lg text-taiga-200/80 space-y-4">
                <p>
                  Мы отказались от шаблонных решений. Фронтенд переписан на <strong>Next.js</strong> с использованием SSR для мгновенной индексации. 
                </p>
                <ul className="list-none space-y-2 pl-0">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-boar-500 mt-1 flex-shrink-0" />
                    <span>Интегрировали Three.js для просмотра 3D-моделей одежды.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-boar-500 mt-1 flex-shrink-0" />
                    <span>Написали смарт-контракт для автоматического процессинга крипто-платежей.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-boar-500 mt-1 flex-shrink-0" />
                    <span>Внедрили систему очередей на Redis, чтобы сайт не падал во время дропов.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
               <h2 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-boar-500">03.</span>
                ИНТЕРФЕЙСЫ
              </h2>
              <div className="space-y-8">
                <div className="rounded-xl overflow-hidden border border-taiga-800 group shadow-2xl shadow-taiga-900/50">
                   <img 
                     src="https://images.unsplash.com/photo-1481487484168-9b930d55208d?q=80&w=2400&auto=format&fit=crop" 
                     alt="Catalog Interface" 
                     className="w-full hover:scale-105 transition-transform duration-700"
                   />
                </div>
                <div className="grid grid-cols-2 gap-8">
                   <div className="rounded-xl overflow-hidden border border-taiga-800 group shadow-xl">
                      <img 
                        src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop" 
                        alt="Mobile View" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                   </div>
                   <div className="rounded-xl overflow-hidden border border-taiga-800 group shadow-xl">
                      <img 
                        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop" 
                        alt="Details View" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                   </div>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
             <div className="sticky top-24 p-6 rounded-2xl glass-card border border-taiga-500/20">
               <h3 className="text-xl font-bold text-white mb-4">Хотите так же?</h3>
               <p className="text-taiga-200/70 mb-6 text-sm">
                 Мы создаем проекты, которые выделяются из серой массы. Оставьте заявку, и мы обсудим вашу задачу.
               </p>
               <button 
                 onClick={onBack}
                 className="w-full py-3 bg-white text-black font-bold rounded-xl hover:bg-boar-500 hover:text-white transition-all mb-4 shadow-lg"
               >
                 Обсудить проект
               </button>
               <div className="pt-4 border-t border-taiga-500/20">
                 <p className="text-xs text-taiga-400 mb-2">Услуги в проекте:</p>
                 <div className="flex flex-wrap gap-2">
                   <span className="text-xs text-taiga-200 bg-taiga-900 px-2 py-1 rounded">Web Development</span>
                   <span className="text-xs text-taiga-200 bg-taiga-900 px-2 py-1 rounded">UI/UX Design</span>
                   <span className="text-xs text-taiga-200 bg-taiga-900 px-2 py-1 rounded">Web3 Integration</span>
                 </div>
               </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectPage;