<?php
/**
 * API PHP para envio de emails
 * Compatível com hospedagem compartilhada
 */

// Configurar error reporting para não mostrar erros no output
error_reporting(0);
ini_set('display_errors', 0);

// Headers
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Permitir requisições OPTIONS (CORS preflight)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'OK']);
    exit();
}

// Apenas aceitar requisições POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(200);
    echo json_encode([
        'success' => false,
        'message' => 'Método não permitido. Use POST.'
    ]);
    exit();
}

// Obter dados do POST
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Validação dos dados
if (!$data) {
    echo json_encode([
        'success' => false,
        'message' => 'Dados inválidos ou não recebidos.'
    ]);
    exit();
}

$nome = isset($data['nome']) ? trim($data['nome']) : '';
$email = isset($data['email']) ? trim($data['email']) : '';
$telefone = isset($data['telefone']) ? trim($data['telefone']) : '';
$assunto = isset($data['assunto']) ? trim($data['assunto']) : '';
$mensagem = isset($data['mensagem']) ? trim($data['mensagem']) : '';

// Validar campos obrigatórios
if (empty($nome) || empty($email) || empty($assunto) || empty($mensagem)) {
    echo json_encode([
        'success' => false,
        'message' => 'Por favor, preencha todos os campos obrigatórios.'
    ]);
    exit();
}

// Validar email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode([
        'success' => false,
        'message' => 'Email inválido.'
    ]);
    exit();
}

// Configuração
$toEmail = 'acustikaauditiva@gmail.com';
$fromEmail = 'contato@acustikaauditiva.com.br';
$emailSubject = "Contato do Site - {$assunto}";

// Preparar corpo do email HTML
$emailBody = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
</head>
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
        <h3 style='color: #64a0a0; margin-bottom: 10px;'>Mensagem:</h3>
        <p style='line-height: 1.6; color: #333;'>" . nl2br(htmlspecialchars($mensagem)) . "</p>
    </div>
    
    <div style='margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;'>
        <p>Este email foi enviado automaticamente pelo formulário de contato do site Acustika.</p>
    </div>
</body>
</html>
";

// Headers do email
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: {$fromEmail}\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

// Tentar enviar email
$mailSent = @mail($toEmail, $emailSubject, $emailBody, $headers);

if ($mailSent) {
    echo json_encode([
        'success' => true,
        'message' => 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
    ]);
} else {
    // Tentar método alternativo com menos headers
    $simpleHeaders = "From: {$fromEmail}\r\nReply-To: {$email}";
    $simpleBody = "Nome: {$nome}\nEmail: {$email}\nTelefone: {$telefone}\nAssunto: {$assunto}\n\nMensagem:\n{$mensagem}";
    
    $mailSent2 = @mail($toEmail, $emailSubject, $simpleBody, $simpleHeaders);
    
    if ($mailSent2) {
        echo json_encode([
            'success' => true,
            'message' => 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
        ]);
    } else {
        echo json_encode([
            'success' => false,
            'message' => 'Erro ao enviar mensagem. Por favor, entre em contato pelo WhatsApp ou telefone.'
        ]);
    }
}
