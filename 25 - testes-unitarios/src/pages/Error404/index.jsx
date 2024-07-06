import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <div>
            <h1>Error 404</h1>
            <p>Page not found</p>
            <p><Link to="/" style={{ color: 'white', textAlign: 'center', fontSize: '20px', width: '100%' }}>Voltar para a Home</Link></p>
        </div>
    );
}

export default Error404;