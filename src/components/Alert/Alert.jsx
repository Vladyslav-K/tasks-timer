import React, { PureComponent } from "react";

import Modal from "@material-ui/core/Modal";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export default class Alert extends PureComponent {
  render() {
    const { openAlertWindow, taskNameIsEmpty, classes } = this.props;

    const {
      buttonContainer,
      modalContainer,
      modalContent,
      alertContent,
      alertName,
      modal
    } = classes;

    return (
      <Modal
        aria-describedby="simple-modal-description"
        aria-labelledby="simple-modal-title"
        className={modalContainer}
        open={taskNameIsEmpty}
      >
        <div className={modal}>
          <Grid container className={modalContent}>
            <Typography variant="h6" id="modal-title" className={alertName}>
              Empty task name
            </Typography>
            <Typography
              id="simple-modal-description"
              className={alertContent}
              variant="subtitle1"
            >
              You are trying close your task without name, enter the title and
              try again!
            </Typography>
          </Grid>

          <div className={buttonContainer}>
            <Button
              onClick={() => {
                openAlertWindow(false);
              }}
            >
              Close
            </Button>
          </div>
        </div>
      </Modal>
    );
  }
}
