import React, { useState } from 'react';
 
const Contador = () => {
 
  const [contador, setContador] = useState(0);

  const addNumero = () => {
    setContador(contador + 1);
  }
 
  return (
    <div>
      <p>Você clicou {contador} vezes</p>
      <button onClick={addNumero}>
          Aumentar
      </button>
    </div>
  );
}

export default Contador;