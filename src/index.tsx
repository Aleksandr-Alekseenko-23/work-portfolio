import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/store';
import GlobalStyles from './utils/globalStyles/GlobalStyles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="work-portfolio">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
    <GlobalStyles />
  </React.StrictMode>
);
