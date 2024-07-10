import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { createUser, createUserSecond, deleteUser, deleteUserSecond } from "../../redux/user/slice";

const Perfil = () => {
    const { user } = useSelector((rootReducer) => rootReducer.user);
    const dispatch = useDispatch();

    const handleAction = () => {
        dispatch(createUser({
            id: 2,
            name: 'Micilini Roll 2',
            site: 'https://micilini.com/2'
        }));
    }
   
    const handleAction2 = () => {
        dispatch(createUserSecond({
            id: 3,
            name: 'Micilini Roll 3',
            site: 'https://micilini.com/3'
        }));
    }

    const handleDelete = () => {
        dispatch(deleteUser());
    }

    const handleDelete2 = () => {
        dispatch(deleteUserSecond());
    }

    return(
        <>
            <h1>Meu Perfil</h1>
            <p>Id: {user?.id}</p>
            <p>Nome: {user?.name}</p>
            <p>Site: {user?.site}</p>
            <button onClick={handleAction}>Chamar Action 1</button>
            <button onClick={handleAction2}>Chamar Action 2</button>
            <button onClick={handleDelete}>Deletar Usuário 1</button>
            <button onClick={handleDelete2}>Deletar Usuário 2</button>
        </>
    );
}

export default Perfil;