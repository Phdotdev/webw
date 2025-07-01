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
            { 
              name: 'title', 
              type: 'string', 
              label: 'Título Principal',
              description: 'Título principal da página inicial'
            },
            { 
              name: 'subtitle', 
              type: 'string', 
              label: 'Subtítulo',
              description: 'Subtítulo que aparece abaixo do título'
            },
            { 
              name: 'description', 
              type: 'text', 
              label: 'Descrição',
              description: 'Descrição principal da página'
            },
            { 
              name: 'cta_text', 
              type: 'string', 
              label: 'Texto do Botão Principal',
              description: 'Texto que aparece no botão de call-to-action'
            },
            { 
              name: 'whatsapp_message', 
              type: 'text', 
              label: 'Mensagem WhatsApp',
              description: 'Mensagem padrão enviada pelo WhatsApp'
            },
            { 
              name: 'stats_remote', 
              type: 'string', 
              label: 'Estatística - Valor Remoto',
              description: 'Valor da estatística de trabalho remoto'
            },
            { 
              name: 'stats_remote_label', 
              type: 'string', 
              label: 'Estatística - Label Remoto',
              description: 'Label da estatística de trabalho remoto'
            },
            { 
              name: 'stats_quality', 
              type: 'string', 
              label: 'Estatística - Valor Qualidade',
              description: 'Valor da estatística de qualidade'
            },
            { 
              name: 'stats_quality_label', 
              type: 'string', 
              label: 'Estatística - Label Qualidade',
              description: 'Label da estatística de qualidade'
            }
          ],
          isPage: true,
          urlPath: '/'
        },
        {
          name: 'about',
          label: 'Sobre o Profissional',
          filePath: 'content/about.md',
          fields: [
            { 
              name: 'title', 
              type: 'string', 
              label: 'Título da Seção',
              description: 'Título principal da seção sobre'
            },
            { 
              name: 'name', 
              type: 'string', 
              label: 'Nome Completo',
              description: 'Nome completo do profissional'
            },
            { 
              name: 'profession', 
              type: 'string', 
              label: 'Profissão',
              description: 'Título profissional ou cargo'
            },
            { 
              name: 'intro', 
              type: 'text', 
              label: 'Introdução',
              description: 'Parágrafo de introdução sobre o profissional'
            },
            { 
              name: 'experience', 
              type: 'text', 
              label: 'Experiência',
              description: 'Descrição da experiência profissional'
            },
            { 
              name: 'mission', 
              type: 'text', 
              label: 'Missão',
              description: 'Descrição da missão e objetivos'
            },
            { 
              name: 'delivery', 
              type: 'text', 
              label: 'Forma de Entrega',
              description: 'Como os projetos são entregues'
            },
            { 
              name: 'focus', 
              type: 'text', 
              label: 'Foco e Diferenciais',
              description: 'Principais focos e diferenciais do trabalho'
            }
          ],
          isPage: false
        },
        {
          name: 'contact',
          label: 'Informações de Contato',
          filePath: 'content/contact.md',
          fields: [
            { 
              name: 'title', 
              type: 'string', 
              label: 'Título da Seção',
              description: 'Título principal da seção de contato'
            },
            { 
              name: 'subtitle', 
              type: 'string', 
              label: 'Subtítulo',
              description: 'Subtítulo da seção de contato'
            },
            { 
              name: 'description', 
              type: 'text', 
              label: 'Descrição',
              description: 'Descrição sobre como entrar em contato'
            },
            { 
              name: 'phone', 
              type: 'string', 
              label: 'Telefone/WhatsApp',
              description: 'Número de telefone para contato'
            },
            { 
              name: 'email', 
              type: 'string', 
              label: 'Email',
              description: 'Endereço de email para contato'
            },
            { 
              name: 'instagram', 
              type: 'string', 
              label: 'Instagram Handle',
              description: 'Nome de usuário do Instagram (ex: @usuario)'
            },
            { 
              name: 'whatsapp_url', 
              type: 'string', 
              label: 'URL WhatsApp',
              description: 'Link completo do WhatsApp'
            },
            { 
              name: 'instagram_url', 
              type: 'string', 
              label: 'URL Instagram',
              description: 'Link completo do perfil Instagram'
            },
            { 
              name: 'form_title', 
              type: 'string', 
              label: 'Título do Formulário',
              description: 'Título do formulário de contato'
            },
            { 
              name: 'form_note', 
              type: 'text', 
              label: 'Nota do Formulário',
              description: 'Texto explicativo sobre o formulário'
            }
          ],
          isPage: false
        }
      ]
    }
  ],
  // Configurações adicionais para melhor experiência no Visual Editor
  ssgName: 'vite',
  devCommand: 'npm run dev',
  experimental: {
    ssg: {
      name: 'vite',
      logPatterns: {
        up: ['Local:', 'ready in', 'running at']
      },
      directoryChangeCommand: 'npm run dev'
    }
  }
})