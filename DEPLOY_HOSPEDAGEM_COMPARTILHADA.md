# 🚀 Deploy em Hospedagem Compartilhada - Formulário de Contato

## ⚠️ Importante sobre Hospedagem Compartilhada

Em hospedagem compartilhada, **geralmente não é possível rodar um servidor Node.js** como o Express. Por isso, criamos uma alternativa usando **PHP** que funciona perfeitamente em hospedagem compartilhada.

## 📁 Arquivos Necessários

### 1. Arquivo PHP (`api/send-email.php`)
Este arquivo já foi criado e está pronto para uso. Ele:
- ✅ Funciona em hospedagem compartilhada
- ✅ Usa SMTP para envio de emails
- ✅ Tem logs detalhados de debug
- ✅ Valida todos os campos
- ✅ Formata emails em HTML

### 2. Upload dos Arquivos

Faça upload do arquivo `api/send-email.php` para seu servidor na pasta:
```
/public_html/api/send-email.php
```

Ou se sua estrutura for diferente:
```
/seu-dominio/api/send-email.php
```

## 🔧 Configuração

### 1. Verificar Permissões
Certifique-se de que a pasta `api` tem permissão de escrita (para logs):
```bash
chmod 755 api/
chmod 644 api/send-email.php
```

### 2. Configurar CORS (se necessário)
O arquivo PHP já está configurado para aceitar requisições de qualquer origem. Se precisar restringir, edite a linha:
```php
header('Access-Control-Allow-Origin: *');
```

### 3. Verificar SMTP
As credenciais SMTP já estão configuradas no arquivo PHP:
- Host: `mail.acustikaauditiva.com.br`
- Porta: `465`
- Usuário: `contato@acustikaauditiva.com.br`
- Senha: `Bira1402@`

## 📧 Como Funciona

1. **Frontend** envia dados do formulário para `/api/send-email.php`
2. **PHP** valida os dados
3. **PHP** envia email via SMTP usando `mail()` nativo ou PHPMailer (se disponível)
4. **PHP** retorna resposta JSON com sucesso/erro
5. **Frontend** exibe feedback ao usuário

## 🐛 Debug e Logs

### Logs no Console do Navegador
Todos os logs aparecem no **Console do navegador** (F12):
- ✅ Dados recebidos
- ✅ Validações
- ✅ Configuração SMTP
- ✅ Status do envio
- ✅ Erros (se houver)

### Logs no Servidor
Os logs também são salvos em:
```
api/email-debug.log
```

Para ver os logs:
```bash
tail -f api/email-debug.log
```

## 🧪 Testar o Endpoint PHP

Você pode testar diretamente via curl:

```bash
curl -X POST https://seu-dominio.com/api/send-email.php \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Teste",
    "email": "teste@example.com",
    "telefone": "(11) 99999-9999",
    "assunto": "Teste",
    "mensagem": "Esta é uma mensagem de teste"
  }'
```

## 🔄 Alternativa: Usar PHPMailer (Recomendado)

Para maior confiabilidade, você pode instalar PHPMailer:

1. **Via Composer:**
```bash
composer require phpmailer/phpmailer
```

2. O arquivo PHP já detecta automaticamente se PHPMailer está disponível e o usa.

## 📝 Variáveis de Ambiente (Opcional)

Se quiser usar variáveis de ambiente, crie um arquivo `.htaccess` na pasta `api/`:

```apache
<Files "send-email.php">
    SetEnv SMTP_HOST mail.acustikaauditiva.com.br
    SetEnv SMTP_PORT 465
    SetEnv SMTP_USER contato@acustikaauditiva.com.br
    SetEnv SMTP_PASS sua_senha_aqui
    SetEnv SMTP_TO acustikaauditiva@gmail.com
</Files>
```

E atualize o PHP para ler essas variáveis:
```php
$smtpHost = getenv('SMTP_HOST') ?: 'mail.acustikaauditiva.com.br';
```

## ✅ Checklist de Deploy

- [ ] Upload do arquivo `api/send-email.php` para o servidor
- [ ] Verificar permissões da pasta `api/`
- [ ] Testar endpoint via curl ou Postman
- [ ] Verificar logs no console do navegador
- [ ] Verificar logs no arquivo `email-debug.log`
- [ ] Testar envio real do formulário
- [ ] Verificar se email chegou na caixa de entrada

## 🚨 Troubleshooting

### Email não chega
1. Verifique os logs no console do navegador
2. Verifique `api/email-debug.log`
3. Verifique se as credenciais SMTP estão corretas
4. Verifique se a porta 465 está aberta no servidor
5. Verifique spam/lixo eletrônico

### Erro CORS
- Verifique se o header `Access-Control-Allow-Origin` está correto
- Verifique se o servidor permite requisições POST

### Erro 500
- Verifique permissões do arquivo PHP
- Verifique logs de erro do PHP
- Verifique se a função `mail()` está habilitada

### Erro de conexão SMTP
- Verifique se o host SMTP está correto
- Verifique se a porta está acessível
- Verifique credenciais

## 📞 Suporte

Se tiver problemas, verifique:
1. Console do navegador (F12)
2. Arquivo `api/email-debug.log`
3. Logs de erro do PHP no servidor


