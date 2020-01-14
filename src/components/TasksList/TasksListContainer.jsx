import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import { setTasksListValue } from "../../domain/actions";

import TasksList from "./TasksList";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class TasksListContainer extends Component {
  deleteCurrentTask = id => {
    const tasksListWithoutCurrentTask = this.props.tasksList.filter(
      task => task.id !== id
    );

    this.props.setTasksListValue(tasksListWithoutCurrentTask);
  };

  render() {
    const { tasksList, classes } = this.props;
    return (
      <TasksList
        deleteCurrentTask={this.deleteCurrentTask}
        tasksList={tasksList}
        classes={classes}
      />
    );
  }
}

const mapStateToProps = ({ tasksList }) => {
  return {
    tasksList
  };
};

const mapDispatchToProps = { setTasksListValue };

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(TasksListContainer);
