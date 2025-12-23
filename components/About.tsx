import React from 'react';
import { PenTool, Monitor, Sparkles, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-wild-night">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-wild-sunset/5 rounded-full blur-[150px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wild-indigo/50 border border-wild-cyan/20 text-wild-cyan text-[10px] font-black uppercase tracking-[0.3em] mb-10">
              <Sparkles className="w-3 h-3" />
              <span>Manifesto</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight tracking-tighter">
              СИЛА В <span className="text-wild-sunset">ПРОСТОТЕ.</span><br />
              ДИКОСТЬ В <span className="text-wild-cyan">ДЕТАЛЯХ.</span>
            </h2>
            
            <div className="space-y-8 text-xl text-white/50 leading-relaxed font-light">
              <p>
                Мы верим, что в эпоху перенасыщенного контента выигрывает тот, кто говорит четко, ярко и по делу. 
              </p>
              <p className="text-white font-medium border-l-2 border-wild-sunset pl-8 py-2 italic">
                TAIGA BOAR — это союз брутальной технической реализации и утонченного визуального стиля.
              </p>
              <p>
                Мы не тратим ваше время на бесконечные правки. Мы берем задачу и создаем продукт, который работает с первой секунды запуска. Никаких шаблонов — только кастомный Zero Block и чистый UI.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="glass-card p-10 rounded-[2.5rem] flex gap-8 items-start group hover:bg-wild-indigo/50 transition-all border-l-0 border-r-0 border-t-0 border-b-2 border-b-transparent hover:border-b-wild-cyan">
              <div className="p-5 bg-wild-night border border-white/5 rounded-2xl text-wild-cyan group-hover:scale-110 transition-transform">
                <Monitor className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Technical Core</h3>
                <p className="text-xs text-wild-sunset font-black uppercase tracking-widest mb-4">Tilda & Engineering</p>
                <p className="text-white/40 leading-relaxed">
                  Мы выжимаем из Tilda всё: от сложной Step-by-Step анимации до глубокой интеграции внешних сервисов. Ваш сайт будет летать.
                </p>
              </div>
            </div>

            <div className="glass-card p-10 rounded-[2.5rem] flex gap-8 items-start group hover:bg-wild-indigo/50 transition-all border-l-0 border-r-0 border-t-0 border-b-2 border-b-transparent hover:border-b-wild-sunset">
              <div className="p-5 bg-wild-night border border-white/5 rounded-2xl text-wild-sunset group-hover:scale-110 transition-transform">
                <PenTool className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Visual Wildness</h3>
                <p className="text-xs text-wild-cyan font-black uppercase tracking-widest mb-4">Figma & Brand Strategy</p>
                <p className="text-white/40 leading-relaxed">
                  Дизайн, который невозможно пролистать. Мы создаем визуальные системы, которые мгновенно считываются и вызывают желание обладать.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center mt-6">
              <div className="p-4 bg-wild-indigo/30 rounded-full text-wild-cyan/50 animate-pulse">
                <Zap className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;