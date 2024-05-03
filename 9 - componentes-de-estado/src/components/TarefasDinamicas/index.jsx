import React, { useState } from 'react';

const TarefasDinamicas = () => {

    const [tarefa, setTarefa] = useState('');
    const [tarefas, setTarefas] = useState([]);

    function adicionaTarefa(){
        setTarefas([...tarefas, tarefa]);
        setTarefa('');
    }

    function handleChange(event){
        setTarefa(event.target.value);
    }

    return(
        <div>
            <h1>Tarefas Dinâmicas em ReactJS</h1>
            <ul>
                {tarefas.map(tarefa => (
                    <li key={tarefa}>{tarefa}</li>
                ))}
            </ul>
            <input type="text" placeholder="Digite sua Tarefa" value={tarefa} onChange={handleChange} />
            <button onClick={adicionaTarefa}>Adicionar Tarefa</button>
        </div>
    );
}

export default TarefasDinamicas;