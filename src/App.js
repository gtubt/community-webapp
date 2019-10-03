import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Slider from "./components/Slider";
import SubTopics from "./components/SubTopics";
import Main from "./containers/Main";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Nav />
        <Slider />
        <SubTopics />
      </div>
      <Main />
    </>
  );
}

export default App;
