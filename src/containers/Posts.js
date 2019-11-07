import React, { useState, useEffect } from "react";
import Post from "components/Post";

function Posts({ match }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const posts = JSON.parse(localStorage.getItem("posts")).filter(function(post) {
      return post.id === match.params.post;
    });
    setPosts(posts);
    console.debug(posts);
  }, [match.params.post]);

  console.debug(posts);
  return posts.map(post => <Post key={post.id} {...post} />);
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
