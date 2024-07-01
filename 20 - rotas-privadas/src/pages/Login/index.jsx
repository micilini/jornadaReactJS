import { useState, useContext } from 'react';

import { AuthContext } from '../../contexts/authContext';

const Login =  () => {
    const [email, setEmail] = useState('admin@micilini.com');
    const [password, setPassword] = useState('admin');
    const [loadingSignIn, setLoadingSignIn] = useState(false);

    const { signIn } = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoadingSignIn(true);
        
        if(email !== '' && password !== ''){
            await signIn(email, password);
        }
    }

    return (
        <div style={{ margin: '30px' }}>
            <form onSubmit={handleLogin}>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Login" /><br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" /><br />
                <button type="submit">{loadingSignIn ? 'Carregando...' : 'Acessar'}</button>
            </form>
        </div>
    );

}

export default Login;