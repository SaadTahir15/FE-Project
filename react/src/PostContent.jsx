import React from 'react';
import Typography from '@mui/material/Typography';
import './PostContent.css'

const PostContent = (props) => {
  return (
    <>
      <Typography className="post-title" color="text.primary">
        {props.title}
      </Typography>
      <Typography className="post-content" color="text.secondary">
        {props.content}
      </Typography>
    </>
  );
};

export default PostContent;
