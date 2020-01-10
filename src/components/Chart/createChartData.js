import { DateTime, Interval } from "luxon";

const createChartData = tasksList => {
  const chartData = [];

  for (let hour = 0; hour < 24; hour++) {
    const hourStart = DateTime.fromObject({ hour, minute: 0, second: 0 });
    const hourEnd = DateTime.fromObject({ hour, minute: 59, second: 59 });
    const hourInterval = Interval.fromDateTimes(hourStart, hourEnd);

    const tasksTimeInThisHour = tasksList.filter(task =>
      hourInterval.intersection(
        Interval.fromDateTimes(
          DateTime.fromISO(task.timerStartTime),
          DateTime.fromISO(task.timerStopTime)
        )
      )
    );

    let tasksMinutesInThisHour = 0;

    if (tasksTimeInThisHour.length > 0) {
      tasksMinutesInThisHour = tasksTimeInThisHour.reduce(
        (accumulator, task) => {
          let tasksMinutesInThisHour = 0;
          const taskStartDateTime = DateTime.fromISO(task.timerStartTime);
          const taskStopDateTime = DateTime.fromISO(task.timerStopTime);

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

          return accumulator + Math.round(tasksMinutesInThisHour);
        },
        0
      );
    }

    chartData.push({
      hour,
      minutes: 60,
      tasksTimeInThisHour: tasksMinutesInThisHour || 0
    });
  }

  return chartData;
};

export default createChartData;
