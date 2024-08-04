import React from 'react';
import Typography from '@mui/material/Typography';
import './PostContent.css'

const PostContent = (props) => {
  return (
    <>
      <Typography className="post-title" variant="h6" color="text.primary" sx={{ fontWeight: 'bold' }}>
        {props.title}
      </Typography>
      <Typography className="post-content" color="text.secondary">
        {props.content}
      </Typography>
    </>
  );
};

export default PostContent;
