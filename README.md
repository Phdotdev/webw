# Pedro Moreira - Projetista FTTH

Site profissional para Pedro Moreira, especialista em projetos FTTH (Fiber to the Home).

## 🚀 Tecnologias

- **React 18** com TypeScript
- **Vite** como bundler
- **Tailwind CSS** para estilização
- **Netlify Visual Editor** para edição de conteúdo
- **Stackbit** para CMS

## 📁 Estrutura do Projeto

```
├── content/                 # Arquivos de conteúdo editáveis
│   ├── home.md             # Página inicial
│   ├── about.md            # Página sobre
│   └── contact.md          # Página de contato
├── src/
│   ├── components/         # Componentes React
│   ├── utils/             # Utilitários
│   └── ...
├── stackbit.config.ts     # Configuração do Stackbit/Netlify Visual Editor
└── package.json
```

## 🛠️ Desenvolvimento

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build
```

## ✏️ Netlify Visual Editor

Este projeto está configurado para funcionar com o Netlify Visual Editor, permitindo edição inline do conteúdo.

### Configuração no Netlify:

1. **Preview Server:**
   - Command: `npm run dev`
   - Target port: `5173`
   - Runnable directory: `./`

2. **Edição de Conteúdo:**
   - Os arquivos em `content/` podem ser editados diretamente no Visual Editor
   - Mudanças são automaticamente commitadas no GitHub
   - Elementos editáveis possuem `data-sb-object-id` e `data-sb-field-path`

### Estrutura de Conteúdo:

- **home.md**: Conteúdo da página inicial (hero, stats, CTAs)
- **about.md**: Informações sobre o profissional
- **contact.md**: Dados de contato e formulário

### Campos Editáveis:

Cada arquivo de conteúdo possui campos específicos definidos no `stackbit.config.ts`:

- Textos principais (títulos, descrições)
- Informações de contato (telefone, email, redes sociais)
- URLs de WhatsApp e Instagram
- Estatísticas e labels

## 🎨 Personalização

O design utiliza uma paleta de cores profissional:
- **Primary**: Tons de azul escuro
- **Gold**: Tons dourados para destaques
- **Gradientes** e **animações** para um visual moderno

## 📱 Responsividade

O site é totalmente responsivo, funcionando perfeitamente em:
- Desktop
- Tablet
- Mobile

## 🔧 Manutenção

Para adicionar novos campos editáveis:

1. Adicione o campo no arquivo `.md` correspondente em `content/`
2. Atualize o modelo no `stackbit.config.ts`
3. Adicione `data-sb-field-path` no componente React
4. Faça commit das mudanças

## 📞 Contato

Pedro Moreira - Projetista FTTH
- WhatsApp: (91) 9 9319-0904
- Email: pedrohcm8@icloud.com
- Instagram: @ph_ftth