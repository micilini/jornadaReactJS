import React, { useState } from 'react';

const MeuComponente = () => {
    const [nome, setNome] = useState('Fulano');

    const mudaNome = () => {
        setNome('Ciclano');
    }

    return(
        <>
            <h1>Olá {nome}</h1>
            <button onClick={mudaNome}>Mudar Nome</button>
        </>
    )
}

export default MeuComponente;