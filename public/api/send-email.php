<?php
/**
 * API PHP para envio de emails via SMTP Brevo
 * Usando conexão SMTP direta
 */

error_reporting(0);
ini_set('display_errors', 0);

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'OK']);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Método não permitido. Use POST.']);
    exit();
}

$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    echo json_encode(['success' => false, 'message' => 'Dados inválidos ou não recebidos.']);
    exit();
}

$nome = isset($data['nome']) ? trim($data['nome']) : '';
$email = isset($data['email']) ? trim($data['email']) : '';
$telefone = isset($data['telefone']) ? trim($data['telefone']) : '';
$assunto = isset($data['assunto']) ? trim($data['assunto']) : '';
$mensagem = isset($data['mensagem']) ? trim($data['mensagem']) : '';

if (empty($nome) || empty($email) || empty($assunto) || empty($mensagem)) {
    echo json_encode(['success' => false, 'message' => 'Por favor, preencha todos os campos obrigatórios.']);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Email inválido.']);
    exit();
}

// Configuração SMTP Brevo - Ler do arquivo de configuração
$config = [];
$configFile = __DIR__ . '/config.php';
if (file_exists($configFile)) {
    $config = include($configFile);
}

$smtpHost = $config['SMTP_HOST'] ?? 'smtp-relay.brevo.com';
$smtpPort = $config['SMTP_PORT'] ?? 587;
$smtpUser = $config['SMTP_USER'] ?? '';
$smtpPass = $config['SMTP_PASS'] ?? '';
$toEmail = $config['EMAIL_TO'] ?? 'birasro@gmail.com';
$fromEmail = $config['EMAIL_FROM'] ?? 'contato@acustikaauditiva.com.br';
$fromName = 'Acustika - Formulário de Contato';

if (empty($smtpUser) || empty($smtpPass)) {
    echo json_encode(['success' => false, 'message' => 'Configuração SMTP não encontrada.']);
    exit();
}

$emailSubject = "Contato do Site - {$assunto}";

// Corpo do email
$boundary = md5(time());
$emailBody = "
<html>
<head><meta charset='UTF-8'></head>
<body style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;'>
    <h2 style='color: #7e4078; border-bottom: 2px solid #64a0a0; padding-bottom: 10px;'>
        Nova Mensagem do Formulário de Contato
    </h2>
    <div style='background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;'>
        <p><strong>Nome:</strong> " . htmlspecialchars($nome) . "</p>
        <p><strong>E-mail:</strong> " . htmlspecialchars($email) . "</p>
        " . ($telefone ? "<p><strong>Telefone:</strong> " . htmlspecialchars($telefone) . "</p>" : "") . "
        <p><strong>Assunto:</strong> " . htmlspecialchars($assunto) . "</p>
    </div>
    <div style='margin: 20px 0;'>
        <h3 style='color: #64a0a0;'>Mensagem:</h3>
        <p style='line-height: 1.6; color: #333;'>" . nl2br(htmlspecialchars($mensagem)) . "</p>
    </div>
    <div style='margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;'>
        <p>Este email foi enviado automaticamente pelo formulário de contato do site Acustika.</p>
    </div>
</body>
</html>
";

/**
 * Função para enviar email via SMTP
 */
