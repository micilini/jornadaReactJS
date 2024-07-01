import { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const { accessToken } = useContext(AuthContext);

    return (
        <div style={{ margin: '30px' }}>
            <h1>Meu Perfil</h1>
            <p>{accessToken}</p>
            <Link to="/dashboard">Dashboard</Link>
        </div>
    );
}

export default Dashboard;