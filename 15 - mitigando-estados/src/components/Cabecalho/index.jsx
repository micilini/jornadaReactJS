import React from 'react';

const Cabecalho = () => {

    const retornarAno = () => {
        console.log('O ano atual está sendo retornado...');
        return 2024;
    }

    return (
        <header>
        <p>Olá usuário, seja bem vindo!</p>
        <small>{retornarAno()}</small>
        </header>
    );
}

export default React.memo(Cabecalho);