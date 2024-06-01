import React, { useState } from 'react';

const XMLHTTPRequest = () => {
    const [names, setNames] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchNames = () => {
        setIsLoading(true);
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
        xhr.onload = function () {
            setIsLoading(false);
            if (xhr.status >= 200 && xhr.status < 300) {
                const data = JSON.parse(xhr.responseText);
                setNames(data.map(user => user.name));
            } else {
                console.error('Erro ao buscar os nomes:', xhr.statusText);
            }
        };
        xhr.onerror = function () {
            setIsLoading(false);
            console.error('Erro ao buscar os nomes:', xhr.statusText);
        };
        xhr.send();
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

export default XMLHTTPRequest;
