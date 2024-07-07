import React from 'react';
import useFetch from '../../hooks/useFetch'; // Importa o hook useFetch

function Nomes() {
  const { data: nomes, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

  return (
    <div>
      {loading ? (
        <p>Carregando...</p>
      ) : error ? (
        <p>Ocorreu um erro: {error.message}</p>
      ) : (
        <div>
          <h2>Lista de Nomes</h2>
          <ul>
            {nomes.map(nome => (
              <li key={nome.id}>{nome.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Nomes;
