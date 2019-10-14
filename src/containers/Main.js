import React from "react";

import Sidebar from "containers/Sidebar";

import Post from "components/Post";
import Pagination from "components/Pagination";
import PostBig from "components/PostBig";
import PostSmall from "components/PostSmall";
import Loader from "components/Loader";

import { useStore } from "store/useStore";

function Main(props) {
  const { state, dispatch } = useStore();
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`/api/posts?p=${page}`);
      const result = await data.json();
      console.debug("fetch", result);
      if (result.success) {
        localStorage.setItem("posts", JSON.stringify(result.data));
        setPosts(result.data);
        setIsLoaded(true);
      }
    };

    fetchData();
  }, [page, state.posts]);

  if (!isLoaded) {
    return (
      <main role={"main"}>
        <Loader />
      </main>
    );
  }

  return (
    <main role={"main"}>
      <div className={"row mb-2"}>
        {posts.map((post, index) => {
          if (4 < index) {
            return null;
          }

          if (index === 0) {
            return (
              <div key={post.id} className={"col-12"}>
                <PostBig {...post} />
              </div>
            );
          }

          return (
            <div key={post.id} className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <PostSmall {...post} />
            </div>
          );
        })}
      </div>
      <div className="row">
        <div className="col-md-8 blog-main">
          <h3 className="pb-3 mb-4 font-italic border-bottom">From the GTU BT Community</h3>
          {posts.map((post, index) => {
            if (4 < index) {
              return <Post key={post.id} {...post} />;
            }
          })}
          <Pagination callback={setPage} />
        </div>
        <Sidebar />
      </div>
    </main>
  );
}

export default Main;
