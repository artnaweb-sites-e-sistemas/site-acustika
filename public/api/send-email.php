<?php
/**
 * API PHP para envio de emails via SMTP Brevo
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

// Configuração SMTP Brevo (codificado para segurança)
$smtpHost = 'smtp-relay.brevo.com';
$smtpPort = 587;
$smtpUser = base64_decode('YTA4ZmIyMDAxQHNtdHAtYnJldm8uY29t');
$smtpPass = base64_decode('eHNtdHBzaWItM2RiOWFjOGE5NTNiN2U4ZWM4Mjc4MDg0NmIyODQ2MzFkZWJjZTljZjg0OGUyMDU2MWMzYjMwNWM3Y2JlMTAyNS14SnNmTU9JYll1anpDYmli');
$toEmail = base64_decode('YWN1c3Rpa2FhdWRpdGl2YUBnbWFpbC5jb20=');
$fromEmail = 'contato@acustikaauditiva.com.br';
$fromName = 'Acustika - Formulario de Contato';

$emailSubject = "Contato do Site - {$assunto}";

// Corpo do email
$emailBody = "
<html>
<head><meta charset='UTF-8'></head>
<body style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;'>
    <h2 style='color: #7e4078; border-bottom: 2px solid #64a0a0; padding-bottom: 10px;'>
        Nova Mensagem do Formulario de Contato
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
        <p>Este email foi enviado automaticamente pelo formulario de contato do site Acustika.</p>
    </div>
</body>
</html>
";

/**
 * Enviar email via SMTP
 */
function sendSmtpEmail($host, $port, $user, $pass, $from, $fromName, $to, $subject, $body, $replyTo) {
    $socket = @fsockopen($host, $port, $errno, $errstr, 30);
    
    if (!$socket) {
        return ['success' => false, 'error' => "Conexao SMTP falhou: $errstr"];
    }
    
    $response = fgets($socket, 515);
    if (substr($response, 0, 3) != '220') {
        fclose($socket);
        return ['success' => false, 'error' => "Erro SMTP: $response"];
    }
    
    // EHLO
    fputs($socket, "EHLO localhost\r\n");
    while ($line = fgets($socket, 515)) {
        if (substr($line, 3, 1) == ' ') break;
    }
    
    // STARTTLS
    fputs($socket, "STARTTLS\r\n");
    $response = fgets($socket, 515);
    if (substr($response, 0, 3) != '220') {
        fclose($socket);
        return ['success' => false, 'error' => "STARTTLS falhou: $response"];
    }
    
    stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT);
    
    // EHLO novamente
    fputs($socket, "EHLO localhost\r\n");
    while ($line = fgets($socket, 515)) {
        if (substr($line, 3, 1) == ' ') break;
    }
    
    // AUTH LOGIN
    fputs($socket, "AUTH LOGIN\r\n");
    $response = fgets($socket, 515);
    if (substr($response, 0, 3) != '334') {
        fclose($socket);
        return ['success' => false, 'error' => "AUTH falhou: $response"];
    }
    
    fputs($socket, base64_encode($user) . "\r\n");
    $response = fgets($socket, 515);
    if (substr($response, 0, 3) != '334') {
        fclose($socket);
        return ['success' => false, 'error' => "Usuario invalido"];
    }
    
    fputs($socket, base64_encode($pass) . "\r\n");
    $response = fgets($socket, 515);
    if (substr($response, 0, 3) != '235') {
        fclose($socket);
        return ['success' => false, 'error' => "Senha invalida"];
    }
    
    // MAIL FROM
    fputs($socket, "MAIL FROM:<{$from}>\r\n");
    $response = fgets($socket, 515);
    if (substr($response, 0, 3) != '250') {
        fclose($socket);
        return ['success' => false, 'error' => "MAIL FROM falhou"];
    }
    
    // RCPT TO
    fputs($socket, "RCPT TO:<{$to}>\r\n");
    $response = fgets($socket, 515);
    if (substr($response, 0, 3) != '250') {
        fclose($socket);
        return ['success' => false, 'error' => "RCPT TO falhou"];
    }
    
    // DATA
    fputs($socket, "DATA\r\n");
    $response = fgets($socket, 515);
    if (substr($response, 0, 3) != '354') {
        fclose($socket);
        return ['success' => false, 'error' => "DATA falhou"];
    }
    
    // Email content
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
        return ['success' => false, 'error' => "Envio falhou: $response"];
    }
    
    fputs($socket, "QUIT\r\n");
    fclose($socket);
    
    return ['success' => true];
}

$result = sendSmtpEmail(
    $smtpHost, $smtpPort, $smtpUser, $smtpPass,
    $fromEmail, $fromName, $toEmail,
    $emailSubject, $emailBody, $email
);

if ($result['success']) {
    echo json_encode([
        'success' => true,
        'message' => 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
    ]);
} else {
    echo json_encode([
        'success' => false,
        'message' => 'Erro ao enviar mensagem. Tente novamente ou entre em contato pelo WhatsApp.',
        'debug' => $result['error'] ?? 'Erro desconhecido'
    ]);
}
