import Botoes from './components/Botoes';
import FraseAleatoria from './components/FraseAleatoria';
import MudarCorTexto from './components/MudarCorTexto';
import Animacao from './components/Animacao';

export default function App() {
    return(
        <div>
            <Botoes />
            <br />
            <FraseAleatoria />
            <br />
            <MudarCorTexto />
            <br />
            <Animacao />
        </div>
    )
}