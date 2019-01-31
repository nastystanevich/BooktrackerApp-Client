import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.scss';
import App from './Components/App';


ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
),document.getElementById('root'));