function sendSmtpEmail($host, $port, $user, $pass, $from, $fromName, $to, $subject, $body, $replyTo) {
    $socket = @fsockopen($host, $port, $errno, $errstr, 30);
    
    if (!$socket) {
        return ['success' => false, 'error' => "Não foi possível conectar ao servidor SMTP: $errstr ($errno)"];
    }
    
    // Ler resposta inicial
    $response = fgets($socket, 515);
    if (substr($response, 0, 3) != '220') {
        fclose($socket);
        return ['success' => false, 'error' => "Erro na conexão SMTP: $response"];
    }
    
    // EHLO
    fputs($socket, "EHLO " . gethostname() . "\r\n");
    $response = '';
    while ($line = fgets($socket, 515)) {
        $response .= $line;
        if (substr($line, 3, 1) == ' ') break;
    }
    
    // STARTTLS
    fputs($socket, "STARTTLS\r\n");
    $response = fgets($socket, 515);
    if (substr($response, 0, 3) != '220') {
        fclose($socket);
        return ['success' => false, 'error' => "Erro STARTTLS: $response"];
    }
    
    // Upgrade para TLS
    stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT);
    
    // EHLO novamente após TLS
    fputs($socket, "EHLO " . gethostname() . "\r\n");
    $response = '';
    while ($line = fgets($socket, 515)) {
        $response .= $line;
        if (substr($line, 3, 1) == ' ') break;
    }
    
    // AUTH LOGIN
    fputs($socket, "AUTH LOGIN\r\n");
    $response = fgets($socket, 515);
    if (substr($response, 0, 3) != '334') {
        fclose($socket);
        return ['success' => false, 'error' => "Erro AUTH: $response"];
    }
    
    // Enviar usuário
    fputs($socket, base64_encode($user) . "\r\n");
    $response = fgets($socket, 515);
    if (substr($response, 0, 3) != '334') {
        fclose($socket);
        return ['success' => false, 'error' => "Erro usuário: $response"];
    }
    
    // Enviar senha
    fputs($socket, base64_encode($pass) . "\r\n");
    $response = fgets($socket, 515);
    if (substr($response, 0, 3) != '235') {
        fclose($socket);
        return ['success' => false, 'error' => "Erro autenticação: $response"];
    }
    
    // MAIL FROM
    fputs($socket, "MAIL FROM:<{$from}>\r\n");
    $response = fgets($socket, 515);
    if (substr($response, 0, 3) != '250') {
        fclose($socket);
        return ['success' => false, 'error' => "Erro MAIL FROM: $response"];
    }
    
    // RCPT TO
    fputs($socket, "RCPT TO:<{$to}>\r\n");
    $response = fgets($socket, 515);
    if (substr($response, 0, 3) != '250') {
        fclose($socket);
        return ['success' => false, 'error' => "Erro RCPT TO: $response"];
    }
    
    // DATA
    fputs($socket, "DATA\r\n");
    $response = fgets($socket, 515);
    if (substr($response, 0, 3) != '354') {
        fclose($socket);
        return ['success' => false, 'error' => "Erro DATA: $response"];
    }
    
    // Headers e corpo do email
    $headers = "From: {$fromName} <{$from}>\r\n";
    $headers .= "To: {$to}\r\n";
    $headers .= "Reply-To: {$replyTo}\r\n";
    $headers .= "Subject: =?UTF-8?B?" . base64_encode($subject) . "?=\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "Content-Transfer-Encoding: base64\r\n";
    $headers .= "\r\n";
    $headers .= chunk_split(base64_encode($body));
    $headers .= "\r\n.\r\n";
    
    fputs($socket, $headers);
    $response = fgets($socket, 515);
    if (substr($response, 0, 3) != '250') {
        fclose($socket);
        return ['success' => false, 'error' => "Erro ao enviar: $response"];
    }
    
    // QUIT
    fputs($socket, "QUIT\r\n");
    fclose($socket);
    
    return ['success' => true];
}

// Tentar enviar
$result = sendSmtpEmail(
    $smtpHost, 
    $smtpPort, 
    $smtpUser, 
    $smtpPass, 
    $fromEmail, 
    $fromName, 
    $toEmail, 
    $emailSubject, 
    $emailBody, 
    $email
);

if ($result['success']) {
    echo json_encode([
        'success' => true,
        'message' => 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
    ]);
} else {
    echo json_encode([
        'success' => false,
        'message' => 'Erro ao enviar mensagem. Por favor, tente novamente mais tarde.',
        'debug' => $result['error'] ?? 'Erro desconhecido'
    ]);
}
