const { defineStackbitConfig } = require("@stackbit/types");
const { GitContentSource } = require("@stackbit/cms-git");

const models = [
  {
    name: 'HomePage',
    type: 'page',
    urlPath: '/',
    filePath: 'content/home.md',
    fields: [
      { name: 'title', type: 'string', label: 'Título Principal', description: 'Título principal da página inicial', required: true },
      { name: 'subtitle', type: 'string', label: 'Subtítulo', description: 'Subtítulo que aparece no hero' },
      { name: 'description', type: 'string', label: 'Descrição', description: 'Descrição complementar do subtítulo' },
      { name: 'cta_text', type: 'string', label: 'Texto do Botão CTA', description: 'Texto do botão de chamada para ação' },
      { name: 'whatsapp_message', type: 'string', label: 'Mensagem WhatsApp', description: 'Mensagem padrão para WhatsApp' },
      { name: 'stats_remote', type: 'string', label: 'Estatística - Remoto', description: 'Valor da estatística de trabalho remoto', default: '100%' },
      { name: 'stats_remote_label', type: 'string', label: 'Label - Remoto', description: 'Label da estatística remoto', default: 'Remoto' },
      { name: 'stats_quality', type: 'string', label: 'Estatística - Qualidade', description: 'Valor da estatística de qualidade', default: '✓' },
      { name: 'stats_quality_label', type: 'string', label: 'Label - Qualidade', description: 'Label da estatística de qualidade', default: 'Praticidade e Velocidade' }
    ]
  },
  {
    name: 'AboutPage',
    type: 'page',
    urlPath: '/about',
    filePath: 'content/about.md',
    fields: [
      { name: 'title', type: 'string', label: 'Título da Seção', description: 'Título principal da seção sobre', required: true },
      { name: 'name', type: 'string', label: 'Nome', description: 'Nome do profissional' },
      { name: 'profession', type: 'string', label: 'Profissão', description: 'Profissão/cargo do profissional' },
      { name: 'intro', type: 'text', label: 'Introdução', description: 'Texto de introdução sobre o profissional' },
      { name: 'experience', type: 'text', label: 'Experiência', description: 'Descrição da experiência profissional' },
      { name: 'mission', type: 'text', label: 'Missão', description: 'Descrição da missão e objetivos' },
      { name: 'delivery', type: 'text', label: 'Entrega', description: 'Descrição do que é entregue ao cliente' },
      { name: 'focus', type: 'text', label: 'Foco', description: 'Descrição do foco e metodologia de trabalho' }
    ]
  },
  {
    name: 'ContactPage',
    type: 'page',
    urlPath: '/contact',
    filePath: 'content/contact.md',
    fields: [
      { name: 'title', type: 'string', label: 'Título', description: 'Título da seção de contato', required: true },
      { name: 'subtitle', type: 'string', label: 'Subtítulo', description: 'Subtítulo da seção de contato' },
      { name: 'description', type: 'text', label: 'Descrição', description: 'Descrição da seção de contato' },
      { name: 'phone', type: 'string', label: 'Telefone', description: 'Número de telefone para contato' },
      { name: 'email', type: 'string', label: 'Email', description: 'Endereço de email para contato' },
      { name: 'instagram', type: 'string', label: 'Instagram', description: 'Handle do Instagram (@usuario)' },
      { name: 'whatsapp_url', type: 'string', label: 'URL WhatsApp', description: 'URL completa do WhatsApp' },
      { name: 'instagram_url', type: 'string', label: 'URL Instagram', description: 'URL completa do Instagram' },
      { name: 'form_title', type: 'string', label: 'Título do Formulário', description: 'Título do formulário de contato' },
      { name: 'form_note', type: 'text', label: 'Nota do Formulário', description: 'Nota explicativa do formulário' }
    ]
  },
  {
    name: 'PortfolioPage',
    type: 'page',
    urlPath: '/portfolio',
    filePath: 'content/portfolio.md',
    fields: [
      { name: 'title', type: 'string', label: 'Título da Seção', description: 'Título principal da seção portfólio', required: true },
      { name: 'subtitle', type: 'string', label: 'Subtítulo', description: 'Subtítulo da seção portfólio' },
      { name: 'deliverables_title', type: 'string', label: 'Título dos Entregáveis', description: 'Título da seção de exemplos de entregáveis' },
      { name: 'cta_text', type: 'string', label: 'Texto do Botão CTA', description: 'Texto do botão de chamada para ação' },
      { name: 'cta_description', type: 'string', label: 'Descrição do CTA', description: 'Texto que aparece antes do botão CTA' },
      { name: 'whatsapp_url', type: 'string', label: 'URL WhatsApp', description: 'URL completa do WhatsApp' },
      { name: 'whatsapp_message', type: 'string', label: 'Mensagem WhatsApp', description: 'Mensagem padrão para WhatsApp' }
    ]
  }
];

module.exports = defineStackbitConfig({
  stackbitVersion: '~0.7.0',
  ssgName: 'custom',
  nodeVersion: '18',
  devCommand: 'npm run dev',
  useESM: false,
  contentSources: [
    new GitContentSource({
      rootPath: '.',
      contentDirs: ['content'],
      models,
    }),
  ],
  models,
  modelExtensions: [
    { name: 'HomePage', type: 'page', urlPath: '/' },
    { name: 'AboutPage', type: 'page', urlPath: '/about' },
    { name: 'ContactPage', type: 'page', urlPath: '/contact' },
    { name: 'PortfolioPage', type: 'page', urlPath: '/portfolio' }
  ],
  siteMap: ({ documents, models }) => {
    const pageModels = models.filter((m) => m.type === 'page');
    return documents
      .filter((d) => pageModels.some((m) => m.name === d.modelName))
      .map((document) => {
        const model = pageModels.find((m) => m.name === document.modelName);
        return {
          stableId: document.id,
          urlPath: model?.urlPath || '/',
          document,
          isHomePage: model?.urlPath === '/',
        };
      });
  }
});
