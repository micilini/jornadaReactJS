import { useSelector } from "react-redux";

const Perfil = () => {
    const { user } = useSelector((rootReducer) => rootReducer.user);//pegamos o estado do usuário declarado dentro do rootReducer

    return(
        <>
            <h1>Meu Perfil</h1>
            <p>Id: {user.id}</p>
            <p>Nome: {user.name}</p>
            <p>Site: {user.site}</p>
        </>
    );
}

export default Perfil;