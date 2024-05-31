import React, { useState, useEffect } from 'react';
import NomeService from '../../services/nomeService';

const nameService = new NomeService();

const Nome = () => {
    const [name, setName] = useState(nameService.getData().name);
    const [age, setAge] = useState(nameService.getData().age);

    useEffect(() => {
        loadName();
        loadAge();
    }, []);

    const loadName = () => {
        const data = nameService.getData();
        setName(data.name);
    }

    const loadAge = () => {
        const data = nameService.getData();
        setAge(data.age);
    }

    const changeName = () => {
        nameService.changeName();
        loadName();
    }

    const changeAge = () => {
        nameService.changeAge();
        loadAge();
    }

    return(
        <div>
            <p>{name} / {age}</p>
            <button onClick={changeName}>Muda Nome</button>
            <button onClick={changeAge}>Muda Idade</button>
        </div>
    )
}

export default Nome;