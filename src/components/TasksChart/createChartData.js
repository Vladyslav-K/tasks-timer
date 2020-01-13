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

    let tasksMinutesInThisHour;

    if (tasksTimeInThisHour) {
      tasksMinutesInThisHour = tasksTimeInThisHour.reduce(
        (accumulator, task) => {
          let tasksMinutes;

          const taskStartDateTime = DateTime.fromISO(task.timerStartTime);
          const taskStopDateTime = DateTime.fromISO(task.timerStopTime);

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
      tasksTimeInThisHour: tasksMinutesInThisHour || 0
    });
  }

  return chartData;
};

export default createChartData;
