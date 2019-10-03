import React from "react";
import Post from "../components/Post";
import Sidebar from "./Sidebar";
import Pagination from "../components/Pagination";

function Main(props) {
  return (
    <main className={"container"} role={"main"}>
      <div className="row">
        <div className="col-md-8 blog-main">
          <h3 className="pb-3 mb-4 font-italic border-bottom">From the Firehose</h3>

          <Post />
          <Post />
          <Post />

          <Pagination />
        </div>

        <Sidebar />
      </div>
    </main>
  );
}

export default Main;
