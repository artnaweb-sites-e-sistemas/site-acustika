# 🔄 Transição de Subdiretório para Domínio Principal

## 📋 **Guia para Apontar o Domínio**

### **Situação Atual:**
- ✅ **URL**: `http://162.241.73.198/~acustikaauditiva/`
- ✅ **Base URL**: `/~acustikaauditiva/`
- ✅ **Deploy funcionando**

### **Após Apontar o Domínio:**
- 🎯 **URL**: `https://acustikaauditiva.com.br/`
- 🎯 **Base URL**: `/`
- 🎯 **Deploy automático**

---

## 🚀 **Passo a Passo para Transição**

### **1. Apontar o Domínio no Registro.br**

1. **Acesse**: https://registro.br
2. **Faça login** na sua conta
3. **Vá em "Meus Domínios"**
4. **Clique em "Gerenciar"** no domínio `acustikaauditiva.com.br`
5. **Vá em "DNS"**
6. **Configure os nameservers**:
   ```
   ns1.seudominio.com.br
   ns2.seudominio.com.br
   ```
   (Substitua pelos nameservers da sua hospedagem)

### **2. Configurar DNS na Hospedagem**

1. **Acesse o cPanel**
2. **Vá em "Zone Editor"** ou **"DNS Zone"**
3. **Adicione os registros**:
   ```
   Tipo: A
   Nome: @
   Valor: 162.241.73.198
   TTL: 14400

   Tipo: A
   Nome: www
   Valor: 162.241.73.198
   TTL: 14400
   ```

### **3. Atualizar Secrets no GitHub**

1. **Acesse**: https://github.com/artnaweb-sites-e-sistemas/site-acustika/settings/secrets/actions
2. **Adicione novo secret**:
   ```
   Name: VITE_BASE_URL
   Value: /
   ```
3. **Atualize o FTP_SERVER**:
   ```
   Name: FTP_SERVER
   Value: ftp.acustikaauditiva.com.br
   ```

### **4. Testar o Deploy**

1. **Faça um commit** qualquer:
   ```bash
   git add .
   git commit -m "test: Teste deploy com domínio principal"
   git push origin main
   ```
2. **Aguarde o deploy** terminar
3. **Teste o site**: `https://acustikaauditiva.com.br/`

---

## ⚙️ **Configurações Automáticas**

### **Antes do Apontamento (Atual):**
```yaml
# .github/workflows/deploy-ftp.yml
env:
  VITE_BASE_URL: /~acustikaauditiva/
```

### **Após o Apontamento:**
```yaml
# .github/workflows/deploy-ftp.yml
env:
  VITE_BASE_URL: /
```

### **vite.config.js (Automático):**
```javascript
// Funciona para ambos os cenários
const baseUrl = process.env.VITE_BASE_URL || (mode === 'production' ? '/' : '/~acustikaauditiva/')
```

---

## 🔧 **Troubleshooting**

### **Problema: Site não carrega após apontamento**
**Solução**:
- Aguarde 24-48h para propagação DNS
- Verifique se os nameservers estão corretos
- Teste com `nslookup acustikaauditiva.com.br`

### **Problema: Assets 404 após apontamento**
**Solução**:
- Verifique se o secret `VITE_BASE_URL` está como `/`
- Faça um novo deploy
- Limpe o cache do navegador

### **Problema: Deploy falha após apontamento**
**Solução**:
- Verifique se `FTP_SERVER` está como `ftp.acustikaauditiva.com.br`
- Teste conexão FTP manual
- Verifique se o usuário FTP tem acesso ao `public_html/`

---

## ✅ **Checklist de Transição**

- [ ] **DNS apontado** para a hospedagem
- [ ] **Nameservers configurados** no registro.br
- [ ] **Registros A** criados no cPanel
- [ ] **Secret VITE_BASE_URL** atualizado para `/`
- [ ] **Secret FTP_SERVER** atualizado para `ftp.acustikaauditiva.com.br`
- [ ] **Deploy testado** e funcionando
- [ ] **Site acessível** em `https://acustikaauditiva.com.br/`
- [ ] **Assets carregando** corretamente
- [ ] **Rotas funcionando** (navegação entre páginas)

---

## 🎉 **Resultado Final**

Após a transição, você terá:
- ✅ **Site funcionando** em `https://acustikaauditiva.com.br/`
- ✅ **Deploy automático** a cada push
- ✅ **Assets carregando** corretamente
- ✅ **Rotas funcionando** perfeitamente
- ✅ **SSL/HTTPS** funcionando
- ✅ **Performance otimizada**

**Tempo de transição**: 24-48h (propagação DNS)
**Downtime**: Zero (site continua funcionando no IP)
