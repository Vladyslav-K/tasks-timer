import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import { deleteTask } from "../../domain/actions";

import TasksList from "./TasksList";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

function TasksListContainer({ deleteTask, tasksList, classes }) {
  return (
    <TasksList
      deleteTask={deleteTask}
      tasksList={tasksList}
      classes={classes}
    />
  );
}

const mapStateToProps = ({ tasksList }) => {
  return {
    tasksList
  };
};

export default compose(
  connect(mapStateToProps, { deleteTask }),
  withStyles(styles)
)(TasksListContainer);
