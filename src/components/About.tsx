import React from 'react';
import { Network, Briefcase, Target, CheckCircle } from 'lucide-react';
import { parseMarkdownContent } from '../utils/contentParser';

// Import the markdown content
import aboutContentRaw from '../../content/about.md?raw';

const About = () => {
  const { frontmatter } = parseMarkdownContent(aboutContentRaw);

  return (
    <section id="sobre" className="py-20 bg-primary-900" data-sb-object-id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" data-sb-field-path="title">
            {frontmatter.title || "Sobre o"} <span className="text-gold-500">Profissional</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-gold-100 rounded-lg">
                <Network className="w-6 h-6 text-gold-600" />
              </div>
              <h3 className="text-2xl font-bold text-white" data-sb-field-path="name">
                {frontmatter.name || "Pedro Moreira"}
              </h3>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed" data-sb-field-path="intro">
              {frontmatter.intro || "Sou Pedro Moreira, Projetista FTTH especializado em atender provedores de pequeno e médio porte de forma 100% remota."}
            </p>

            <div className="flex items-start space-x-3">
              <div className="p-2 bg-gold-100 rounded-lg mt-1">
                <Briefcase className="w-5 h-5 text-gold-600" />
              </div>
              <p className="text-gray-300 leading-relaxed" data-sb-field-path="experience">
                {frontmatter.experience || "Já atuei diretamente dentro de um provedor de internet, tanto desenvolvendo projetos ópticos quanto acompanhando implantações em campo com equipes técnicas."}
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="p-2 bg-gold-100 rounded-lg mt-1">
                <Target className="w-5 h-5 text-gold-600" />
              </div>
              <p className="text-gray-300 leading-relaxed" data-sb-field-path="mission">
                {frontmatter.mission || "Meus projetos são pensados para quem precisa organizar, planejar ou expandir suas redes FTTH com clareza, agilidade e sem complicações."}
              </p>
            </div>

            <div className="bg-primary-950/50 p-6 rounded-lg border-l-4 border-gold-400 ml-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-gold-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 leading-relaxed" data-sb-field-path="delivery">
                  {frontmatter.delivery || "Tudo é entregue pronto para execução, com visual profissional, documentação organizada e suporte direto ao cliente."}
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gold-400/10 to-gold-600/10 p-6 rounded-lg border border-gold-400/30">
              <p className="text-gray-200 font-medium" data-sb-field-path="focus">
                {frontmatter.focus || "Com foco em clareza, eficiência e agilidade, entrego tudo pronto para implantação, com apresentação visual impecável e linguagem técnica de fácil entendimento para quem está no dia a dia da operação."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;