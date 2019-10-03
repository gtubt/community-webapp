import React from "react";

function Pagination(props) {
  return (
    <nav className="blog-pagination">
      <a className="btn btn-outline-primary" href="#">
        Older
      </a>
      <a className="btn btn-outline-secondary disabled" href="#">
        Newer
      </a>
    </nav>
  );
}

export default Pagination;
