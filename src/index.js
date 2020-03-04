import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<App />, document.getElementById('root'));

// to work offline and load faster, use register() 
// if strange behavior occurs, change back to unregisteryou can change
// Prog Web App / Service workers reference: https://bit.ly/CRA-PWA
serviceWorker.register();
