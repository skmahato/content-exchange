import React from 'react';
import { useSelector } from 'react-redux';

import topicSelector from '../../selectors/topics';

export default () => {
  const topics = useSelector(topicSelector);

  return (
    <div>
      {topics.map(f => <div>{f.title}</div>)}
    </div>
  )
}
