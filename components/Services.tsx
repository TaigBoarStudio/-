import React from 'react';
import { Globe, Smartphone, Bot, Palette, Code2, Rocket } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 'web',
    title: 'Web Development',
    description: 'Высокопроизводительные сайты. Next.js, React. Надежные, как вечная мерзлота.',
    icon: Globe,
    tags: ['React', 'Next.js', 'Three.js']
  },
  {
    id: 'bot',
    title: 'Telegram Bots',
    description: 'Боты для автоматизации. Продажи, поддержка, воронки. Работают 24/7 без выходных.',
    icon: Bot,
    tags: ['Python', 'Aiogram', 'Payment']
  },
  {
    id: 'miniapp',
    title: 'TG Mini Apps',
    description: 'Приложения внутри Telegram. Web3, E-commerce, игры. Будущее мобайла.',
    icon: Smartphone,
    tags: ['TWA', 'React', 'TonConnect']
  },
  {
    id: 'design',
    title: 'Northern Design',
    description: 'Чистый, холодный, функциональный дизайн. UX, который режет глаз своей четкостью.',
    icon: Palette,
    tags: ['Figma', 'UI/UX', 'Motion']
  },
  {
    id: 'backend',
    title: 'Heavy Backend',
    description: 'Серверные решения под высокую нагрузку. Выдержит любой наплыв пользователей.',
    icon: Code2,
    tags: ['FastAPI', 'PostgreSQL', 'Docker']
  },
  {
    id: 'promotion',
    title: 'Упаковка Стаи',
    description: 'Брендинг и упаковка соцсетей. Единый стиль, выделяющий вас среди конкурентов.',
    icon: Rocket,
    tags: ['Branding', 'Style', 'Content']
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 tracking-tight">
            НАШ <span className="text-taiga-400">АРСЕНАЛ</span>
          </h2>
          <p className="text-taiga-200/60 max-w-2xl mx-auto">
            Инструменты для выживания и доминирования в цифровой тайге.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div 
              key={service.id}
              className="glass-card group p-8 rounded-2xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(20,184,166,0.2)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-20 transition-opacity">
                <service.icon className="w-24 h-24 text-taiga-400 transform rotate-12" />
              </div>

              <div className="w-14 h-14 bg-taiga-950/50 border border-taiga-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:border-boar-500/50 transition-colors text-taiga-400 group-hover:text-boar-500">
                <service.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-taiga-200 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-taiga-100/60 mb-6 leading-relaxed text-sm">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2 relative z-10">
                {service.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono text-taiga-300 bg-taiga-900/50 px-2 py-1 rounded border border-taiga-500/10">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;