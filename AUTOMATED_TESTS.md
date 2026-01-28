# 🤖 Testes Automatizados - Site Acústika

## 🧪 **Scripts de Teste Automatizado**

### **1. Teste de Performance**
```bash
# Lighthouse CI (se configurado)
npm run lighthouse

# Bundle Analyzer
npm run build -- --analyze

# Teste de tamanho do bundle
npm run build && ls -la dist/assets/
```

### **2. Teste de Build**
```bash
# Build de produção5415454254
npm run build

# Verificar se build foi criado
ls -la dist/

# Testar build localmente
npm run preview
```

### **3. Teste de Linting**
```bash
# ESLint
npm run lint

# Verificar erros de TypeScript (se aplicável)
npm run type-check
```

---

## 🔍 **Testes de API WordPress**

### **Teste Manual da API**
```bash
# Testar endpoint principal
curl "https://acustikaauditiva.com.br/wp-json/wp/v2/posts?per_page=3"

# Testar categorias
curl "https://acustikaauditiva.com.br/wp-json/wp/v2/categories"

# Testar post específico
curl "https://acustikaauditiva.com.br/wp-json/wp/v2/posts?slug=rexton-rugged"
```

### **Teste de Performance da API**
```bash
# Medir tempo de resposta
curl -w "@curl-format.txt" -o /dev/null -s "https://acustikaauditiva.com.br/wp-json/wp/v2/posts"

# Criar arquivo curl-format.txt:
echo "     time_namelookup:  %{time_namelookup}\n
        time_connect:  %{time_connect}\n
     time_appconnect:  %{time_appconnect}\n
    time_pretransfer:  %{time_pretransfer}\n
       time_redirect:  %{time_redirect}\n
  time_starttransfer:  %{time_starttransfer}\n
                     ----------\n
          time_total:  %{time_total}\n" > curl-format.txt
```

---

## 📊 **Métricas de Performance**

### **Lighthouse Scores (Meta)**
- **Performance**: > 90
- **Accessibility**: > 95
- **Best Practices**: > 90
- **SEO**: > 95

### **Core Web Vitals**
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### **Bundle Size**
- **JavaScript**: < 300KB (gzipped)
- **CSS**: < 50KB (gzipped)
- **Images**: Otimizadas (WebP quando possível)

---

## 🧪 **Testes de Integração**

### **Teste de Rotas**
```javascript
// Teste manual no console do navegador
// Verificar se todas as rotas carregam
const routes = [
  '/',
  '/sobre',
  '/aparelhos',
  '/acessorios',
  '/servicos',
  '/contato',
  '/blog',
  '/blog/rexton-rugged'
];

routes.forEach(route => {
  fetch(window.location.origin + route)
    .then(response => console.log(`${route}: ${response.status}`))
    .catch(error => console.error(`${route}: ${error}`));
});
```

### **Teste de WordPress API**
```javascript
// Teste no console do navegador
// Verificar se API WordPress funciona
fetch('https://acustikaauditiva.com.br/wp-json/wp/v2/posts?per_page=3')
  .then(response => response.json())
  .then(data => {
    console.log('Posts carregados:', data.length);
    console.log('Primeiro post:', data[0]?.title?.rendered);
  })
  .catch(error => console.error('Erro na API:', error));
```

---

## 🔧 **Configuração de Testes**

### **Jest + React Testing Library (Opcional)**
```bash
# Instalar dependências de teste
npm install --save-dev @testing-library/react @testing-library/jest-dom jest

# Configurar jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleNameMapping: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};
```

### **Testes Básicos**
```javascript
// src/__tests__/App.test.jsx
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders home page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Acústika/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders blog page', () => {
  render(<App />);
  // Teste de navegação para blog
});
```

---

## 📱 **Testes de Responsividade**

### **Breakpoints para Testar**
```css
/* Mobile */
@media (max-width: 767px) { }

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) { }

/* Desktop */
@media (min-width: 1024px) { }
```

### **Dispositivos para Testar**
- **Mobile**: iPhone SE (375px), iPhone 12 (390px)
- **Tablet**: iPad (768px), iPad Pro (1024px)
- **Desktop**: 1280px, 1920px

---

## 🚨 **Monitoramento Contínuo**

### **Health Checks**
```javascript
// Verificar saúde da aplicação
const healthCheck = async () => {
  const checks = {
    api: await fetch('https://acustikaauditiva.com.br/wp-json/wp/v2/posts?per_page=1'),
    site: await fetch(window.location.origin),
  };
  
  Object.entries(checks).forEach(([name, response]) => {
    console.log(`${name}: ${response.ok ? 'OK' : 'ERROR'}`);
  });
};

// Executar a cada 5 minutos
setInterval(healthCheck, 5 * 60 * 1000);
```

### **Error Tracking**
```javascript
// Capturar erros JavaScript
window.addEventListener('error', (event) => {
  console.error('JavaScript Error:', event.error);
  // Enviar para serviço de monitoramento
});

// Capturar erros de Promise
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled Promise Rejection:', event.reason);
  // Enviar para serviço de monitoramento
});
```

---

## 📈 **Métricas de Sucesso**

### **KPIs Técnicos**
- **Uptime**: > 99.9%
- **API Response Time**: < 2s
- **Page Load Time**: < 3s
- **Error Rate**: < 1%
- **Mobile Performance**: > 85

### **KPIs de Negócio**
- **Bounce Rate**: < 40%
- **Time on Site**: > 2min
- **Page Views**: > 3 por sessão
- **Form Submissions**: > 5% dos visitantes
- **Blog Engagement**: > 1min por post

---

## 🔄 **Automação de Deploy**

### **GitHub Actions (Exemplo)**
```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run lint
      - run: npm run build
      - run: npm run test

  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to production
        run: echo "Deploy to production server"
```

---

## 📋 **Checklist de Automação**

### **Pré-Deploy**
- [ ] Build sem erros
- [ ] Lint sem erros
- [ ] Testes passando
- [ ] Bundle size aceitável
- [ ] API WordPress funcionando

### **Pós-Deploy**
- [ ] Site carregando
- [ ] Todas as páginas funcionando
- [ ] WordPress API funcionando
- [ ] Performance aceitável
- [ ] Monitoramento ativo

---

**Última atualização**: Dezembro 2024  
**Versão**: 1.0  
**Status**: [ ] Configurado [ ] Em uso [ ] Produção
