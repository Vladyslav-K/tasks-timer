import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Task from "./Task";
import TaskChart from "./TaskChart";
import createTaskChartData from "./createTaskChartData";

import { saveCurrentTask } from "../../store/Log/actions";

import Grid from "@material-ui/core/Grid";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

function TaskContainer(props) {
  const { tasksList, match, classes } = props;

  const task = tasksList.find(task => task.id === Number(match.params.id));

  if (!task) {
    return <Redirect to={"/404"} />;
  }

  const dataForChart = createTaskChartData(task);

  return (
    <Grid container alignItems="center" direction="column">
      <Task task={task} classes={classes} />
      <TaskChart dataForChart={dataForChart} />
    </Grid>
  );
}

const mapStateToProps = ({ tasksLog }) => {
  return {
    tasksList: tasksLog.tasksList,
    task: tasksLog.task
  };
};

const mapDispatchToProps = { saveCurrentTask };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(TaskContainer));
