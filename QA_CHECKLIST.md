# 🔍 Checklist de QA - Site Acústika

## 📋 Checklist Final de Qualidade e Testes

### 🎯 **Informações do Projeto**
- **Nome**: Site Institucional Acústika
- **Tecnologias**: Vite + React + TailwindCSS + WordPress REST API
- **URL Local**: http://localhost:5176/
- **Data de Revisão**: ___________
- **Revisor**: ___________

---

## ✅ **1. FUNCIONALIDADE GERAL**

### **1.1 Navegação**
- [ ] Menu principal funciona em todas as páginas
- [ ] Links de navegação direcionam corretamente
- [ ] Menu mobile (hamburger) funciona
- [ ] Logo redireciona para Home
- [ ] Breadcrumbs funcionam (se aplicável)
- [ ] Botão "Voltar ao Topo" funciona

### **1.2 Rotas e Páginas**
- [ ] **Home** (`/`) - Carrega corretamente
- [ ] **Sobre** (`/sobre`) - Carrega corretamente
- [ ] **Aparelhos** (`/aparelhos`) - Carrega corretamente
- [ ] **Acessórios** (`/acessorios`) - Carrega corretamente
- [ ] **Serviços** (`/servicos`) - Carrega corretamente
- [ ] **Contato** (`/contato`) - Carrega corretamente
- [ ] **Blog** (`/blog`) - Carrega corretamente
- [ ] **Post Individual** (`/blog/:slug`) - Carrega corretamente
- [ ] Rota 404 funciona para URLs inexistentes

### **1.3 Formulários**
- [ ] Formulário de contato valida campos obrigatórios
- [ ] Formulário de contato envia dados corretamente
- [ ] Mensagens de sucesso/erro aparecem
- [ ] Campos de email validam formato
- [ ] Campos de telefone validam formato
- [ ] Newsletter funciona (se implementado)

---

## ✅ **2. INTEGRAÇÃO WORDPRESS**

### **2.1 API WordPress**
- [ ] Posts carregam da API: `https://acustikaauditiva.com.br/wp-json/wp/v2`
- [ ] Lista de posts exibe corretamente
- [ ] Imagens dos posts carregam
- [ ] Títulos dos posts aparecem
- [ ] Datas formatadas em português
- [ ] Autores dos posts aparecem
- [ ] Categorias dos posts aparecem

### **2.2 Blog - Lista de Posts**
- [ ] Grid de posts responsivo (1/2/3 colunas)
- [ ] Filtros por categoria funcionam
- [ ] Contador de posts por categoria correto
- [ ] Botão "Carregar Mais" funciona
- [ ] Paginação funciona corretamente
- [ ] Loading spinner aparece durante carregamento
- [ ] Mensagem de erro aparece se API falhar

### **2.3 Blog - Post Individual**
- [ ] Rota dinâmica `/blog/:slug` funciona
- [ ] Post individual carrega conteúdo completo
- [ ] Imagem destacada aparece
- [ ] Título do post aparece
- [ ] Conteúdo HTML renderiza corretamente
- [ ] Metadados (autor, data, categorias) aparecem
- [ ] Link "Voltar para o Blog" funciona
- [ ] Post não encontrado redireciona corretamente

### **2.4 Estados de Loading/Erro**
- [ ] Loading spinner aparece ao carregar posts
- [ ] Loading spinner aparece ao carregar mais posts
- [ ] Mensagem de erro aparece se API estiver offline
- [ ] Mensagem de erro aparece se post não existir
- [ ] Estados de loading não quebram layout

---

## ✅ **3. DESIGN E UX**

