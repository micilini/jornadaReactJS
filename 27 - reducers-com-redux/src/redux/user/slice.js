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

    }
});

export default userSlice.reducer;