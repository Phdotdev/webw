import React from 'react';
import { MapPin, Network, Calculator, FileSpreadsheet, Activity } from 'lucide-react';
import { parseMarkdownContent } from '../utils/contentParser';

// Import the markdown content
import portfolioContentRaw from '../../content/portfolio.md?raw';

const Portfolio = () => {
  const { frontmatter } = parseMarkdownContent(portfolioContentRaw);

  const portfolioItems = [
    {
      title: "Mapas KMZ Gerados",
      description: "Visualização interativa no Google Earth com precisão geográfica",
      icon: <MapPin className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Diagramas de Emenda",
      description: "Documentação técnica detalhada para execução em campo",
      icon: <Network className="w-8 h-8" />,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Cálculos de Potência",
      description: "Análise upstream e downstream para performance otimizada",
      icon: <Calculator className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Layouts de Apresentação",
      description: "Documentação visual profissional e de fácil compreensão",
      icon: <Activity className="w-8 h-8" />,
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Levantamento de Materiais",
      description: "Lista completa de componentes necessários para o projeto",
      icon: <FileSpreadsheet className="w-8 h-8" />,
      color: "from-teal-500 to-teal-600"
    }
  ];

  const deliverables = [
    {
      title: "Mapa de Rede Completo",
      image: "/mapa-rede-completo.png",
      placeholder: false
    },
    {
      title: "Diagrama de Conexões",
      image: "/diagrama-conexoes.png",
      placeholder: false
    },
    {
      title: "Relatório de Potência",
      placeholder: true
    },
    {
      title: "Lista de Materiais",
      image: "/lista-materiais.png",
      placeholder: false
    }
  ];

  return (
    <section 
      id="portfolio" 
      className="py-20 bg-primary-950" 
      data-sb-object-id="portfolio"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4" 
            data-sb-field-path="title"
          >
            <span className="text-gold-500">
              {frontmatter.title || "Portfólio"}
            </span> de Projetos
          </h2>
          <p 
            className="text-xl text-gray-300 max-w-3xl mx-auto" 
            data-sb-field-path="subtitle"
          >
            {frontmatter.subtitle || "Exemplos do que você receberá em cada tipo de projeto"}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group bg-primary-900 rounded-2xl p-8 hover:bg-primary-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gold-400/20"
            >
              <div className={`inline-flex p-4 bg-gradient-to-r ${item.color} rounded-lg text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Sample Gallery */}
        <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-8 md:p-12 border border-gold-400/20">
          <h3 
            className="text-2xl md:text-3xl font-bold text-white text-center mb-8" 
            data-sb-field-path="deliverables_title"
          >
            {frontmatter.deliverables_title || "Exemplos de"} <span className="text-gold-500">Entregáveis</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverables.map((item, index) => (
              <div
                key={index}
                className="bg-primary-950 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300 border border-gold-400/20"
              >
                <div className="w-full h-32 bg-gradient-to-br from-primary-900 to-primary-800 rounded-lg mb-4 flex items-center justify-center border border-gold-400/30 overflow-hidden">
                  {item.placeholder ? (
                    <div className="text-gold-400 text-4xl font-bold">#{index + 1}</div>
                  ) : (
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-contain p-2"
                    />
                  )}
                </div>
                <h4 className="font-semibold text-white">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p 
            className="text-gray-300 mb-6 text-lg" 
            data-sb-field-path="cta_description"
          >
            {frontmatter.cta_description || "Quer ver exemplos reais dos projetos? Entre em contato!"}
          </p>
          <a
            href={`${frontmatter.whatsapp_url || 'https://wa.me/5591993190904'}?text=${encodeURIComponent(frontmatter.whatsapp_message || 'Olá Pedro, estou interessado em um projeto FTTH.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-600 text-primary-950 font-bold text-lg rounded-lg hover:from-gold-500 hover:to-gold-700 transition-all duration-300 transform hover:scale-105 shadow-lg border border-gold-400"
            data-sb-field-path="cta_text"
          >
            {frontmatter.cta_text || "Ver Exemplos Reais"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;