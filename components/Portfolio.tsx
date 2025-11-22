import React from 'react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface PortfolioProps {
  onOpenProject: () => void;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Crypto Exchange Bot',
    category: 'Telegram Bot',
    image: 'https://picsum.photos/600/400?random=1',
    description: 'Автоматический обменник криптовалют внутри Telegram с админ-панелью.'
  },
  {
    id: '2',
    title: 'Neon E-Shop',
    category: 'Web Development',
    image: 'https://picsum.photos/600/400?random=2',
    description: 'Футуристичный интернет-магазин одежды с 3D примеркой.'
  },
  {
    id: '3',
    title: 'Burger Delivery App',
    category: 'Mini App',
    image: 'https://picsum.photos/600/400?random=3',
    description: 'Telegram Mini App для доставки еды с интеграцией платежей.'
  },
  {
    id: '4',
    title: 'Architect Studio',
    category: 'Design & Web',
    image: 'https://picsum.photos/600/400?random=4',
    description: 'Минималистичный корпоративный сайт для архитектурного бюро.'
  },
];

const Portfolio: React.FC<PortfolioProps> = ({ onOpenProject }) => {
  return (
    <section id="portfolio" className="py-24 bg-taiga-950 relative z-10">
      {/* Decorative gradient separator */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-taiga-500/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-boar-500 mb-2">
              <span className="w-8 h-[2px] bg-boar-500"></span>
              <span className="uppercase tracking-widest text-sm font-bold">Кейсы</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
              РЕАЛИЗОВАННЫЕ ЦЕЛИ
            </h2>
          </div>
          <div className="mt-6 md:mt-0">
            <button className="px-6 py-3 border border-taiga-500/30 rounded-full text-taiga-100 hover:bg-taiga-900 transition-colors flex items-center gap-2 group">
              Все проекты <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-2xl bg-taiga-900 cursor-pointer border border-taiga-500/10 hover:border-boar-500/50 transition-colors"
              onClick={onOpenProject}
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                />
              </div>
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-taiga-950 via-taiga-950/60 to-transparent opacity-90"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-boar-500 text-xs font-bold tracking-widest uppercase mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                      {project.title}
                    </h3>
                    <p className="text-taiga-200/70 text-sm max-w-md line-clamp-2 group-hover:text-white transition-colors">
                      {project.description}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;