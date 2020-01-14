import React from "react";
import {
  HashRouter as Router,
  Redirect,
  Switch,
  Route
} from "react-router-dom";

import PageNotFound from "../PageNotFound";
import TabsAndTimer from "../TabsAndTimer";
import Task from "../../components/CurrentTask";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/tasks" />} />
        <Route path="/tasks" exact component={TabsAndTimer} />
        <Route path="/tasks/:id" exact component={Task} />
        <Route path="/chart" exact component={TabsAndTimer} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
