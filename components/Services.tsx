import React from 'react';
import { Smartphone, Bot, Palette, Layout, Zap, PenTool } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 'tilda',
    title: 'Tilda Publishing',
    description: 'Разработка сайтов на Tilda. Zero Block, сложная анимация, интеграции. Быстро и красиво.',
    icon: Layout,
    tags: ['Zero Block', 'Step-by-step', 'CRM']
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description: 'Проектирование интерфейсов в Figma. Прототипы, дизайн-системы и визуал, который продает.',
    icon: Palette,
    tags: ['Figma', 'Prototyping', 'UI Kit']
  },
  {
    id: 'bot',
    title: 'Telegram Bots',
    description: 'Чат-боты для автоматизации рутины. Магазины, техподдержка, рассылки.',
    icon: Bot,
    tags: ['Python', 'Aiogram', 'Automation']
  },
  {
    id: 'miniapp',
    title: 'TG Mini Apps',
    description: 'Веб-приложения внутри Telegram. Игры, сервисы и магазины прямо в мессенджере.',
    icon: Smartphone,
    tags: ['React', 'TWA', 'TonConnect']
  },
  {
    id: 'identity',
    title: 'Identity',
    description: 'Логотипы и фирменный стиль. Создаем узнаваемый образ для вашего бренда.',
    icon: PenTool,
    tags: ['Logo', 'Brandbook', 'Style']
  },
  {
    id: 'optimization',
    title: 'Optimization',
    description: 'Ускорение работы сайтов, SEO-настройки и подключение аналитики.',
    icon: Zap,
    tags: ['SEO', 'Analytics', 'Speed']
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 tracking-tight">
            ЧТО МЫ <span className="text-taiga-400">ДЕЛАЕМ</span>
          </h2>
          <p className="text-taiga-200/60 max-w-2xl mx-auto">
            Специализируемся на эффективных решениях. Никакого лишнего кода там, где он не нужен.
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
                    {tag}
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