import React, { useEffect } from 'react';
import { ArrowLeft, ExternalLink, Code, Smartphone, Clock, Globe, Layout, Monitor, Search } from 'lucide-react';

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
          <span className="text-sm font-medium hidden md:inline">Назад</span>
        </button>
      </div>

      {/* Abstract Hero Section */}
      <div className="relative min-h-[50vh] w-full overflow-hidden flex items-end bg-taiga-900">
        {/* Gradient Backgrounds */}
        <div className="absolute inset-0 bg-gradient-to-b from-taiga-950 via-taiga-900 to-taiga-950 z-10"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-taiga-500/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[50%] h-[50%] bg-boar-600/10 rounded-full blur-[100px]"></div>
        
        <div className="absolute inset-0 bg-noise opacity-20 z-10"></div>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 relative z-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-boar-600 text-white text-xs font-bold uppercase tracking-widest rounded-sm shadow-[0_0_10px_rgba(234,88,12,0.4)]">
                Medical Service
              </span>
              <span className="px-3 py-1 bg-taiga-900/50 border border-taiga-700 text-taiga-300 text-xs font-bold uppercase tracking-widest rounded-sm backdrop-blur">
                2024
              </span>
            </div>
            <h1 className="text-5xl md:text-8xl font-display font-bold text-white mb-6 leading-none drop-shadow-2xl">
              VETPULSE <span className="text-transparent bg-clip-text bg-gradient-to-r from-boar-400 to-red-500">24</span>
            </h1>
            <p className="text-xl md:text-2xl text-taiga-200 max-w-2xl font-light leading-relaxed">
              Разработка сайта для ветеринарной клиники. <br/>
              Дизайн, вызывающий доверие.
            </p>
            
            <div className="mt-8">
              <a 
                href="https://vetpulse24.ru" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-taiga-950 rounded-full font-bold text-lg hover:bg-boar-500 hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                <Globe className="w-5 h-5" />
                Перейти на сайт
              </a>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Quick Stats */}
        <div className="glass-card rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 border border-taiga-500/10">
          <div className="space-y-2">
            <div className="text-taiga-400 text-sm uppercase tracking-wider flex items-center gap-2">
              <Layout className="w-4 h-4 text-boar-500" /> Платформа
            </div>
            <div className="text-3xl font-display font-bold">Tilda</div>
            <div className="text-xs text-taiga-300/70">Zero Block</div>
          </div>
          <div className="space-y-2">
            <div className="text-taiga-400 text-sm uppercase tracking-wider flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-boar-500" /> Mobile
            </div>
            <div className="text-3xl font-display font-bold">100%</div>
            <div className="text-xs text-taiga-300/70">Адаптация</div>
          </div>
          <div className="space-y-2">
            <div className="text-taiga-400 text-sm uppercase tracking-wider flex items-center gap-2">
              <Clock className="w-4 h-4 text-boar-500" /> Сроки
            </div>
            <div className="text-3xl font-display font-bold">10 Дней</div>
            <div className="text-xs text-taiga-300/70">Под ключ</div>
          </div>
          <div className="space-y-2 flex items-center">
             <a href="https://vetpulse24.ru" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-boar-500 font-bold hover:text-white transition-colors">
               vetpulse24.ru <ExternalLink className="w-4 h-4" />
             </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16">
            
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-boar-500">01.</span>
                ЗАДАЧА
              </h2>
              <div className="prose prose-invert prose-lg text-taiga-200/80">
                <p>
                  Ветклинике требовался современный сайт для привлечения клиентов из поиска. Старый сайт был неадаптивным и сложным для восприятия.
                </p>
                <p className="border-l-4 border-taiga-700 pl-6 py-2 my-6 italic">
                  Ключевой вызов: Создать ощущение профессионализма и заботы. Сайт должен быстро загружаться на мобильных устройствах и предоставлять информацию о ценах и врачах в один клик.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-boar-500">02.</span>
                РЕШЕНИЕ
              </h2>
              <div className="bg-taiga-900/50 p-6 rounded-xl border border-taiga-800 mb-8">
                 <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                   <Code className="w-5 h-5 text-boar-500" /> Инструментарий
                 </h3>
                 <div className="flex flex-wrap gap-2">
                   {['Tilda Zero Block', 'Figma UI/UX', 'Yandex Maps API', 'SEO Basic', 'Mobile First'].map(tech => (
                     <span key={tech} className="px-3 py-1 bg-taiga-950 border border-taiga-800 rounded text-sm text-taiga-300">
                       {tech}
                     </span>
                   ))}
                 </div>
              </div>
              <div className="prose prose-invert prose-lg text-taiga-200/80 space-y-6">
                <p>
                  Мы разработали индивидуальный дизайн, отказавшись от шаблонных решений Tilda. Акцент сделан на строгой типографике и удобной навигации.
                </p>
                <ul className="space-y-4 list-none pl-0">
                  <li className="flex items-start gap-4">
                    <div className="bg-taiga-900 p-2 rounded-full mt-1">
                      <Layout className="w-5 h-5 text-boar-500" />
                    </div>
                    <div>
                      <strong className="text-white block mb-1">100% Zero Block</strong>
                      Весь сайт, включая хедер и футер, собран в Zero Block. Это позволило реализовать уникальную сетку и отступы, недоступные в стандартных блоках.
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-taiga-900 p-2 rounded-full mt-1">
                      <Smartphone className="w-5 h-5 text-boar-500" />
                    </div>
                    <div>
                      <strong className="text-white block mb-1">Идеальная адаптивность</strong>
                      Каждый блок вручную адаптирован под 5 разрешений экрана. Верстка не "плывет" ни на широких мониторах, ни на старых смартфонах.
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-taiga-900 p-2 rounded-full mt-1">
                      <Search className="w-5 h-5 text-boar-500" />
                    </div>
                    <div>
                      <strong className="text-white block mb-1">Информационная структура</strong>
                      Цены и услуги структурированы в понятные таблицы, чтобы клиент мог быстро найти нужную информацию без звонка администратору.
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            <section>
               <h2 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-boar-500">03.</span>
                РЕЗУЛЬТАТ
              </h2>
              <div className="glass-card p-8 rounded-2xl border border-taiga-500/20">
                 <p className="text-xl text-white mb-8 leading-relaxed">
                   Мы запустили имиджевый сайт, который полностью закрывает потребности клиники в презентации услуг. Чистый код Zero Block обеспечивает высокую скорость загрузки.
                 </p>
                 <div className="flex justify-center">
                    <a 
                      href="https://vetpulse24.ru" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-boar-600 rounded-xl overflow-hidden transition-all hover:bg-boar-500 hover:shadow-[0_0_30px_rgba(234,88,12,0.4)]"
                    >
                      <span className="relative flex items-center gap-3">
                        Посмотреть проект вживую <ExternalLink className="w-5 h-5" />
                      </span>
                    </a>
                 </div>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
             <div className="sticky top-32 p-6 rounded-2xl glass-card border border-taiga-500/20">
               <div className="flex items-center gap-3 mb-6">
                 <div className="p-3 bg-taiga-900 rounded-full text-boar-500">
                   <Monitor className="w-6 h-6" />
                 </div>
                 <div>
                   <h3 className="font-bold text-white">Нужен подобный сайт?</h3>
                   <p className="text-xs text-taiga-300">Медицина, услуги, бизнес</p>
                 </div>
               </div>
               
               <p className="text-taiga-200/70 mb-6 text-sm leading-relaxed">
                 Мы знаем, как упаковать сложные услуги в понятный интерфейс. Сделаем сайт, который будет работать на ваш имидж.
               </p>
               <a 
                 href="https://t.me/taigaboar_manager"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="block w-full py-3 bg-white text-black text-center font-bold rounded-xl hover:bg-boar-500 hover:text-white transition-all mb-4 shadow-lg"
               >
                 Обсудить проект
               </a>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectPage;