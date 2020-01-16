import React, { memo } from "react";
import { Link } from "react-router-dom";
import { DateTime, Interval } from "luxon";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function CurrentTask({
  task,
  classes: { card, taskName, buttonContainer, button }
}) {
  return (
    <Card key={task.id} className={card}>
      <CardContent>
        <Typography className={taskName} variant="h4" component="h2">
          {`Task name: ${task.taskName}`}
        </Typography>
        <Typography component="p">
          {DateTime.fromISO(task.timerStartTime).toFormat(
            "'The timer was started on' yyyy-MM-dd 'at' HH:mm:ss"
          )}
        </Typography>
        <Typography component="p">
          {DateTime.fromISO(task.timerStopTime).toFormat(
            "'The timer was stopped on' yyyy-MM-dd 'at' HH:mm:ss"
          )}
        </Typography>
        <Typography component="p">
          {Interval.fromDateTimes(
            DateTime.fromISO(task.timerStartTime),
            DateTime.fromISO(task.timerStopTime)
          )
            .toDuration()
            .toFormat("'Time spent on task:' hh:mm:ss")}
        </Typography>
      </CardContent>
      <CardActions className={buttonContainer}>
        <Button className={button} size="small" component={Link} to="/tasks">
          Back
        </Button>
      </CardActions>
    </Card>
  );
}

export default memo(CurrentTask);
