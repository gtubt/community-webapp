import React from "react";

import search from "../assets/search.svg";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="blog-header py-3">
      <div className="row flex-nowrap justify-content-between align-items-center">
        <div className="col-4 pt-1">
          <Link className="text-muted" to={"/subscribe"}>
            Subscribe
          </Link>
        </div>
        <div className="col-4 text-center">
          <Link className="blog-header-logo text-dark" to={"/"}>
            GTUBT
          </Link>
        </div>
        <div className="col-4 d-flex justify-content-end align-items-center">
          <a className="text-muted" href="#">
            <img className={"mx-3"} src={search} alt={"search img"} />
          </a>
          <Link className="btn btn-sm btn-outline-secondary" to={"/auth"}>
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
