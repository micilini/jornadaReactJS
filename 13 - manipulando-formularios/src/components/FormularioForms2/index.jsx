import React from 'react';
import { useForm } from 'react-hook-form';

const FormularioForms2 = () => {
  const { register, handleSubmit, watch } = useForm();

  const onSubmit = (data) => {
    console.log('Valores do formulário:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}><br />
      <label>
        Input:
        <input type="text" {...register('inputValue')} />
      </label>
      <br /><br />
      <label>
        Select:
        <select {...register('selectValue')}>
          <option value="opcao1">Opção 1</option>
          <option value="opcao2">Opção 2</option>
          <option value="opcao3">Opção 3</option>
        </select>
      </label>
      <br /><br />
      <label>
        Textarea:
        <textarea {...register('textareaValue')} />
      </label>
      <br /><br />
      <label>
        Upload:
        <input type="file" {...register('file')} />
      </label>
      <br /><br />
      <label>
        Checkbox:
        <input type="checkbox" {...register('checkboxValue')} />
      </label>
      <br /><br />
      <label>
        Data:
        <input type="date" {...register('dateValue')} />
      </label>
      <br /><br />
      <label>
        Range:
        <input type="range" {...register('rangeValue')} min="0" max="100" />
      </label>
      <br /><br />
      <button type="submit">Enviar</button><br /><br />
    </form>
  );
}

export default FormularioForms2;
