import React, { memo } from "react";
import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

function PageNotFound({ classes: { container, buttonContainer } }) {
  return (
    <Grid container className={container} justify="center">
      <Card>
        <CardContent>
          <Typography variant="h4">There is no such task :(</Typography>
          <Typography color="textSecondary">
            Can try to find it on the home page?
          </Typography>
        </CardContent>
        <CardActions className={buttonContainer}>
          <Button size="small" component={Link} to={"/tasks"}>
            Homepage
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default withStyles(styles)(memo(PageNotFound));
