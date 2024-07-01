<?php

// Definir segredos para assinar os tokens JWT
define('ACCESS_SECRET', 'seu_access_secret_aqui');
define('REFRESH_SECRET', 'seu_refresh_secret_aqui');

// Permitir solicitações CORS
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true"); // Permitir credenciais (cookies)

// Incluir a biblioteca JWT
require __DIR__ . '/vendor/autoload.php';
use \Firebase\JWT\JWT;
use Firebase\JWT\Key;

// Função para gerar AccessToken
function generateAccessToken($userID, $expiresIn) {
    $accessTokenPayload = array(
        "user_id" => $userID,
        "exp" => time() + $expiresIn // expiração em segundos
    );

    // Gera e retorna o AccessToken
    return JWT::encode($accessTokenPayload, ACCESS_SECRET, 'HS256');
}

// Função para verificar RefreshToken
function verifyRefreshToken($refreshToken) {
    try {
        // Decodificar o token JWT
        $decoded = JWT::decode($refreshToken, new Key(REFRESH_SECRET, 'HS256'));

        // Verificar se o token está expirado
        if ($decoded->exp < time()) {
            return false; // Token expirado
        }

        // Retornar os dados do token decodificado
        return $decoded;

    } catch (Exception $e) {
        return false; // Token inválido (erro na decodificação)
    }
}

// Verifica se a requisição é do tipo OPTIONS (preflight request)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // Responde apenas com status 200 OK
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    http_response_code(200);
    exit();
}

// Verifica se a requisição é do tipo POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Verifica se o cookie refresh_token está presente na requisição
    if (isset($_COOKIE['refreshToken'])) {
        $refreshToken = $_COOKIE['refreshToken'];

        try {
			//Verifica se o Token é válido
			$decoded = verifyRefreshToken($refreshToken);
			
			if(verifyRefreshToken($refreshToken)){
				// Verifica se o payload está correto
				if (isset($decoded->user_id)) {
					// Gera um novo AccessToken com expiração de 30 segundos
					$accessToken = generateAccessToken($decoded->user_id, 30);
					
					$response = array(
						"nome" => "Nome do usuário",
						"site" => "https://micilini.com/",
                        "role" => array("admin", "user", "editor")
					);

					// Retorna o access_token para o front-end
					http_response_code(200);
					echo json_encode(array("accessToken" => $accessToken, "user" => $response));
					exit();
				} else {
					// Se o payload do refresh_token estiver incorreto
					http_response_code(401); // Unauthorized
					echo json_encode(array("message" => "Payload do refresh_token inválido"));
					exit();
				}
			}else{
				// O Refresh Token é inválido, joga o usuário de volta a tela de Login
				http_response_code(401); // Unauthorized
				echo json_encode(array("message" => "Refresh Token expirado."));
				exit();
			}

            
        } catch (ExpiredException $e) {
            http_response_code(401); // Unauthorized
            echo json_encode(array("message" => "Token expirado: " . $e->getMessage()));
            exit();
        } catch (BeforeValidException $e) {
            http_response_code(401); // Unauthorized
            echo json_encode(array("message" => "Token ainda não é válido: " . $e->getMessage()));
            exit();
        } catch (SignatureInvalidException $e) {
            http_response_code(401); // Unauthorized
            echo json_encode(array("message" => "Assinatura do token inválida: " . $e->getMessage()));
            exit();
        } catch (Exception $e) {
            // Caso ocorra algum outro erro ao decodificar o refresh_token
            http_response_code(401); // Unauthorized
            echo json_encode(array("message" => "Erro ao decodificar o refresh_token: " . $e->getMessage()));
            exit();
        }
    } else {
        // Se o cookie refresh_token não estiver presente na requisição
        http_response_code(401); // Unauthorized
        echo json_encode(array("message" => "Refresh_token não encontrado"));
        exit();
    }
}

// Método não permitido
http_response_code(405); // Method Not Allowed
echo json_encode(array("message" => "Método não permitido. Use apenas o método POST."));
exit();
