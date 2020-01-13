import React from "react";
import { Link, Route } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import Timer from "../../components/Timer";
import Alert from "../../components/Alert";
import TasksChart from "../../components/TasksChart";
import TasksList from "../../components/TasksList";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

function TasksTimer(props) {
  const { location, classes } = props;
  const { tasksTimerContainer, tabsContainer } = classes;

  const currentTab = location.pathname === "/chart" ? "Chart" : "Log";

  return (
    <div className={tasksTimerContainer}>
      <Grid container justify="center">
        <Grid item xs={12} lg={10}>
          <Alert />
          <Timer />
        </Grid>
        <Grid item xs={12} lg={10}>
          <section>
            <AppBar position="relative" className={tabsContainer}>
              <Tabs variant="fullWidth" value={currentTab}>
                <Tab
                  value="Log"
                  label="Tasks log"
                  component={Link}
                  to={"/tasks"}
                />
                <Tab
                  value="Chart"
                  label="Tasks chart"
                  component={Link}
                  to={"/chart"}
                />
              </Tabs>
            </AppBar>

            <Route path="/tasks" exact component={TasksList} />
            <Route path="/chart" exact component={TasksChart} />
          </section>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(TasksTimer);
