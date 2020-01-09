import React from "react";
import { connect } from "react-redux";

import Alert from "./Alert";

import { openAlertWindow } from "../../store/Alert/actions";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

function AlertContainer(props) {
  const { taskNameIsEmpty, openAlertWindow, classes } = props;

  const {
    buttonContainer,
    modalContainer,
    modalContent,
    alertContent,
    alertName,
    modal
  } = classes;

  return (
    <Alert
      openAlertWindow={openAlertWindow}
      buttonContainer={buttonContainer}
      taskNameIsEmpty={taskNameIsEmpty}
      modalContainer={modalContainer}
      modalContent={modalContent}
      alertContent={alertContent}
      alertName={alertName}
      modal={modal}
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
