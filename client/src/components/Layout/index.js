import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Header from './Header';
import MainContent from './MainContent';
import { requestTopics } from '../../actions/topics'

const Layout = () => {
  const dispatch = useDispatch();

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

export default Layout;
