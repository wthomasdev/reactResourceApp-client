/* eslint-disable no-console */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css'

const store = configureStore();

render(
  <Provider store={store}>
  <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
