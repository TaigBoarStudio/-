
import React from 'react';
import { Bot, Palette, Layout, Zap } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 'tilda',
    title: 'Кастомная веб-разработка',
    benefit: 'Запуск за 7-14 дней',
    description: 'Уникальные сайты без ограничений сеток. Используем Zero Block и кастомный код для создания интерфейсов, которые невозможно повторить на конструкторе.',
    icon: Layout
  },
  {
    id: 'design',
    title: 'UI/UX Дизайн',
    benefit: 'Меньше отказов',
    description: 'Проектируем интерфейсы в Figma, в которых пользователю не нужно думать — он просто покупает.',
    icon: Palette
  },
  {
    id: 'bot',
    title: 'Telegram-системы',
    benefit: 'Автоматизация заявок',
    description: 'Боты и Mini Apps. Снижение ручной работы менеджеров и рост продаж внутри мессенджера.',
    icon: Bot
  },
  {
    id: 'performance',
    title: 'SEO и Скорость',
    benefit: 'Google PageSpeed 90+',
    description: 'Техническая чистота кода. Быстрая загрузка = выше позиции в поиске и больше лояльных клиентов.',
    icon: Zap
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-wild-cyan/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
             <div className="flex items-center gap-2 text-wild-sunset mb-4">
              <span className="w-12 h-[1px] bg-wild-sunset"></span>
              <span className="uppercase tracking-[0.3em] text-xs font-bold">What you get</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-[1.1]">
              ВАШ <span className="text-wild-sunset">РЕЗУЛЬТАТ</span> — <br />
              НАША ПРИОРЯТЕТ
            </h2>
            <p className="text-white/40 text-lg leading-relaxed">
              Мы не просто рисуем макеты — мы создаем рабочие инструменты для бизнеса: <span className="text-white">продажи, имидж и автоматизация.</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="glass-card group p-10 rounded-3xl transition-all duration-500 hover:border-wild-cyan/40 relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 bg-wild-night border border-white/5 rounded-2xl flex items-center justify-center group-hover:border-wild-sunset transition-colors shadow-xl">
                  <service.icon className="w-8 h-8 text-wild-cyan group-hover:text-wild-sunset transition-colors" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 bg-wild-cyan/10 text-wild-cyan rounded-full border border-wild-cyan/20">
                  {service.benefit}
                </span>
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-white/50 leading-relaxed text-base">
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
