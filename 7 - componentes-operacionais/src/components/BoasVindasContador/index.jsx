import React, { Component } from 'react';

class BoasVindasContador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Micilini',
      counter: 0
    };
  }

  handleUpdateName = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }));
  }

  render() {
    return (
      <div>
        <p>Olá {this.state.name} - {this.state.counter}</p>
        <button onClick={this.handleUpdateName}>Atualizar Nome</button>
      </div>
    );
  }
}

export default BoasVindasContador;
