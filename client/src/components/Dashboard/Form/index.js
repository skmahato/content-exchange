import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { createPost } from '../../../actions/posts';

export default () => {
  const dispatch = useDispatch();
  const [content, setContent] = useState('');
  const [files, setFiles] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();

    const params = { context: content, images: files };
    dispatch(createPost(params)).then(res => {
      console.log(res);
    })
  }

  const onImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const formData = new FormData();
    files.forEach((file, i) => formData.append(i, file));
    setFiles(files);
  }

  return (
    <form onSubmit={onSubmit}>
      <TextField
        fullWidth
        required
        multiline
        rows={5}
        label="Content"
        variant="outlined"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <input type="file" name="img" accept="image/*" multiple="multiple"
      onChange={onImageUpload}
      />

      <Button
        type="submit"
        color="primary"
        variant="contained"
      >
        Post
      </Button>
    </form>
  )
}
