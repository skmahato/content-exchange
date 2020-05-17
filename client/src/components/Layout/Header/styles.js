import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  root: { display: 'flex' },

  appBar: { zIndex: theme.zIndex.drawer + 1 },

  toolbar: { backgroundColor: '#262632' },

  link: {
    textDecoration: 'none',
    outline: 0
  },

  banner: { color: '#d6a65d', fontSize: 30, letterSpacing: 10, fontWeight: 600 },
  tabs: {
    color: '#ffffff',
    fontSize: 20,
    margin: 'auto 20px'
  }
}));
