import React from 'react';
import ReactDOM from 'react-dom/client';
import '@shopify/polaris/build/esm/styles.css';
import { AppProvider } from '@shopify/polaris';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import App from "./App"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <Provider store={store}>
      <BrowserRouter> 
        <App />
       </BrowserRouter>
    </Provider>
  </AppProvider>
    

);

