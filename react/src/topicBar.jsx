import React, { useState } from 'react';
import './topicBar.css';
import { IconButton, Button } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';

const topics = ['All', 'Messi', 'Mbappe', 'Real Madrid', 'Transfer'];

function TopicBar({ onWriteClick, onTopicChange }) {
  const [selectedTopic, setSelectedTopic] = useState('All');

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
    onTopicChange(topic);
  };

  return (
    <div className="topic-bar">
      <IconButton onClick={onWriteClick} color="primary">
        <CreateIcon /> Write
      </IconButton>
      <div className="topic-options">
        {topics.map(topic => (
          <Button
            key={topic}
            className={`topic-button ${selectedTopic === topic ? 'active' : ''}`}
            onClick={() => handleTopicSelect(topic)}
          >
            {topic}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default TopicBar;
