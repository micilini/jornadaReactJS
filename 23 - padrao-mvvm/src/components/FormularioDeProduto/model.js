import { useState } from 'react';

const useFormularioDeProdutoModel = () => {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ nome, preco, descricao });
    setNome('');
    setPreco('');
    setDescricao('');
  };

  return{
    nome,
    preco,
    descricao,
    setNome,
    setPreco,
    setDescricao,
    handleSubmit
  }
};

export default useFormularioDeProdutoModel;