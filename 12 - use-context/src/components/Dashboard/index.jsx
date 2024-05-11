import React, { useContext } from "react";
import { UsersContext } from "../../contexts/UsersProvider";

const Dashboard = () => {
    const { nome, setNome, email, setEmail } = useContext(UsersContext);

    const changeToMicilini = () => {
        setNome('Micilini');
        setEmail('hey@micilini.com');
    }

    const changeToSomeone = () => {
        setNome('Usuário');
        setEmail('teste@email.com');
    }

    return(
        <>
            <h2>Dashboard da Aplicação</h2>
            <p>Nome do Usuário: {nome}</p>
            <p>Email do Usuário: {email}</p>
            <button onClick={changeToMicilini}>Fazer Login como Micilini</button>
            <button onClick={changeToSomeone}>Fazer Login como Usuário Avulso</button>
        </>
    )
}

export default Dashboard;