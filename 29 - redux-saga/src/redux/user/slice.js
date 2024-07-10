import { createSlice } from '@reduxjs/toolkit';

const InitialState = {
    nomes: null,
    loading: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState: InitialState,
    reducers: {
        fetchUser: (state) => {
            console.log('Action FetchUser chamada!');
            state.loading = true;
        },
        fetchSuccessUser: (state, action) => {
            console.log('Chamado deu sucesso!');
            console.log(action.payload);
            state.nomes = action.payload;
            state.loading = false;
        },
        fetchErrorUser: (state, action) => {
            console.log('Chamado deu erro!');
            console.log(action.payload);
            state.loading = false;
        },
        fetchSecondUser: (state) => {
            console.log('Action FetchSecondUser chamada!');
            state.loading = true;
        }
    }
});

export const { fetchUser, fetchSuccessUser, fetchErrorUser, fetchSecondUser } = userSlice.actions;

export default userSlice.reducer;