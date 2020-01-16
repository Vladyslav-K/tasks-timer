import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";

import CurrentTask from "./CurrentTask";
import CurrentTaskChart from "./CurrentTaskChart";
import createTaskChartData from "./createTaskChartData";

import Grid from "@material-ui/core/Grid";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

function CurrentTaskContainer({ tasksList, match, classes }) {
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

const mapStateToProps = ({ tasksList }) => {
  return {
    tasksList
  };
};

export default compose(
  connect(mapStateToProps),
  withStyles(styles)
)(CurrentTaskContainer);
