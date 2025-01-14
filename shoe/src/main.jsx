import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import store from './Store/store';

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  //이제 store.jsx에 존재하는 많은 state들은 app.jsx를 포함한 그 아래 하위 요소들은 전부다
  //props 없이도 사용이 가능
  <Provider store={store}>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        {' '}
        {/* React Query Provider */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </React.StrictMode>
  </Provider>
);
