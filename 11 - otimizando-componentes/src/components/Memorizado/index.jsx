import React from 'react';

const Memorizado = (props) => {
  const nome = () => {
    console.log('O Nome do componente é Memorizado!');
    return 'Memorizado';
  }
  return <div>O {nome()} renderizou com prop: {props.prop}</div>;
};

export default Memorizado;