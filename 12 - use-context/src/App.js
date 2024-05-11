import MeuComponente from "./components/MeuComponente";
import { TemaProvider } from "./contexts/TemaProvider";
import SegundoComponente from "./components/SegundoComponente";
import { UsersProvider } from "./contexts/UsersProvider";
import Dashboard from "./components/Dashboard";

export default function App() {
    return (
        <div>
            <TemaProvider>
                <MeuComponente>
                    <h1>Informação passada para dentro do componente!</h1>
                </MeuComponente>
                <SegundoComponente />
            </TemaProvider>
            <UsersProvider>
                <Dashboard />
            </UsersProvider>
        </div>
    );
}