import { useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(true);
    const navigate = useNavigate();

    //signIn é uma função usada para fazer login na aplicação. Ela é chamada de dentro do componente Login.
    const signIn = async (email, password) => {
        setLoadingAuth(true);
        try {
            const { data } = await axios.post('http://localhost/api-tokens/signIn.php', { email: email, password: password }, {withCredentials: true});//{withCredentials: true} é para permitir o uso de cookies do lado do servidor.

            setAccessToken(data.accessToken);//Seta o access_token que foi retornado na requisição dentro do estado do nosso contexto (Isso é salvar na memoria da aplicação).

            setLoadingAuth(false);//Seta o loadingAuth como false, para que o botão de login possa ser clicado novamente.

            navigate('/dashboard');//Redireciona o usuário para a rota /dashboard, pois a partir de agora o usuário está autenticado.
        } catch (error) {
            alert(error.response.data.message);//Se houver algum erro, eu mostro um alerta com a mensagem de erro que veio do back-end. (Aqui você poderia repassar para o componente de forma a mostrar tal informação de forma mais visual para o usuário.)

            setLoadingAuth(false);//Seta o loadingAuth como false, para que o botão de login possa ser clicado novamente.
            
            console.error(error);//Aqui eu mostro o erro no console, para que eu possa debugar o erro. (Isso deve ser removido em modo de produção.)
        }
    }

    //verifyToken é uma função usada para verificar se o token do usuário está válido ou não. Ela é chamada dentro do componente PrivateRoute sempre quando o usuário atualiza a página ou navega entre as rotas. A função retorna os dados do usuário em caso de sucesso e false em caso de erro.
    const verifyToken = async () => {
        console.log('VerifyToken called!');
        try {
            const { data } = await axios.get('http://localhost/api-tokens/authUser.php', {
                params: {
                    access_token: accessToken//Envio o access_token como parâmetro para a rota authUser.php.
                }
            });//Faço uma requisição para a rota authUser.php, passando o access_token como parâmetro de modo a validar se o token ainda está expirado ou não.

            setUserInfo(data);//Como ele retorna os dados do usuário, eu seto esses dados no estado do contexto. ()
            console.log(data);
            setLoadingAuth(false);//Seta o loadingAuth como false, para que o botão de login possa ser clicado novamente.

            return true;//Retorno true, pois o token está válido.
        } catch (error) {
            setLoadingAuth(false);//Seta o loadingAuth como false, para que o botão de login possa ser clicado novamente.
            return false;//Retorno false, pois o token está expirado.
        }
    }

    //refreshUser é uma função usada para gerar um novo access_token via refresh_token. Ela é chamada dentro do componente PrivateRoute sempre que o token do usuário está expirado (ou seja, quando a função verifyToken criada acima retorna FALSE). A função retorna true em caso de sucesso e false em caso de erro.
    const refreshUser = async () => {
        console.log('RefreshUser called!');
        try {
            const { data } = await axios.post('http://localhost/api-tokens/refreshUser.php', {}, {withCredentials: true});//Faço uma requisição para a rota refreshUser.php, de modo a gerar um novo access_token via refresh_token. {withCredentials: true} é para permitir o uso de cookies do lado do servidor.

            setAccessToken(data.accessToken);//Seto o novo access_token no estado do contexto.
            setUserInfo(data.user);//Seto os dados do usuário no estado do contexto.
            console.log(data.user);
            setLoadingAuth(false);//Seta o loadingAuth como false, para que o botão de login possa ser clicado novamente.

            return true;//Retorno true, pois o token foi gerado com sucesso.
        } catch (error) {
            setLoadingAuth(false);//Seta o loadingAuth como false, para que o botão de login possa ser clicado novamente.
            return false;//Retorno false, pois houve um erro ao tentar gerar o novo token.
        }
    }

    //logout é uma função usada para fazer logout na aplicação. Ela é chamada de dentro do componente Dashboard ou de qualquer outro componente que consiga acessar o contexto e precise deslogar o usuário.
    const logout = () => {
        try{
            axios.post('http://localhost/api-tokens/logout.php', {}, {withCredentials: true});//Faço uma requisição para a rota logout.php, de modo a deslogar o usuário no back-end. {withCredentials: true} é para permitir o uso de cookies do lado do servidor.
        } catch (error) {
            return false;//Retorno false, pois houve um erro ao tentar gerar o novo token.
        }finally{
            setAccessToken(null);
            setUserInfo(null);
            navigate('/');
        }
    }

    //O retorno do AuthContext.Provider é o que será disponibilizado para os componentes que estiverem dentro do AuthProvider.
    return(
        <AuthContext.Provider value={{ accessToken, userInfo, loadingAuth, signIn, logout, refreshUser, verifyToken }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
