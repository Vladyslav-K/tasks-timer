import React from "react";

import Modal from "@material-ui/core/Modal";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export default function Alert(props) {
  const {
    openAlertWindow,
    buttonContainer,
    taskNameIsEmpty,
    modalContainer,
    modalContent,
    alertContent,
    alertName,
    modal
  } = props;

  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={taskNameIsEmpty}
      className={modalContainer}
    >
      <div className={modal}>
        <Grid container className={modalContent}>
          <Typography variant="h6" id="modal-title" className={alertName}>
            Empty task name
          </Typography>
          <Typography
            variant="subtitle1"
            id="simple-modal-description"
            className={alertContent}
          >
            You are trying close your task without name, enter the title and try
            again!
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
