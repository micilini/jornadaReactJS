import React, { useState, useEffect } from 'react';
import ListService from '../../services/listService';

const listService = new ListService();

const ListComponent = () => {
    const [list, setList] = useState(listService.getList()); // first init

    useEffect(() => {
        loadList();
    }, []);

    const loadList = () => {
        setList(listService.getList());
    }

    const addNewItem = () => {
        listService.addNewItem();
        loadList();
    }

    return(
        <div>
            <h2>List of Items:</h2>
            {list.map((item, index) => (
                <div key={index}>
                    <h3>{item.title}</h3>
                </div>
            ))}
            <button onClick={addNewItem}>Add new Item</button>
        </div>
    )
}

export default ListComponent;