import React from 'react';
import { Network, Briefcase, Target, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-primary-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sobre o <span className="text-gold-500">Profissional</span>
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
              <h3 className="text-2xl font-bold text-white">Pedro Moreira</h3>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
              Sou <strong className="text-white">Pedro Moreira</strong>, <strong className="text-white">Projetista FTTH</strong> especializado em atender provedores de pequeno e médio porte de forma <strong className="text-gold-400">100% remota</strong>.
            </p>

            <div className="flex items-start space-x-3">
              <div className="p-2 bg-gold-100 rounded-lg mt-1">
                <Briefcase className="w-5 h-5 text-gold-600" />
              </div>
              <p className="text-gray-300 leading-relaxed">
                Já atuei diretamente dentro de um provedor de internet, tanto desenvolvendo projetos ópticos quanto acompanhando implantações em campo com equipes técnicas.
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="p-2 bg-gold-100 rounded-lg mt-1">
                <Target className="w-5 h-5 text-gold-600" />
              </div>
              <p className="text-gray-300 leading-relaxed">
                Meus projetos são pensados para quem precisa <strong className="text-white">organizar, planejar ou expandir suas redes FTTH</strong> com clareza, agilidade e sem complicações.
              </p>
            </div>

            <div className="bg-primary-950/50 p-6 rounded-lg border-l-4 border-gold-400 ml-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-gold-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 leading-relaxed">
                  Tudo é entregue <strong className="text-white">pronto para execução</strong>, com visual profissional, documentação organizada e suporte direto ao cliente.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gold-400/10 to-gold-600/10 p-6 rounded-lg border border-gold-400/30">
              <p className="text-gray-200 font-medium">
                Com foco em <strong className="text-gold-400">clareza, eficiência e agilidade</strong>, entrego tudo pronto para implantação, com apresentação visual impecável e linguagem técnica de fácil entendimento para quem está no dia a dia da operação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;