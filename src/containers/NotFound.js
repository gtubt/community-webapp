import React from "react";

function NotFound({ location }) {
  return (
    <section className="my-3 justify-content-center">
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </section>
  );
}

export default NotFound;
