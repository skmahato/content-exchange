import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { requestTopics } from '../../actions/topics'

const Layout = ({ dispatch }) => {
  useEffect(() => {
    dispatch(requestTopics())
  }, [dispatch])

  return (
    <div>Layout</div>
  )
}

export default connect()(Layout);
