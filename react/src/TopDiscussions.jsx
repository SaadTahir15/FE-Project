import React, { useContext } from 'react';
import { PostsContext } from './PostsContext';
import { motion } from 'framer-motion';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import './topDiscussions.css';

const TopDiscussions = () => {
  const { posts } = useContext(PostsContext);

  // Sort posts by likes (or any other criterion) to display top discussions
  const topDiscussions = [...posts].sort((a, b) => b.likes - a.likes).slice(0, 3);

  return (
    <motion.div
      className="top-discussions"
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <h2>Top Discussions</h2>
      {topDiscussions.map((post) => (
        <Card key={post.id} className="discussion-card">
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
            <Typography variant="body2" color="text.secondary">
              {post.content}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </motion.div>
  );
};

export default TopDiscussions;
