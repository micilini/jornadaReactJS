import { Link } from 'react-router-dom';

const Contato = () => {
    return (
        <div>
            <h1>Página Contato</h1>
            <p>Em caso de dúvidas entre em contato conosco pelo nosso Whatsapp: (99) 99999-9999.</p>
            <Link to="/">Página Inicial</Link><br />
            <Link to="/servicos">Nossos Serviços</Link>
        </div>
    );
}

export default Contato;