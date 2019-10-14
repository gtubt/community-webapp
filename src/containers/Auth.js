import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { StoreContext } from "store/useStore";

import useFormInput from "hooks/useFormInput";

import "containers/Auth.css";
import logo from "assets/logo.svg";

function Auth() {
  const { dispatch } = useContext(StoreContext);

  const email = useFormInput("");
  const password = useFormInput("");

  const handleSubmit = async e => {
    e.preventDefault();

    const data = await fetch(`/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value
      })
    });

    const result = await data.json();
    if (result.success) {
      dispatch({
        type: "LOGIN",
        payload: result.data
      });
    }
  };

  return (
    <>
      <div className="py-3">
        <Link className="btn btn-link" to={"/"}>
          Back
        </Link>
      </div>
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
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label htmlFor="inputEmail" className="sr-only">
            E-Mail address
          </label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="E-Mail"
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
            placeholder="Password"
            required
            {...password}
          />
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Sign in
          </button>
        </form>
      </div>
    </>
  );
}

export default Auth;
