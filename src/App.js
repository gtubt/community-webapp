import React from 'react';
import './App.css';

import HomePage from "./pages/HomePage";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLogin: false,
            email: "",
            password: "",
            error: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {

        if (this.state.email === "user@gtu.edu.tr" && this.state.password === "123") {
            this.setState({isLogin: true})
        } else {
            this.setState({error: true})
        }
        event.preventDefault();
    }

    render() {

        if (!this.state.isLogin) {
            return (
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email:
                        <input type="text" value={this.state.email}
                               onChange={event => this.setState({email: event.target.value})}/>
                    </label>
                    <label>
                        Password:
                        <input type="text" value={this.state.password}
                               onChange={event => this.setState({password: event.target.value})}/>
                    </label>
                    <input type="submit" value="Submit"/>
                    {this.state.error ?
                        <div className="alert alert-danger" role="alert">Wrong username or password !</div> : null}
                </form>
            );

        }

        return (<HomePage/>)
    }

}

export default App;
