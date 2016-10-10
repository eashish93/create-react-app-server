import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory, match} from "react-router";
import routes from './routes';
import './index.css';


// react-preset give error, so this.
const history = browserHistory;

// Wrap in match function, so that all async rendering resolved before executing routes.
match({ history, routes }, (error, redirectLocation, renderProps) => {
    ReactDOM.render(
        <Router {...renderProps}/>,
        document.getElementById('root')
    );

});
