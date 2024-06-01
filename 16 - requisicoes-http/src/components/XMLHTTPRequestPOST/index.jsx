import React, { useState } from 'react';

const XMLHTTPRequestPOST = () => {
    const [formData, setFormData] = useState({
        login: '',
        senha: '',
        nome: '',
        email: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true); // Usando JSONPlaceholder para teste
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function () {
            setIsLoading(false);
            if (xhr.status >= 200 && xhr.status < 300) {
                console.log('Dados enviados com sucesso!');
                console.log('Resposta da API:', xhr.responseText);
                // Limpar o formulário após o envio bem-sucedido, se necessário
            } else {
                console.error('Erro ao enviar os dados:', xhr.statusText);
            }
        };
        xhr.onerror = function () {
            setIsLoading(false);
            console.error('Erro ao enviar os dados:', xhr.statusText);
        };
        xhr.send(JSON.stringify(formData));
    };

    return (
        <>
            <h2>Formulário de Registro</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Login:</label>
                    <input type="text" name="login" value={formData.login} onChange={handleChange} required />
                </div>
                <div>
                    <label>Senha:</label>
                    <input type="password" name="senha" value={formData.senha} onChange={handleChange} required />
                </div>
                <div>
                    <label>Nome:</label>
                    <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Enviando...' : 'Enviar'}
                </button>
            </form>
        </>
    );
};

export default XMLHTTPRequestPOST;
