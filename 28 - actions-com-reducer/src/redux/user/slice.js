import { createSlice } from '@reduxjs/toolkit';

const InitialState = {
    user: {
        id: 1,
        name: 'Micilini Roll',
        site: 'https://micilini.com/'
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState: InitialState,//podemos passar de forma direta o initialState sem atribuir a uma variável
    reducers: {
        createUser: (state, action) => {
            //O State é o estado atual do reducer (objeto initialState). O action é o payload que passamos ao chamar a action. Lembrando que o payload nada mais é do que os dados que passamos para a action por meio dos nossos componentes.

            if(action.payload.id === 1){
                alert('O SEU ID NÃO PODE SER 1!');
                return {...state};
            }

            console.log(state.user);//Mostra o estado atual do usuário (objeto initialState)
            console.log(action.payload);//Mostra os resultados que estão no payload

            return {
                ...state,
                user: action.payload
            }
        },
        createUserSecond: (state, action) => {
            console.log(state.user);//Mostra o estado atual do usuário (objeto initialState)
            console.log(action.payload);//Mostra os resultados que estão no payload

            state.user = action.payload;//Aqui estamos alterando o estado do reducer. Estamos dizendo que o estado do usuário é igual ao payload que passamos ao chamar a action createUser.

            //Observação, quando modificamos nossa draft state, o Redux Toolkit faz uma verificação de imutabilidade para nós. Ou seja, não precisamos nos preocupar em retornar um novo objeto, o Redux Toolkit faz isso para nós. (Não usar o return aqui corrige o erro: 'Error: An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft')
        },
        deleteUser: (state) => {
            state.user = null;
        },
        deleteUserSecond: (state) => {
            return{
                ...state,
                user: null
            }
        }
    }
});

export const { createUser, createUserSecond, deleteUser, deleteUserSecond } = userSlice.actions;//Precisamos exportar as nossas actions para serem usadas dentro dos nossos componentes

export default userSlice.reducer;