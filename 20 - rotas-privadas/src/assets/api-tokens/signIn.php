<?php

// Definir segredos para assinar os tokens JWT
define('ACCESS_SECRET', 'seu_access_secret_aqui');
define('REFRESH_SECRET', 'seu_refresh_secret_aqui');

// Permitir solicitações CORS
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true"); // Permitir credenciais (cookies)

// Verifica se a requisição é do tipo OPTIONS (preflight request)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // Responde apenas com status 200 OK
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    http_response_code(200);
    exit();
}

// Incluir a biblioteca JWT
require __DIR__ . '/vendor/autoload.php';
use \Firebase\JWT\JWT;

// Função para gerar AccessToken
function generateAccessToken($userID, $expiresIn) {
    $accessTokenPayload = array(
        "user_id" => $userID,
        "exp" => time() + $expiresIn // expiração em segundos
    );

    // Gera e retorna o AccessToken
    return JWT::encode($accessTokenPayload, ACCESS_SECRET, 'HS256');
}

// Função para gerar RefreshToken
function generateRefreshToken($userID) {
    // Tempo de expiração do token (por exemplo, 30 dias)
    $expiracao = time() + (30 * 24 * 60 * 60); // Adiciona 30 dias em segundos

    // Dados do token
    $token = array(
        "user_id" => $userID,
        "exp" => $expiracao
    );

    // Gerar o token JWT
    $refreshToken = JWT::encode($token, REFRESH_SECRET, 'HS256');

    return $refreshToken;
}

// Verifica se a requisição é do tipo POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Recebe os dados enviados via POST
    $data = json_decode(file_get_contents("php://input"), true);

    // Verifica se existem os campos email e password no payload JSON
    if(isset($data['email']) && isset($data['password'])){
        // Verifica as credenciais (exemplo de credenciais estáticas para teste)
        if($data['email'] == "admin@micilini.com" && $data['password'] == "admin"){

            // Simula dados do usuário
            $userID = 98;
            $expiresIn = 30; // 30 segundos para expiração do AccessToken

            // Gera AccessToken
            $accessToken = generateAccessToken($userID, $expiresIn);

            // Gera RefreshToken
            $refreshToken = generateRefreshToken($userID);

            // Configura o RefreshToken em um cookie HTTP-only
            setcookie('refreshToken', $refreshToken, [
				'expires' => time() + 30 * 24 * 60 * 60, // expira em 30 dias
				'path' => '/api-tokens',
				'domain' => '', // ou ajuste conforme necessário
				'secure' => true, // apenas HTTPS
				'httponly' => true, // acessível apenas via HTTP
				'samesite' => 'None' // ajuste conforme necessário
			]);

            // Retorna AccessToken para o frontend
            http_response_code(200);
            echo json_encode(array(
                "status" => true,
                "accessToken" => $accessToken
            ));
            exit();

        } else {
            // Credenciais inválidas
            http_response_code(401); // Unauthorized
            echo json_encode(array("message" => "Credenciais inválidas!"));
            exit();
        }
    } else {
        // Campos email e password não foram enviados
        http_response_code(400); // Bad Request
        echo json_encode(array("message" => "Parâmetros 'email' e 'password' são obrigatórios."));
        exit();
    }
}

// Método não permitido
http_response_code(405); // Method Not Allowed
echo json_encode(array("message" => "Método não permitido. Use apenas o método POST."));
exit();
