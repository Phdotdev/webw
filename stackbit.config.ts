import { defineStackbitConfig } from "@stackbit/types";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  ssgName: "custom",
  nodeVersion: "18",
  
  // Container Hooks para configuração do ambiente de build
  installCommand: "npm install",
  devCommand: "npm run dev",
  
  // Hooks opcionais (definidos como vazios se não houver scripts específicos)
  postGitCloneCommand: "",
  preInstallCommand: "",
  postInstallCommand: "",
  
  // Configuração dos modelos de página
  models: {
    HomePage: {
      type: "page",
      urlPath: "/",
      filePath: "content/home.md",
      fields: [
        { 
          name: "title", 
          type: "string", 
          label: "Título Principal",
          description: "Título principal da página inicial",
          required: false
        },
        { 
          name: "subtitle", 
          type: "string", 
          label: "Subtítulo",
          description: "Subtítulo que aparece no hero",
          required: false
        },
        { 
          name: "description", 
          type: "string", 
          label: "Descrição",
          description: "Descrição complementar do subtítulo",
          required: false
        },
        { 
          name: "cta_text", 
          type: "string", 
          label: "Texto do Botão CTA",
          description: "Texto do botão de chamada para ação",
          required: false
        },
        { 
          name: "whatsapp_message", 
          type: "string", 
          label: "Mensagem WhatsApp",
          description: "Mensagem padrão para WhatsApp",
          required: false
        },
        { 
          name: "stats_remote", 
          type: "string", 
          label: "Estatística - Remoto",
          description: "Valor da estatística de trabalho remoto",
          required: false,
          default: "100%"
        },
        { 
          name: "stats_remote_label", 
          type: "string", 
          label: "Label - Remoto",
          description: "Label da estatística remoto",
          required: false,
          default: "Remoto"
        },
        { 
          name: "stats_quality", 
          type: "string", 
          label: "Estatística - Qualidade",
          description: "Valor da estatística de qualidade",
          required: false,
          default: "✓"
        },
        { 
          name: "stats_quality_label", 
          type: "string", 
          label: "Label - Qualidade",
          description: "Label da estatística de qualidade",
          required: false,
          default: "Praticidade e Velocidade"
        }
      ]
    },
    
    AboutPage: {
      type: "page",
      urlPath: "/about",
      filePath: "content/about.md",
      fields: [
        { 
          name: "title", 
          type: "string", 
          label: "Título da Seção",
          description: "Título principal da seção sobre",
          required: false
        },
        { 
          name: "name", 
          type: "string", 
          label: "Nome",
          description: "Nome do profissional",
          required: false
        },
        { 
          name: "profession", 
          type: "string", 
          label: "Profissão",
          description: "Profissão/cargo do profissional",
          required: false
        },
        { 
          name: "intro", 
          type: "text", 
          label: "Introdução",
          description: "Texto de introdução sobre o profissional",
          required: false
        },
        { 
          name: "experience", 
          type: "text", 
          label: "Experiência",
          description: "Descrição da experiência profissional",
          required: false
        },
        { 
          name: "mission", 
          type: "text", 
          label: "Missão",
          description: "Descrição da missão e objetivos",
          required: false
        },
        { 
          name: "delivery", 
          type: "text", 
          label: "Entrega",
          description: "Descrição do que é entregue ao cliente",
          required: false
        },
        { 
          name: "focus", 
          type: "text", 
          label: "Foco",
          description: "Descrição do foco e metodologia de trabalho",
          required: false
        }
      ]
    },
    
    ContactPage: {
      type: "page",
      urlPath: "/contact",
      filePath: "content/contact.md",
      fields: [
        { 
          name: "title", 
          type: "string", 
          label: "Título",
          description: "Título da seção de contato",
          required: false
        },
        { 
          name: "subtitle", 
          type: "string", 
          label: "Subtítulo",
          description: "Subtítulo da seção de contato",
          required: false
        },
        { 
          name: "description", 
          type: "text", 
          label: "Descrição",
          description: "Descrição da seção de contato",
          required: false
        },
        { 
          name: "phone", 
          type: "string", 
          label: "Telefone",
          description: "Número de telefone para contato",
          required: false
        },
        { 
          name: "email", 
          type: "string", 
          label: "Email",
          description: "Endereço de email para contato",
          required: false
        },
        { 
          name: "instagram", 
          type: "string", 
          label: "Instagram",
          description: "Handle do Instagram (@usuario)",
          required: false
        },
        { 
          name: "whatsapp_url", 
          type: "string", 
          label: "URL WhatsApp",
          description: "URL completa do WhatsApp",
          required: false
        },
        { 
          name: "instagram_url", 
          type: "string", 
          label: "URL Instagram",
          description: "URL completa do Instagram",
          required: false
        },
        { 
          name: "form_title", 
          type: "string", 
          label: "Título do Formulário",
          description: "Título do formulário de contato",
          required: false
        },
        { 
          name: "form_note", 
          type: "text", 
          label: "Nota do Formulário",
          description: "Nota explicativa do formulário",
          required: false
        }
      ]
    }
  }
});