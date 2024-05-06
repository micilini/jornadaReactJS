import { useState } from "react";
import Cabecalho from "../Cabecalho";

const SegundoComponente = () => {
    const [nome, setNome] = useState("");
    return(
        <>
            <Cabecalho />
            <h1>Segundo Componente</h1>
            <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value) } />
        </>
    )
}
   
export default SegundoComponente;