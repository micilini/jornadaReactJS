import React, { useState } from 'react';

const FetchAPIPOST = () => {
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

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            setIsLoading(false);
            if (!response.ok) {
                throw new Error('Erro ao enviar os dados: ' + response.statusText);
            }
            console.log('Dados enviados com sucesso!');
            console.log('Resposta da API:', response.json());
            // Limpar o formulário após o envio bem-sucedido, se necessário
        })
        .catch(error => {
            setIsLoading(false);
            console.error(error);
        });
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

export default FetchAPIPOST;