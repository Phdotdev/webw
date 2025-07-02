import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-950/95 backdrop-blur-sm border-b border-gold-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/Logo .jpg" 
              alt="PH FTTH Logo" 
              className="w-10 h-10 rounded-lg border-2 border-gold-400/30"
            />
            <span className="text-xl font-bold text-white">Pedro Moreira</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-gold-400 transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-white hover:text-gold-400 transition-colors duration-300"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-white hover:text-gold-400 transition-colors duration-300"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-white hover:text-gold-400 transition-colors duration-300"
            >
              Portfólio
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-white hover:text-gold-400 transition-colors duration-300"
            >
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <a
            href="https://wa.me/5591993190904?text=Olá Pedro, estou interessado em um projeto FTTH."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center px-4 py-2 bg-gradient-to-r from-gold-400 to-gold-600 text-primary-950 font-semibold rounded-lg hover:from-gold-500 hover:to-gold-700 transition-all duration-300 transform hover:scale-105 border border-gold-400"
          >
            WhatsApp
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-primary-900/95 backdrop-blur-sm rounded-lg mt-2 p-4 border border-gold-400/20">
            <nav className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-white hover:text-gold-400 transition-colors duration-300 text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-white hover:text-gold-400 transition-colors duration-300 text-left"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-white hover:text-gold-400 transition-colors duration-300 text-left"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-white hover:text-gold-400 transition-colors duration-300 text-left"
              >
                Portfólio
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-white hover:text-gold-400 transition-colors duration-300 text-left"
              >
                Contato
              </button>
              <a
                href="https://wa.me/5591993190904?text=Olá Pedro, estou interessado em um projeto FTTH."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-gold-400 to-gold-600 text-primary-950 font-semibold rounded-lg hover:from-gold-500 hover:to-gold-700 transition-all duration-300 border border-gold-400"
              >
                WhatsApp
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;