import React from 'react';
import logo from './logo.svg';
import './LoginPage.css';

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.email === 'student@gtu.edu.tr' && this.state.password === '1') {
            this.props.callback(true)
        }
    }

    render() {
        return (
            <div className="container">
                <form className="form-signin text-center" onSubmit={this.handleSubmit}>
                    <img
                        className="mb-4"
                        src={logo}
                        alt=""
                        width="144"
                        height="144"
                    />
                    <h1 className="h3 mb-3 font-weight-normal">Giriş yapın</h1>
                    <label htmlFor="inputEmail" className="sr-only">
                        Email address
                    </label>
                    <input
                        name="email"
                        type="email"
                        id="inputEmail"
                        className="form-control"
                        placeholder="Email"
                        required
                        autoFocus
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="inputPassword" className="sr-only">
                        Password
                    </label>
                    <input
                        name="password"
                        type="password"
                        id="inputPassword"
                        className="form-control"
                        placeholder="Şifre"
                        required
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me"/> Beni hatırla
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">
                        Giriş yap
                    </button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
                </form>
            </div>
        );
    }
}