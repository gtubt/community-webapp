import React, { useContext } from 'react';

import { StoreContext } from '../store/useStore';

import useFormInput from '../hooks/useFormInput';

import './Login.css';
import logo from '../logo.svg';

function Login() {
	const { dispatch } = useContext(StoreContext);

	const email = useFormInput('');
	const password = useFormInput('');

	const handleSubmit = async e => {
		e.preventDefault();

		const data = await fetch('/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: email.value,
				password: password.value
			})
		});

		const result = await data.json();
		if (result.success) {
			dispatch({
				type: 'LOGIN',
				payload: result.token
			});
		}
	};

	// Check login token
	if (localStorage.getItem('token')) {
		dispatch({
			type: 'LOGIN',
			payload: localStorage.getItem('token')
		});
	}

	if (localStorage) {
		return (
			<div className="container">
				<form className="form-signin text-center" onSubmit={handleSubmit}>
					<img
						className="mb-4"
						// src="https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg"
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
						type="email"
						id="inputEmail"
						className="form-control"
						placeholder="Email"
						required
						autoFocus
						{...email}
					/>
					<label htmlFor="inputPassword" className="sr-only">
						Password
					</label>
					<input
						type="password"
						id="inputPassword"
						className="form-control"
						placeholder="Şifre"
						required
						{...password}
					/>
					<div className="checkbox mb-3">
						<label>
							<input type="checkbox" value="remember-me" /> Beni hatırla
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

	return (
		<div className={['container', 'mt-5'].join(' ')}>
			<div className="row">
				<div className="col">
					<h1>Admin Panel</h1>
				</div>
			</div>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<input
						type="email"
						className="form-control"
						aria-describedby="emailHelp"
						placeholder="Email"
						autoComplete="true"
						{...email}
					/>
				</div>
				<div className="form-group">
					<input type="password" className="form-control" placeholder="Şifre" autoComplete="true" {...password} />
				</div>
				<button type="submit" className="btn btn-primary">
					Giriş yap
				</button>
			</form>
		</div>
	);
}

export default Login;
