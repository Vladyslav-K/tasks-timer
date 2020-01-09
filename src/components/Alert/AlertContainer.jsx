import React from "react";
import { connect } from "react-redux";

import Alert from "./Alert";

import { taskNameIsEmpty } from "../../store/Alert/actions";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

function AlertContainer(props) {
  const { emptyTaskName, taskNameIsEmpty, classes } = props;

  return (
    <Alert
      taskNameIsEmpty={taskNameIsEmpty}
      emptyTaskName={emptyTaskName}
      classes={classes}
    />
  );
}

const mapStateToProps = ({ alert }) => {
  return {
    emptyTaskName: alert.emptyTaskName
  };
};

const mapDispatchToProps = {
  taskNameIsEmpty
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(AlertContainer));
