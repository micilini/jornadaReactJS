<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

// Simulando um retorno de uma API de Roupas

$array = array(
	array('id' => 123, 'nome' => 'Camiseta Curta', 'preco' => 'R$ 50,00', 'img' => 'http://localhost/api-roupas/camiseta-curta.png'),
	array('id' => 887, 'nome' => 'Short Jeans', 'preco' => 'R$ 43,00', 'img' => 'http://localhost/api-roupas/short-jeans.png'),
	array('id' => 52, 'nome' => 'Calçado de Praia', 'preco' => 'R$ 22,00', 'img' => 'http://localhost/api-roupas/calcado-de-praia.png'),
	array('id' => 12, 'nome' => 'Toca de Frio', 'preco' => 'R$ 12,00', 'img' => 'http://localhost/api-roupas/toca-de-frio.png'),
);

// Adicionando um atraso de 3 segundos
sleep(3);

// Simulando um erro de servidor
http_response_code(500);
echo "Erro interno do servidor";