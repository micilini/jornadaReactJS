import { all } from 'redux-saga/effects';
import sagaUser from './user/sagaUser';//Importe aqui os sagas que você quer exportar

export default function* rootSaga(){
    return yield all([
        sagaUser//Passe todos os seus sagas utilizando virgula!
    ])
}