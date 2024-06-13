import React, { useEffect, useState } from 'react';
import { useFormsMutate } from '../../hooks/useFormsMutate'; // Importando o hook personalizado

const FormData = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Utilizando o hook personalizado useFormsMutate
    const { mutate, isSuccess, isError } = useFormsMutate();

    // Função para lidar com o envio do formulário
    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            email,
            password,
        }

        // Realizando a chamada de mutação para enviar os dados
        mutate(data);
    };

    useEffect(() => {
        if (isSuccess) {
            alert('Dados enviados com sucesso!');
        }
        if(isError){
            alert('Ocorreu um erro ao enviar os dados');
        }
    }, [isSuccess, isError]);

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Senha:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit" disabled={mutate.isLoading}>
                {mutate.isLoading ? 'Enviando...' : 'Enviar'}
            </button>
        </form>
    );
};

export default FormData;