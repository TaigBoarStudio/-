import React from 'react';
import { Smartphone, Bot, Palette, Layout, Zap, Globe } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 'tilda',
    title: 'Tilda Mastery',
    description: 'Разработка на грани искусства. 100% Zero Block, кастомный код, интеграции любой сложности.',
    icon: Layout
  },
  {
    id: 'design',
    title: 'Brilliant Design',
    description: 'Интерфейсы, которые хочется трогать. UI/UX в Figma с акцентом на эстетику и конверсию.',
    icon: Palette
  },
  {
    id: 'bot',
    title: 'Telegram Ecosystem',
    description: 'Боты для автоматизации и Mini Apps для полноценных сервисов внутри мессенджера.',
    icon: Bot
  },
  {
    id: 'performance',
    title: 'High Performance',
    description: 'Техническая оптимизация, высокая скорость загрузки и идеальная работа на всех устройствах.',
    icon: Zap
  },
  {
    id: 'webapps',
    title: 'Web Apps',
    description: 'Создание современных веб-приложений и сложных многостраничных порталов под ключ.',
    icon: Globe
  },
  {
    id: 'mobile',
    title: 'Mobile First',
    description: 'Проектирование под смартфоны как стандарт качества. Идеальный опыт для мобильных пользователей.',
    icon: Smartphone
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-wild-cyan/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-[1.1]">
              НАШИ <span className="text-wild-sunset">ИНСТРУМЕНТЫ</span><br />
              ДЛЯ ВАШЕГО РОСТА
            </h2>
            <p className="text-white/40 text-lg leading-relaxed">
              Мы не просто делаем сайты — мы создаем цифровой опыт, который выделяет вас среди конкурентов и заставляет клиентов возвращаться.
            </p>
          </div>
          <div className="hidden lg:block text-right">
             <div className="text-wild-cyan/30 text-8xl font-display font-bold select-none leading-none">01</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="glass-card group p-10 rounded-3xl transition-all duration-500 hover:border-wild-cyan/40 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-wild-cyan/5 rounded-full blur-3xl group-hover:bg-wild-cyan/10 transition-colors"></div>
              
              <div className="w-16 h-16 bg-wild-night border border-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:border-wild-sunset transition-colors shadow-xl">
                <service.icon className="w-8 h-8 text-wild-cyan group-hover:text-wild-sunset transition-colors" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-white/50 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;