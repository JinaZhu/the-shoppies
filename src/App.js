import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Nominees from "./pages/Nominees";

function App() {
  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/nominees" component={Nominees} />
      </Switch>
    </Router>
  );
}

export default App;
