import React from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";

import PageNotFound from "../PageNotFound/PageNotFound";
import TasksTimer from "../TasksTimer";
import Task from "../Task";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/tasks" />} />
        <Route path="/tasks" exact component={TasksTimer} />
        <Route path="/tasks/:id" exact component={Task} />
        <Route path="/chart" exact component={TasksTimer} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
