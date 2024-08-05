import React, { useState } from 'react';
import { Modal, Box, TextField, Button, Input } from '@mui/material';
import './writePost.css';

const WritePost = ({ isOpen, handleClose, handleSubmit }) => {
  const [newPost, setNewPost] = useState({ title: '', content: '', topic: '', image: null });

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setNewPost({ ...newPost, image: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = () => {
    if (newPost.title && newPost.content && newPost.topic) {
      handleSubmit(newPost);
      setNewPost({ title: '', content: '', topic: '', image: null });
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
          value={newPost.topic}
          onChange={(e) => setNewPost({ ...newPost, topic: e.target.value })}
        />
        <div className="file-upload-container">
          <Input
            type="file"
            inputProps={{ accept: 'image/*' }}
            onChange={handleImageUpload}
          />
          <Button variant="contained" color="primary" onClick={onSubmit}>Publish</Button>
        </div>
      </Box>
    </Modal>
  );
};

export default WritePost;
