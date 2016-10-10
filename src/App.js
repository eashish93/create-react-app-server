import React from "react";
import './App.css';         // It works in server side also.
import logo from './logo.svg';

class App extends React.Component {
    render() {
        return (
            <div>
                <h5>Images also supported in universal rendering</h5>
                <img src={logo} width="48" height="48" alt="react-logo"/>
                {this.props.children}
            </div>
        );
    }
}

export default App;
