import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './AddComment.css';

const AddComment = ({ value, setValue, handleAddComment, placeholder }) => {
  // Ensure setValue is defined as a function
  const handleSubmit = () => {
    if (value.trim()) {
      handleAddComment(value);
      setValue(''); // Clear the input field after submission
    }
  };

  return (
    <div className="add-comment">
      <TextField
        label={placeholder}
        variant="outlined"
        fullWidth
        multiline
        rows={2}
        value={value}
        onChange={(e) => setValue(e.target.value)} // Update value
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
