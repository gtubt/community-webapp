import React from 'react';
import './App.css';

import HomePage from "./HomePage";
import LoginPage from "./LoginPage";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLogined: false
        };

        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogin(isLogined) {
        if (isLogined) {
            this.setState({isLogined})
        }
    }

    handleLogout(wantLogout) {
        if (wantLogout) {
            this.setState({isLogined: false})
        }
    }

    render() {
        if (!this.state.isLogined) {
            return (<LoginPage callback={this.handleLogin}/>);
        }

        return (<HomePage callbackLogout={this.handleLogout}/>)
    }

}

export default App;
