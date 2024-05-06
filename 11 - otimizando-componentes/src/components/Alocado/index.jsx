import React, { useState, useCallback } from 'react';

const Alocado = () => {
    const [tarefas, setTarefas] = useState([
        'Estudar ReactJS',
        'Comprar uma casa de 500m²'
    ]);
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState(29);
    const [input, setInput] = useState('');

    const mudaNome = useCallback(() => {
        setNome('Micilini');
        setIdade(30);
        setTarefas([...tarefas, 'Ir dormir!']);
    }, [tarefas]);

    return(
        <div>
            <h1>Alocado!</h1>
            <ul>
                {tarefas.map(tarefa => (
                    <li key={tarefa}>{tarefa}</li>
                ))}
            </ul>
            <p>Meu Nome é: {nome}</p>
            <button type="button" onClick={mudaNome}>Muda Nome</button>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        </div>
    );
}

export default Alocado;
