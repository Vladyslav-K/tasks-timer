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

  const startTime = findStartTime();
  const stopTime = findStopTime();

  for (let hour = 0; hour < 24; hour++) {
    const hourStart = DateTime.fromObject({ hour, minute: 0, second: 0 });
    const hourEnd = DateTime.fromObject({ hour, minute: 59, second: 59 });
    const hourInterval = Interval.fromDateTimes(hourStart, hourEnd);

    const tasksTimeInThisHour = [
      hourInterval.intersection(
        Interval.fromDateTimes(
          DateTime.fromObject(startTime),
          DateTime.fromObject(stopTime)
        )
      )
    ];

    let tasksMinutesInThisHour = 0;

    if (tasksTimeInThisHour) {
      const taskStartDateTime = DateTime.fromObject(startTime);
      const taskStopDateTime = DateTime.fromObject(stopTime);

      taskStartDateTime.hour === hour && taskStopDateTime.hour === hour
        ? (tasksMinutesInThisHour = Interval.fromDateTimes(
            taskStartDateTime,
            taskStopDateTime
          )
            .toDuration("minutes")
            .toObject().minutes)
        : taskStartDateTime.hour === hour
        ? (tasksMinutesInThisHour = 60 - taskStartDateTime.minute)
        : taskStopDateTime.hour === hour
        ? (tasksMinutesInThisHour = taskStopDateTime.minute)
        : (tasksMinutesInThisHour = 0);
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
