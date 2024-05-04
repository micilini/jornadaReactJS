import React, { useEffect } from 'react';

const BotaoClicar = () => {
  useEffect(() => {
    const handleClick = () => {
      alert("O botão foi clicado!");
    };

    // Adicionando o event listener para o evento de clique no botão
    document.getElementById('meu-botao').addEventListener('click', handleClick);

    // Função de limpeza para remover o event listener quando o componente for desmontado
    return () => {
      document.getElementById('meu-botao').removeEventListener('click', handleClick);
    };
  }, []); // A dependência está vazia, então o useEffect será executado apenas uma vez

  return (
    <div>
      <h2>Assinatura de Eventos</h2>
      <button id="meu-botao">Clique em mim!</button>
    </div>
  );
};

export default BotaoClicar;
