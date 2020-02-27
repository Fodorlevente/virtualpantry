import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FoodTypeCardContainer from '../components/cards/FoodTypeCardContainer';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function VirtualSpice() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
            <FoodTypeCardContainer />
        </Grid>
        <Grid item xs={6}>
            TODO: Content here
        </Grid>
      </Grid>
    </div>
  );
}