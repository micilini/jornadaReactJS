<?php

define('ACCESS_SECRET', 'seu_access_secret_aqui');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

// Incluir a biblioteca JWT
require __DIR__ . '/vendor/autoload.php';
use \Firebase\JWT\JWT;
use Firebase\JWT\Key;

if(isset($_GET['access_token'])) {
    $accessToken = $_GET['access_token'];
    
    try {
        // Executa o payload no token JWT enviando o accessToken e ACCESS_SECRET
        $decoded = JWT::decode($accessToken, new Key(ACCESS_SECRET, 'HS256'));

        // Verifica se o payload está correto
        if ($decoded->user_id == 98) {
            // Se o user_id for igual a 98, retorna algumas informações
            $response = array(
                "nome" => "Nome do usuário",
                "site" => "https://micilini.com/",
                "role" => array("admin", "user", "editor")
            );
            http_response_code(200);
            echo json_encode($response);
            exit();
        } else {
            // Caso o user_id não seja 98, retorna um erro
            http_response_code(403);
            echo json_encode(array("message" => "Acesso não autorizado"));
            exit();
        }
    } catch (Exception $e) {
        // Caso ocorra algum erro ao decodificar o token JWT
        http_response_code(401);
        echo json_encode(array("message" => "Token inválido: " . $e->getMessage()));
        exit();
    }
}

http_response_code(400);
echo json_encode(array("message" => "Houve algum problema na aplicação, tente novamente mais tarde!"));
exit();
