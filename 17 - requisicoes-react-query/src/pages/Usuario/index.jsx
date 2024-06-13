import React, { useEffect, useState } from 'react';
import Nome from '../../components/Nome';
import Curriculo from '../../components/Curriculo';
import HttpService from '../../services/httpService';

const httpService = new HttpService();

const Usuario = () => {
    const [data, setData] = useState({name: '', curriculo: ''});

    const fetchData = async () => {
        httpService.get('/getUserInfo.php').then(data => {
            setData(data);
        }).catch(error => {
            console.log('Houve um erro na aplicação', error);
        });   
    }

    useEffect(() => {
        fetchData();
    }, []);

    return(
        <>
            <Nome name={data.name}/>
            <Curriculo curriculo={data.curriculo} />
        </>
    )
}

export default Usuario;