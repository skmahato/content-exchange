import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Chip } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
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
    width: '50%',

  },
  media: {
    height: 500,
  },
  chip: {
    margin: 5,
  },
  image: {
    maxWidth: '100%',
    height: 250,
  }
});

export default ({ posts }) => {
  const classes = useStyles();

  return (
    <div className={classes.flex}>
      {posts.map(f =>
        <Card className={classes.root} key={f.id}>
          <CardActionArea>
            {f.images.map(image => <img key={f.image} src={image} alt="alt" className={classes.image} />)}

            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {f.context}
              </Typography>

              {f.topics.map(t => (
                <Chip
                  key={t.id}
                  label={t.title}
                  className={classes.chip}
                />
              ))}
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </div>
  )
}
