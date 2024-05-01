import React, { Component } from 'react';
import './animacao.css';

class Animacao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animateTitle: false
    };
  }

  handleClick = () => {
    this.setState({ animateTitle: true });
    setTimeout(() => {
      this.setState({ animateTitle: false });
    }, 1000); // Define a duração da animação em milissegundos
  };

  render() {
    const { animateTitle } = this.state;

    return (
      <div>
        <button onClick={this.handleClick}>Clique aqui</button>
        <h1 className={animateTitle ? 'animated' : ''}>Título Animado</h1>
      </div>
    );
  }
}

export default Animacao;
