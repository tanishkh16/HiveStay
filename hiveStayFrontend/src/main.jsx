import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux';
import store from './redux/Store.js';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/Store.js';

import './index.css'
import UserSetup from './redux/UserSetup.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>

      <UserSetup/>
    <App />
    </PersistGate>
    </Provider>
  </React.StrictMode>,
)
