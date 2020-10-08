import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {configStore} from './reducer/configStore'

const Store = configStore()
console.log(Store)
ReactDOM.render(
  <Provider store = {Store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
