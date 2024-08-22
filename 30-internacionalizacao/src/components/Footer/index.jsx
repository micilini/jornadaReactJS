import './footer.css';

//Importa o serviço de tradução
import TranslatorService from '../../services/TranslatorService';

const Footer = () => {
    return(
        <footer>
            <p>© 2024 - <TranslatorService path="footer.copyright"/></p>
        </footer>
    );
}

export default Footer;