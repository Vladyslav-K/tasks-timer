import React, { Component } from "react";
import { connect } from "react-redux";

import { openAlertWindow } from "../../store/Alert/actions";

import Alert from "./Alert";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class AlertContainer extends Component {
  render() {
    const { taskNameIsEmpty, openAlertWindow, classes } = this.props;

    return (
      <Alert
        openAlertWindow={openAlertWindow}
        taskNameIsEmpty={taskNameIsEmpty}
        classes={classes}
      />
    );
  }
}

const mapStateToProps = ({ alert: { taskNameIsEmpty } }) => {
  return {
    taskNameIsEmpty
  };
};

const mapDispatchToProps = { openAlertWindow };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(AlertContainer));
