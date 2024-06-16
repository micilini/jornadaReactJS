import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Página Home</h1>
            <p>Seja muito bem vindo a página principal do nosso site =)</p>
            <Link to="/contato">Entre em Contato</Link><br />
            <Link to="/servicos">Nossos Serviços</Link><br />
            <Link to="/produto/99">Acessar Produto 99</Link>
        </div>
    );
}

export default Home;