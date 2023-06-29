import {call, all, takeLatest, put} from "redux-saga/effects";
import { Character } from "../../../components/characterTypes";
import axios from "axios";

type Data = {
    info: Array<string>;
    results: Array<Character>;
}

type ResponseGenerator = {
    config?: unknown;
    data?: Data;
    headers?: unknown;
    request?: unknown;
    status?: number;
    statusText?: string;
  };

async function getCharacters(){
    return await axios.get("https://rickandmortyapi.com/api/character?page=1");
}

function* getCharactersSaga(){
    try {
    const response: ResponseGenerator = yield call(getCharacters);
    yield put({type:"GET_CHARACTERS", payload: response.data})
    } catch (error) {
        console.log("Erro ao buscar personagens");
    }
}

export default all([takeLatest("GET_CHARACTERS", getCharactersSaga)]);