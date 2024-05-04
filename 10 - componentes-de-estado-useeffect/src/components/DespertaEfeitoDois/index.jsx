import React, { useState, useEffect } from 'react';

const DespertaEfeitoDois = () => {
  const [contador, setContador] = useState(0);
  const [nome, setNome] = useState('');
  const [contadorAntigo, setContadorAntigo] = useState(contador);
  const [nomeAntigo, setNomeAntigo] = useState(nome);

  useEffect(() => {
    // Verifica se o estado contador mudou
    if (contador !== contadorAntigo) {
      console.log("O estado contador foi modificado:", contador);
      // Atualiza o estado contadorAntigo com o novo valor do contador
      setContadorAntigo(contador);
    }

    // Verifica se o estado nome mudou
    if (nome !== nomeAntigo) {
      console.log("O estado nome foi modificado:", nome);
      // Atualiza o estado nomeAntigo com o novo valor do nome
      setNomeAntigo(nome);
    }
  }, [contador, nome, contadorAntigo, nomeAntigo]);

  const handleClick = () => {
    setContador(prevContador => prevContador + 1);
  };

  const handleChange = (event) => {
    setNome(event.target.value);
  };

  return (
    <div>
      <button onClick={handleClick}>Clique para aumentar o contador</button>
      <p>Contador: {contador}</p>
      <input type="text" value={nome} onChange={handleChange} />
      <p>Nome: {nome}</p>
    </div>
  );
};

export default DespertaEfeitoDois;
