import React from "react";
import { connect } from "react-redux";

import { saveCurrentTask, setTasksListValue } from "../../store/Log/actions";

import Log from "./Log";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

function LogContainer(props) {
  const { saveCurrentTask, setTasksListValue, tasksList, classes } = props;

  const deleteCurrentTask = id => {
    const tasksListWithoutCurrentTask = tasksList.filter(
      task => task.id !== id
    );

    setTasksListValue(tasksListWithoutCurrentTask);
  };

  return (
    <Log
      deleteCurrentTask={deleteCurrentTask}
      saveCurrentTask={saveCurrentTask}
      tasksList={tasksList}
      classes={classes}
    />
  );
}

const mapStateToProps = ({ tasksLog }) => {
  return {
    tasksList: tasksLog.tasksList
  };
};

const mapDispatchToProps = { saveCurrentTask, setTasksListValue };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(LogContainer));
