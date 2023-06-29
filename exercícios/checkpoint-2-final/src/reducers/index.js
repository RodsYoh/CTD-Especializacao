import { combineReducers } from 'redux';
import { charactersReducer } from './charactersReducer';

const combineReducer = combineReducers({
  charactersReducer,
});

export default combineReducer;
