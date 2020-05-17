import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findIndex } from 'lodash';
import { Button } from '@material-ui/core';

import Form from './Form';
import { requestSubscriptions, createSubscription, deleteSubscription } from '../../actions/subscriptions'
import topicSelector from '../../selectors/topics';
import currentUserSelector from '../../selectors/currentUserSelector';
import subscriptionSelector from '../../selectors/subscriptions';

export default () => {
  const dispatch = useDispatch();
  const topics = useSelector(topicSelector);
  const subscriptions = useSelector(subscriptionSelector);
  const currentUser = useSelector(currentUserSelector);

  useEffect(() => {
    dispatch(requestSubscriptions());
  }, [dispatch])

  const subscriptionIds = subscriptions.map(f => f.topicId);

  const onSubscribe = (id) => {
    const params = { topic_id: id };
    dispatch(createSubscription(params));
  }

  const onUnsubscribe = (id) => {
    dispatch(deleteSubscription(id));
  }

  return (
    <div>
      {topics.map(f => (
        <div key={f.id}>
          {f.title}
          {findIndex(subscriptionIds, i => i === parseInt(f.id, 10)) === -1
            ? <Button color="primary" onClick={() => onSubscribe(f.id)}>Subscribe</Button>
            : <Button color="secondary" onClick={() => onUnsubscribe(f.id)}>Unsubscribe</Button>
          }
        </div>
      ))}

      {currentUser.admin && (
        <Form />
      )}
    </div>
  )
}
