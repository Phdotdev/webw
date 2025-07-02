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

## ✏️ Netlify Visual Editor - Configurações Necessárias

### **1. Build Settings no Netlify:**
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Base directory:** **DEIXAR VAZIO** (muito importante!)

### **2. Environment Variables:**
- **NODE_VERSION:** `18`

### **3. Preview Server Settings:**
- **Command:** `npm run dev`
- **Port:** `5173`
- **Host:** `0.0.0.0`

### **4. Verificações Importantes:**

#### No painel do Netlify, verifique:

1. **Site settings > Build & deploy > Build settings:**
   - Base directory: (vazio)
   - Build command: npm run build
   - Publish directory: dist

2. **Site settings > Build & deploy > Environment:**
   - NODE_VERSION = 18

3. **Site settings > Visual Editor:**
   - Command: npm run dev
   - Port: 5173

#### Logs de Build para Verificar:

✅ **Sucesso esperado:**
```
Installing dependencies...
npm install completed
Building site...
npm run build completed
Site published successfully
```

❌ **Erros a procurar:**
- `ENOENT: no such file or directory, open '/opt/buildhome/.nvm/versions/node/v18.20.4/package.json'`
- Erros de TypeScript
- Erros de compilação do Vite
- Falhas na instalação de dependências

### **5. Troubleshooting do Visual Editor:**

Se o Visual Editor não funcionar após build bem-sucedido:

1. **Verificar logs do Visual Editor:**
   - Site settings > Visual Editor > View logs

2. **Reiniciar o Preview Server:**
   - Site settings > Visual Editor > Restart preview

3. **Verificar conectividade:**
   - O preview server deve estar rodando na porta 5173
   - Host deve estar configurado como 0.0.0.0

### **6. Estrutura de Conteúdo Editável:**

- **home.md**: Hero, estatísticas, CTAs
- **about.md**: Informações profissionais
- **contact.md**: Dados de contato e formulário
- **portfolio.md**: Informações do portfólio

### **7. Campos Editáveis Implementados:**

Todos os componentes principais possuem atributos `data-sb-field-path` para edição inline:

- ✅ Hero (título, subtítulo, descrição, CTAs, estatísticas)
- ✅ About (nome, profissão, textos descritivos)
- ✅ Contact (informações de contato, formulário)
- ✅ Portfolio (títulos, descrições, CTAs)

## 🔧 Próximos Passos para Diagnóstico:

1. **Verificar configurações no Netlify UI** conforme listado acima
2. **Analisar logs de build** mais recentes
3. **Verificar logs do Visual Editor** se o build for bem-sucedido
4. **Testar preview server** manualmente se necessário

## 📞 Contato

Pedro Moreira - Projetista FTTH
- WhatsApp: (91) 9 9319-0904
- Email: pedrohcm8@icloud.com
- Instagram: @ph_ftth