import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router'

import 'antd/dist/antd.css';

import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk'
import multi from 'redux-multi'

import { Provider } from 'react-redux'
import reducers from './reducers/reducers';

import routes from './router/routes'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const middlewares = [
    thunk,
    multi
]

const store = applyMiddleware(...middlewares)(createStore)(reducers, devTools)


ReactDOM.render(
    <Provider store={store}>
        <Router  routes={routes} history={hashHistory}  />
    </Provider>
    , document.getElementById('root'));
