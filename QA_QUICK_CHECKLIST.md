# ⚡ Checklist Rápido de QA - Site Acústika

## 🚀 **Teste Rápido (15 minutos)**

### **1. Navegação Básica**
- [ ] Home carrega: http://localhost:5176/
- [ ] Menu funciona (todas as páginas)
- [ ] Blog carrega: http://localhost:5176/blog
- [ ] Post individual carrega: http://localhost:5176/blog/rexton-rugged

### **2. WordPress API**
- [ ] Posts aparecem no blog
- [ ] Imagens dos posts carregam
- [ ] Filtros por categoria funcionam
- [ ] "Carregar Mais" funciona

### **3. Responsividade**
- [ ] Mobile (F12 → Device Toolbar → iPhone)
- [ ] Tablet (iPad)
- [ ] Desktop (normal)

### **4. Performance**
- [ ] Página carrega rápido (< 3s)
- [ ] Console sem erros (F12 → Console)
- [ ] Imagens otimizadas

---

## 🔍 **Teste Completo (30 minutos)**

### **Funcionalidade**
- [ ] Todas as 7 páginas carregam
- [ ] Formulário de contato funciona
- [ ] Links internos/externos funcionam
- [ ] Menu mobile funciona

### **WordPress**
- [ ] 7 posts carregam corretamente
- [ ] Categorias funcionam
- [ ] Paginação funciona
- [ ] Estados de loading/erro

### **Design**
- [ ] Animações AOS funcionam
- [ ] Hover effects nos cards
- [ ] Gradientes aparecem
- [ ] Tipografia Inter carrega

### **Cross-browser**
- [ ] Chrome ✅
- [ ] Firefox ✅
- [ ] Safari ✅
- [ ] Edge ✅

---

## 🚨 **Checklist Crítico (5 minutos)**

### **Deve Funcionar 100%**
- [ ] **Blog carrega posts do WordPress**
- [ ] **Posts individuais abrem**
- [ ] **Menu mobile funciona**
- [ ] **Formulário de contato valida**
- [ ] **Site é responsivo**
- [ ] **Console sem erros**

---

## 📱 **Teste Mobile Específico**

### **iPhone/Android**
- [ ] Menu hamburger abre
- [ ] Textos legíveis
- [ ] Botões clicáveis
- [ ] Scroll suave
- [ ] Imagens carregam

### **Tablet**
- [ ] Layout 2 colunas no blog
- [ ] Menu horizontal
- [ ] Touch funciona
- [ ] Orientação portrait/landscape

---

## 🌐 **Teste de Produção**

### **Antes do Deploy**
- [ ] `npm run build` sem erros
- [ ] Bundle size < 500KB
- [ ] Todas as imagens otimizadas
- [ ] URLs de produção configuradas

### **Após Deploy**
- [ ] Site carrega em produção
- [ ] WordPress API funciona
- [ ] HTTPS ativo
- [ ] Performance aceitável

---

## 🎯 **Checklist por Página**

### **Home** (`/`)
- [ ] Hero section aparece
- [ ] Animações funcionam
- [ ] CTAs funcionam
- [ ] Imagens carregam

### **Blog** (`/blog`)
- [ ] Posts do WordPress aparecem
- [ ] Filtros funcionam
- [ ] Paginação funciona
- [ ] Loading states

### **Contato** (`/contato`)
- [ ] Formulário valida
- [ ] Campos obrigatórios
- [ ] Mensagem de sucesso
- [ ] Informações da empresa

### **Aparelhos** (`/aparelhos`)
- [ ] Lista de produtos
- [ ] Preços aparecem
- [ ] Imagens dos produtos
- [ ] CTAs funcionam

---

## ⚠️ **Problemas Comuns**

### **WordPress API**
- [ ] CORS configurado
- [ ] URL da API correta
- [ ] Timeout adequado
- [ ] Error handling

### **Performance**
- [ ] Imagens otimizadas
- [ ] Bundle size
- [ ] Lazy loading
- [ ] Cache configurado

### **Mobile**
- [ ] Touch targets 44px+
- [ ] Viewport configurado
- [ ] Font size legível
- [ ] Scroll suave

---

## ✅ **Aprovação Final**

### **Critérios de Aprovação**
- [ ] **Funcionalidade**: 100% das features funcionam
- [ ] **Performance**: Carrega em < 3 segundos
- [ ] **Responsividade**: Funciona em todos os dispositivos
- [ ] **WordPress**: API integrada e funcionando
- [ ] **UX**: Navegação intuitiva e fluida

### **Status**
- [ ] ✅ **APROVADO** - Pronto para produção
- [ ] ⚠️ **APROVADO COM RESSALVAS** - Pequenos ajustes
- [ ] ❌ **REPROVADO** - Ajustes necessários

---

**Revisor:** _______________  
**Data:** _______________  
**Tempo de Teste:** _______________
