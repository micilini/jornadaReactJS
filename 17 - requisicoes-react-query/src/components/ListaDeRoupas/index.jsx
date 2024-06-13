import React, {useState, useEffect} from 'react';
import './lista-de-roupas.css';
import HttpService from '../../services/httpService';

const httpService = new HttpService();

const ListaDeRoupas = () => {
    const [roupas, setRoupas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const fetchRoupas = async () => {
        httpService.get('/getRoupas.php').then(data => {
            setRoupas(data);
            setIsLoading(false);
        }).catch(error => {
            console.log('Houve um erro na aplicação', error);
            setIsError(true);
            setIsLoading(false);
        });
        
    }

    useEffect(() => {
        fetchRoupas();
    }, []);

    return(
        <div className="lista-de-roupas">
            <h2>📢 Roupas em Promoção 🛒</h2>
            {isLoading ? (
                <p style={{textAlign: 'center', color: 'white'}}>Carregando...</p>
            ) : isError ? (
                <p style={{textAlign: 'center', color: 'red'}}>Houve um erro ao carregar os dados das roupas. Por favor, tente novamente mais tarde.</p>
            ) : (
                <div className="roupas">
                    {roupas.map((roupa, index) => (
                        <div className="roupa" key={index}>
                            <img src={roupa.img} alt={"Roupa " + (index + 1)} />
                            <p>{roupa.nome}</p>
                            <p>{roupa.preco}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default ListaDeRoupas;