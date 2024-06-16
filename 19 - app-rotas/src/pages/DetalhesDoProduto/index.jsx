import React from 'react';
import { useParams } from 'react-router-dom';

const DetalhesDoProduto = () => {
  const { id } = useParams();

  return <div>Detalhes do produto {id}</div>;
};

export default DetalhesDoProduto;