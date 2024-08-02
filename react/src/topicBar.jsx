import React from 'react';
import './topicBar.css';
import { IconButton, Button } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import SearchBar from './SearchBar';

function TopicBar({ onWriteClick, onShowAll, searchQuery, onSearchChange }) {
  return (
    <div className="topic-bar">
      <IconButton onClick={onWriteClick} color="primary" sx={{ color: 'black' }}>
        <CreateIcon /> Write
      </IconButton>
      <Button
        onClick={onShowAll}
        variant="outlined"
        sx={{
          marginLeft: '5px',
          marginRight: '5px',
          color: 'black',
          borderColor: 'black',
          '&:hover': {
            borderColor: 'black',
            backgroundColor: '#DDDDDD',
          },
        }}
      >
        All
      </Button>
      <SearchBar searchQuery={searchQuery} onSearchChange={onSearchChange} />
    </div>
  );
}

export default TopicBar;
