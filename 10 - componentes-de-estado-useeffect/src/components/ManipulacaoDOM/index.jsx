import React, { useEffect } from 'react';

const ManipulacaoDOM = () => {
  useEffect(() => {
    // Selecionando um elemento do DOM
    const myElement = document.getElementById('meu-elemento');

    // Alterando o estilo do elemento
    myElement.style.color = 'red';
    myElement.style.fontSize = '20px';

    // Adicionando uma classe ao elemento
    myElement.classList.add('destaque');

    // Criando e adicionando um novo elemento ao DOM
    const newElement = document.createElement('div');
    newElement.textContent = 'Novo elemento adicionado!';
    document.body.appendChild(newElement);

    // Função de limpeza (remover elementos adicionados, reverter alterações, etc.)
    return () => {
      myElement.style.color = ''; // Resetando a cor para o padrão
      myElement.style.fontSize = ''; // Resetando o tamanho da fonte para o padrão
      myElement.classList.remove('destaque'); // Removendo a classe 'destaque'
      document.body.removeChild(newElement); // Removendo o novo elemento adicionado
    };
  }, []); // A dependência está vazia, então o useEffect será executado apenas uma vez

  return (
    <div>
      <h2>Manipulação do DOM</h2>
      <p id="meu-elemento">Este é um elemento manipulado diretamente no DOM.</p>
    </div>
  );
};

export default ManipulacaoDOM;