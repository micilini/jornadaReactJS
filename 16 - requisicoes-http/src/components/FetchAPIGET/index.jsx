import React, { useState, useEffect } from 'react';

const FetchAPIGET = () => {
    const [names, setNames] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchNames = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response.ok) {
                    throw new Error('Erro ao buscar os nomes: ' + response.statusText);
                }
                const data = await response.json();
                setNames(data.map(user => user.name));
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                console.error(error);
            }
        };

        fetchNames();
    }, []);

    return (
        <>
            <h2>Lista de Nomes</h2>
            {isLoading ? (
                <p>Carregando...</p>
            ) : (
                <ul>
                    {names.map((name, index) => (
                        <li key={index}>{name}</li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default FetchAPIGET;
