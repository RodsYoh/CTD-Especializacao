import {legacy_createStore,combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import { charactersReducer } from '../reducers/charactersReducer';


const combine = combineReducers({todo:charactersReducer})

export const store = legacy_createStore(combine, applyMiddleware(thunk))


// import { legacy_createStore } from 'redux';
// import mainReducer from './reducers';

// const store = legacy_createStore(mainReducer);

// export default store;