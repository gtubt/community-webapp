import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { useStore } from "./store/useStore";

import Admin from "./containers/Admin";
import Main from "./containers/Main";
import Auth from "./containers/Auth";
import Topics from "./containers/Topics";
import Posts from "./containers/Posts";
import NotFound from "./containers/NotFound";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./containers/Footer";
import Subscribe from "./components/Subscribe";
import NavAdmin from "./components/NavAdmin";

function App({ match }) {
  const { state } = useStore();
  console.debug(state);

  return (
    <Router>
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/subscribe" component={Subscribe} />
        <Route
          component={({ match }) => (
            <>
              {state.auth && state.user.is_admin ? <NavAdmin /> : null}
              <Header />
              <Nav />
              <Route path="/" component={Main} exact />
              <Route path="/topics/:topic" component={Topics} />
              <Route path="/posts/:post" component={Posts} />
              <Footer />
            </>
          )}
        />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
