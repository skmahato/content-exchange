import React, { useState } from 'react';
import { TextField, Button, Checkbox } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

import { createPost } from '../../../actions/posts';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default ({ topics }) => {
  const dispatch = useDispatch();
  const [content, setContent] = useState('');
  const [files, setFiles] = useState([]);
  const [topicId, setTopicId] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();

    const params = { post: { context: content, images: files, topic_id: topicId } };
    dispatch(createPost(params));
  }

  const onImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const formData = new FormData();
    files.forEach((file, i) => formData.append(i, file));
    setFiles(files);
  }

  const onChange = (e, value) => {
    setTopicId(value.map(f => f.id))
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

      <Autocomplete
        multiple
        options={topics}
        disableCloseOnSelect
        getOptionLabel={option => option.title}
        renderOption={(option, { selected }) => (
          <React.Fragment>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.title}
          </React.Fragment>
        )}
        style={{ margin: '10px auto' }}
        renderInput={params => (
          <TextField {...params} variant="outlined" label="Tag" placeholder="Tag" />
        )}
        onChange={onChange}
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
