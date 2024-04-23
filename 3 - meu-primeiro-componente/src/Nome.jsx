import './nome.css';
import fotoPraia from './foto-praia.jpg';

const Nome = () => {
    return(
        <header>
            Meu Nome é: Micilini Roll <br />
            <img className="img" src={fotoPraia} alt="Foto da Praia" />
        </header>
    )
}

export default Nome;