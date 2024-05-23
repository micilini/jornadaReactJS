import React, { Component } from 'react';

class FormularioClasse2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      selectValue: '',
      textareaValue: '',
      file: null,
      checkboxValue: false,
      dateValue: '',
      rangeValue: 0
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  handleSelectChange = (event) => {
    this.setState({ selectValue: event.target.value });
  }

  handleTextareaChange = (event) => {
    this.setState({ textareaValue: event.target.value });
  }

  handleFileChange = (event) => {
    this.setState({ file: event.target.files[0] });
  }

  handleCheckboxChange = (event) => {
    this.setState({ checkboxValue: event.target.checked });
  }

  handleDateChange = (event) => {
    this.setState({ dateValue: event.target.value });
  }

  handleRangeChange = (event) => {
    this.setState({ rangeValue: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode fazer o que quiser com os valores do formulário
    console.log('Valores do formulário:', this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Input:
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
        </label>
        <br /><br />
        <label>
          Select:
          <select
            value={this.state.selectValue}
            onChange={this.handleSelectChange}
          >
            <option value="opcao1">Opção 1</option>
            <option value="opcao2">Opção 2</option>
            <option value="opcao3">Opção 3</option>
          </select>
        </label>
        <br /><br />
        <label>
          Textarea:
          <textarea
            value={this.state.textareaValue}
            onChange={this.handleTextareaChange}
          />
        </label>
        <br /><br />
        <label>
          Upload:
          <input
            type="file"
            onChange={this.handleFileChange}
          />
        </label>
        <br /><br />
        <label>
          Checkbox:
          <input
            type="checkbox"
            checked={this.state.checkboxValue}
            onChange={this.handleCheckboxChange}
          />
        </label>
        <br /><br />
        <label>
          Data:
          <input
            type="date"
            value={this.state.dateValue}
            onChange={this.handleDateChange}
          />
        </label>
        <br /><br />
        <label>
          Range:
          <input
            type="range"
            value={this.state.rangeValue}
            onChange={this.handleRangeChange}
            min="0"
            max="100"
          />
        </label>
        <br /><br />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default FormularioClasse2;