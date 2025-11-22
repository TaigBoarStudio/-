import React from 'react';
import AiConsultant from './AiConsultant';
import { Mail, Phone, MapPin, Send, TreePine } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
       {/* Background Elements */}
       <div className="absolute inset-0 bg-taiga-950"></div>
       <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black to-transparent z-10"></div>
       {/* Abstract Trees/Forest BG */}
       <div className="absolute bottom-0 right-0 w-1/2 h-full bg-taiga-900/20 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            СВЯЗЬ СО <span className="text-boar-500">СТАЕЙ</span>
          </h2>
          <p className="text-taiga-200/60 max-w-2xl mx-auto">
            Готовы к серьезной работе? Обсудите проект с AI или отправьте весточку. <br/>
            Мы на связи, пока горит костер.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side: Contact Info & AI Chat */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
               <div className="glass-card p-4 rounded-xl flex items-center gap-3 group hover:border-boar-500/30 transition-colors">
                  <div className="p-2 bg-taiga-900/50 rounded-lg text-boar-500 group-hover:text-white group-hover:bg-boar-500 transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-taiga-300">Email</p>
                    <p className="text-white font-medium">hello@taigaboar.studio</p>
                  </div>
               </div>
               <div className="glass-card p-4 rounded-xl flex items-center gap-3 group hover:border-boar-500/30 transition-colors">
                  <div className="p-2 bg-taiga-900/50 rounded-lg text-boar-500 group-hover:text-white group-hover:bg-boar-500 transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-taiga-300">Telegram</p>
                    <p className="text-white font-medium">@taigaboar_manager</p>
                  </div>
               </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-taiga-400 rounded-full animate-pulse"></span>
                AI Вепрь (Online)
              </h3>
              <AiConsultant />
            </div>
          </div>

          {/* Right Side: Classic Form */}
          <div className="glass-card p-8 rounded-3xl border border-taiga-500/10">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <TreePine className="w-6 h-6 text-taiga-500" />
              Оставьте заявку
            </h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-taiga-300 mb-2">Ваше имя</label>
                  <input 
                    type="text" 
                    className="w-full bg-taiga-950/50 border border-taiga-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-boar-500 transition-colors placeholder-taiga-800"
                    placeholder="Иван Иванов"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-taiga-300 mb-2">Telegram / Email</label>
                  <input 
                    type="text" 
                    className="w-full bg-taiga-950/50 border border-taiga-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-boar-500 transition-colors placeholder-taiga-800"
                    placeholder="@username"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-taiga-300 mb-2">Тип проекта</label>
                <div className="relative">
                  <select className="w-full bg-taiga-950/50 border border-taiga-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-boar-500 transition-colors appearance-none">
                    <option>Веб-сайт</option>
                    <option>Telegram Бот</option>
                    <option>Mini App</option>
                    <option>Дизайн</option>
                    <option>Другое</option>
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-taiga-500">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-taiga-300 mb-2">О проекте</label>
                <textarea 
                  rows={4}
                  className="w-full bg-taiga-950/50 border border-taiga-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-boar-500 transition-colors placeholder-taiga-800"
                  placeholder="Расскажите немного о вашей идее..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-white hover:bg-boar-500 hover:text-white text-black font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]"
              >
                Отправить гонца <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <p className="text-xs text-taiga-500/50 text-center">
                Нажимаю кнопку, вы соглашаетесь с правилами тайги.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;