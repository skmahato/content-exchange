import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

import useStyles from './styles';

const Header = ({ handleLogOut, currentUser }) => {
  const classes = useStyles();

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
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
