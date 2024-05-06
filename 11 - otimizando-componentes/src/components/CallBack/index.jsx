import React, { useState, useCallback } from 'react';
import Botao from '../Botao';

const CallBack = () => {

    const [contador, setContador] = useState(0);

    const handleClick = useCallback(() => {
      setContador(contador + 1);
    }, [contador]); // A função só será recriada quando count mudar
    
    return (
      <div>
        <Botao onClick={handleClick} />
        <p>Contagem: {contador}</p>
      </div>
    );
}

export default CallBack;