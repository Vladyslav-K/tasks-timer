import React, { memo } from "react";

import Modal from "@material-ui/core/Modal";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

function TaskNameWarning({
  setTaskNameIsEmpty,
  taskNameIsEmpty,
  classes: {
    buttonContainer,
    modalContainer,
    modalContent,
    alertContent,
    alertName,
    modal
  }
}) {
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
            You are trying close your task without name, enter the title and try
            again!
          </Typography>
        </Grid>

        <div className={buttonContainer}>
          <Button
            onClick={() => {
              setTaskNameIsEmpty(prevState => !prevState);
            }}
          >
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default withStyles(styles)(memo(TaskNameWarning));
