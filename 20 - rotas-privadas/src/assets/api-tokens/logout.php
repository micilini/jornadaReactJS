<?php

// Permitir solicitações CORS
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true"); // Permitir credenciais (cookies)

if (isset($_COOKIE['refreshToken'])) {
    unset($_COOKIE['refreshToken']); 
    setcookie('refreshToken', '', -1, '/api-tokens'); 
    return true;
} else {
    return false;
}