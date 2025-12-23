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
    { name: 'Сервис', href: NavLink.SERVICES },
    { name: 'Манифест', href: NavLink.ABOUT },
    { name: 'Кейсы', href: NavLink.PORTFOLIO },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass-panel py-3 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <button onClick={() => handleNavClick(NavLink.HOME)} className="flex items-center group gap-3">
              <Logo className="w-10 h-10 text-wild-sunset group-hover:text-wild-gold transition-transform group-hover:rotate-12" />
              <span className="font-display font-bold text-xl tracking-tighter text-white group-hover:text-wild-sunset transition-colors uppercase">
                TAIGA BOAR
              </span>
            </button>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-10">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-white/60 hover:text-wild-cyan px-2 py-1 rounded-md text-xs font-bold transition-all uppercase tracking-[0.2em]"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white/70 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'} bg-wild-indigo/95 backdrop-blur-2xl`}>
        <div className="px-4 pt-4 pb-8 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="w-full text-left text-white/70 hover:text-wild-cyan block py-2 text-lg font-bold uppercase tracking-widest"
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;