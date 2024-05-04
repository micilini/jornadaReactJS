import React, { useState, useEffect } from 'react';

const DespertaEfeito = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("Efeito disparado após a alteração do estado contador:", contador);
  }, [contador]);

  const handleClick = () => {
    setContador(prevContador => prevContador + 1);
  };

  return (
    <>
      <button onClick={handleClick}>Clique para aumentar o contador</button>
      <p>Contador: {contador}</p>
    </>
  );
};

export default DespertaEfeito;