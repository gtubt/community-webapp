import React from "react";

import { Switch, Route, Link } from "react-router";

import Topic from "../components/Topic";
import Post from "../components/Post";

function Posts({ match }) {
  console.debug(match);

  let post = null;
  React.useEffect(() => {
    const map_restored = new Map(JSON.parse(localStorage.getItem("posts")));
    post = map_restored.get(match.params.post);
  }, [match.params.post]);

  return <Post {...post} />;
}

export default Posts;

// // TODO: Burası halledilecek!
// let map = new Map();
// for (const post of result.data) {
//   map.set(post.id, post);
// }
// console.debug(map);
// // console.debug(JSON.stringify([...map]));
//
// localStorage.setItem("posts", JSON.stringify([...map]));
// const map_restored = new Map(JSON.parse(localStorage.getItem("posts")));
// ;
// for (const value of map_restored.values()) {
//   console.debug("map_restored", value);
// }
