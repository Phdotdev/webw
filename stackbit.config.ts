import { defineStackbitConfig } from '@stackbit/sdk'

export default defineStackbitConfig({
  contentSources: [
    {
      type: 'git',
      name: 'conteudo',
      models: [
        {
          name: 'home',
          label: 'Página Inicial',
          filePath: 'content/home.md',
          fields: [
            { name: 'title', type: 'string', label: 'Título Principal' },
            { name: 'subtitle', type: 'string', label: 'Subtítulo' },
            { name: 'description', type: 'string', label: 'Descrição' },
            { name: 'cta_text', type: 'string', label: 'Texto do Botão' },
            { name: 'whatsapp_message', type: 'string', label: 'Mensagem WhatsApp' },
            { name: 'stats_remote', type: 'string', label: 'Estatística - Remoto' },
            { name: 'stats_remote_label', type: 'string', label: 'Label - Remoto' },
            { name: 'stats_quality', type: 'string', label: 'Estatística - Qualidade' },
            { name: 'stats_quality_label', type: 'string', label: 'Label - Qualidade' }
          ],
          isPage: true,
          urlPath: '/'
        },
        {
          name: 'about',
          label: 'Sobre',
          filePath: 'content/about.md',
          fields: [
            { name: 'title', type: 'string', label: 'Título da Seção' },
            { name: 'name', type: 'string', label: 'Nome' },
            { name: 'profession', type: 'string', label: 'Profissão' },
            { name: 'intro', type: 'text', label: 'Introdução' },
            { name: 'experience', type: 'text', label: 'Experiência' },
            { name: 'mission', type: 'text', label: 'Missão' },
            { name: 'delivery', type: 'text', label: 'Entrega' },
            { name: 'focus', type: 'text', label: 'Foco' }
          ],
          isPage: false
        },
        {
          name: 'contact',
          label: 'Contato',
          filePath: 'content/contact.md',
          fields: [
            { name: 'title', type: 'string', label: 'Título' },
            { name: 'subtitle', type: 'string', label: 'Subtítulo' },
            { name: 'description', type: 'text', label: 'Descrição' },
            { name: 'phone', type: 'string', label: 'Telefone' },
            { name: 'email', type: 'string', label: 'Email' },
            { name: 'instagram', type: 'string', label: 'Instagram' },
            { name: 'whatsapp_url', type: 'string', label: 'URL WhatsApp' },
            { name: 'instagram_url', type: 'string', label: 'URL Instagram' },
            { name: 'form_title', type: 'string', label: 'Título do Formulário' },
            { name: 'form_note', type: 'text', label: 'Nota do Formulário' }
          ],
          isPage: false
        }
      ]
    }
  ]
})