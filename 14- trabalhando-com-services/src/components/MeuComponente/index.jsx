import React, { useState, useEffect } from 'react';
import { fetchNomes } from '../../services/nomeService'; // Importa a função de busca de nomes

const MeuComponente = () => {
    const [nomes, setNomes] = useState([]);

    useEffect(() => {
        const fetchNomesFromAPI = async () => {
            const nomesObtidos = await fetchNomes();
            setNomes(nomesObtidos);
        };

        fetchNomesFromAPI();

        return () => {

        };
    }, []);

    return (
        <div>
            <h1>Meu Componente</h1>
            <p>Este é o meu componente</p>
            <ul>
                {nomes.map((nome, index) => (
                    <li key={index}>{nome}</li>
                ))}
            </ul>
        </div>
    );
}

export default MeuComponente;
