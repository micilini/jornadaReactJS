import React, { Component } from 'react';

class FormularioClasse3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagem: null
    };
  }

  handleImagemChange = (event) => {
    this.setState({ imagem: URL.createObjectURL(event.target.files[0]) });
  }

  render() {
    return (
      <div>
        <input
          type="file"
          onChange={this.handleImagemChange}
        />
        {this.state.imagem && (
          <img src={this.state.imagem} alt="Imagem do usuário" />
        )}
      </div>
    );
  }
}

export default FormularioClasse3;