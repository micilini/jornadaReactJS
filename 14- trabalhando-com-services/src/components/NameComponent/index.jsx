import React, { useState, useEffect } from 'react';
import NameService from '../../services/nameService';

const NameComponent = () => {
    const nameService = new NameService();
    const [name, setName] = useState('');

    useEffect(() => {
        loadName();
    }, []);

    const loadName = () => {
        setName(nameService.getName());
    }

    const changeName = () => {
        nameService.changeName();
        loadName();
    }

    return(
        <div>
            <p>{name}</p>
            <button onClick={changeName}>Change Name</button>
        </div>
    )
}

export default NameComponent;