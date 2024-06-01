import React, { useState } from 'react';
import axios from 'axios';

const AxiosPOST = () => {
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
            if (response.status >= 200 && response.status < 300) {
                console.log('Dados enviados com sucesso!');
                console.log('Resposta da API:', response.data);
                // Limpar o formulário após o envio bem-sucedido, se necessário
            } else {
                throw new Error('Erro ao enviar os dados: ' + response.statusText);
            }
        } catch (error) {
            console.error(error);
        }

        setIsLoading(false);
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

export default AxiosPOST;