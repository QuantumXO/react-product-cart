'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// React router
import { HashRouter, BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

const rootEl = document.querySelector('#root');

import configureStore, { history } from './store/configureStore';

const store = configureStore();

import App from './containers/appContainer';

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,
    rootEl
);


if (module.hot) {
    module.hot.accept();
}
