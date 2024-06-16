import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <div>
            <h1>Error 404</h1>
            <p>Page not found</p>
            <Link to="/">Voltar para a Home</Link>
        </div>
    );
}

export default Error404;