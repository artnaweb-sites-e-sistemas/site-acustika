# 🔐 Configuração dos Secrets - GitHub Actions

## 🎯 **Passo a Passo para Configurar Deploy Automático**

### **1. Acesse seu Repositório no GitHub**
1. Vá para: https://github.com/artnaweb-sites-e-sistemas/site-acustika
2. Clique em **"Settings"** (Configurações) - aba no topo
3. No menu lateral esquerdo, clique em **"Secrets and variables"**
4. Clique em **"Actions"**

### **2. Adicione os 3 Secrets Necessários**

#### **Secret 1: FTP_SERVER**
1. Clique em **"New repository secret"**
2. **Name**: `FTP_SERVER`
3. **Secret**: `162.241.73.198` (use o IP direto enquanto o domínio não está apontado)
   - **Alternativa**: `ftp.acustikaauditiva.com.br` (após apontar o domínio)
4. Clique em **"Add secret"**

#### **Secret 2: FTP_USERNAME**
1. Clique em **"New repository secret"**
2. **Name**: `FTP_USERNAME`
3. **Secret**: `seu_usuario_cpanel` (seu usuário FTP)
4. Clique em **"Add secret"**

#### **Secret 3: FTP_PASSWORD**
1. Clique em **"New repository secret"**
2. **Name**: `FTP_PASSWORD`
3. **Secret**: `sua_senha_cpanel` (sua senha FTP)
4. Clique em **"Add secret"**

### **3. Verificar Configuração**
Você deve ter 3 secrets configurados:
- ✅ `FTP_SERVER`
- ✅ `FTP_USERNAME`
- ✅ `FTP_PASSWORD`

---

## 🚀 **Testar o Deploy Automático**

### **Opção 1: Push Automático**
1. Faça qualquer alteração no código
2. Commit e push:
   ```bash
   git add .
   git commit -m "test: Teste deploy automático"
   git push origin main
   ```

### **Opção 2: Deploy Manual**
1. Vá para a aba **"Actions"** no GitHub
2. Clique em **"Deploy to cPanel via FTP"**
3. Clique em **"Run workflow"**
4. Selecione branch **"main"**
5. Clique em **"Run workflow"**

---

## 📊 **Monitorar o Deploy**

### **Ver Status:**
1. Vá para **"Actions"** tab
2. Clique no workflow em execução
3. Veja os logs em tempo real

### **Status Esperado:**
- ✅ **Verde** - Deploy bem-sucedido
- ❌ **Vermelho** - Erro (verificar logs)
- 🟡 **Amarelo** - Deploy em andamento

---

## 🔧 **Dados FTP Comuns**

### **Exemplos de Configuração:**

#### **Hostinger:**
```
FTP_SERVER = ftp.seudominio.com
FTP_USERNAME = u123456789
FTP_PASSWORD = SuaSenha123
```

#### **GoDaddy:**
```
FTP_SERVER = ftp.seudominio.com
FTP_USERNAME = seu_usuario
FTP_PASSWORD = SuaSenha123
```

#### **Locaweb:**
```
FTP_SERVER = ftp.seudominio.com
FTP_USERNAME = seu_usuario
FTP_PASSWORD = SuaSenha123
```

---

## 🎯 **Configuração Específica - Acústika**

### **Para seu caso atual:**
```
FTP_SERVER = 162.241.73.198
FTP_USERNAME = acustikaauditiva (ou seu usuário cPanel)
FTP_PASSWORD = sua_senha_cpanel
```

### **Após apontar o domínio:**
```
FTP_SERVER = ftp.acustikaauditiva.com.br
FTP_USERNAME = acustikaauditiva (ou seu usuário cPanel)
FTP_PASSWORD = sua_senha_cpanel
```

---

## 🚨 **Troubleshooting**

### **Erro: "FTPError: 530 Authentication failed"**
**Causa**: Domínio não apontado para a hospedagem
**Solução**: 
- Use o **IP direto** no `FTP_SERVER`: `162.241.73.198`
- Ou aguarde o DNS propagar (24-48h) e use `ftp.acustikaauditiva.com.br`

### **Erro: "FTP connection failed"**
**Solução**: 
- Verificar se o servidor FTP está correto
- Verificar se a porta é 21 (FTP) ou 22 (SFTP)
- Testar conexão manual com FileZilla

### **Erro: "Authentication failed"**
**Solução**:
- Verificar usuário e senha
- Verificar se a conta FTP está ativa
- Testar login manual

### **Erro: "Upload failed"**
**Solução**:
- Verificar permissões da pasta `public_html/`
- Verificar espaço em disco
- Verificar se a pasta existe

---

## ✅ **Checklist Final**

- [ ] Repositório conectado ao GitHub
- [ ] Workflow criado (`.github/workflows/deploy-ftp.yml`)
- [ ] 3 secrets configurados
- [ ] Primeiro push feito
- [ ] Deploy testado
- [ ] Site funcionando em produção

---

## 🎉 **Pronto!**

Agora a cada push que você fizer no GitHub, o site será automaticamente:
1. **Compilado** (build)
2. **Enviado** via FTP
3. **Publicado** no seu cPanel

**Tempo de deploy**: ~2-3 minutos
**Frequência**: A cada push na branch `main`
