import React, {useState} from 'react';
import Cabecalho from '../Cabecalho';
import Amostrador from '../Amostrador';
import LogoMicilini from '../LogoMicilini';

const Contador = () => {
    const [contador, setContador] = useState(0);

    return (
        <>
            <Cabecalho />
            <Amostrador contador={contador} />
            <br />
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
            <br />
            <LogoMicilini />
        </>
    );
}

export default Contador;