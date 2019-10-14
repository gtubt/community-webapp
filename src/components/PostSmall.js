import React from "react";
import { Link } from "react-router-dom";

import date from "modules/date";

function PostSmall({ id, image, title, content, create_at, author }) {
  return (
    <div className="card flex-md-row mb-4 box-shadow h-md-250">
      <div className="card-body d-flex flex-column align-items-start">
        {/*<strong className="d-inline-block mb-2 text-primary">OS</strong>*/}
        <h4 className="mb-0">
          <Link className="text-dark" to={`/posts/${id}`}>
            {title}
          </Link>
        </h4>
        <div className="mb-1 text-muted">{date(create_at)}</div>
        {/*<p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>*/}
        <Link to={`/posts/${id}`}>Continue reading</Link>
      </div>
      <img
        className="card-img-right flex-auto d-none d-md-block"
        data-src="holder.js/200x250?theme=thumb"
        alt={`thumbnail-${title}`}
        style={{ width: "200px", height: "250px" }}
        src={image}
        data-holder-rendered="true"
      />
    </div>
  );
}

export default PostSmall;
