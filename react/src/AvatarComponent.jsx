// AvatarComponent.jsx
import React from 'react';
import { Avatar } from '@mui/material';
import { red } from '@mui/material/colors';

const AvatarComponent = ({ name }) => {
  const initials = name ? name.charAt(0) : '?';

  return (
    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
      {initials}
    </Avatar>
  );
};

export default AvatarComponent;
