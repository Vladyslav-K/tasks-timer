import React from "react";
import { connect } from "react-redux";
import { DateTime } from "luxon";

import createChartData from "./createChartData";
import { setTasksListValue } from "../../store/Log/actions";

import Chart from "./Chart";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min + 1);
};

function ChartContainer(props) {
  const { setTasksListValue, tasksList, classes } = props;

  const getRandomTasks = () => {
    const data = [];

    let timerStartTime = DateTime.fromObject({ hour: 0, minute: 0, second: 0 });
    let timerStopTime = null;

    const randomNumberOfTask = getRandom(10, 16);

    for (let task = 1; task < randomNumberOfTask; task++) {
      timerStartTime = timerStartTime.plus({
        seconds: getRandom(0, 60 * 60 * 1.5)
      });

      timerStopTime = timerStartTime.plus({
        seconds: getRandom(60 * 10, 60 * 60 * 1.5)
      });

      data.push({
        id: task,
        taskName: `Random task #${task}`,
        timerStartTime: timerStartTime,
        timerStopTime: timerStopTime
      });

      timerStartTime = timerStopTime;
    }

    setTasksListValue(data);
  };

  const data = createChartData(tasksList);

  return (
    <Chart getRandomTasks={getRandomTasks} chartData={data} classes={classes} />
  );
}
const mapStateToProps = ({ tasksLog }) => {
  return {
    tasksList: tasksLog.tasksList
  };
};

const mapDispatchToProps = { setTasksListValue };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ChartContainer));
