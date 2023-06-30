import ReactDOM from 'react-dom/client';
//import { Provider } from 'react-redux';
import App from './App';
//import { store } from './redux/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// );

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
);
