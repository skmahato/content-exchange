import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../../Dashboard';
import Topics from '../../Topics';
import useStyles from './styles';

const MainContent = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />

      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/topics" component={Topics} />
      </Switch>
    </main>
  );
};

export default MainContent;
