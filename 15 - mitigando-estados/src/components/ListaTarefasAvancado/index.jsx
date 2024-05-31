import React, { useState, useEffect } from 'react';
import ItensService from '../../services/itensService';

const itensService = new ItensService();

const ListaTarefasAvancado = () => {
    const [list, setList] = useState(itensService.getList());

 useEffect(() => {
 loadList();
 }, []);

 const loadList = () => {
 setList(itensService.getList());
 }

 const addNewItem = () => {
    itensService.addNewItem();
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

export default ListaTarefasAvancado;