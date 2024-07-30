import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './AddComment.css';

const AddComment = ({ handleAddComment, placeholder }) => {
  const [commentText, setCommentText] = useState('');

  const handleSubmit = () => {
    if (commentText.trim()) {
      handleAddComment(commentText);
      setCommentText('');
    }
  };

  return (
    <div className="add-comment">
      <TextField
        label={placeholder}
        variant="outlined"
        fullWidth
        multiline
        rows={1}
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        className="comment-textbox"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        className="submit-button"
      >
        Submit
      </Button>
    </div>
  );
};

export default AddComment;
