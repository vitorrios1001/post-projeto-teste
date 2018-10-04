import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Router, hashHistory } from 'react-router'

import 'antd/dist/antd.css';

import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk'
//import promise from 'redux-promise'
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

//const store = createStore((reducers, devTools), applyMiddleware(middlewares));

ReactDOM.render(
    <Provider store={store}>
        {/* <App /> */}
        <Router  routes={routes} history={hashHistory}  />
    </Provider>
    , document.getElementById('root'));
serviceWorker.unregister();
