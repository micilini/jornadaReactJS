import React, { useState } from 'react';

const FormularioEstado3 = () => {
  const [imagem, setImagem] = useState(null);

  const handleImagemChange = (event) => {
    setImagem(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div>
      <input
        type="file"
        onChange={handleImagemChange}
      />
      {imagem && (
        <img src={imagem} alt="Imagem do usuário" />
      )}
    </div>
  );
}

export default FormularioEstado3;