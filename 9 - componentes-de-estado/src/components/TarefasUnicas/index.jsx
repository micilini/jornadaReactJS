import React, { useState } from 'react';

const TarefasUnicas = () => {

    const [tarefas, setTarefas] = useState([
        'Comprar uma RTX 4090 TI SUPER',
        'Começar a estudar inglês para ter a oportunidade de trabalhar fora do Brasil'
    ]);

    function adicionaTarefa(){
        setTarefas([...tarefas, 'Pare de adicionar novas tarefas!']);
    }

    return(
        <div>
            <h1>Tarefas em ReactJS</h1>
            <ul>
                {tarefas.map(tarefa => (
                    <li key={tarefa}>{tarefa}</li>
                ))}
            </ul>
            <button onClick={adicionaTarefa}>Adicionar Tarefa</button>
        </div>
    );
}

export default TarefasUnicas;