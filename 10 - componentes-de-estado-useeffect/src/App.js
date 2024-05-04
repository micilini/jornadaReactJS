import MeuComponente from "./components/MeuComponente";
import RetornaAPI from "./components/RetornaAPI";
import BotaoClicar from "./components/BotaoClicar";
import ManipulacaoDOM from "./components/ManipulacaoDOM";
import Contador from "./components/Contador";
import DespertaEfeito from "./components/DespertaEfeito";
import DespertaEfeitoDois from "./components/DespertaEfeitoDois";
import LoopsInfinitos from "./components/LoopsInfinitos";

export default function App() {
    return(
        <div>
            <MeuComponente />
            <br />
            <RetornaAPI />
            <br />
            <BotaoClicar />
            <br />
            <ManipulacaoDOM />
            <br />
            <Contador />
            <br />
            <DespertaEfeito />
            <br />
            <DespertaEfeitoDois />
            <br />
            <LoopsInfinitos />
        </div>
    )
}