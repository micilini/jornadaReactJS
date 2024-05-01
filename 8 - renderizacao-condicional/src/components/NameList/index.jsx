import React, { Component } from 'react';

class NameList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ['Alice', 'Bob', 'Charlie'],
      newName: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ newName: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { names, newName } = this.state;
    this.setState({
      names: [...names, newName],
      newName: ''
    });
  }

  render() {
    const { names, newName } = this.state;

    const nameListItems = names.map(name => {
      return <li>{name}</li>; // Esquecemos de adicionar o atributo key aqui
    });

    return (
      <div>
        <h2>Lista de Nomes</h2>
        <ul>
          {nameListItems}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={newName} onChange={this.handleChange} />
          <button type="submit">Adicionar Nome</button>
        </form>
      </div>
    );
  }
}

export default NameList;
