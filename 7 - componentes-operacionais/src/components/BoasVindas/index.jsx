import React, { Component } from 'react';

class BoasVindas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Fulano'
    };
  }

  handleUpdateName = () => {
    this.setState({ name: 'Micilini' });
  }

  render() {
    return (
      <div>
        <p>Olá {this.state.name}</p>
        <button onClick={this.handleUpdateName}>Atualizar Nome</button>
      </div>
    );
  }
}

export default BoasVindas;