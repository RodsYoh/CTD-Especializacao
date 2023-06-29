import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import rootReducer from './reducers';

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
