// Forum.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './forum.css';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import TopicBar from './topicBar';
import WritePost from './writePost'; // Import the new component

const initialPosts = [
  { id: 1, name: "Saad Tahir", title: "First Post", content: "This is the first post content.", likes: 10, comments: 5, topic: 'Messi' },
  { id: 2, name: "johJ", title: "Second Post Title", content: "This is the second post content.", likes: 5, comments: 2, topic: 'Mbappe' },
  { id: 3, name: "Alexender", title: "Third Post Title", content: "This is the third post content.", likes: 20, comments: 8, topic: 'Real Madrid' }
];

const topics = ['All', 'Messi', 'Mbappe', 'Real Madrid', 'Transfer'];

function Forum() {
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [isWriting, setIsWriting] = useState(false);
  const [posts, setPosts] = useState(initialPosts);

  const handleClick = (postId) => {
    navigate(`/post/${postId}`);
  };

  const handleWriteClick = () => {
    setIsWriting(true);
  };

  const handleClose = () => {
    setIsWriting(false);
  };

  const handleSubmit = (newPost) => {
    setPosts([...posts, { ...newPost, id: posts.length + 1, likes: 0, comments: 0 }]);
  };

  const handleTopicChange = (topic) => {
    setSelectedTopic(topic);
  };

  const filteredPosts = selectedTopic === 'All' ? posts : posts.filter(post => post.topic === selectedTopic);

  return (
    <div className="container">
      <TopicBar onWriteClick={handleWriteClick} onTopicChange={handleTopicChange} />
      {filteredPosts.map((post) => (
        <Card 
          key={post.id} 
          className="custom-card" 
          onClick={() => handleClick(post.id)} 
          style={{ cursor: 'pointer' }}
        >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {post.name ? post.name.charAt(0) : '?'}
              </Avatar>
            }
            title={post.name || 'Anonymous'}
          />
          <CardContent>
            <Typography variant="h6" color="text.primary" sx={{ fontWeight: 'bold'}}>
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{paddingTop:'0'}}>
              {post.content}
            </Typography>
            <div className="card-icons">
              <Typography variant="body2" color="text.secondary">
                <FavoriteIcon sx={{ verticalAlign: 'middle' }} /> {post.likes}
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ marginLeft: '10px' }}>
                <CommentIcon sx={{ verticalAlign: 'middle' }} /> {post.comments}
              </Typography>
            </div>
          </CardContent>
        </Card>
      ))}

      <WritePost isOpen={isWriting} handleClose={handleClose} handleSubmit={handleSubmit} />
    </div>
  );
}

export default Forum;
