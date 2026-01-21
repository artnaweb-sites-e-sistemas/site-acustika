<?php
/**
 * API PHP para envio de emails via SMTP
 * Compatível com hospedagem compartilhada
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Permitir requisições OPTIONS (CORS preflight)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Apenas aceitar requisições POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Método não permitido'
    ]);
    exit();
}

// Função para log de debug
function debugLog($message, $data = null) {
    $timestamp = date('Y-m-d H:i:s');
    $logMessage = "[{$timestamp}] {$message}";
    if ($data !== null) {
        $logMessage .= "\n" . print_r($data, true);
    }
    $logMessage .= "\n" . str_repeat('=', 50) . "\n";
    
    // Log no console do navegador (via resposta) e no arquivo
    error_log($logMessage, 3, __DIR__ . '/email-debug.log');
    return $logMessage;
}

$debugMessages = [];
$debugMessages[] = debugLog('========== NOVA REQUISIÇÃO DE EMAIL ==========');
$debugMessages[] = debugLog('Método', $_SERVER['REQUEST_METHOD']);
$debugMessages[] = debugLog('Headers recebidos', getallheaders());

// Obter dados do POST
$input = file_get_contents('php://input');
$data = json_decode($input, true);

$debugMessages[] = debugLog('Dados recebidos (raw)', $input);
$debugMessages[] = debugLog('Dados recebidos (decoded)', $data);

// Validação
if (!$data) {
    $debugMessages[] = debugLog('ERRO: Dados JSON inválidos');
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Dados inválidos',
        'debug' => implode("\n", $debugMessages)
    ]);
    exit();
}

$nome = isset($data['nome']) ? trim($data['nome']) : '';
$email = isset($data['email']) ? trim($data['email']) : '';
$telefone = isset($data['telefone']) ? trim($data['telefone']) : '';
$assunto = isset($data['assunto']) ? trim($data['assunto']) : '';
$mensagem = isset($data['mensagem']) ? trim($data['mensagem']) : '';

$debugMessages[] = debugLog('--- Validação dos dados ---', [
    'nome' => $nome ?: '(vazio)',
    'email' => $email ?: '(vazio)',
    'telefone' => $telefone ?: '(não informado)',
    'assunto' => $assunto ?: '(vazio)',
    'mensagem' => $mensagem ? substr($mensagem, 0, 50) . '...' : '(vazio)'
]);

// Validar campos obrigatórios
if (empty($nome) || empty($email) || empty($assunto) || empty($mensagem)) {
    $debugMessages[] = debugLog('❌ VALIDAÇÃO FALHOU: Campos obrigatórios não preenchidos');
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Por favor, preencha todos os campos obrigatórios.',
        'debug' => implode("\n", $debugMessages)
    ]);
    exit();
}

// Validar email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $debugMessages[] = debugLog('❌ VALIDAÇÃO FALHOU: Email inválido');
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Email inválido.',
        'debug' => implode("\n", $debugMessages)
    ]);
    exit();
}

$debugMessages[] = debugLog('✅ Validação passou');

// Configuração SMTP
$smtpHost = 'mail.acustikaauditiva.com.br';
$smtpPort = 465;
$smtpUser = 'contato@acustikaauditiva.com.br';
$smtpPass = 'Bira1402@';
$smtpFrom = 'contato@acustikaauditiva.com.br';
$smtpTo = 'acustikaauditiva@gmail.com';

$debugMessages[] = debugLog('--- Configuração SMTP ---', [
    'host' => $smtpHost,
    'port' => $smtpPort,
    'user' => $smtpUser,
    'from' => $smtpFrom,
    'to' => $smtpTo
]);

// Preparar email
$emailSubject = "Contato do Site - {$assunto}";
$emailBody = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <style>
        body { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; }
        h2 { color: #7e4078; border-bottom: 2px solid #64a0a0; padding-bottom: 10px; }
        .info-box { background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .message-box { margin: 20px 0; }
        .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px; }
    </style>
</head>
<body>
    <h2>Nova Mensagem do Formulário de Contato</h2>
    
    <div class='info-box'>
        <p><strong>Nome:</strong> " . htmlspecialchars($nome) . "</p>
        <p><strong>E-mail:</strong> " . htmlspecialchars($email) . "</p>
        " . ($telefone ? "<p><strong>Telefone:</strong> " . htmlspecialchars($telefone) . "</p>" : "") . "
        <p><strong>Assunto:</strong> " . htmlspecialchars($assunto) . "</p>
    </div>
    
    <div class='message-box'>
        <h3 style='color: #64a0a0; margin-bottom: 10px;'>Mensagem:</h3>
        <p style='line-height: 1.6; color: #333;'>" . nl2br(htmlspecialchars($mensagem)) . "</p>
    </div>
    
    <div class='footer'>
        <p>Este email foi enviado automaticamente pelo formulário de contato do site Acustika.</p>
    </div>
</body>
</html>
";

$emailBodyText = "
Nova Mensagem do Formulário de Contato

Nome: {$nome}
E-mail: {$email}
" . ($telefone ? "Telefone: {$telefone}\n" : "") . "
Assunto: {$assunto}

Mensagem:
{$mensagem}

---
Este email foi enviado automaticamente pelo formulário de contato do site Acustika.
";

// Headers do email
$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'From: ' . $smtpFrom,
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion()
];

$debugMessages[] = debugLog('--- Tentando enviar email ---', [
    'subject' => $emailSubject,
    'headers' => $headers
]);

// Usar PHPMailer se disponível, senão usar mail() nativo
$usePHPMailer = class_exists('PHPMailer\\PHPMailer\\PHPMailer');

if ($usePHPMailer) {
    $debugMessages[] = debugLog('Usando PHPMailer');
    
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;
    
    require __DIR__ . '/../vendor/autoload.php';
    
    $mail = new PHPMailer(true);
    
    try {
        // Configuração SMTP
        $mail->isSMTP();
        $mail->Host = $smtpHost;
        $mail->SMTPAuth = true;
        $mail->Username = $smtpUser;
        $mail->Password = $smtpPass;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port = $smtpPort;
        $mail->CharSet = 'UTF-8';
        
        // Remetente e destinatário
        $mail->setFrom($smtpFrom, 'Acustika - Formulário de Contato');
        $mail->addAddress($smtpTo);
        $mail->addReplyTo($email, $nome);
        
        // Conteúdo
        $mail->isHTML(true);
        $mail->Subject = $emailSubject;
        $mail->Body = $emailBody;
        $mail->AltBody = $emailBodyText;
        
        $startTime = microtime(true);
        $mail->send();
        $duration = (microtime(true) - $startTime) * 1000;
        
        $debugMessages[] = debugLog('✅ EMAIL ENVIADO COM SUCESSO!', [
            'messageId' => $mail->getLastMessageID(),
            'tempo' => round($duration, 2) . 'ms'
        ]);
        
        echo json_encode([
            'success' => true,
            'message' => 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
            'messageId' => $mail->getLastMessageID(),
            'debug' => implode("\n", $debugMessages)
        ]);
        
    } catch (Exception $e) {
        $debugMessages[] = debugLog('❌ ERRO AO ENVIAR EMAIL', [
            'erro' => $mail->ErrorInfo,
            'exception' => $e->getMessage()
        ]);
        
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'message' => 'Erro ao enviar mensagem. Por favor, tente novamente mais tarde.',
            'debug' => implode("\n", $debugMessages)
        ]);
    }
} else {
    // Usar mail() nativo (menos confiável, mas funciona em hospedagem compartilhada)
    $debugMessages[] = debugLog('Usando função mail() nativa do PHP');
    
    $startTime = microtime(true);
    $result = mail(
        $smtpTo,
        $emailSubject,
        $emailBody,
        implode("\r\n", $headers)
    );
    $duration = (microtime(true) - $startTime) * 1000;
    
    if ($result) {
        $debugMessages[] = debugLog('✅ EMAIL ENVIADO COM SUCESSO!', [
            'tempo' => round($duration, 2) . 'ms'
        ]);
        
        echo json_encode([
            'success' => true,
            'message' => 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
            'debug' => implode("\n", $debugMessages)
        ]);
    } else {
        $debugMessages[] = debugLog('❌ ERRO AO ENVIAR EMAIL', [
            'erro' => 'Função mail() retornou false'
        ]);
        
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'message' => 'Erro ao enviar mensagem. Por favor, tente novamente mais tarde.',
            'debug' => implode("\n", $debugMessages)
        ]);
    }
}

$debugMessages[] = debugLog('==========================================');
?>

