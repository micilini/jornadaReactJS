import './header.css';

//Importa o serviço de tradução
import TranslatorService from '../../services/TranslatorService';

const Header = () => {
    return (
        <header>
            <h1><TranslatorService path="header.h1"/></h1>
            <p><TranslatorService path="header.welcome"/></p>
        </header>
    );
}

export default Header;