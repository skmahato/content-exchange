import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  flex: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  root: {
    margin: 20,
    minWidth: '50%',

  },
  media: {
    height: 140,
  },
});

export default ({ posts }) => {
  const classes = useStyles();

  return (
    <div className={classes.flex}>
      {posts.map(f =>
        <Card className={classes.root} key={f.id}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {f.context}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </div>
  )
}
