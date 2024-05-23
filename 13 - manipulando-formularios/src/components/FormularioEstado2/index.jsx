import React, { useState } from 'react';

function FormularioEstado2() {
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const [file, setFile] = useState(null);
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [dateValue, setDateValue] = useState('');
  const [rangeValue, setRangeValue] = useState(0);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSelectChange = (event) => {
    setSelectValue(event.target.value);
  };

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleCheckboxChange = (event) => {
    setCheckboxValue(event.target.checked);
  };

  const handleDateChange = (event) => {
    setDateValue(event.target.value);
  };

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode fazer o que quiser com os valores do formulário
    console.log('Valores do formulário:', {
      inputValue,
      selectValue,
      textareaValue,
      file,
      checkboxValue,
      dateValue,
      rangeValue
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Input:
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
      </label>
      <br /><br />
      <label>
        Select:
        <select
          value={selectValue}
          onChange={handleSelectChange}
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
          value={textareaValue}
          onChange={handleTextareaChange}
        />
      </label>
      <br /><br />
      <label>
        Upload:
        <input
          type="file"
          onChange={handleFileChange}
        />
      </label>
      <br /><br />
      <label>
        Checkbox:
        <input
          type="checkbox"
          checked={checkboxValue}
          onChange={handleCheckboxChange}
        />
      </label>
      <br /><br />
      <label>
        Data:
        <input
          type="date"
          value={dateValue}
          onChange={handleDateChange}
        />
      </label>
      <br /><br />
      <label>
        Range:
        <input
          type="range"
          value={rangeValue}
          onChange={handleRangeChange}
          min="0"
          max="100"
        />
      </label>
      <br /><br />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormularioEstado2;