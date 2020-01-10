import React from "react";
import { connect } from "react-redux";

import createChartData from "./createChartData";
import { generateRandomTasks } from "../../store/Log/actions";

import Chart from "./Chart";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { DateTime } from "luxon";

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min + 1);
};

function ChartContainer(props) {
  const { generateRandomTasks, tasksList, classes } = props;

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

    generateRandomTasks(data);
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

const mapDispatchToProps = { generateRandomTasks };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ChartContainer));
