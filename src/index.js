import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './styles/index.scss';
import App from './components/App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {logInReducer} from './reducers';

let store = createStore(logInReducer);

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
),
document.getElementById('root'));
