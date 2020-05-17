import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  root: { display: 'flex' },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },

  toolbar: { minHeight: 80 }
}));
