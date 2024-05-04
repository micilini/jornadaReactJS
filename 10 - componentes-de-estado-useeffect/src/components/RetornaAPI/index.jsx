import React, { useState, useEffect } from 'react';

const RetornaAPI = () => {
  const [nomes, setNomes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        // Apenas para ilustração, vamos pegar apenas os nomes dos usuários
        const nomesUsuarios = data.map(user => user.name);
        setNomes(nomesUsuarios);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchData();
  }, []); // A dependência está vazia, então o useEffect será executado apenas uma vez

  return (
    <div>
      <h2>Nomes da API:</h2>
      <ul>
        {nomes.map((nome, index) => (
          <li key={index}>{nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default RetornaAPI;
