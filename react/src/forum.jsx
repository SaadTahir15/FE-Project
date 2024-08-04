import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './forum.css';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import TopicBar from './topicBar';
import WritePost from './writePost';
import TopDiscussions from './TopDiscussions';
import UpcomingEvents from './UpcomingEvents';
import { PostsContext } from './PostsContext';

function Forum() {
  const navigate = useNavigate();
  const { posts, setPosts } = useContext(PostsContext);
  const [isWriting, setIsWriting] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

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
    setIsWriting(false);
  };

  const handleSearchChange = (query) => {
    setSearchTerm(query);
  };

  const handleShowAll = () => {
    setSearchTerm('');
  };

  const filteredPosts = posts.filter((post) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return (
      post.topic.toLowerCase().includes(lowerCaseSearchTerm) ||
      post.title.toLowerCase().includes(lowerCaseSearchTerm) ||
      post.content.toLowerCase().includes(lowerCaseSearchTerm) ||
      post.name.toLowerCase().includes(lowerCaseSearchTerm)
    );
  });

  return (
    <div className="container">
      <TopicBar 
        onWriteClick={handleWriteClick} 
        onShowAll={handleShowAll}
        searchQuery={searchTerm}
        onSearchChange={handleSearchChange}
      />
      <div className="main-content">
        <div className="posts">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                className="post-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <div className="custom-card" onClick={() => handleClick(post.id)} style={{ cursor: 'pointer' }}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: '#76885B', cursor: 'pointer' }} aria-label="recipe">
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
                </div>
              </motion.div>
            ))
          ) : (
            <Typography variant="body1" color="text.secondary">
              No posts found.
            </Typography>
          )}
        </div>
        <div className="sidebar">
          <TopDiscussions />
          <UpcomingEvents /> 
        </div>
      </div>
      <WritePost isOpen={isWriting} handleClose={handleClose} handleSubmit={handleSubmit} />
    </div>
  );
}

export default Forum;
