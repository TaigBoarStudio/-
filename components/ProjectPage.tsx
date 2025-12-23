import React, { useEffect } from 'react';
import { ArrowLeft, ExternalLink, Code, Smartphone, Clock, Globe, Layout, Search, Shield, MapPin, Layers, Camera, Heart } from 'lucide-react';

interface ProjectPageProps {
  projectId: string;
  onBack: () => void;
}

const projectData: Record<string, any> = {
  '1': {
    title: 'VETPULSE',
    titleSuffix: '24',
    category: 'Medical Service',
    year: '2024',
    url: 'https://vetpulse24.ru',
    description: 'Разработка сайта для ветеринарной клиники. Дизайн, вызывающий доверие.',
    platform: 'Tilda',
    platformDetail: 'Zero Block',
    stats: {
      platform: 'Tilda',
      mobile: '100%',
      time: '10 Дней'
    },
    tasks: 'Ветклинике требовался современный сайт для привлечения клиентов из поиска. Старый сайт был неадаптивным и сложным для восприятия.',
    challenge: 'Ключевой вызов: Создать ощущение профессионализма и заботы. Сайт должен быстро загружаться на мобильных устройствах.',
    techs: ['Tilda Zero Block', 'Figma UI/UX', 'Yandex Maps API', 'SEO Basic', 'Mobile First'],
    result: 'Мы запустили имиджевый сайт, который полностью закрывает потребности клиники в презентации услуг и повышает лояльность клиентов.'
  },
  '3': {
    title: 'СТРАЖ',
    titleSuffix: 'СЕВЕРА',
    category: 'Breeding / Luxury Pets',
    year: '2024',
    url: 'https://strazh-severa.ru/',
    description: 'Цифровой дом для питомника ирландских волкодавов. Благородство, стать и история породы.',
    platform: 'Web Platform',
    platformDetail: 'Custom Layout',
    stats: {
      platform: 'Custom',
      mobile: '100%',
      time: '12 Дней'
    },
    tasks: 'Создать статусное интернет-представительство для питомника одной из самых крупных и величественных пород собак в мире. Сайт должен подчеркивать экспертность заводчика и красоту животных.',
    challenge: 'Ключевой вызов: Передать масштаб и характер ирландских волкодавов через экран. Использовать визуальный язык, который соответствует понятию «королевская порода».',
    techs: ['UI/UX Design', 'Visual Storytelling', 'High-Res Photo Engine', 'Typography', 'Responsive Design'],
    result: 'Результатом стал монументальный ресурс с глубокой темной эстетикой. Мы реализовали удобную систему галерей и родословных, превратив сайт в полноценную энциклопедию питомника, которая привлекает ценителей породы со всей страны.'
  }
};

