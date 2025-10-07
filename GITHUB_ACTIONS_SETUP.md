# 🤖 Configuração GitHub Actions para Deploy Automático

## 🎯 **O que é GitHub Actions?**

GitHub Actions é um sistema de CI/CD que permite automatizar workflows. No nosso caso, ele vai:
1. **Detectar** quando você faz push no GitHub
2. **Fazer build** automaticamente
3. **Fazer deploy** via FTP para seu cPanel

---

## ⚙️ **Configuração dos Secrets**

### **1. Acesse seu Repositório no GitHub**
1. Vá para: `https://github.com/SEU_USUARIO/site-acustika`
2. Clique em **"Settings"** (Configurações)
3. No menu lateral, clique em **"Secrets and variables"**
4. Clique em **"Actions"**

### **2. Adicione os Secrets**
Clique em **"New repository secret"** e adicione:

#### **Secret 1: FTP_SERVER**
- **Name**: `FTP_SERVER`
- **Value**: `ftp.seudominio.com` (ou IP do servidor)

#### **Secret 2: FTP_USERNAME**
- **Name**: `FTP_USERNAME`
- **Value**: `seu_usuario_cpanel`

#### **Secret 3: FTP_PASSWORD**
- **Name**: `FTP_PASSWORD`
- **Value**: `sua_senha_cpanel`

---

## 📋 **Exemplo de Configuração**

```
FTP_SERVER = ftp.acustika.com.br
FTP_USERNAME = acustika_user
FTP_PASSWORD = MinhaSenh@123
```

---

## 🚀 **Como Funciona o Deploy Automático**

### **Quando acontece:**
- ✅ **Push para main** - Deploy automático
- ✅ **Push manual** - Via "Actions" tab

### **O que acontece:**
1. **Checkout** - Baixa o código
2. **Setup Node.js** - Instala Node.js 18
3. **Install** - Instala dependências (`npm ci`)
4. **Build** - Cria build de produção (`npm run build`)
5. **Deploy** - Upload via FTP para `public_html/`

---

## 📊 **Vantagens do Deploy Automático**

### **✅ Prós:**
- **Automatização** - Deploy a cada push
- **Consistência** - Sempre usa a mesma configuração
- **Histórico** - Logs de todos os deploys
- **Rollback** - Fácil voltar versões anteriores
- **Colaboração** - Equipe pode fazer deploy

### **⚠️ Contras:**
- **Configuração inicial** - Precisa configurar secrets
- **Dependência** - Precisa do GitHub
- **Tempo** - Deploy demora 2-3 minutos

---

## 🔧 **Configuração Alternativa (SFTP)**

Se seu servidor suporta SFTP, use esta versão:

```yaml
- name: Deploy to SFTP
  uses: wlixcc/SFTP-Deploy-Action@v1.2.4
  with:
    server: ${{ secrets.SFTP_SERVER }}
    username: ${{ secrets.SFTP_USERNAME }}
    password: ${{ secrets.SFTP_PASSWORD }}
    local_path: './dist/*'
    remote_path: '/public_html/'
    port: 22
```

---

## 📱 **Monitoramento do Deploy**

### **Ver Status:**
1. Vá para **"Actions"** tab no GitHub
2. Clique no workflow **"Deploy to cPanel via FTP"**
3. Veja o status em tempo real

### **Logs de Deploy:**
- ✅ **Verde** - Deploy bem-sucedido
- ❌ **Vermelho** - Erro no deploy
- 🟡 **Amarelo** - Deploy em andamento

---

## 🚨 **Troubleshooting**

### **Erro: "FTP connection failed"**
**Solução**: Verificar se os secrets estão corretos

### **Erro: "Build failed"**
**Solução**: Verificar se o código compila localmente

### **Erro: "Upload failed"**
**Solução**: Verificar permissões da pasta `public_html/`

---

## 🎯 **Recomendação**

### **Para começar:**
- Use **deploy manual** (FileZilla)
- Mais simples e rápido

### **Para produção:**
- Configure **GitHub Actions**
- Mais profissional e escalável

---

## 📋 **Checklist de Configuração**

### **GitHub Actions:**
- [ ] Repositório criado no GitHub
- [ ] Secrets configurados (FTP_SERVER, FTP_USERNAME, FTP_PASSWORD)
- [ ] Workflow criado (`.github/workflows/deploy-ftp.yml`)
- [ ] Primeiro push feito
- [ ] Deploy testado

### **Deploy Manual:**
- [ ] FileZilla instalado
- [ ] Dados FTP configurados
- [ ] Upload da pasta `dist/` feito
- [ ] Site testado no navegador

---

## 🚀 **Próximos Passos**

1. **Escolha** entre deploy manual ou automático
2. **Configure** conforme sua escolha
3. **Teste** o deploy
4. **Monitore** o site em produção

**💡 Dica**: Comece com deploy manual e depois migre para automático quando se sentir confortável!
