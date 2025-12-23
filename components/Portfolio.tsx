import React from 'react';
import { Project } from '../types';
import { ArrowUpRight, Globe } from 'lucide-react';

interface PortfolioProps {
  onOpenProject: (id: string) => void;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'VetPulse24',
    category: 'Medical / Veterinary',
    url: 'https://vetpulse24.ru',
    description: 'Полный редизайн и разработка. Акцент на доверии и скорости взаимодействия для ветеринарного центра.'
  },
  {
    id: '3',
    title: 'Страж Севера',
    category: 'Breeding / Luxury Pets',
    url: 'https://strazh-severa.ru/',
    description: 'Цифровой дом для легендарной породы ирландских волкодавов. Благородная эстетика и монументальный дизайн.'
  }
];

const Portfolio: React.FC<PortfolioProps> = ({ onOpenProject }) => {
  return (
    <section id="portfolio" className="py-32 bg-wild-night relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <div className="flex items-center gap-2 text-wild-cyan mb-4">
              <span className="w-12 h-[1px] bg-wild-cyan"></span>
              <span className="uppercase tracking-[0.3em] text-xs font-bold">Showcase</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white">
              ИЗБРАННЫЕ <span className="italic text-wild-sunset">КЕЙСЫ</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative bg-wild-indigo/40 border border-white/5 rounded-3xl overflow-hidden hover:border-wild-cyan/30 transition-all duration-500"
            >
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity bg-[radial-gradient(circle_at_50%_0%,_#40e0d0_0%,_transparent_70%)]"></div>
              
              <div className="p-10 relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-10">
                  <span className="px-4 py-1.5 rounded-full bg-wild-sunset text-wild-night text-[10px] font-black uppercase tracking-widest">
                    {project.category}
                  </span>
                  {project.url && project.url !== '#' && (
                    <a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/5 rounded-full hover:bg-wild-cyan hover:text-wild-night transition-all"
                    >
                      <Globe className="w-5 h-5" />
                    </a>
                  )}
                </div>

                <h3 className="text-4xl font-display font-bold text-white mb-6 leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-white/50 text-base leading-relaxed mb-10 max-w-sm">
                  {project.description}
                </p>

                <div className="mt-auto">
                   <button 
                     onClick={() => onOpenProject(project.id)}
                     className="inline-flex items-center gap-3 text-white font-bold text-sm uppercase tracking-widest group/btn transition-colors hover:text-wild-cyan cursor-pointer"
                   >
                     Разбор кейса
                     <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                   </button>
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