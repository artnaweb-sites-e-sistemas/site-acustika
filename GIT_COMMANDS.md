# 🚀 Comandos Git para Inicializar e Conectar ao GitHub

## ✅ Comandos Já Executados

```bash
# 1. Inicializar repositório Git
git init

# 2. Adicionar todos os arquivos
git add .

# 3. Primeiro commit
git commit -m "feat: Site institucional Acústika com integração WordPress REST API

- ✅ Projeto multipáginas com Vite + React + TailwindCSS
- ✅ 7 páginas: Home, Sobre, Aparelhos, Acessórios, Serviços, Contato, Blog
- ✅ Design moderno com animações AOS e tipografia Inter
- ✅ Integração WordPress REST API funcionando
- ✅ Posts dinâmicos com paginação e filtros
- ✅ Rotas dinâmicas para posts individuais
- ✅ Responsivo e otimizado para SEO
- ✅ Documentação completa incluída"
```

## 🔗 Comandos para Conectar ao GitHub

### Opção 1: Criar Repositório no GitHub Primeiro

1. **Acesse**: https://github.com/new
2. **Nome do repositório**: `site-acustika` (ou o nome que preferir)
3. **Descrição**: `Site institucional Acústika com integração WordPress REST API`
4. **Visibilidade**: Public ou Private (sua escolha)
5. **NÃO marque** "Add a README file" (já temos um)
6. **Clique em "Create repository"**

Depois execute:

```bash
# 4. Adicionar remote origin (substitua SEU_USUARIO pelo seu username do GitHub)
git remote add origin https://github.com/SEU_USUARIO/site-acustika.git

# 5. Renomear branch principal para main (padrão atual do GitHub)
git branch -M main

# 6. Fazer push para o GitHub
git push -u origin main
```

### Opção 2: Usar GitHub CLI (se tiver instalado)

```bash
# 4. Criar repositório e conectar automaticamente
gh repo create site-acustika --public --description "Site institucional Acústika com integração WordPress REST API"

# 5. Renomear branch para main
git branch -M main

# 6. Fazer push
git push -u origin main
```

## 📋 Comandos Completos (Copia e Cola)

### Para GitHub via HTTPS:
```bash
git remote add origin https://github.com/SEU_USUARIO/site-acustika.git
git branch -M main
git push -u origin main
```

### Para GitHub via SSH (se configurado):
```bash
git remote add origin git@github.com:SEU_USUARIO/site-acustika.git
git branch -M main
git push -u origin main
```

## 🔧 Comandos Úteis para o Futuro

### Atualizar o repositório:
```bash
# Adicionar mudanças
git add .

# Commit com mensagem
git commit -m "feat: descrição da mudança"

# Push para o GitHub
git push
```

### Criar e trabalhar com branches:
```bash
# Criar nova branch
git checkout -b feature/nova-funcionalidade

# Voltar para main
git checkout main

# Fazer merge
git merge feature/nova-funcionalidade
```

### Ver status do repositório:
```bash
# Ver arquivos modificados
git status

# Ver histórico de commits
git log --oneline

# Ver branches
git branch
```

## 📝 Informações do Projeto

- **Nome**: Site Acústika
- **Tecnologias**: Vite + React + TailwindCSS + WordPress REST API
- **Status**: ✅ Completo e funcionando
- **Integração WordPress**: ✅ Funcionando com API real
- **Documentação**: README.md + WORDPRESS_INTEGRATION.md

## 🎯 Próximos Passos

1. **Execute os comandos** para conectar ao GitHub
2. **Configure GitHub Pages** (se quiser hospedar)
3. **Configure Actions** para deploy automático
4. **Adicione colaboradores** se necessário

---

**⚠️ Lembre-se**: Substitua `SEU_USUARIO` pelo seu username real do GitHub!
