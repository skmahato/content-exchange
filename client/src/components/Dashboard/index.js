import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';

import Form from './Form';
import Feeds from './Feeds';
import { requestPosts } from '../../actions/posts';
import postSelector from '../../selectors/posts';
import topicSelector from '../../selectors/topics';

export default () => {
  const dispatch = useDispatch();
  const posts = useSelector(postSelector);
  const topics = useSelector(topicSelector);

  useEffect(() => {
    dispatch(requestPosts());
  }, [dispatch])

  return (
    <Grid container spacing={2}>
      <Grid item md={8}>
        <Feeds posts={posts}
        />
      </Grid>

      <Grid item md={4}>
        <Form topics={topics}/>
      </Grid>
    </Grid>
  )
}
