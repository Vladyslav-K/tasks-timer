import { DateTime, Interval } from "luxon";

const createTaskChartData = task => {
  const chartData = [];

  const findStartTime = () => {
    const taskStartDateFromISO = DateTime.fromISO(task.timerStartTime);
    const { hour, minute, second } = taskStartDateFromISO;
    return { hour, minute, second };
  };

  const findStopTime = () => {
    const taskStopDateFromISO = DateTime.fromISO(task.timerStopTime);
    const { hour, minute, second } = taskStopDateFromISO;
    return { hour, minute, second };
  };

  const taskForChart = [
    { startTime: findStartTime(), stopTime: findStopTime() }
  ];

  for (let hour = 0; hour < 24; hour++) {
    const hourStart = DateTime.fromObject({ hour, minute: 0, second: 0 });
    const hourEnd = DateTime.fromObject({ hour, minute: 59, second: 59 });
    const hourInterval = Interval.fromDateTimes(hourStart, hourEnd);

    const tasksTimeInThisHour = taskForChart.filter(task =>
      hourInterval.intersection(
        Interval.fromDateTimes(
          DateTime.fromObject(task.startTime),
          DateTime.fromObject(task.stopTime)
        )
      )
    );

    let tasksMinutesInThisHour = 0;

    if (tasksTimeInThisHour && tasksTimeInThisHour.length > 0) {
      tasksMinutesInThisHour = tasksTimeInThisHour.reduce(
        (accumulator, task) => {
          let tasksMinutes;
          const taskStartDateTime = DateTime.fromObject(task.startTime);
          const taskStopDateTime = DateTime.fromObject(task.stopTime);

          taskStartDateTime.hour === hour && taskStopDateTime.hour === hour
            ? (tasksMinutes = Interval.fromDateTimes(
                taskStartDateTime,
                taskStopDateTime
              )
                .toDuration("minutes")
                .toObject().minutes)
            : taskStartDateTime.hour === hour
            ? (tasksMinutes = 60 - taskStartDateTime.minute)
            : taskStopDateTime.hour === hour
            ? (tasksMinutes = taskStopDateTime.minute)
            : (tasksMinutes = 60);

          return accumulator + Math.round(tasksMinutes);
        },
        0
      );
    }
    chartData.push({
      hour,
      minutes: 60,
      tasksTimeInThisHour: Math.round(tasksMinutesInThisHour) || 0
    });
  }

  return chartData;
};

export default createTaskChartData;
