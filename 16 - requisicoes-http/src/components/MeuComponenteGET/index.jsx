import React, { useState } from 'react';
import HttpService from '../../services/httpService';

const httpService = new HttpService();

const MeuComponenteGET = () => {
    const [names, setNames] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchNames = async () => {
        setIsLoading(true);
        try {
            const { request } = await httpService.get('https://jsonplaceholder.typicode.com/users');
            const response = await request;
            if (response.status >= 200 && response.status < 300) {
                setNames(response.data.map(user => user.name));
            } else {
                console.error('Erro ao buscar os nomes:', response.statusText);
            }
        } catch (error) {
            console.error('Erro ao buscar os nomes:', error.message);
        }
        setIsLoading(false);
    };

    return (
        <>
            <h2>Lista de Nomes (HttpService)</h2>
            <button onClick={fetchNames} disabled={isLoading}>
                {isLoading ? 'Carregando...' : 'Carregar nomes'}
            </button>
            <ul>
                {names.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </>
    );
};

export default MeuComponenteGET;