import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../../constants/content';
import { Button } from './Button';
import logo from '../../assets/logo.png';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg border-b border-slate-100 py-3' : 'bg-transparent py-5'
      }`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative">
            <img src={logo} alt="Codera Logo" className="h-16 md:h-18 w-auto relative z-10 transition-transform group-hover:scale-110" />
            <div className="absolute inset-0 bg-brand-sky/20 blur-md rounded-full -z-0" />
          </div>
          {/* <span className="text-2xl font-extrabold tracking-tight text-slate-900">Codera</span> */}
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-500 hover:text-brand-sky font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#register">
            <Button variant="secondary" size="sm">Book Free Trial</Button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 py-6 px-4 md:hidden flex flex-col gap-4 shadow-xl"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 text-lg font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="#register" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full">Book Free Trial</Button>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
