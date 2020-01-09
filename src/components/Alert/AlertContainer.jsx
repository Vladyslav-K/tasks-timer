import React from "react";
import { connect } from "react-redux";

import Alert from "./Alert";

import { taskNameIsEmpty } from "../../store/Alert/actions";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

function AlertContainer(props) {
  const { emptyTaskName, taskNameIsEmpty, classes } = props;

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
      taskNameIsEmpty={taskNameIsEmpty}
      buttonContainer={buttonContainer}
      modalContainer={modalContainer}
      emptyTaskName={emptyTaskName}
      modalContent={modalContent}
      alertContent={alertContent}
      alertName={alertName}
      modal={modal}
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
