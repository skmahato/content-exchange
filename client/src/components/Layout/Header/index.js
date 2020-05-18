import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

import { logout } from '../../../actions/authentication';
import useStyles from './styles';

const Header = ({ handleLogOut, currentUser }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Link to="/" className={classes.link}>
            <Typography variant="h6" noWrap className={classes.banner}>
              CE
            </Typography>
          </Link>

          <Link to="/topics" className={classes.link}>
            <Typography className={classes.tabs}>
              Topics
            </Typography>
          </Link>

          <div className={classes.grow} />

          <Button color="inherit" onClick={() => dispatch(logout())}>Logout</Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
