import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Nomes = () => {
    const [nomes, setNomes] = useState([]);

    useEffect(() => {
        const fetchNomes = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setNomes(response.data);
            } catch (error) {
                console.error('Erro ao buscar nomes:', error);
            }
        };

        fetchNomes();
    }, []); // Empty array ensures useEffect runs only once

    return (
        <div style={{margin: '0 auto', color: 'white', textAlign: 'center', fontSize: '18px'}}>
            <ul>
                {nomes.map(nome => (
                    <li style={{ listStyle: 'none' }} key={nome.id}>{nome.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Nomes;