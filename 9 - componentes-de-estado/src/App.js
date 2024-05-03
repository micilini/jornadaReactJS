import MeuComponente from "./components/MeuComponente";
import TarefasUnicas from "./components/TarefasUnicas";
import Contador from "./components/Contador";
import TarefasDinamicas from "./components/TarefasDinamicas";
import Limite from "./components/Limite";
import LimiteComBug from "./components/LimiteComBug";

export default function App() {
    return(
        <div>
            <MeuComponente />
            <br />
            <TarefasUnicas />
            <br />
            <Contador />
            <br />
            <TarefasDinamicas />
            <br />
            <Limite />
            <br />
            <LimiteComBug />
        </div>
    )
}