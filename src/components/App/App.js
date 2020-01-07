import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import TasksTimer from "../TasksTimer";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={TasksTimer} />
        <Route path="/chart" exact component={TasksTimer} />
      </Switch>
    </Router>
  );
}

export default App;
