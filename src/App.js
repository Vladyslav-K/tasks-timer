import React from "react";

import TasksTimer from "./components/TasksTimer";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Redirect to={"/tasks/log"} />} />
        <Route path={"/tasks/log"} component={TasksTimer} />
        <Route path={"/tasks/chart"} component={TasksTimer} />
      </Switch>
    </Router>
  );
}

export default App;
