import React, { useState, useEffect } from 'react';

const ListaTarefasSimples = () => {
    const [list, setList] = useState([
        { title: 'Item 1' },
        { title: 'Item 2' },
        { title: 'Item 3' }
    ]);

    const addNewItem = () => {
        const newList = [...list, { title: `Item ${list.length + 1}` }];
        setList(newList);
    }

    return(
        <div>
            <h2>Lista de Itens:</h2>
            {list.map((item, index) => (
                <div key={index}>
                    <h3>{item.title}</h3>
                </div>
            ))}
            <button onClick={addNewItem}>Adicionar Novo Item</button>
        </div>
    )
}

export default ListaTarefasSimples;