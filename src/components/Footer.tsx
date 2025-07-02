import React from 'react';
import { Cable, Mail, Phone, Instagram, MessageCircle, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="p-2 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg">
                <Cable className="w-6 h-6 text-primary-950" />
              </div>
              <span className="text-xl font-bold">Pedro Moreira</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Projetista FTTH especializado em documentação, planejamento e expansão de redes de fibra óptica. Atendimento 100% remoto.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/5591993190904"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="mailto:pedrohcm8@icloud.com"
                className="p-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/ph_ftth"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-pink-600 hover:bg-pink-700 rounded-lg transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gold-400">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-gold-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="text-gray-300 hover:text-gold-400 transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="text-gray-300 hover:text-gold-400 transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="text-gray-300 hover:text-gold-400 transition-colors"
                >
                  Portfólio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="text-gray-300 hover:text-gold-400 transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gold-400">Serviços</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Projeto Básico</li>
              <li>Projeto Intermediário</li>
              <li>Projeto Completo</li>
              <li>Documentação FTTH</li>
              <li>Expansão de Rede</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gold-400">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold-400" />
                <span className="text-gray-300">(91) 9 9319-0904</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold-400" />
                <span className="text-gray-300">pedrohcm8@icloud.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="w-5 h-5 text-gold-400" />
                <span className="text-gray-300">@ph_ftth</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-300 mb-4 md:mb-0">
              <span>© 2025 Pedro Moreira – Todos os direitos reservados.</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <span>Site criado com dedicação e fibra</span>
              <div className="w-4 h-4 bg-gold-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;