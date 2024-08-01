// Forum.jsx
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './forum.css';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { green } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import TopicBar from './topicBar';
import WritePost from './writePost';
import { PostsContext } from './PostsContext';

const topics = ['All', 'Messi', 'Mbappe', 'Real Madrid', 'Transfer'];

function Forum() {
  const navigate = useNavigate();
  const { posts, setPosts } = useContext(PostsContext);
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [isWriting, setIsWriting] = useState(false);

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
    setPosts([...posts, { ...newPost, id: posts.length + 1, likes: 0, comments: 0, name: newPost.name || 'Anonymous' }]);
    setIsWriting(false); //
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
              <Avatar sx={{ bgcolor: '#76885B' }} aria-label="recipe">
                {post.name ? post.name.charAt(0) : '?'}
              </Avatar>
            }
            title={post.name || 'Anonymous'}
          />
          <CardContent>
            <Typography variant="h6" color="text.primary" sx={{ fontWeight: 'bold' }}>
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ paddingTop: '0' }}>
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
