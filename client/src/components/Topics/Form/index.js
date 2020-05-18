import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button } from '@material-ui/core';

import { createTopic } from '../../../actions/topics'

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const params = { title: title };
    dispatch(createTopic(params)).then(res => {
      if (!res.error) {
        setTitle('');
      }

      return res;
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField value={title} onChange={(e) => setTitle(e.target.value)} label="Title" variant="outlined" />
        <Button type="submit" color="primary" variant="contained">Add</Button>
      </form>
    </div>
  )
}

export default Form;
