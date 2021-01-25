import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js'
import store from './state_management/store.js';
import {Provider} from 'react-redux';
import { createBrowserHistory } from 'history'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={createBrowserHistory()}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
