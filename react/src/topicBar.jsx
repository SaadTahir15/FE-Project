import React, { useState } from 'react';
import './topicBar.css';
import { IconButton, TextField } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';

function TopicBar({ onWriteClick, onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="topic-bar">
      <IconButton onClick={onWriteClick} color="primary" sx={{ color: 'black' }}>
        <CreateIcon /> Write
      </IconButton>
      <TextField
        className="search-bar"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search..."
        variant="outlined"
        size="small"
        sx={{
          marginLeft: '20px',
          flexGrow: 1,
          backgroundColor: 'linear-gradient(90deg, rgba(221, 221, 221, 1) 42%, rgba(118, 136, 91, 1) 100%);',
          // border: '5px solid rgb(10, 60, 10)',
          border:'none',
          borderRadius: '5px',
          borderBottom: '1px solid rgba(0, 0, 0, 0.2)'
        }}
      />
    </div>
  );
}

export default TopicBar;
