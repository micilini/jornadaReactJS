import React, { useContext } from "react";
import { TemaContext } from "../../contexts/TemaProvider";

const SegundoComponente = () => {
    const {tema, site, rank, exibirAlerta} = useContext(TemaContext);

    const handleClick = () => {
        exibirAlerta();
    };
    
    return (
        <div>
          <h2>Meu Segundo Componente</h2>
          <p>O tema da aplicação é: {tema}</p>
          <p>O site é: {site}</p>
          <p>O rank é: {rank}</p>
          <button onClick={handleClick}>Exibir Alerta</button>
        </div>
    );
}

export default SegundoComponente;