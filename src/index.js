import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux'
import Navbar from './features/navigation/Navbar';
import Footer from './features/navigation/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Navbar />
      <App />
      <Footer />
    </Provider>
  </React.StrictMode>
);


