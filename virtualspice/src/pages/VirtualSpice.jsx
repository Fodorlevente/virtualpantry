import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FoodTypeCardContainer from '../components/cards/FoodTypeCardContainer';
import FoodsTable from "../components/tables/FoodsTable";
import _ from "lodash";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
}));

export default function VirtualSpice() {
  const classes = useStyles();
  const [pantry, setPantry] = useState([]);

  useEffect(() => {
    fetchFoodsFromAPI()
  }, [])

  function fetchFoodsFromAPI(){
    fetch('/api/virtualspice')
    .then(response => response.json())
    .then(data => {
      setPantry(data);
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={2}>
            <FoodTypeCardContainer />
        </Grid>
        <Grid item xs={10}>
            {_.isEmpty(pantry) ?
              <p>Pantry is is empty</p>
              :
              <FoodsTable pantry={pantry}/>
          }
          {
            console.log(`VirtualSpice: ${typeof(pantry)}`)
          }
        </Grid>
      </Grid>
    </div>
  );
}