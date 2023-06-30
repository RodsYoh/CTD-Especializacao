import {legacy_createStore,combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import { charactersReducer } from '../reducers/charactersReducer';


const combine = combineReducers({charactersReducer:charactersReducer})

export const store = legacy_createStore(combine, applyMiddleware(thunk))