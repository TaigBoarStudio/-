import React from 'react';
import { Project } from '../types';
import { ArrowUpRight, Globe } from 'lucide-react';

interface PortfolioProps {
  onOpenProject: () => void;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'VetPulse24',
    category: 'Veterinary Clinic',
    url: 'https://vetpulse24.ru',
    description: 'Сайт ветеринарной клиники. Акцент на доверие, быструю запись и мобильную адаптацию.'
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
              <span className="uppercase tracking-widest text-sm font-bold">Портфолио</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
              ИЗБРАННЫЕ ПРОЕКТЫ
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-2xl bg-taiga-900 border border-taiga-500/10 hover:border-boar-500/50 transition-all duration-300 hover:bg-taiga-900/80 flex flex-col"
            >
              {/* Abstract Background Pattern */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-taiga-500/30 via-transparent to-transparent"></div>
              
              <div className="p-8 flex-1 flex flex-col relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <span className="inline-block px-3 py-1 rounded bg-taiga-950/50 border border-taiga-800 text-boar-500 text-xs font-bold uppercase tracking-widest">
                    {project.category}
                  </span>
                  {project.url && (
                    <a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/5 rounded-full hover:bg-boar-500 hover:text-white transition-colors text-taiga-400"
                      title="Открыть сайт"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Globe className="w-5 h-5" />
                    </a>
                  )}
                </div>

                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 group-hover:text-taiga-100 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-taiga-200/70 text-sm md:text-base leading-relaxed mb-8 max-w-md">
                  {project.description}
                </p>

                <div className="mt-auto pt-6 border-t border-taiga-500/10 flex items-center gap-4">
                   <button 
                     onClick={project.id === '1' ? onOpenProject : undefined}
                     className="text-white font-bold text-sm uppercase tracking-wider flex items-center gap-2 group-hover:text-boar-500 transition-colors"
                   >
                     Подробнее о кейсе <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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