// WritePost.jsx
import React, { useState } from 'react';
import { Modal, Box, TextField, Button } from '@mui/material';
import './writePost.css';

const WritePost = ({ isOpen, handleClose, handleSubmit }) => {
  const [newPost, setNewPost] = useState({ title: '', content: '', topic: '' });
  const topics = ['Messi', 'Mbappe', 'Real Madrid', 'Transfer'];

  const onSubmit = () => {
    if (newPost.title && newPost.content && newPost.topic) {
      handleSubmit(newPost);
      setNewPost({ title: '', content: '', topic: '' });
      handleClose();
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box className="write-post-modal">
        <h2>Write New Post</h2>
        <TextField
          label="Title"
          fullWidth
          margin="normal"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <TextField
          label="Content"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        />
        <TextField
          label="Topic"
          fullWidth
          margin="normal"
          select
          SelectProps={{ native: true }}
          value={newPost.topic}
          onChange={(e) => setNewPost({ ...newPost, topic: e.target.value })}
        >
          <option value=""></option>
          {topics.map((topic) => (
            <option key={topic} value={topic}>{topic}</option>
          ))}
        </TextField>
        <Button variant="contained" color="primary" onClick={onSubmit}>Publish</Button>
      </Box>
    </Modal>
  );
};

export default WritePost;
