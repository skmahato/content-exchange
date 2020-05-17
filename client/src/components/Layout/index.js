import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import MainContent from './MainContent';
import { requestTopics } from '../../actions/topics'

const Layout = ({ dispatch }) => {
  useEffect(() => {
    dispatch(requestTopics())
  }, [dispatch])

  return (
    <>
      <Header />
      <MainContent />
    </>
  )
}

export default connect()(Layout);
