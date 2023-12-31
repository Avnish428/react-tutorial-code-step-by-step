import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Provider from './context-api/Provider';

ReactDOM.render(
    <Provider>
        <App />
    </Provider>
    ,
    document.getElementById('root'))
