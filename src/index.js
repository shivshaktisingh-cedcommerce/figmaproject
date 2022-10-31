import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import '@shopify/polaris/build/esm/styles.css';
import { AppProvider } from '@shopify/polaris';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';


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

