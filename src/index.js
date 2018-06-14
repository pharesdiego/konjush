import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import Store from './store/konjushStore';


const render = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>, document.getElementById('root')
  )
}

Store.subscribe(() => {
  try{
    window.localStorage.setItem('store', JSON.stringify(Store.getState()))
  }
  catch(e){
    console.log('your browser cant handle window.localStorage');
  }
  render();
});
render();

registerServiceWorker();
