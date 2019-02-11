import './style/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './store';
import App from './cmp/App';

var user = JSON.parse(window.localStorage.getItem('user'));
var token = JSON.parse(window.localStorage.getItem('token'));
var authenticated = JSON.parse(window.localStorage.getItem('authenticated'))
        
if (user && token && authenticated) {
    store.dispatch({
        type: 'KEEP_LOGGED_IN',
        payload: {
            user,
            token,
            authenticated
        }
    })
}

ReactDOM.render(
    <Provider store = {store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);