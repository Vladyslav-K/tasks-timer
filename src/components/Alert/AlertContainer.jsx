import React from "react";
import { connect } from "react-redux";

import { openAlertWindow } from "../../store/Alert/actions";

import Alert from "./Alert";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

function AlertContainer(props) {
  const { taskNameIsEmpty, openAlertWindow, classes } = props;

  return (
    <Alert
      openAlertWindow={openAlertWindow}
      taskNameIsEmpty={taskNameIsEmpty}
      classes={classes}
    />
  );
}

const mapStateToProps = ({ alert }) => {
  return {
    taskNameIsEmpty: alert.taskNameIsEmpty
  };
};

const mapDispatchToProps = {
  openAlertWindow
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(AlertContainer));
