import React from 'react';

class ComponenteDois extends React.Component {
  render() {
    const valor = 10;
    if (valor < 10) {
      return <p>O valor é menor que 10!</p>;
    } else {
      return <p>O valor é maior que 10!</p>;
    }
  }
}

export default ComponenteDois;