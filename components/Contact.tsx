import React from 'react';
import { Logo } from './Logo';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-wild-night">
       {/* Background Elements */}
       <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black to-transparent z-10"></div>
       {/* Glow Effect */}
       <div className="absolute bottom-0 right-0 w-1/2 h-full bg-wild-sunset/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        <div className="mb-12 flex flex-col items-center">
          <div className="mb-8 text-wild-sunset opacity-50">
            <Logo className="w-16 h-16" filled={false} />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 uppercase tracking-tighter">
            ДО <span className="text-wild-sunset">СВЯЗИ</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto leading-relaxed text-lg font-light">
            В данный момент мы работаем над текущими проектами в закрытом режиме.<br/>
            Контактные данные доступны по прямому запросу.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;