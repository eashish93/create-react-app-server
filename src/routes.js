import React from "react";
import {Route, IndexRoute} from "react-router";
import App from "./App";
import Home from "./Home";
import Request from 'superagent';


function fetchData(nextState, callback) {
    // Using online fake api calls.
    return Request('https://jsonplaceholder.typicode.com/users').then((res) => {
        callback(null, () => <Home meta={JSON.parse(res.text)}/>);
    })
}

export default (
    <Route component={App} path="/">
        <IndexRoute getComponent={fetchData}/>
    </Route>
);
