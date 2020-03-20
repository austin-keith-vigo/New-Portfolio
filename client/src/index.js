import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Redux imports
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './Reducers';

// React Router IMports
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