### **3.1 Visual Geral**
- [ ] Design está alinhado com identidade da marca
- [ ] Cores estão consistentes (azul #2563eb, gradientes)
- [ ] Tipografia Inter carrega corretamente
- [ ] Espaçamentos estão uniformes
- [ ] Cards têm hover effects
- [ ] Botões têm estados hover/focus

### **3.2 Animações AOS**
- [ ] Animações aparecem ao fazer scroll
- [ ] Animações não são muito rápidas/lentas
- [ ] Animações não causam problemas de performance
- [ ] Animações funcionam em mobile
- [ ] Animações não quebram layout

### **3.3 Gradientes e CTAs**
- [ ] Gradientes primários aparecem corretamente
- [ ] CTAs têm gradientes e sombras
- [ ] CTAs têm hover effects
- [ ] Botões principais são destacados
- [ ] Links secundários são visíveis

---

## ✅ **4. RESPONSIVIDADE**

### **4.1 Mobile (320px - 767px)**
- [ ] Menu hamburger funciona
- [ ] Textos são legíveis
- [ ] Botões são clicáveis (44px mínimo)
- [ ] Imagens se adaptam à tela
- [ ] Formulários são usáveis
- [ ] Grid de posts vira 1 coluna
- [ ] Navegação não quebra

### **4.2 Tablet (768px - 1023px)**
- [ ] Layout se adapta bem
- [ ] Grid de posts vira 2 colunas
- [ ] Menu funciona corretamente
- [ ] Imagens mantêm proporção
- [ ] Textos são legíveis

### **4.3 Desktop (1024px+)**
- [ ] Layout completo aparece
- [ ] Grid de posts tem 3 colunas
- [ ] Hover effects funcionam
- [ ] Espaçamentos estão corretos
- [ ] Navegação horizontal funciona

### **4.4 Telas Grandes (1280px+)**
- [ ] Conteúdo não fica muito largo
- [ ] Container centralizado
- [ ] Imagens não ficam pixeladas
- [ ] Layout mantém proporções

---

## ✅ **5. PERFORMANCE**

### **5.1 Carregamento**
- [ ] Página inicial carrega em < 3 segundos
- [ ] Imagens otimizadas (WebP quando possível)
- [ ] Bundle size < 500KB
- [ ] CSS/JS minificados em produção
- [ ] Fontes carregam rapidamente

### **5.2 WordPress API**
- [ ] Posts carregam em < 2 segundos
- [ ] Paginação não recarrega página
- [ ] Cache funciona (5 minutos)
- [ ] Timeout de 10 segundos funciona
- [ ] API não sobrecarrega servidor

### **5.3 Otimizações**
- [ ] Lazy loading de imagens
- [ ] Componentes carregam sob demanda
- [ ] Não há memory leaks
- [ ] Console não mostra erros
- [ ] Network tab mostra requests otimizados

---

## ✅ **6. ACESSIBILIDADE**

### **6.1 Navegação por Teclado**
- [ ] Tab navigation funciona
- [ ] Focus states visíveis
- [ ] Skip links funcionam
- [ ] Menu acessível por teclado
- [ ] Formulários navegáveis por teclado

### **6.2 Screen Readers**
- [ ] Alt text em todas as imagens
- [ ] Headings hierárquicos (h1, h2, h3)
- [ ] Labels em formulários
- [ ] ARIA labels quando necessário
- [ ] Contraste de cores adequado

### **6.3 Semântica HTML**
- [ ] Tags semânticas corretas
- [ ] Estrutura de headings lógica
- [ ] Links descritivos
- [ ] Botões vs links corretos
- [ ] Formulários estruturados

---

## ✅ **7. SEO E METADADOS**

### **7.1 Meta Tags**
- [ ] Title único para cada página
- [ ] Meta description para cada página
- [ ] Meta keywords (se aplicável)
- [ ] Open Graph tags
- [ ] Twitter Card tags
- [ ] Canonical URLs

### **7.2 Estrutura**
- [ ] URLs amigáveis
- [ ] Sitemap.xml (se aplicável)
- [ ] Robots.txt (se aplicável)
- [ ] Schema markup (se aplicável)
- [ ] Headings hierárquicos

### **7.3 Conteúdo**
- [ ] Textos originais e relevantes
- [ ] Palavras-chave estratégicas
- [ ] Conteúdo atualizado
- [ ] Links internos funcionais
- [ ] Imagens com alt text descritivo

---

## ✅ **8. SEGURANÇA**

### **8.1 Formulários**
- [ ] Validação client-side e server-side
- [ ] Sanitização de inputs
- [ ] Proteção contra XSS
- [ ] Rate limiting (se aplicável)
- [ ] HTTPS obrigatório

### **8.2 WordPress API**
- [ ] CORS configurado corretamente
- [ ] API não expõe dados sensíveis
- [ ] Rate limiting na API
- [ ] Validação de dados da API
- [ ] Error handling seguro

---

## ✅ **9. COMPATIBILIDADE**

### **9.1 Navegadores**
- [ ] Chrome (últimas 2 versões)
- [ ] Firefox (últimas 2 versões)
- [ ] Safari (últimas 2 versões)
- [ ] Edge (últimas 2 versões)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

### **9.2 Dispositivos**
- [ ] iPhone (diferentes tamanhos)
- [ ] Android (diferentes tamanhos)
- [ ] iPad/Tablets
- [ ] Desktop (Windows, Mac, Linux)
- [ ] Touch devices

---

## ✅ **10. CONTEÚDO E COPY**

### **10.1 Textos**
- [ ] Ortografia e gramática corretas
- [ ] Tom de voz consistente
- [ ] Informações da empresa corretas
- [ ] Preços atualizados
- [ ] Contatos corretos
- [ ] Endereços corretos

### **10.2 Imagens**
- [ ] Imagens de alta qualidade
- [ ] Imagens relevantes ao conteúdo
- [ ] Imagens otimizadas para web
- [ ] Alt text descritivo
- [ ] Direitos autorais respeitados

### **10.3 Links**
- [ ] Links internos funcionam
- [ ] Links externos abrem em nova aba
- [ ] Links não quebrados
- [ ] URLs corretas
- [ ] Links relevantes

---

## ✅ **11. TESTES ESPECÍFICOS WORDPRESS**

### **11.1 Posts Disponíveis**
- [ ] **Rexton Rugged** - Carrega e exibe corretamente
- [ ] **Rexton M-Core R** - Carrega e exibe corretamente
- [ ] **Rexton M-Core iX** - Carrega e exibe corretamente
- [ ] **Oticon Zircon** - Carrega e exibe corretamente
- [ ] **Oticon Own** - Carrega e exibe corretamente
- [ ] **Argosy Vista V** - Carrega e exibe corretamente
- [ ] **Rexton Cros** - Carrega e exibe corretamente

### **11.2 Categorias**
- [ ] Categoria "Rexton" funciona
- [ ] Categoria "Oticon" funciona
- [ ] Categoria "Argosy" funciona
- [ ] Contador de posts por categoria correto
- [ ] Filtro "Todos" funciona

### **11.3 Cenários de Erro**
- [ ] API offline - mensagem de erro amigável
- [ ] Post não encontrado - redirecionamento
- [ ] Categoria vazia - mensagem apropriada
- [ ] Timeout - retry automático
- [ ] Dados malformados - fallbacks

---

## ✅ **12. DEPLOY E PRODUÇÃO**

### **12.1 Build de Produção**
- [ ] `npm run build` executa sem erros
- [ ] Arquivos minificados
- [ ] Assets otimizados
- [ ] Bundle size aceitável
- [ ] Source maps (se necessário)

### **12.2 Variáveis de Ambiente**
- [ ] URLs de produção configuradas
- [ ] API endpoints corretos
- [ ] Configurações de cache
- [ ] Logs configurados
- [ ] Error tracking (se aplicável)

### **12.3 Hospedagem**
- [ ] Servidor configurado
- [ ] HTTPS ativo
- [ ] CDN configurado (se aplicável)
- [ ] Backup automático
- [ ] Monitoramento ativo

---

## 📊 **RESULTADO FINAL**

### **Status Geral:**
- [ ] ✅ **APROVADO** - Pronto para produção
- [ ] ⚠️ **APROVADO COM RESSALVAS** - Pequenos ajustes necessários
- [ ] ❌ **REPROVADO** - Ajustes significativos necessários

### **Observações:**
```
_________________________________________________
_________________________________________________
_________________________________________________
_________________________________________________
```

### **Próximos Passos:**
- [ ] Corrigir itens marcados como ❌
- [ ] Testar correções
- [ ] Aprovação final
- [ ] Deploy para produção
- [ ] Monitoramento pós-deploy

---

**Revisor:** _______________  
**Data:** _______________  
**Versão:** 1.0  
**Status:** [ ] Aprovado [ ] Reprovado
