import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import './index.css';

const render = () => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>, document.getElementById('root')
  )
}

store.subscribe(() => {
  try{
    window.localStorage.setItem('store', JSON.stringify(store.getState()))
  }
  catch(e){
    console.log('your browser cant handle window.localStorage');
  }
  render();
});
render();

registerServiceWorker();
