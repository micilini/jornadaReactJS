import React, { useState, useEffect } from 'react';

const Contador= () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    // Função para incrementar o contador a cada segundo
    const interval = setInterval(() => {
      setContador(prevContador => prevContador + 1);
    }, 1000);

    // Função de limpeza para parar o intervalo quando o componente for desmontado
    return () => clearInterval(interval);
  }, []); // A dependência está vazia, então o useEffect será executado apenas uma vez

  return (
    <div>
      <h2>Atualizações de Estado com useEffect</h2>
      <p>Contador: {contador}</p>
    </div>
  );
};

export default Contador;
