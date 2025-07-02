# Pedro Moreira - Projetista FTTH

Site profissional para Pedro Moreira, especialista em projetos FTTH (Fiber to the Home).

## 🚀 Tecnologias

- **React 18** com TypeScript
- **Vite** como bundler
- **Tailwind CSS** para estilização
- **Netlify Visual Editor** para edição de conteúdo

## 📁 Estrutura do Projeto

```
├── content/                 # Arquivos de conteúdo editáveis
│   ├── home.md             # Página inicial
│   ├── about.md            # Página sobre
│   ├── contact.md          # Página de contato
│   └── portfolio.md        # Página de portfólio
├── src/
│   ├── components/         # Componentes React
│   ├── utils/             # Utilitários
│   └── ...
├── stackbit.config.ts     # Configuração do Netlify Visual Editor
├── netlify.toml           # Configuração do Netlify
└── package.json           # Dependências do projeto
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

### Configurações do Netlify:

**Build Settings:**
- Build command: `npm run build`
- Publish directory: `dist`
- Base directory: (deixar em branco - raiz do repositório)

**Environment Variables:**
- NODE_VERSION: `18`

**Preview Server:**
- Command: `npm run dev`
- Port: 5173
- Host: 0.0.0.0

### Estrutura de Conteúdo:

- **home.md**: Conteúdo da página inicial (hero, stats, CTAs)
- **about.md**: Informações sobre o profissional
- **contact.md**: Dados de contato e formulário
- **portfolio.md**: Informações do portfólio

### Campos Editáveis:

Cada arquivo de conteúdo possui campos específicos definidos no `stackbit.config.ts`:

- Textos principais (títulos, descrições)
- Informações de contato (telefone, email, redes sociais)
- URLs de WhatsApp e Instagram
- Estatísticas e labels

## 🔧 Diagnóstico do Visual Editor

Se o Visual Editor não estiver funcionando:

1. **Verificar logs no Netlify:**
   - Acesse Site Settings > Visual Editor
   - Verifique os logs de erro

2. **Configurações de Build:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Base directory: (vazio)
   - Node version: 18

3. **Preview Server:**
   - Command: `npm run dev`
   - Port: 5173
   - Host: 0.0.0.0

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

## 📞 Contato

Pedro Moreira - Projetista FTTH
- WhatsApp: (91) 9 9319-0904
- Email: pedrohcm8@icloud.com
- Instagram: @ph_ftth

## 🐛 Troubleshooting

### Problema: package.json não encontrado
**Solução:** Verificar se o package.json está na raiz do repositório e se o Base directory no Netlify está vazio.

### Visual Editor não carrega:
1. Verificar se o preview server está rodando na porta 5173
2. Confirmar que o host está configurado como 0.0.0.0
3. Verificar logs do Netlify para erros específicos
4. Confirmar que os headers de segurança estão corretos

### Edição inline não funciona:
1. Verificar se os atributos `data-sb-field-path` estão corretos
2. Confirmar que os campos estão definidos no stackbit.config.ts
3. Verificar se os arquivos .md existem no diretório content/