import React from "react";

import { Switch, Route, Link } from "react-router";

import Topic from "../components/Topic";

function Topics({ match }) {
  console.debug(match);

  const [topics, setTopics] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://b7363e74-5479-4676-9156-f02cff90ed52.mock.pstmn.io/topics/${match.params.topic}/posts`
      );
      const result = await data.json();
      console.debug(result);
      if (result.success) {
        setTopics(result.data);
      }
    };

    fetchData();
  }, [match.params.topic]);

  return (
    <>
      {topics.map((topic, index) => (
        <Topic key={index} {...topic} />
      ))}
    </>
  );
}

export default Topics;
