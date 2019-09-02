import React from 'react';
import logo from "./logo.svg";
import Nav from "./Nav";

export default class HomePage extends React.Component {

    render() {
        return (<div className="App">
            <Nav callbackLogout={this.props.callbackLogout}/>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>)
    }
};