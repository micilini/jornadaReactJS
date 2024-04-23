import Nome from './Nome.jsx';
import { ComponenteUm, ComponenteDois } from './MaisDeUmComponente.jsx';
import Cabecalho from './Cabecalho.jsx';

export default function App() {
    return (
    <div>
        <Cabecalho />
        Olá ReactJS!
        <Nome />
        <ComponenteUm />
        <ComponenteDois />
    </div>
    );
}