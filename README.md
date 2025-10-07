# Acústika - Site Multipáginas

Um site moderno e responsivo para uma empresa especializada em aparelhos auditivos, desenvolvido com Vite + React + TailwindCSS.

## 🚀 Tecnologias Utilizadas

- **Vite** - Build tool e servidor de desenvolvimento
- **React** - Biblioteca para interface de usuário
- **React Router DOM** - Roteamento para aplicações React
- **TailwindCSS** - Framework CSS utilitário com configurações customizadas
- **AOS (Animate On Scroll)** - Biblioteca de animações em scroll
- **Inter Font** - Tipografia moderna e legível
- **PostCSS** - Processador CSS
- **Autoprefixer** - Adiciona prefixos CSS automaticamente

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.jsx      # Cabeçalho com navegação
│   └── Footer.jsx      # Rodapé
├── layouts/            # Layouts da aplicação
│   └── MainLayout.jsx  # Layout principal
├── pages/              # Páginas da aplicação
│   ├── Home.jsx        # Página inicial
│   ├── Sobre.jsx       # Sobre a empresa
│   ├── Aparelhos.jsx   # Catálogo de aparelhos
│   ├── Acessorios.jsx  # Acessórios
│   ├── Servicos.jsx    # Serviços oferecidos
│   ├── Contato.jsx     # Formulário de contato
│   └── Blog.jsx        # Blog com artigos
├── App.jsx             # Componente principal com rotas
├── main.jsx            # Ponto de entrada da aplicação
└── index.css           # Estilos globais
```

## 🎯 Funcionalidades

### Páginas Implementadas
- **Home** - Página inicial com apresentação da empresa
- **Sobre** - Informações sobre a empresa, missão, visão e valores
- **Aparelhos** - Catálogo de aparelhos auditivos com preços
- **Acessórios** - Produtos complementares (pilhas, estojos, etc.)
- **Serviços** - Serviços oferecidos com preços e agendamento
- **Contato** - Formulário de contato e informações da empresa
- **Blog** - Artigos sobre saúde auditiva e cuidados (integração WordPress REST API)
- **Post Individual** - Visualização completa de posts com rota dinâmica

### Características
- ✅ Design responsivo (mobile-first)
- ✅ Navegação intuitiva com menu mobile
- ✅ Formulário de contato funcional
- ✅ Interface moderna e profissional
- ✅ Animações suaves com AOS (Animate On Scroll)
- ✅ Tipografia moderna com fonte Inter
- ✅ Gradientes suaves e espaçamentos amplos
- ✅ CTAs destacados com efeitos visuais
- ✅ Cards com hover effects e transições
- ✅ Integração WordPress REST API
- ✅ Posts dinâmicos com paginação
- ✅ Filtros por categoria
- ✅ Rotas dinâmicas para posts
- ✅ Otimizado para SEO
- ✅ Acessibilidade básica implementada

## 🛠️ Como Executar

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone <url-do-repositorio>
cd site-acustika

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev
```

### Scripts Disponíveis
```bash
npm run dev          # Inicia o servidor de desenvolvimento
npm run build        # Cria build de produção
npm run preview      # Visualiza o build de produção
npm run lint         # Executa o linter
```

## 🎨 Design System

### Cores Principais
- **Gradiente Primário**: #667eea → #764ba2
- **Gradiente Secundário**: #f093fb → #f5576c
- **Gradiente Accent**: #4facfe → #00f2fe
- **Azul Primário**: #2563eb (blue-600)
- **Cinza**: #6b7280 (gray-500)
- **Cinza Escuro**: #374151 (gray-700)

### Tipografia
- **Fonte Principal**: Inter (Google Fonts)
- **Pesos**: 400, 500, 600, 700
- **Tamanhos**: Responsivos com escala moderna
- **Espaçamento**: Otimizado para legibilidade

### Componentes
- Cards modernos com sombras suaves e hover effects
- Botões com gradientes e animações
- Formulários estilizados com focus states
- Grid responsivo com espaçamentos amplos
- Navegação mobile-friendly com backdrop blur
- Animações AOS em scroll
- CTAs destacados com gradientes e sombras

## 📱 Responsividade

O site é totalmente responsivo e funciona perfeitamente em:
- 📱 Dispositivos móveis (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Telas grandes (1280px+)

## 🚀 Deploy

Para fazer deploy do projeto:

```bash
# Crie o build de produção
npm run build

# Os arquivos estarão na pasta 'dist'
# Faça upload para seu servidor de hospedagem
```

### Hospedagem Recomendada
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 👥 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 🔗 Integração WordPress

Este projeto inclui integração completa com WordPress REST API da Acústika:

### ✅ Status: FUNCIONANDO PERFEITAMENTE
- **API WordPress**: `https://acustikaauditiva.com.br/wp-json/wp/v2`
- **Posts Disponíveis**: 7+ posts sobre aparelhos auditivos
- **Categorias**: Rexton, Oticon, Argosy, etc.

### 🚀 Funcionalidades
- **Listagem de Posts**: Busca dinâmica de posts do WordPress
- **Post Individual**: Visualização completa com rota `/blog/:slug`
- **Filtros**: Por categoria com contador de posts
- **Paginação**: Botão "Carregar Mais" para performance
- **Estados**: Loading, erro e dados vazios
- **Design**: Cards modernos com animações AOS

### 📊 Posts Identificados
- Rexton Rugged, Rexton M-Core R, Rexton M-Core iX
- Oticon Zircon, Oticon Own
- Argosy Vista V, Rexton Cros

### 🛠️ Configuração
A integração está **pronta para uso** com a API real da Acústika. Para usar com outro WordPress:
1. Edite `src/config/wordpress.js`
2. Substitua a URL da API pela do seu WordPress
3. Configure CORS se necessário

📖 **Documentação completa**: [WORDPRESS_INTEGRATION.md](./WORDPRESS_INTEGRATION.md)

## 📞 Suporte

Para suporte, entre em contato através do email: contato@acustika.com.br