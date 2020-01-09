import React from "react";
import { connect } from "react-redux";

import Log from "./Log";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

function LogContainer(props) {
  const { tasksList, classes } = props;
  const { cyanogenRow, violetCell, noTasks, tasksButton } = classes;

  return (
    <Log
      cyanogenRow={cyanogenRow}
      tasksButton={tasksButton}
      violetCell={violetCell}
      tasksList={tasksList}
      noTasks={noTasks}
    />
  );
}

const mapStateToProps = ({ tasksLog }) => {
  return {
    tasksList: tasksLog.tasksList
  };
};

export default connect(mapStateToProps)(withStyles(styles)(LogContainer));
