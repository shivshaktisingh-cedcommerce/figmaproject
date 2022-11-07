import React from 'react';
import ReactDOM from 'react-dom/client';
import '@shopify/polaris/build/esm/styles.css';
import { AppProvider } from '@shopify/polaris';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.min.css';
import App from "./App";
import enTranslations from '@shopify/polaris/locales/en.json';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider i18n={enTranslations}>
    <Provider store={store}>
      <BrowserRouter> 
        <App />
       </BrowserRouter>
    </Provider>
  </AppProvider>
    

);

