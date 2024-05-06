import { useState } from "react";
import Cabecalho from "../Cabecalho";
import Memorizado from "../Memorizado";

const MeuComponente = () => {
    const [nome, setNome] = useState("");
    return(
        <>
            <Cabecalho />
            <Memorizado prop="ABCD" />
            <h1>Meu Componente</h1>
            <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value) } />
        </>
    )
}
   
export default MeuComponente;