import React, { createContext } from 'react';

// Criando o contexto
const TemaContext = createContext();

// Provedor do contexto
const TemaProvider = ({ children }) => {
  const tema = 'claro'; // Exemplo de tema
  const site = 'https://www.micilini.com'; // Exemplo de site
  const rank = 1; // Exemplo de rank

  // Função para exibir uma mensagem de alerta
  const exibirAlerta = () => {
    alert('Esta é uma mensagem de alerta!');
  };

  return (
    <TemaContext.Provider value={{ tema: tema, site: site, rank: rank, exibirAlerta }}>
        {children}
    </TemaContext.Provider>
  );
};

export { TemaProvider, TemaContext };