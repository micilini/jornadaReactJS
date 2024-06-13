<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

// Simulando um retorno de uma API de Roupas

$array = array('name' => 'Micilini Roll', 'curriculo' => 'https://github.com/micilini');

echo json_encode($array);