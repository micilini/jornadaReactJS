import Contador from "./components/Contador";
import Nome from "./components/Nome";
import ListaTarefasSimples from "./components/ListaTarefasSimples";
import ListaTarefasAvancado from "./components/ListaTarefasAvancado";

export default function App() {
    return (
        <div>
            <Contador />
            <br />
            <Nome />
            <br />
            <ListaTarefasSimples />
            <br />
            <br />
            <ListaTarefasAvancado />
            <br />
            <br />
        </div>
    );
}