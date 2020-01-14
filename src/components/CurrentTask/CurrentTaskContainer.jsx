import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import CurrentTask from "./CurrentTask";
import CurrentTaskChart from "./CurrentTaskChart";
import createTaskChartData from "./createTaskChartData";

import Grid from "@material-ui/core/Grid";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class CurrentTaskContainer extends Component {
  render() {
    const { tasksList, match, classes } = this.props;

    const task = tasksList.find(task => task.id === Number(match.params.id));

    return (
      <>
        {task ? (
          <Grid container alignItems="center" direction="column">
            <CurrentTask task={task} classes={classes} />
            <CurrentTaskChart dataForChart={createTaskChartData(task)} />
          </Grid>
        ) : (
          <Redirect to={"/404"} />
        )}
      </>
    );
  }
}

const mapStateToProps = ({ timer: { tasksList } }) => {
  return {
    tasksList
  };
};

export default connect(mapStateToProps)(
  withStyles(styles)(CurrentTaskContainer)
);
