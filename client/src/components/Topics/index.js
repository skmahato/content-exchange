import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Form from './Form';
import { requestSubscriptions } from '../../actions/subscriptions'
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

  console.log(subscriptions);

  return (
    <div>
      {topics.map(f => <div key={f.id}>{f.title}</div>)}

      {currentUser.admin && (
        <Form />
      )}
    </div>
  )
}
