import React from 'react';

class FraseAleatoria extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frases: [
        "O sucesso é ir de fracasso em fracasso sem perder entusiasmo.",
        "Se você quer algo que nunca teve, precisa fazer algo que nunca fez.",
        "A persistência é o caminho do êxito.",
        "Não espere por circunstâncias ideais, tome decisões e faça acontecer."
      ],
      fraseAtual: "Clique no botão para ver uma frase!"
    };
  }

  handleClick = () => {
    const { frases } = this.state;
    const novaFrase = frases[Math.floor(Math.random() * frases.length)];
    this.setState({ fraseAtual: novaFrase });
  };

  render() {
    const { fraseAtual } = this.state;
    return (
      <div>
        <h1>Frase Aleatória</h1>
        <p>{fraseAtual}</p>
        <button onClick={this.handleClick}>Nova Frase</button>
      </div>
    );
  }
}

export default FraseAleatoria;
