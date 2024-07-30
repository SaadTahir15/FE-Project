import React from 'react';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';

const AvatarComponent = (props) => {
  return (
    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
      {props.name.charAt(0)}
    </Avatar>
  );
};

export default AvatarComponent;
