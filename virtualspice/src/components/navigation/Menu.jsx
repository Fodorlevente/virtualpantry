import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { NavLink } from "react-router-dom";
import Button from '@material-ui/core/Button';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ListAltIcon from '@material-ui/icons/ListAlt';
import StorefrontIcon from '@material-ui/icons/Storefront';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
    listStyle: 'none',
    '&:focus, &:hover, &:visited, &:link, &:active': {
      textDecoration: 'none'
    }
  }
}));

export default function Menu() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <Button color="inherit" startIcon={<StorefrontIcon />}>
          <NavLink to="/virtualspice" className={classes.link}>
            <Typography variant="h6" className={classes.title}>
                Virtual Spice 
            </Typography>
          </NavLink>
        </Button>

        <Button color="inherit" startIcon={<ListAltIcon />}>
          <NavLink to="/recepie" className={classes.link}>
            <Typography variant="h6" className={classes.title}>
                Recepie
            </Typography>
          </NavLink>
        </Button>

        <Button color="inherit" startIcon={<ShoppingBasketIcon />}>
          
          <NavLink to="/shoppinglist" className={classes.link}>
            <Typography variant="h6" className={classes.title}>
                  Shopping List
            </Typography>
          </NavLink>
        </Button>

        </Toolbar>
      </AppBar>
    </div>
  );
}