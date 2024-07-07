import { Link } from 'react-router-dom';
import './menu.css';

const Menu = () => {
    return(
        <>
        <h1>Minha Aplicação</h1>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/contato">Contato</Link>
            <Link to="/servicos">Serviços</Link>
            <Link to="/clientes">Clientes</Link>
            <div className="animation start-home"></div>
        </nav>
        </>
    );
}

export default Menu;