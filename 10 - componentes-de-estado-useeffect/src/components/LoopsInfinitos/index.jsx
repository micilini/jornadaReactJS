import React, { useState, useEffect } from 'react';

const LoopsInfinitos = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    if (contador === 5) {
      alert('O contador atingiu o valor 5!');
    }
  }, [contador]);

  const incrementarContador = () => {
    setContador(prevContador => prevContador + 1);
  };

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementarContador}>Incrementar</button>
    </div>
  );
};

export default LoopsInfinitos;
