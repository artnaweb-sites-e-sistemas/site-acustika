import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Configuração do transporter SMTP
const transporter = nodemailer.createTransport({
  host: 'mail.acustikaauditiva.com.br',
  port: 465,
  secure: true, // true para porta 465, false para outras portas
  auth: {
    user: 'contato@acustikaauditiva.com.br',
    pass: 'Bira1402@'
  }
});

// Verificar conexão SMTP
transporter.verify((error, success) => {
  if (error) {
    console.log('Erro na configuração SMTP:', error);
  } else {
    console.log('Servidor SMTP pronto para enviar emails');
  }
});

// Rota para enviar email
app.post('/api/send-email', async (req, res) => {
  const timestamp = new Date().toISOString();
  console.log('\n========== NOVA REQUISIÇÃO DE EMAIL ==========');
  console.log(`[${timestamp}] Recebida requisição POST /api/send-email`);
  console.log('Headers:', JSON.stringify(req.headers, null, 2));
  console.log('Body recebido:', JSON.stringify(req.body, null, 2));
  
  try {
    const { nome, email, telefone, assunto, mensagem } = req.body;

    console.log('\n--- Validação dos dados ---');
    console.log(`Nome: ${nome || '(vazio)'}`);
    console.log(`Email: ${email || '(vazio)'}`);
    console.log(`Telefone: ${telefone || '(não informado)'}`);
    console.log(`Assunto: ${assunto || '(vazio)'}`);
    console.log(`Mensagem: ${mensagem ? mensagem.substring(0, 50) + '...' : '(vazio)'}`);

    // Validação básica
    if (!nome || !email || !assunto || !mensagem) {
      console.log('❌ VALIDAÇÃO FALHOU: Campos obrigatórios não preenchidos');
      return res.status(400).json({ 
        success: false, 
        message: 'Por favor, preencha todos os campos obrigatórios.' 
      });
    }
    
    console.log('✅ Validação passou');

    // Configuração do email
    console.log('\n--- Configurando email ---');
    const mailOptions = {
      from: 'contato@acustikaauditiva.com.br',
      to: 'birasro@gmail.com',
      replyTo: email,
      subject: `Contato do Site - ${assunto}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7e4078; border-bottom: 2px solid #64a0a0; padding-bottom: 10px;">
            Nova Mensagem do Formulário de Contato
          </h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Nome:</strong> ${nome}</p>
            <p style="margin: 10px 0;"><strong>E-mail:</strong> ${email}</p>
            ${telefone ? `<p style="margin: 10px 0;"><strong>Telefone:</strong> ${telefone}</p>` : ''}
            <p style="margin: 10px 0;"><strong>Assunto:</strong> ${assunto}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #64a0a0; margin-bottom: 10px;">Mensagem:</h3>
            <p style="line-height: 1.6; color: #333;">${mensagem.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>Este email foi enviado automaticamente pelo formulário de contato do site Acustika.</p>
          </div>
        </div>
      `,
      text: `
Nova Mensagem do Formulário de Contato

Nome: ${nome}
E-mail: ${email}
${telefone ? `Telefone: ${telefone}` : ''}
Assunto: ${assunto}

Mensagem:
${mensagem}

---
Este email foi enviado automaticamente pelo formulário de contato do site Acustika.
      `
    };

    // Enviar email
    console.log('\n--- Tentando enviar email via SMTP ---');
    console.log(`SMTP Host: mail.acustikaauditiva.com.br`);
    console.log(`SMTP Port: 465`);
    console.log(`SMTP User: contato@acustikaauditiva.com.br`);
    console.log(`From: ${mailOptions.from}`);
    console.log(`To: birasro@gmail.com`);
    console.log(`Subject: ${mailOptions.subject}`);
    
    const startTime = Date.now();
    const info = await transporter.sendMail(mailOptions);
    const duration = Date.now() - startTime;
    
    console.log('\n✅ EMAIL ENVIADO COM SUCESSO!');
    console.log(`Message ID: ${info.messageId}`);
    console.log(`Response: ${info.response}`);
    console.log(`Tempo de envio: ${duration}ms`);
    console.log('==========================================\n');
    
    res.json({ 
      success: true, 
      message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
      messageId: info.messageId,
      timestamp: timestamp
    });
    
  } catch (error) {
    console.error('\n❌ ERRO AO ENVIAR EMAIL:');
    console.error('Tipo do erro:', error.constructor.name);
    console.error('Mensagem:', error.message);
    console.error('Stack:', error.stack);
    console.error('Código:', error.code);
    console.error('Comando:', error.command);
    if (error.response) {
      console.error('Response:', error.response);
    }
    console.error('==========================================\n');
    
    res.status(500).json({ 
      success: false, 
      message: 'Erro ao enviar mensagem. Por favor, tente novamente mais tarde.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Rota de teste
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Servidor funcionando' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Acesse http://localhost:${PORT}/api/health para testar`);
});

