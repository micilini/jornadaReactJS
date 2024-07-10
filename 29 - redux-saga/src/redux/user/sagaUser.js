import { all, takeEvery, call, put, delay, takeLatest } from 'redux-saga/effects';
import { fetchSuccessUser, fetchErrorUser } from './slice';

import axios from 'axios';

function* fetchUser() {//Precisa ser o mesmo nome do action que faz o fetch
  try{
    yield delay(5000);//Adiciona um aguardo de 5 segundos...

    const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users');//Fazemos uma chamada com o call. Não é possível usar o axios diretamente aqui
    console.log(response.data);//mostramos a resposta no console
    yield put(fetchSuccessUser(response.data));//Chamamos a action fetchSuccessUser passando a resposta da chamada
  }catch(error){
    yield put(fetchErrorUser(error.message));//Caso der um erro na chamada, chamamos a action fetchErrorUser passando o erro
  }
}

function* fetchSecondUser(){
  try{
    const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users');//Fazemos uma chamada com o call. Não é possível usar o axios diretamente aqui
    console.log(response.data);//mostramos a resposta no console

    yield console.log('Implemente um fetchSuccessSecondUser para tratar o erro!');
  }catch(error){
    yield console.log('Implemente um fetchErrorSecondUser para tratar o erro!');
  }
}

export default all([
    takeLatest('user/fetchUser', fetchUser),
    takeEvery('user/fetchSecondUser', fetchSecondUser)
]);