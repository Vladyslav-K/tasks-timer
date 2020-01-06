import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./store/reducers";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import TasksTimer from "./components/TasksTimer";

const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={TasksTimer} />
          <Route path="/chart" exact component={TasksTimer} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
