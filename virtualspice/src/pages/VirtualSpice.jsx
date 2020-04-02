import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FoodTypeCardContainer from '../components/cards/FoodTypeCardContainer';
import FoodsTable from "../components/tables/FoodsTable";
import _ from "lodash";
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close'
import AddNewItemForm from '../components/forms/AddNewItemForm';

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

  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


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

  function deleteItemWithId(itemId){
    fetch(`/api/virtualspice/delete/${itemId}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
    }).then(data =>{
      setOpen(true)
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
            <AddNewItemForm />
            {_.isEmpty(pantry) ?
              <p>Pantry is is empty</p>
              :
              <FoodsTable pantry={pantry} deleteItemWithId={deleteItemWithId}/>
          }
        </Grid>
      </Grid>
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="SUCCESS"
          action={
            <React.Fragment>
              <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
      </div>
    </div>
  );
}