import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import Reducers from './redux/reducers'
import initState from './redux/initState'
import logger from './middleware/logger';

// redux配合路由
// import { BrowserRouter as Router, Route } from 'react-router-dom'

let store = createStore(Reducers, initState, applyMiddleware(logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
