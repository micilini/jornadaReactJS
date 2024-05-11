import React, { useState, createContext } from 'react';

// Criando o contexto
const UsersContext = createContext();

// Provedor do contexto
const UsersProvider = ({ children }) => {
    const [nome, setNome] = useState('Usuário');
    const [email, setEmail] = useState('teste@email.com');

    return (
      <UsersContext.Provider value={{ nome, setNome, email, setEmail }}>
          {children}
      </UsersContext.Provider>
    );
  };
  
  export { UsersProvider, UsersContext };