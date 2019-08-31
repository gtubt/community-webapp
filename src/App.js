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
    }

    handleLogin(isLogined) {
        if (isLogined) {
            this.setState({isLogined})
        }
    }

    render() {
        if (!this.state.isLogined) {
            return (<LoginPage callback={this.handleLogin}/>);
        }

        return (<HomePage/>)
    }

}

export default App;
