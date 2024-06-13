import React from 'react';
import './lista-de-calcados.css';
import { useCalcadoData } from '../../hooks/useCalcadoData';

const ListaDeCalcados = () => {
    const calcadoId = 123; // ID do calcado específico
    const { data, isLoading, isError } = useCalcadoData(calcadoId);//Passamos o ID diretamente para o hook

    return (
        <div className="lista-de-calcados">
            <h2>📢 Calçados do Verão 🛒</h2>
            <div className="calcados">
                {isLoading && <p>Carregando...</p>}
                {isError && <p>Ocorreu um erro ao carregar os dados</p>}
                {!isLoading && <>
                    {data?.map((calcado, index) => (
                        <div className="calcado" key={index}>
                            <img src={calcado.img} alt={"Calçado " + (index + 1)} style={{ width: '180px', height: 'auto' }} />
                            <p>{calcado.nome}</p>
                            <p>{calcado.preco}</p>
                        </div>
                    ))} </>
                } 
            </div>
        </div>
    );
    
}

export default ListaDeCalcados;