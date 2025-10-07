# 🤖 Prompt para IA - Deploy Automático GitHub Actions

## 📝 **Prompt Completo para Configurar Deploy Automático**

Use este prompt quando quiser configurar deploy automático em qualquer projeto:

---

```
Preciso configurar deploy automático via GitHub Actions para um projeto [TECNOLOGIA] que será hospedado em [TIPO_HOSPEDAGEM].

Detalhes do projeto:
- Tecnologia: [React/Vue/Angular/Next.js/etc]
- Build tool: [Vite/Webpack/Create React App/etc]
- Hospedagem: [cPanel/Shared Hosting/VPS/etc]
- Servidor: [FTP/SFTP/SSH]

Por favor, crie:

1. **Workflow GitHub Actions** (.github/workflows/deploy.yml) para:
   - Build automático do projeto
   - Deploy via [FTP/SFTP/SSH] para [cPanel/Shared Hosting/VPS]
   - Trigger em push para branch main
   - Secrets necessários: [FTP_SERVER, FTP_USERNAME, FTP_PASSWORD]

2. **Documentação completa** incluindo:
   - Como configurar secrets no GitHub
   - Dados de conexão necessários
   - Troubleshooting comum
   - Checklist de configuração

3. **Arquivos de configuração** necessários:
   - .htaccess (se aplicável)
   - Scripts de build
   - Configurações de produção

4. **Guia passo a passo** para:
   - Configurar secrets no GitHub
   - Testar deploy automático
   - Monitorar status do deploy
   - Resolver problemas comuns

O projeto está em [LINGUAGEM] e usa [FRAMEWORK/BIBLIOTECA].
```

---

## 🎯 **Exemplo de Uso**

### **Para React + Vite + cPanel:**
```
Preciso configurar deploy automático via GitHub Actions para um projeto React que será hospedado em cPanel.

Detalhes do projeto:
- Tecnologia: React
- Build tool: Vite
- Hospedagem: cPanel
- Servidor: FTP

Por favor, crie:

1. **Workflow GitHub Actions** (.github/workflows/deploy.yml) para:
   - Build automático do projeto
   - Deploy via FTP para cPanel
   - Trigger em push para branch main
   - Secrets necessários: FTP_SERVER, FTP_USERNAME, FTP_PASSWORD

2. **Documentação completa** incluindo:
   - Como configurar secrets no GitHub
   - Dados de conexão necessários
   - Troubleshooting comum
   - Checklist de configuração

3. **Arquivos de configuração** necessários:
   - .htaccess para React SPA
   - Scripts de build
   - Configurações de produção

4. **Guia passo a passo** para:
   - Configurar secrets no GitHub
   - Testar deploy automático
   - Monitorar status do deploy
   - Resolver problemas comuns

O projeto está em JavaScript e usa React + Vite.
```

---

## 🔧 **Variações do Prompt**

### **Para Next.js:**
```
- Tecnologia: Next.js
- Build tool: Next.js (built-in)
- Hospedagem: Vercel/Netlify/cPanel
- Servidor: Vercel API/Netlify API/FTP
```

### **Para Vue.js:**
```
- Tecnologia: Vue.js
- Build tool: Vite/Webpack
- Hospedagem: cPanel/Netlify/Vercel
- Servidor: FTP/Netlify API/Vercel API
```

### **Para Angular:**
```
- Tecnologia: Angular
- Build tool: Angular CLI
- Hospedagem: cPanel/Netlify/Vercel
- Servidor: FTP/Netlify API/Vercel API
```

---

## 📋 **Informações Adicionais**

### **Se o projeto tem:**
- **WordPress API**: Mencione integração WordPress
- **Banco de dados**: Mencione configurações de DB
- **Variáveis de ambiente**: Mencione .env
- **Autenticação**: Mencione JWT/OAuth
- **CDN**: Mencione CloudFlare/AWS

### **Se a hospedagem é:**
- **cPanel**: FTP/SFTP
- **Vercel**: Vercel API
- **Netlify**: Netlify API
- **AWS**: S3/CloudFront
- **DigitalOcean**: SSH/Docker

---

## 🎯 **Resultado Esperado**

Com este prompt, a IA deve criar:

1. ✅ **Workflow GitHub Actions** funcional
2. ✅ **Documentação completa** de configuração
3. ✅ **Arquivos de configuração** necessários
4. ✅ **Guia passo a passo** detalhado
5. ✅ **Troubleshooting** para problemas comuns
6. ✅ **Checklist** de configuração

---

## 💡 **Dicas de Uso**

### **Seja específico:**
- Mencione a tecnologia exata
- Informe o tipo de hospedagem
- Especifique o método de deploy

### **Mencione requisitos especiais:**
- Integração com APIs
- Variáveis de ambiente
- Configurações de banco
- Autenticação

### **Peça exemplos:**
- Dados de conexão
- Configurações de secrets
- Comandos de teste

---

**🚀 Com este prompt, você terá deploy automático configurado em qualquer projeto!**
