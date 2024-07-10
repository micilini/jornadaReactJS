import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUser } from '../../redux/user/slice';

const Nomes = () => {
    const dispatch = useDispatch();
    const nomes = useSelector(state => state.user.nomes); // Altere para o slice correto no seu estado
    const loading = useSelector(state => state.user.loading); // Altere para o slice correto no seu estado

    useEffect(() => {
        dispatch(fetchUser()); // Dispara a ação para buscar os nomes do usuário
    }, [dispatch]);

    return(
        <div style={{textAlign: 'center', width: '100%', height: '100vh', backgroundColor: '#3498db'}}>
            <h1 style={{color: 'white', fontSize: '40px', paddingTop: '30px'}}>Minha Lista de Nomes</h1>
            <p style={{color: '#2c3e50', fontSize: '24px', paddingTop: '10px'}}>A lista abaixo será carregada usando os efeitos colaterais do <strong>Redux Saga 💜</strong></p>
            {loading ? (
                <p>Carregando nomes...</p>
            ) : (
                <ul style={{color: 'white', fontSize: '24px', paddingTop: '18px'}}>
                    {nomes?.map(nome => (
                        <li key={nome.id}>{nome.name}</li>
                    ))}
                </ul>
            )}
            
        </div>
    );
}

export default Nomes;