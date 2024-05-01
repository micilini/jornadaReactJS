import React from 'react';

class MudarCorTexto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cor: 'black'
    };
  }

  handleClick = () => {
    const cores = ['red', 'blue', 'green', 'orange', 'purple'];
    const novaCor = cores[Math.floor(Math.random() * cores.length)];
    this.setState({ cor: novaCor });
  };

  render() {
    const { cor } = this.state;
    return (
      <div>
        <h1 style={{ color: cor }}>Cor do Texto</h1>
        <p style={{ color: cor }}>Este texto está na cor {cor}.</p>
        <button onClick={this.handleClick}>Mudar Cor</button>
      </div>
    );
  }
}

export default MudarCorTexto;