# 📧 Configuração do Formulário de Contato - SMTP

## ✅ Configuração Realizada

O formulário de contato foi configurado para enviar emails via SMTP usando as credenciais fornecidas.

## 🏗️ Duas Opções de Implementação

### 1. **Node.js/Express** (Desenvolvimento)
- Arquivo: `server.js`
- Usa Express + Nodemailer
- Ideal para desenvolvimento local
- Requer servidor Node.js rodando

### 2. **PHP** (Hospedagem Compartilhada) ⭐ RECOMENDADO PARA PRODUÇÃO
- Arquivo: `api/send-email.php`
- Funciona em hospedagem compartilhada
- Não requer servidor Node.js
- Usa função `mail()` nativa ou PHPMailer
- **Esta é a solução que funcionará no seu deploy!**

### Configurações SMTP:
- **Host:** mail.acustikaauditiva.com.br
- **Porta:** 465 (SSL)
- **Usuário:** contato@acustikaauditiva.com.br
- **Senha:** Bira1402@
- **Destinatário:** acustikaauditiva@gmail.com

## 🚀 Como Usar

### 1. Desenvolvimento Local

Para rodar o projeto completo (frontend + backend Node.js):

```bash
npm run dev:all
```

Isso iniciará:
- Frontend React na porta 5173 (Vite)
- Backend Express na porta 3001

**Apenas o frontend:**
```bash
npm run dev
```

**Apenas o backend Node.js:**
```bash
npm run server
```

### 2. Produção - Hospedagem Compartilhada ⭐

**Para hospedagem compartilhada (cPanel, etc.):**

1. **Upload do arquivo PHP:**
   ```bash
   # Faça upload do arquivo para:
   public_html/api/send-email.php
   ```

2. **Configurar permissões:**
   ```bash
   chmod 755 api/
   chmod 644 api/send-email.php
   ```

3. **Build do frontend:**
   ```bash
   npm run build
   ```

4. **Upload da pasta `dist/`:**
   - Faça upload de todo o conteúdo de `dist/` para `public_html/`

5. **O formulário detectará automaticamente** que está em produção e usará o endpoint PHP!

### 3. Produção - Servidor Node.js (Alternativa)

Se você tiver um servidor Node.js disponível:

1. **Configurar variável de ambiente:**
   - Crie um arquivo `.env` na raiz do projeto
   - Adicione: `VITE_API_URL=https://seu-dominio.com/api`

2. **Deploy do backend:**
   - O arquivo `server.js` precisa ser hospedado em um servidor Node.js
   - Configure a porta (padrão: 3001)
   - Certifique-se de que o servidor tenha acesso ao SMTP

3. **Build do frontend:**
   ```bash
   npm run build
   ```

## 📝 Estrutura

- **`server.js`** - Servidor backend Express com configuração SMTP
- **`src/pages/Contato.jsx`** - Formulário de contato atualizado
- **`package.json`** - Dependências adicionadas

## 🔧 Funcionalidades

✅ Envio de emails via SMTP  
✅ Validação de campos obrigatórios  
✅ Feedback visual (sucesso/erro)  
✅ Estado de loading durante envio  
✅ Limpeza automática do formulário após sucesso  
✅ Formatação HTML do email  

## 📧 Formato do Email

O email enviado contém:
- Nome do remetente
- E-mail do remetente
- Telefone (se fornecido)
- Assunto
- Mensagem completa

O email é formatado em HTML com estilo da marca Acustika.

## ⚠️ Notas Importantes

1. **Segurança:** As credenciais SMTP estão hardcoded no `server.js`. Para produção, considere usar variáveis de ambiente.

2. **CORS:** O servidor está configurado para aceitar requisições de qualquer origem em desenvolvimento. Para produção, ajuste as configurações de CORS.

3. **Teste:** Você pode testar o servidor acessando:
   ```
   http://localhost:3001/api/health
   ```

## 🐛 Debug e Logs

### Logs no Console do Navegador
Abra o **Console do navegador** (F12) para ver logs detalhados:
- ✅ Dados do formulário enviados
- ✅ URL do endpoint usado
- ✅ Status da requisição
- ✅ Resposta do servidor
- ✅ Erros (se houver)

### Logs no Servidor

**Node.js (server.js):**
- Logs aparecem no terminal onde o servidor está rodando

**PHP (send-email.php):**
- Logs salvos em: `api/email-debug.log`
- Ver logs: `tail -f api/email-debug.log`

## 🐛 Troubleshooting

**Erro ao conectar SMTP:**
- Verifique se as credenciais estão corretas
- Confirme que a porta 465 está acessível
- Verifique se o firewall não está bloqueando
- **Verifique os logs no console do navegador (F12)**

**Erro CORS:**
- Certifique-se de que o backend está rodando (desenvolvimento)
- Verifique a URL da API no frontend
- Verifique headers CORS no arquivo PHP

**Email não chega:**
- Verifique a caixa de spam
- Confirme que o email de destino está correto
- Verifique os logs no console do navegador
- Verifique `api/email-debug.log` (PHP)
- Verifique logs do servidor Node.js (se usando)

**Formulário não envia:**
1. Abra o Console do navegador (F12)
2. Tente enviar o formulário
3. Veja os logs detalhados
4. Verifique qual endpoint está sendo usado
5. Verifique se há erros de rede

## 📚 Documentação Adicional

- **Deploy em Hospedagem Compartilhada:** Veja `DEPLOY_HOSPEDAGEM_COMPARTILHADA.md`
- **Configuração detalhada:** Este arquivo