const ProjectPage: React.FC<ProjectPageProps> = ({ projectId, onBack }) => {
  const data = projectData[projectId] || projectData['1'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  return (
    <div className="min-h-screen bg-wild-night text-white pt-20 animate-fade-in relative z-10">
      <div className="fixed top-24 left-4 md:left-8 z-40">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 px-4 py-2 bg-wild-indigo/80 backdrop-blur border border-white/5 rounded-full hover:bg-wild-sunset hover:text-wild-night transition-all shadow-lg"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium hidden md:inline">Назад</span>
        </button>
      </div>

      <div className="relative min-h-[50vh] w-full overflow-hidden flex items-end bg-wild-indigo">
        <div className="absolute inset-0 bg-gradient-to-b from-wild-night via-wild-indigo/80 to-wild-night z-10"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-wild-sunset/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[50%] h-[50%] bg-wild-cyan/10 rounded-full blur-[100px]"></div>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 relative z-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-wild-sunset text-wild-night text-xs font-bold uppercase tracking-widest rounded-sm shadow-[0_0_10px_rgba(255,140,0,0.4)]">
                {data.category}
              </span>
              <span className="px-3 py-1 bg-wild-indigo/50 border border-white/10 text-white/50 text-xs font-bold uppercase tracking-widest rounded-sm backdrop-blur">
                {data.year}
              </span>
            </div>
            <h1 className="text-5xl md:text-8xl font-display font-bold text-white mb-6 leading-none drop-shadow-2xl uppercase">
              {data.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-wild-sunset to-wild-gold">{data.titleSuffix}</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 max-w-2xl font-light leading-relaxed">
              {data.description}
            </p>
            
            <div className="mt-8">
              <a 
                href={data.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-wild-night rounded-full font-bold text-lg hover:bg-wild-sunset hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                <Globe className="w-5 h-5" />
                Перейти на сайт
              </a>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="glass-card rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 border border-white/5">
          <div className="space-y-2">
            <div className="text-white/40 text-sm uppercase tracking-wider flex items-center gap-2">
              <Layout className="w-4 h-4 text-wild-sunset" /> Тип проекта
            </div>
            <div className="text-3xl font-display font-bold">{data.stats.platform}</div>
            <div className="text-xs text-white/20">{data.platformDetail}</div>
          </div>
          <div className="space-y-2">
            <div className="text-white/40 text-sm uppercase tracking-wider flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-wild-sunset" /> Mobile
            </div>
            <div className="text-3xl font-display font-bold">{data.stats.mobile}</div>
            <div className="text-xs text-white/20">Адаптация</div>
          </div>
          <div className="space-y-2">
            <div className="text-white/40 text-sm uppercase tracking-wider flex items-center gap-2">
              <Clock className="w-4 h-4 text-wild-sunset" /> Сроки
            </div>
            <div className="text-3xl font-display font-bold">{data.stats.time}</div>
            <div className="text-xs text-white/20">Релиз</div>
          </div>
          <div className="space-y-2 flex items-center">
             <a href={data.url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-wild-sunset font-bold hover:text-white transition-colors truncate">
               {data.url.replace('https://', '')} <ExternalLink className="w-4 h-4" />
             </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-12 space-y-16">
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-wild-sunset">01.</span>
                ЗАДАЧА
              </h2>
              <div className="prose prose-invert prose-lg text-white/60">
                <p>{data.tasks}</p>
                <p className="border-l-4 border-wild-sunset pl-6 py-2 my-6 italic">
                  {data.challenge}
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-wild-sunset">02.</span>
                РЕШЕНИЕ
              </h2>
              <div className="bg-wild-indigo/50 p-6 rounded-xl border border-white/5 mb-8">
                 <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                   <Code className="w-5 h-5 text-wild-sunset" /> Компетенции
                 </h3>
                 <div className="flex flex-wrap gap-2">
                   {data.techs.map((tech: string) => (
                     <span key={tech} className="px-3 py-1 bg-wild-night border border-white/10 rounded text-sm text-white/40">
                       {tech}
                     </span>
                   ))}
                 </div>
              </div>
              <div className="prose prose-invert prose-lg text-white/60 space-y-6">
                <p>
                  Мы сделали ставку на эстетику чистого холста. {projectId === '3' ? 'Ничто не должно отвлекать от величественных портретов волкодавов. Мы использовали глубокую палитру и "воздух" в макете.' : 'Акцент сделан на строгой типографике и удобной навигации.'}
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 list-none pl-0">
                  <li className="flex flex-col gap-4 bg-white/5 p-6 rounded-2xl border border-white/5">
                    <div className="bg-wild-indigo w-fit p-3 rounded-full">
                      {projectId === '3' ? <Camera className="w-6 h-6 text-wild-sunset" /> : <Layout className="w-6 h-6 text-wild-sunset" />}
                    </div>
                    <div>
                      <strong className="text-white block mb-2">{projectId === '3' ? 'Photo Focus' : '100% Zero Block'}</strong>
                      <span className="text-sm">{projectId === '3' ? 'Оптимизированная загрузка тяжелого фото-контента.' : 'Реализована уникальная сетка без ограничений.'}</span>
                    </div>
                  </li>
                  <li className="flex flex-col gap-4 bg-white/5 p-6 rounded-2xl border border-white/5">
                    <div className="bg-wild-indigo w-fit p-3 rounded-full">
                      {projectId === '3' ? <Heart className="w-6 h-6 text-wild-sunset" /> : <Smartphone className="w-6 h-6 text-wild-sunset" />}
                    </div>
                    <div>
                      <strong className="text-white block mb-2">{projectId === '3' ? 'Trust UI' : 'Mobile First'}</strong>
                      <span className="text-sm">{projectId === '3' ? 'Интерфейс, транслирующий любовь к своему делу.' : 'Идеальная работа на любых смартфонах.'}</span>
                    </div>
                  </li>
                  <li className="flex flex-col gap-4 bg-white/5 p-6 rounded-2xl border border-white/5">
                    <div className="bg-wild-indigo w-fit p-3 rounded-full">
                      {projectId === '3' ? <Layers className="w-6 h-6 text-wild-sunset" /> : <Search className="w-6 h-6 text-wild-sunset" />}
                    </div>
                    <div>
                      <strong className="text-white block mb-2">{projectId === '3' ? 'Architecture' : 'SEO-Оптимизация'}</strong>
                      <span className="text-sm">{projectId === '3' ? 'Продуманная структура карточек собак и родословных.' : 'Высокие позиции в поисковых системах.'}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            <section className="pb-20">
               <h2 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-wild-sunset">03.</span>
                РЕЗУЛЬТАТ
              </h2>
              <div className="glass-card p-12 rounded-3xl border border-white/5 text-center">
                 <p className="text-2xl text-white mb-10 leading-relaxed max-w-3xl mx-auto">
                   {data.result}
                 </p>
                 <a 
                    href={data.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-white text-wild-night rounded-full font-bold text-lg hover:bg-wild-sunset hover:text-white transition-all"
                  >
                    Посмотреть сайт вживую <ExternalLink className="w-5 h-5" />
                  </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;