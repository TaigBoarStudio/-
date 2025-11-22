import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from '../types';
import { Logo } from './Logo';

interface HeaderProps {
  onNavigate: (view: 'home' | 'project') => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    onNavigate('home');
    setIsOpen(false);
    
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (href === NavLink.HOME) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  const navLinks = [
    { name: 'Услуги', href: NavLink.SERVICES },
    { name: 'О Нас', href: NavLink.ABOUT },
    { name: 'Портфолио', href: NavLink.PORTFOLIO },
    { name: 'AI Вепрь', href: NavLink.CONTACT },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass-panel py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <button onClick={() => handleNavClick(NavLink.HOME)} className="flex items-center gap-3 group">
              <div className="text-white bg-boar-600 p-1.5 rounded-lg shadow-[0_0_10px_rgba(234,88,12,0.3)] transition-transform group-hover:scale-110">
                <Logo className="w-8 h-8" filled={false} />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white group-hover:text-boar-400 transition-colors drop-shadow-md">
                TAIGA BOAR
              </span>
            </button>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-taiga-100 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-all uppercase tracking-wider"
                >
                  {link.name}
                </button>
              ))}
              <button 
                onClick={() => handleNavClick(NavLink.CONTACT)}
                className="bg-white text-taiga-950 hover:bg-boar-500 hover:text-white px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
              >
                Начать проект
              </button>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-taiga-900/50 inline-flex items-center justify-center p-2 rounded-md text-taiga-300 hover:text-white hover:bg-taiga-800 focus:outline-none backdrop-blur-sm"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'} bg-taiga-950/95 backdrop-blur-xl border-b border-taiga-800`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="w-full text-left text-taiga-200 hover:text-white hover:bg-taiga-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              {link.name}
            </button>
          ))}
          <button 
             onClick={() => handleNavClick(NavLink.CONTACT)}
             className="w-full text-left text-boar-500 font-bold block px-3 py-2 mt-4 hover:bg-taiga-900 rounded-md"
          >
            Обсудить проект →
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;