import React, { useState } from 'react';
import { Mail, Phone, Instagram, MessageCircle, Send, MapPin } from 'lucide-react';
import { parseMarkdownContent } from '../utils/contentParser';

// Import the markdown content
import contactContentRaw from '../../content/contact.md?raw';

const Contact = () => {
  const { frontmatter } = parseMarkdownContent(contactContentRaw);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Olá Pedro! Me chamo ${formData.name}. 

${formData.message}

Meu email: ${formData.email}
${formData.phone ? `Telefone: ${formData.phone}` : ''}`;
    
    const whatsappUrl = `${frontmatter.whatsapp_url || 'https://wa.me/5591993190904'}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section 
      id="contato" 
      className="py-20 bg-primary-900" 
      data-sb-object-id="contact"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4" 
            data-sb-field-path="title"
          >
            {frontmatter.title || "Entre em"} <span className="text-gold-500">Contato</span>
          </h2>
          <p 
            className="text-xl text-gray-300 max-w-3xl mx-auto" 
            data-sb-field-path="subtitle"
          >
            {frontmatter.subtitle || "Pronto para começar seu projeto? Fale comigo agora mesmo!"}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Vamos conversar!</h3>
              <p 
                className="text-gray-300 text-lg mb-8" 
                data-sb-field-path="description"
              >
                {frontmatter.description || "Atendo 100% remotamente em todo o Brasil. Entre em contato através dos canais abaixo e receba seu orçamento personalizado."}
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <a
                href={`${frontmatter.whatsapp_url || 'https://wa.me/5591993190904'}?text=Olá Pedro, estou interessado em um projeto FTTH.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-6 bg-primary-950 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group border border-gold-400/20"
              >
                <div className="p-4 bg-green-100 rounded-lg group-hover:bg-green-500 transition-colors duration-300">
                  <MessageCircle className="w-8 h-8 text-green-600 group-hover:text-white" />
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-semibold text-white">WhatsApp</h4>
                  <p 
                    className="text-gray-300" 
                    data-sb-field-path="phone"
                  >
                    {frontmatter.phone || "(91) 9 9319-0904"}
                  </p>
                  <p className="text-sm text-green-400 font-medium">Resposta mais rápida</p>
                </div>
              </a>

              <a
                href={`mailto:${frontmatter.email || 'pedrohcm8@icloud.com'}`}
                className="flex items-center p-6 bg-primary-950 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group border border-gold-400/20"
              >
                <div className="p-4 bg-blue-100 rounded-lg group-hover:bg-blue-500 transition-colors duration-300">
                  <Mail className="w-8 h-8 text-blue-600 group-hover:text-white" />
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-semibold text-white">Email</h4>
                  <p 
                    className="text-gray-300" 
                    data-sb-field-path="email"
                  >
                    {frontmatter.email || "pedrohcm8@icloud.com"}
                  </p>
                </div>
              </a>

              <a
                href={frontmatter.instagram_url || "https://instagram.com/ph_ftth"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-6 bg-primary-950 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group border border-gold-400/20"
              >
                <div className="p-4 bg-pink-100 rounded-lg group-hover:bg-pink-500 transition-colors duration-300">
                  <Instagram className="w-8 h-8 text-pink-600 group-hover:text-white" />
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-semibold text-white">Instagram</h4>
                  <p 
                    className="text-gray-300" 
                    data-sb-field-path="instagram"
                  >
                    {frontmatter.instagram || "@ph_ftth"}
                  </p>
                  <p className="text-sm text-pink-400 font-medium">Acompanhe meus trabalhos</p>
                </div>
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href={`${frontmatter.whatsapp_url || 'https://wa.me/5591993190904'}?text=Olá Pedro, estou interessado em um projeto FTTH.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 border border-green-400/30"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Fale comigo no WhatsApp agora
              </a>
              
              <a
                href={frontmatter.instagram_url || "https://instagram.com/ph_ftth"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-bold rounded-lg hover:from-pink-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 border border-pink-400/30"
              >
                <Instagram className="w-5 h-5 mr-2" />
                Acompanhe no Instagram
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-primary-950 rounded-2xl shadow-lg p-8 border border-gold-400/20">
            <h3 
              className="text-2xl font-bold text-white mb-6" 
              data-sb-field-path="form_title"
            >
              {frontmatter.form_title || "Envie sua mensagem"}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-primary-900 border border-gold-400/30 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors duration-300 text-white placeholder-gray-400"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-primary-900 border border-gold-400/30 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors duration-300 text-white placeholder-gray-400"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"  
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-primary-900 border border-gold-400/30 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors duration-300 text-white placeholder-gray-400"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-primary-900 border border-gold-400/30 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors duration-300 resize-none text-white placeholder-gray-400"
                  placeholder="Conte-me sobre seu projeto, quantos clientes atende, em qual cidade está localizado, etc."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-gold-400 to-gold-600 text-primary-950 font-bold rounded-lg hover:from-gold-500 hover:to-gold-700 transition-all duration-300 transform hover:scale-105 shadow-lg border border-gold-400"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar via WhatsApp
              </button>
            </form>

            <div className="mt-6 p-4 bg-primary-900/50 rounded-lg border border-gold-400/20">
              <p 
                className="text-sm text-gray-300 text-center" 
                data-sb-field-path="form_note"
              >
                {frontmatter.form_note || "Ao enviar, sua mensagem será direcionada para o WhatsApp para um atendimento mais rápido e personalizado."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;