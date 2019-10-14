import React from "react";
import { Link } from "react-router-dom";
import date from "../modules/date";

function PostBig({ id, image, title, content, create_at, author }) {
  // const data = JSON.parse(content);
  // console.debug(JSON.parse(content));
  return (
    <div
      className="jumbotron p-3 p-md-5 text-white rounded bg-dark"
      style={{ background: `url(${image}) no-repeat center center` }}
    >
      <div className="col-md-6 px-0">
        <h1 className="display-4 font-italic">{title}</h1>
        <div className="mb-1 text-muted">{date(create_at)}</div>
        {/*<p className="lead my-3">{data.substring(0, 32)}</p>*/}
        <p className="lead mb-0">
          <Link to={`/posts/${id}`} className="text-white font-weight-bold">
            Continue reading...
          </Link>
        </p>
      </div>
    </div>
  );
}

export default PostBig;
