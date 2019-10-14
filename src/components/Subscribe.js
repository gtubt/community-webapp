import React from "react";
import { Link } from "react-router-dom";

import "./Subscribe.css";

function Subscribe(props) {
  return (
    <div className="h-100 py-3">
      <div>
        <Link className="btn btn-link" to={"/"}>
          Back
        </Link>
      </div>

      <div className="row h-100 justify-content-center align-items-center">
        <form className="form col-12">
          <div className="form-group">
            <h1 className="h3 mb-3 font-weight-normal">Subscribe</h1>
            <input
              type="email"
              className="form-control form-control-lg"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Subscribe;
