<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

// Simulando um retorno de uma API de Roupas

$array = array(
	array('id' => 225, 'nome' => 'Chinelo Nuvem Stripes V2', 'preco' => 'R$ 44,37', 'img' => 'http://localhost/api-roupas/nuvem-stripes-v2.png'),
	array('id' => 14, 'nome' => 'Mule Sw Shoes ', 'preco' => 'R$ 89,90', 'img' => 'http://localhost/api-roupas/mule-shoes.png'),
	array('id' => 922, 'nome' => 'Onça Mule', 'preco' => 'R$ 198,60', 'img' => 'http://localhost/api-roupas/onca-mule.png'),
	array('id' => 22, 'nome' => 'Sapato Show', 'preco' => 'R$ 88,00', 'img' => 'http://localhost/api-roupas/sapato-show.png'),
);

// Adicionando um atraso de 3 segundos
sleep(3);

// Simulando um erro de servidor
//http_response_code(500);
//echo "Erro interno do servidor";

echo json_encode($array);