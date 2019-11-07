import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <div className="nav-scroller py-1 mb-2">
      <nav className="nav d-flex justify-content-between">
        <Link className="p-2 text-muted" to={"/topics/os"}>
          OS
        </Link>
        <Link className="p-2 text-muted" to={"/topics/web"}>
          Web
        </Link>
        <Link className="p-2 text-muted" to={"/topics/tech"}>
          Technology
        </Link>
        <Link className="p-2 text-muted" to={"/topics/robotic"}>
          Robotic
        </Link>
        <Link className="p-2 text-muted" to={"/topics/startup"}>
          Startup
        </Link>
        <Link className="p-2 text-muted" to={"/topics/business"}>
          Business
        </Link>
        <Link className="p-2 text-muted" to={"/topics/meetup"}>
          Meetup
        </Link>
        <Link className="p-2 text-muted" to={"/topics/mobile"}>
          Mobile
        </Link>
        <Link className="p-2 text-muted" to={"/topics/science"}>
          Science
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
