import React, { Component } from "react";
import { Link, Route, withRouter } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import Timer from "../Timer";
import Chart from "../Chart";
import Log from "../Log";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class TasksTimer extends Component {
  constructor(props) {
    super(props);

    const { location } = props;

    const currentTab = (location.pathname === "/tasks/chart" && "Chart") || "Log";

    this.state = {
      currentTab
    };
  }

  onChangeTab = (event, value) => {
    this.setState({
      currentTab: value
    });
  };

  render() {
    const { currentTab } = this.state;
    const { tasksTimerContainer, tabsContainer } = this.props.classes;
    return (
      <div className={tasksTimerContainer}>
        <Grid container justify="center">
          <Grid item xs={12} lg={10}>
            <Timer />
          </Grid>
          <Grid item xs={12} lg={10}>
            <section>
              <AppBar position="relative" className={tabsContainer}>
                <Tabs
                  variant="fullWidth"
                  onChange={this.onChangeTab}
                  value={currentTab}
                >
                  <Tab
                    value="Log"
                    label="Tasks log"
                    component={Link}
                    to={"/tasks/log"}
                  />
                  <Tab
                    value="Chart"
                    label="Tasks chart"
                    component={Link}
                    to={"/tasks/chart"}
                  />
                </Tabs>
              </AppBar>

              <Route path={"/tasks/chart"} component={Chart} />
              <Route path={"/tasks/log"} component={Log} />
            </section>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(TasksTimer));
