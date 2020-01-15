import { DateTime } from "luxon";
import createChartData from "../components/TasksChart/createChartData";

const createTestData = (startTime, stopTime) => {
  return {
    id: Math.floor(Math.random * (100 - 1) + 1),
    taskName: "Test",
    timerStartTime: DateTime.fromObject(startTime),
    timerStopTime: DateTime.fromObject(stopTime)
  };
};

const initialData = [
  createTestData({ hour: 0, minute: 30 }, { hour: 1, minute: 25 }),
  createTestData({ hour: 1, minute: 30 }, { hour: 2, minute: 20 }),
  createTestData({ hour: 2, minute: 40 }, { hour: 3, minute: 10 }),
  createTestData({ hour: 3, minute: 15 }, { hour: 4, minute: 45 }),
  createTestData({ hour: 5, minute: 10 }, { hour: 7, minute: 20 }),
  createTestData({ hour: 7, minute: 30 }, { hour: 9, minute: 40 }),
  createTestData({ hour: 10, minute: 50 }, { hour: 13, minute: 25 }),
  createTestData({ hour: 13, minute: 30 }, { hour: 16, minute: 35 }),
  createTestData({ hour: 17, minute: 20 }, { hour: 20, minute: 10 }),
  createTestData({ hour: 20, minute: 35 }, { hour: 23, minute: 45 })
];

const checkTaskInExpectedHour = (testData, currentHour, expectedMinutes) => {
  const chartData = testData.find(task => task.hour === currentHour);
  expect(chartData.tasksTimeInThisHour).toBe(expectedMinutes);
};

const data = createChartData(initialData);

describe("Testing the function of grouping tasks according to a schedule by the hour with a lot data:", () => {
  it("At 0 o'clock the tasks took 30 minutes", () => {
    checkTaskInExpectedHour(data, 0, 30);
  });

  it("At 1 o'clock the tasks took 55 minutes", () => {
    checkTaskInExpectedHour(data, 1, 55);
  });

  it("At 2 o'clock the tasks took 40 minutes", () => {
    checkTaskInExpectedHour(data, 2, 40);
  });

  it("At 3 o'clock the tasks took 55 minutes", () => {
    checkTaskInExpectedHour(data, 3, 55);
  });

  it("At 4 o'clock the tasks took 45 minutes", () => {
    checkTaskInExpectedHour(data, 4, 45);
  });

  it("At 5 o'clock the tasks took 50 minutes", () => {
    checkTaskInExpectedHour(data, 5, 50);
  });

  it("At 6 o'clock the tasks took 60 minutes", () => {
    checkTaskInExpectedHour(data, 6, 60);
  });

  it("At 7 o'clock the tasks took 50 minutes", () => {
    checkTaskInExpectedHour(data, 7, 50);
  });

  it("At 8 o'clock the tasks took 60 minutes", () => {
    checkTaskInExpectedHour(data, 8, 60);
  });

  it("At 9 o'clock the tasks took 40 minutes", () => {
    checkTaskInExpectedHour(data, 9, 40);
  });

  it("At 10 o'clock the tasks took 10 minutes", () => {
    checkTaskInExpectedHour(data, 10, 10);
  });

  it("At 11 o'clock the tasks took 60 minutes", () => {
    checkTaskInExpectedHour(data, 11, 60);
  });

  it("At 12 o'clock the tasks took 60 minutes", () => {
    checkTaskInExpectedHour(data, 12, 60);
  });

  it("At 13 o'clock the tasks took 55 minutes", () => {
    checkTaskInExpectedHour(data, 13, 55);
  });

  it("At 14 o'clock the tasks took 60 minutes", () => {
    checkTaskInExpectedHour(data, 14, 60);
  });

  it("At 15 o'clock the tasks took 60 minutes", () => {
    checkTaskInExpectedHour(data, 15, 60);
  });

  it("At 16 o'clock the tasks took 35 minutes", () => {
    checkTaskInExpectedHour(data, 16, 35);
  });

  it("At 17 o'clock the tasks took 40 minutes", () => {
    checkTaskInExpectedHour(data, 17, 40);
  });

  it("At 18 o'clock the tasks took 60 minutes", () => {
    checkTaskInExpectedHour(data, 18, 60);
  });

  it("At 19 o'clock the tasks took 60 minutes", () => {
    checkTaskInExpectedHour(data, 19, 60);
  });

  it("At 20 o'clock the tasks took 35 minutes", () => {
    checkTaskInExpectedHour(data, 20, 35);
  });

  it("At 21 o'clock the tasks took 60 minutes", () => {
    checkTaskInExpectedHour(data, 21, 60);
  });

  it("At 22 o'clock the tasks took 60 minutes", () => {
    checkTaskInExpectedHour(data, 22, 60);
  });

  it("At 23 o'clock the tasks took 45 minutes", () => {
    checkTaskInExpectedHour(data, 23, 45);
  });
});
