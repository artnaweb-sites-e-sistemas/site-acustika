# 📧 Configuração do Formulário de Contato - SMTP

## ✅ Configuração Realizada

O formulário de contato foi configurado para enviar emails via SMTP usando as credenciais fornecidas.

### Configurações SMTP:
- **Host:** mail.acustikaauditiva.com.br
- **Porta:** 465 (SSL)
- **Usuário:** contato@acustikaauditiva.com.br
- **Senha:** Bira1402@
- **Destinatário:** acustikaauditiva@gmail.com

## 🚀 Como Usar

### 1. Desenvolvimento Local

Para rodar o projeto completo (frontend + backend):

```bash
npm run dev:all
```

Isso iniciará:
- Frontend React na porta 5173 (Vite)
- Backend Express na porta 3001

### 2. Rodar Separadamente

**Apenas o frontend:**
```bash
npm run dev
```

**Apenas o backend:**
```bash
npm run server
```

### 3. Produção

Para produção, você precisará:

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

## 🐛 Troubleshooting

**Erro ao conectar SMTP:**
- Verifique se as credenciais estão corretas
- Confirme que a porta 465 está acessível
- Verifique se o firewall não está bloqueando

**Erro CORS:**
- Certifique-se de que o backend está rodando
- Verifique a URL da API no frontend

**Email não chega:**
- Verifique a caixa de spam
- Confirme que o email de destino está correto
- Verifique os logs do servidor para erros

