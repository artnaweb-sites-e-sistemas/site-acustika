<?php
/**
 * API PHP para envio de emails via Brevo (Sendinblue)
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

// Configuração Brevo - Ler de variáveis de ambiente ou arquivo de configuração
// Em produção, configure essas variáveis no painel da hospedagem ou crie um arquivo config.php
$brevoApiKey = getenv('BREVO_API_KEY') ?: (file_exists(__DIR__ . '/config.php') ? include(__DIR__ . '/config.php')['BREVO_API_KEY'] : '');
$toEmail = getenv('EMAIL_TO') ?: (file_exists(__DIR__ . '/config.php') ? include(__DIR__ . '/config.php')['EMAIL_TO'] : 'birasro@gmail.com');
$fromEmail = getenv('EMAIL_FROM') ?: (file_exists(__DIR__ . '/config.php') ? include(__DIR__ . '/config.php')['EMAIL_FROM'] : 'contato@acustikaauditiva.com.br');
$fromName = 'Acustika - Formulário de Contato';
$emailSubject = "Contato do Site - {$assunto}";

if (empty($brevoApiKey)) {
    echo json_encode([
        'success' => false,
        'message' => 'Configuração SMTP não encontrada. Entre em contato com o administrador.'
    ]);
    exit();
}

// Preparar corpo do email HTML
$emailBodyHtml = "
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

// Preparar dados para API do Brevo
$brevoData = [
    'sender' => [
        'name' => $fromName,
        'email' => $fromEmail
    ],
    'to' => [
        [
            'email' => $toEmail,
            'name' => 'Acustika'
        ]
    ],
    'replyTo' => [
        'email' => $email,
        'name' => $nome
    ],
    'subject' => $emailSubject,
    'htmlContent' => $emailBodyHtml,
    'textContent' => $emailBodyText
];

// Enviar via API do Brevo usando cURL
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://api.brevo.com/v3/smtp/email');
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($brevoData));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Accept: application/json',
    'Content-Type: application/json',
    'api-key: ' . $brevoApiKey
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_error($ch);
curl_close($ch);

if ($httpCode === 201) {
    // Sucesso
    $responseData = json_decode($response, true);
    echo json_encode([
        'success' => true,
        'message' => 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
        'messageId' => $responseData['messageId'] ?? null
    ]);
} else {
    // Erro
    $errorData = json_decode($response, true);
    $errorMessage = $errorData['message'] ?? 'Erro ao enviar mensagem. Por favor, tente novamente mais tarde.';
    
    if ($curlError) {
        $errorMessage .= ' Erro cURL: ' . $curlError;
    }
    
    echo json_encode([
        'success' => false,
        'message' => $errorMessage,
        'httpCode' => $httpCode
    ]);
}
