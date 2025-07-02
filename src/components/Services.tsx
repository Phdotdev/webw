import React from 'react';
import { Map, Cable, Globe, MessageCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Projeto Básico",
      subtitle: "Desenho + KMZ",
      icon: <Map className="w-12 h-12" />,
      color: "from-blue-500 to-blue-600",
      target: "Ideal para quem está iniciando o provedor",
      features: [
        "Desenho da rede com backbone, CTOs e CEOs",
        "Arquivo KMZ pronto para visualização no Google Earth"
      ]
    },
    {
      id: 2,
      title: "Projeto Intermediário",
      subtitle: "Desenho + Diagrama de Emendas + KMZ",
      icon: <Cable className="w-12 h-12" />,
      color: "from-amber-500 to-amber-600",
      target: "Perfeito para quem já tem rede e quer organizá-la melhor",
      features: [
        "Desenho técnico completo",
        "Diagrama de Emendas",
        "Arquivo KMZ"
      ]
    },
    {
      id: 3,
      title: "Projeto Completo",
      subtitle: "Tudo Incluso",
      icon: <Globe className="w-12 h-12" />,
      color: "from-emerald-500 to-emerald-600",
      target: "Para quem vai documentar ou expandir a rede com excelência",
      features: [
        "Desenho técnico com CTOs, CEOs e backbone",
        "Diagrama de Emendas",
        "Arquivo KMZ",
        "Cálculo de potência óptica (Upstream e Downstream)",
        "Levantamento completo dos materiais necessários"
      ]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tipos de <span className="text-gold-500">Projetos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Escolha o pacote ideal para suas necessidades e receba seu projeto completo e pronto para implantação
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group bg-primary-950 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gold-400/20"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${service.color} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-white/20 rounded-lg">
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">0{service.id}</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-white/90 font-medium">{service.subtitle}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-6">
                  <p className="text-gray-300 font-medium bg-primary-900/50 px-3 py-2 rounded-lg text-sm border border-gold-400/20">
                    {service.target}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Inclui:</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="https://wa.me/5591993190904?text=Olá Pedro, estou interessado em um projeto FTTH."
                  target="_blank"
                  rel="noopener noreferrer"  
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg border border-green-400/30"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Solicitar via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Target Audience Section */}
        <div className="mt-20 bg-gradient-to-r from-primary-950 to-primary-900 rounded-2xl p-8 md:p-12 text-white border border-gold-400/20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Para quem é esse <span className="text-gold-400">serviço?</span>
            </h3>
            <p className="text-xl text-gray-300">Esse serviço é para você se...</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Está montando seu primeiro provedor e precisa de um projeto básico e funcional",
              "Já possui rede implantada e quer organizar e documentar tudo corretamente",
              "Está expandindo sua operação e precisa de um projeto técnico confiável",
              "Busca um projeto de qualidade, com entrega remota, suporte direto e visual profissional",
              "Quer ganhar tempo e evitar dores de cabeça na implantação da rede óptica"
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-gold-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-950 font-bold text-sm">✓</span>
                </div>
                <p className="text-gray-200 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;