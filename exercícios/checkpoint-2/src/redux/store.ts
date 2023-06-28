import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import charactersReducer from "./reducers/characters-reducer";
import createSagaMiddleware from "redux-saga";
import combineSagas from "./reducers/sagas";

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({ characterReducer: charactersReducer });

const store = legacy_createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(combineSagas);

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
