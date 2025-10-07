# 🚀 Deploy para cPanel via FTP - Site Acústika

## ✅ **Build de Produção Criado!**

O build foi gerado com sucesso na pasta `dist/` com os seguintes arquivos:
- **index.html** (0.50 kB)
- **CSS**: 57.90 kB (gzipped: 8.02 kB)
- **JavaScript**: 305.30 kB (gzipped: 90.95 kB)
- **Fontes Inter**: Otimizadas
- **Total**: ~363 kB (gzipped: ~99 kB)

---

## 📋 **Passo a Passo para Deploy via FTP**

### **1. Preparação dos Arquivos**

#### **Arquivos para Upload:**
```
dist/
├── index.html          ← Página principal
├── assets/
│   ├── index-*.css     ← Estilos compilados
│   ├── index-*.js      ← JavaScript compilado
│   └── inter-*.woff2   ← Fontes otimizadas
```

#### **Localização dos Arquivos:**
- **Pasta local**: `C:\Users\biras\Desktop\site-acustika\dist\`
- **Todos os arquivos** dentro da pasta `dist/` devem ser enviados

---

### **2. Configuração do Cliente FTP**

#### **Softwares Recomendados:**
- **FileZilla** (gratuito) - https://filezilla-project.org/
- **WinSCP** (Windows) - https://winscp.net/
- **Cyberduck** (Mac) - https://cyberduck.io/

#### **Dados de Conexão FTP:**
```
Servidor: ftp.seudominio.com (ou IP do servidor)
Porta: 21 (FTP) ou 22 (SFTP)
Usuário: seu_usuario_cpanel
Senha: sua_senha_cpanel
```

---

### **3. Processo de Upload**

#### **3.1 Conectar ao FTP:**
1. Abra o cliente FTP
2. Digite os dados de conexão
3. Clique em "Conectar"

#### **3.2 Navegar para a Pasta Correta:**
```
No servidor, navegue para:
/public_html/          ← Para site principal
/public_html/subpasta/ ← Para subdomínio
```

#### **3.3 Upload dos Arquivos:**
1. **Selecione todos os arquivos** da pasta `dist/`
2. **Arraste para** a pasta `public_html/`
3. **Aguarde o upload** (pode demorar alguns minutos)

#### **3.4 Verificar Upload:**
```
public_html/
├── index.html          ✅
├── assets/
│   ├── index-*.css     ✅
│   ├── index-*.js      ✅
│   └── inter-*.woff2   ✅
```

---

### **4. Configurações no cPanel**

#### **4.1 Configurar Domínio:**
1. Acesse o cPanel
2. Vá em **"Subdomínios"** ou **"Domínios"**
3. Configure o domínio para apontar para `public_html/`

#### **4.2 Configurar SSL (HTTPS):**
1. No cPanel, vá em **"SSL/TLS"**
2. Ative **"Let's Encrypt"** (gratuito)
3. Force HTTPS redirecionamento

#### **4.3 Configurar Cache:**
1. Vá em **"Cache"** ou **"Otimização"**
2. Ative **"Gzip Compression"**
3. Configure **"Browser Caching"**

---

### **5. Configurações Específicas para React SPA**

#### **5.1 Arquivo .htaccess (IMPORTANTE):**
Crie um arquivo `.htaccess` na pasta `public_html/` com:

```apache
# React Router - SPA Support
RewriteEngine On
RewriteBase /

# Handle Angular and React Router
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Cache Control
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
    ExpiresByType font/woff2 "access plus 1 year"
</IfModule>

# Gzip Compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>
```

#### **5.2 Upload do .htaccess:**
1. Crie o arquivo `.htaccess` localmente
2. Faça upload para `public_html/`
3. Certifique-se que está na raiz do site

---

### **6. Teste e Verificação**

#### **6.1 Testar o Site:**
1. Acesse seu domínio
2. Verifique se carrega corretamente
3. Teste todas as páginas:
   - `/` (Home)
   - `/sobre`
   - `/aparelhos`
   - `/blog`
   - `/contato`

#### **6.2 Verificar WordPress API:**
1. Acesse `/blog`
2. Verifique se os posts carregam
3. Teste um post individual

#### **6.3 Verificar Performance:**
- **GTmetrix**: https://gtmetrix.com/
- **PageSpeed Insights**: https://pagespeed.web.dev/
- **Lighthouse**: F12 → Lighthouse

---

### **7. Configurações de Produção**

#### **7.1 Variáveis de Ambiente:**
Se necessário, configure no cPanel:
```
REACT_APP_API_URL=https://acustikaauditiva.com.br/wp-json/wp/v2
```

#### **7.2 Domínio WordPress:**
O site já está configurado para usar:
```
https://acustikaauditiva.com.br/wp-json/wp/v2
```

---

### **8. Checklist Final**

#### **Antes do Deploy:**
- [ ] Build criado com sucesso
- [ ] Arquivos na pasta `dist/`
- [ ] Cliente FTP configurado
- [ ] Dados de acesso FTP

#### **Durante o Deploy:**
- [ ] Upload de todos os arquivos
- [ ] Upload do `.htaccess`
- [ ] Verificar permissões (644 para arquivos, 755 para pastas)

#### **Após o Deploy:**
- [ ] Site carrega corretamente
- [ ] Todas as rotas funcionam
- [ ] WordPress API funciona
- [ ] HTTPS ativo
- [ ] Performance otimizada

---

### **9. Troubleshooting**

#### **Problema: Página em branco**
**Solução**: Verificar se o `.htaccess` foi enviado

#### **Problema: Erro 404 nas rotas**
**Solução**: Configurar rewrite rules no `.htaccess`

#### **Problema: CSS/JS não carrega**
**Solução**: Verificar se a pasta `assets/` foi enviada

#### **Problema: WordPress API não funciona**
**Solução**: Verificar CORS no WordPress

---

### **10. Comandos Úteis**

#### **Para Rebuild:**
```bash
# Limpar build anterior
Remove-Item -Path dist -Recurse -Force

# Criar novo build
npm run build

# Verificar tamanho
Get-ChildItem -Path dist -Recurse | Measure-Object -Property Length -Sum
```

#### **Para Testar Localmente:**
```bash
# Servir build local
npm run preview
```

---

## 🎯 **Resumo do Deploy**

1. ✅ **Build criado**: `dist/` com 363 kB
2. 📤 **Upload via FTP**: Todos os arquivos para `public_html/`
3. ⚙️ **Configurar .htaccess**: Para SPA e cache
4. 🔒 **Ativar HTTPS**: SSL no cPanel
5. 🚀 **Testar**: Todas as funcionalidades

**Tempo estimado**: 15-30 minutos
**Dificuldade**: Fácil
**Status**: Pronto para deploy!

---

**📞 Suporte**: Se precisar de ajuda, consulte a documentação do seu provedor de hospedagem ou entre em contato com o suporte técnico.
