import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AxiosGET = () => {
    const [names, setNames] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchNames = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
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
            <h2>Lista de Nomes</h2>
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

export default AxiosGET;