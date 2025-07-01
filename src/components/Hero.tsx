import React from 'react';
import { ArrowRight } from 'lucide-react';
import { parseMarkdownContent } from '../utils/contentParser';

// Import the markdown content
import homeContentRaw from '../../content/home.md?raw';

const Hero = () => {
  const { frontmatter } = parseMarkdownContent(homeContentRaw);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800" data-sb-object-id="home">
      {/* Animated Background - Fiber Optic Lines */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent animate-pulse-slow opacity-60"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-1 bg-gradient-to-r from-gold-400 via-transparent to-gold-400 animate-pulse-slow opacity-40 delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent animate-pulse-slow opacity-50 delay-2000"></div>
        
        {/* Glowing connection points */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-gold-400 rounded-full animate-glow"></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-gold-500 rounded-full animate-glow delay-500"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-gold-400 rounded-full animate-glow delay-1500"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up" data-sb-field-path="title">
          {frontmatter.subtitle || "Documente, planeje ou"} 
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
            expanda sua rede FTTH
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up delay-200" data-sb-field-path="description">
          {frontmatter.description || "com agilidade e precisão. Seu projeto começa aqui."}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up delay-400">
          <a
            href={`https://wa.me/5591993190904?text=${encodeURIComponent(frontmatter.whatsapp_message || "Olá Pedro, estou interessado em um projeto FTTH.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-600 text-primary-950 font-bold text-lg rounded-lg hover:from-gold-500 hover:to-gold-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-gold-400"
            data-sb-field-path="cta_text"
          >
            {frontmatter.cta_text || "Solicitar orçamento agora"}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          
          <button
            onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-6 py-3 border-2 border-gold-400 text-gold-400 font-semibold rounded-lg hover:bg-gold-400 hover:text-primary-950 transition-all duration-300"
          >
            Ver Serviços
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 animate-slide-up delay-600">
          <div className="text-center">
            <div className="text-3xl font-bold text-gold-400 mb-2" data-sb-field-path="stats_remote">
              {frontmatter.stats_remote || "100%"}
            </div>
            <div className="text-gray-300" data-sb-field-path="stats_remote_label">
              {frontmatter.stats_remote_label || "Remoto"}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gold-400 mb-2" data-sb-field-path="stats_quality">
              {frontmatter.stats_quality || "✓"}
            </div>
            <div className="text-gray-300" data-sb-field-path="stats_quality_label">
              {frontmatter.stats_quality_label || "Praticidade e Velocidade"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;