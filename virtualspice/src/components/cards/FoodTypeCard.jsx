import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    maxHeight: 200,
    margin: '15px',
    background: `${generateRandomHexColors()}`,
    color: "white",
    padding: 25
  }
});

function generateRandomHexColors() {
  return('#' + Math.random().toString(16).slice(2, 8).toUpperCase());
}

export default function FoodTypeCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} raised>
        <Typography variant="h5" align="center" component="h2">
            {props.name}: {props.piece} piece
        </Typography> 
         
    </Card>
  );
}