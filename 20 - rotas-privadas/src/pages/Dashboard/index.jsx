import { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const { logout, userInfo } = useContext(AuthContext);

    const handleLogout = async () => {
        await logout();
    }

    return (
        <div style={{ margin: '30px' }}>
            <h1>Seja bem vindo ao Dashboard!</h1>
            <p>Olá {userInfo?.nome}</p>
            <button onClick={handleLogout}>Sair</button>
            <Link to="/profile">Ir para o Profile</Link>
        </div>
    );
}

export default Dashboard;