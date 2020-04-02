import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 10,
    },
    form: {
        margin: 10
    },
    button: {
        margin: 10
    }
}));

const types = [
    {
      value: 'sustainable food',
      label: 'sustainable food',
    },
    {
      value: 'spices',
      label: 'spices',
    },
    {
      value: 'drinks',
      label: 'drinks',
    },
    {
      value: 'perishable food',
      label: 'perishable food',
    },
  ];

export default function AddNewItemForm() {
  const classes = useStyles();
  const [foodTypes, setFoodTypes] = React.useState('sustainable food');

  const handleChange = (event) => {
    setFoodTypes(event.target.value);
  };

  return (
    <div className={classes.root}>
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Add new food to pantry
                </Typography>  
                <form className={classes.form} noValidate autoComplete="off">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} >
                            <TextField id="name" fullWidth required label="Name of the item" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={6} >
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Select"
                                value={foodTypes}
                                onChange={handleChange}
                                helperText="Select the food type"
                                variant="outlined"
                                >
                                {types.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField id="location" value="Unknown" fullWidth required label="Location" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField type="date" 
                                id="date" 
                                fullWidth 
                                required 
                                helperText="Date of expiration"  
                                variant="outlined"
                                />
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
      <CardActions>
        <Button color="primary" variant="contained" size="small"> Save details</Button>
      </CardActions>
    </Card>
    </div>
  );
}