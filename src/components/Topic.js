import React from "react";
import moment from "moment";

function Topic({ id, title, content, create_at, author_id }) {
  return (
    <div className="blog-post">
      <h2 className="blog-post-title">{title}</h2>
      <p className="blog-post-meta">
        {moment.unix(create_at).format("YYYY-MM-DD")} <a href="#">{author_id}</a>
      </p>
      <div className={"blog-post-content"} dangerouslySetInnerHTML={{ __html: JSON.parse(content) }} />
    </div>
  );
}

export default Topic;
