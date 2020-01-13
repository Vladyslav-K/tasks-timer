import { DateTime } from "luxon";
import createChartData from "../components/Chart/createChartData";

const createTestData = (startTime, stopTime) => {
  return [
    {
      id: 1,
      taskName: "Test",
      timerStartTime: DateTime.fromObject(startTime),
      timerStopTime: DateTime.fromObject(stopTime)
    }
  ];
};

const checkTaskInExpectedHour = (testData, currentHour, expectedMinutes) => {
  const chartData = testData.find(task => task.hour === currentHour);
  expect(chartData.tasksTimeInThisHour).toBe(expectedMinutes);
};

describe("Testing the function of grouping tasks according to a schedule by the hour:", () => {
  describe("1. Test with an interval of 02:30:47 to 02:45:58:", () => {
    const testData = createTestData(
      { hour: 2, minute: 30, second: 47 },
      { hour: 2, minute: 45, second: 58 }
    );

    const data = createChartData(testData);

    it("At 2 o'clock the task took 15 minutes", () => {
      checkTaskInExpectedHour(data, 2, 15);
    });
  });

  describe("2. Test with an interval of 05:20:20 to 06:30:45:", () => {
    const testData = createTestData(
      { hour: 5, minute: 20, second: 20 },
      { hour: 6, minute: 30, second: 45 }
    );

    const data = createChartData(testData);

    it("At 5 o'clock the task took 40 minutes", () => {
      checkTaskInExpectedHour(data, 5, 40);
    });

    it("At 6 o'clock the task took 30 minutes", () => {
      checkTaskInExpectedHour(data, 6, 30);
    });
  });

  describe("3. Test with an interval of 08:15:13 to 12:25:36:", () => {
    const testData = createTestData(
      { hour: 8, minute: 15, second: 13 },
      { hour: 12, minute: 25, second: 36 }
    );

    const data = createChartData(testData);

    it("At 8 o'clock the task took 45 minutes", () => {
      checkTaskInExpectedHour(data, 8, 45);
    });

    it("At 9 o'clock the task took 60 minutes", () => {
      checkTaskInExpectedHour(data, 9, 60);
    });

    it("At 10 o'clock the task took 60 minutes", () => {
      checkTaskInExpectedHour(data, 10, 60);
    });

    it("At 11 o'clock the task took 60 minutes", () => {
      checkTaskInExpectedHour(data, 11, 60);
    });

    it("At 12 o'clock the task took 25 minutes", () => {
      checkTaskInExpectedHour(data, 12, 25);
    });
  });

  describe("4. Test of the previous day at interval of 22:40:50 to 01:20:33:", () => {
    const testData = createTestData(
      DateTime.fromObject({ hour: 22, minute: 40, second: 50 })
        .minus({ day: 1 })
        .toObject(),
      { hour: 1, minute: 20, second: 33 }
    );

    const data = createChartData(testData);

    it("At 22 o'clock of the current day, the task took 0 minutes", () => {
      checkTaskInExpectedHour(data, 22, 0);
    });

    it("At 23 o'clock of the current day, the task took 0 minutes", () => {
      checkTaskInExpectedHour(data, 23, 0);
    });

    it("At 0 o'clock of the current day, the task took 60 minutes", () => {
      checkTaskInExpectedHour(data, 0, 60);
    });

    it("At 1 o'clock of the current day, the task took 20 minutes", () => {
      checkTaskInExpectedHour(data, 1, 20);
    });
  });
});
