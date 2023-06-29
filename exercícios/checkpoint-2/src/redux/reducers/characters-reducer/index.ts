import { Action, State } from "./types";

const INITIAL_STATE: State ={
    info:['default'],
    results:[],
};

export default function charactersReducer(state = INITIAL_STATE, action: Action){
    
    if(action.type === "GET_CHARACTERS"){
        return {...state, results: action.payload};
    }
    
    return state;
}


// import { combineReducers } from 'redux';

// const mainReducer = combineReducers({
// });

// export default mainReducer;