import { Link } from 'react-router-dom';

const Servicos = () => {
    return (
        <div>
            <h1>Página Serviços</h1>
            <p>Trabalhamos com desenvolvimento de sites, estratégias de marketing e nas horas vagas vendemos armas de airsoft.</p>
            <Link to="/">Página Inicial</Link><br />
            <Link to="/contato">Contato</Link>
        </div>
    );
}

export default Servicos;