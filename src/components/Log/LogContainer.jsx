import React from "react";
import { connect } from "react-redux";

import Log from "./Log";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

function LogContainer(props) {
  const { tasksList, classes } = props;

  return <Log tasksList={tasksList} classes={classes} />;
}

const mapStateToProps = ({ tasksLog }) => {
  return {
    tasksList: tasksLog.tasksList
  };
};

export default connect(mapStateToProps)(withStyles(styles)(LogContainer));
