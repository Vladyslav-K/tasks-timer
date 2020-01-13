import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import CurrentTask from "./CurrentTask";
import CurrentTaskChart from "./CurrentTaskChart";
import createTaskChartData from "./createTaskChartData";

import Grid from "@material-ui/core/Grid";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

function CurrentTaskContainer(props) {
  const { tasksList, match, classes } = props;

  const task = tasksList.find(task => task.id === Number(match.params.id));

  if (!task) {
    return <Redirect to={"/404"} />;
  }

  const dataForChart = createTaskChartData(task);

  return (
    <Grid container alignItems="center" direction="column">
      <CurrentTask task={task} classes={classes} />
      <CurrentTaskChart dataForChart={dataForChart} />
    </Grid>
  );
}

const mapStateToProps = ({ timer: { tasksList } }) => {
  return {
    tasksList
  };
};

export default connect(mapStateToProps)(
  withStyles(styles)(CurrentTaskContainer)
);
