# Configuração do Brevo (Sendinblue)

## Instruções para Configuração

### 1. Criar arquivo de configuração (Produção - PHP)

No servidor de produção, crie o arquivo `config.php` na pasta `public/api/` com o seguinte conteúdo:

```php
<?php
return [
    'BREVO_API_KEY' => 'sua-api-key-do-brevo',
    'EMAIL_TO' => 'seu-email@exemplo.com',
    'EMAIL_FROM' => 'contato@acustikaauditiva.com.br'
];
```

**Importante**: Substitua `sua-api-key-do-brevo` pela sua API Key real do Brevo.

### 2. Para desenvolvimento local (Node.js)

Crie um arquivo `.env` na raiz do projeto com:

```
BREVO_SMTP_HOST=smtp-relay.brevo.com
BREVO_SMTP_PORT=587
BREVO_SMTP_USER=seu-usuario@smtp-brevo.com
BREVO_SMTP_PASS=sua-api-key-do-brevo
EMAIL_FROM=contato@acustikaauditiva.com.br
EMAIL_TO=seu-email@exemplo.com
PORT=3001
```

### 3. Credenciais do Brevo

Para obter suas credenciais:
1. Acesse https://app.brevo.com/
2. Vá em **SMTP & API** > **SMTP**
3. Copie o servidor SMTP, porta e suas credenciais

### Importante

- O arquivo `config.php` NÃO deve ser commitado no Git (já está no .gitignore)
- O arquivo `.env` também NÃO deve ser commitado (já está no .gitignore)
- Use o arquivo `config.php.example` como referência
- **NUNCA** compartilhe suas credenciais do Brevo publicamente
