import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import { initialPosts } from './post'; // Ensure setPosts is a function that updates the posts state
import './postDetails.css';

// Sample comments data organized by post ID
const commentsData = {
  1: [{ id: 1, name: 'John', text: 'Great post!' }, { id: 2, name: 'John', text: 'worst post!' }],
  2: [{ id: 2, name: 'Jane', text: 'Interesting read!' }],
  3: [{ id: 3, name: 'Doe', text: 'Very informative!' }],
};

const PostDetails = () => {
  const { postId } = useParams();
  const [posts, setPosts] = useState(initialPosts);
  const [showComments, setShowComments] = useState(false);
  const post = posts.find((p) => p.id === parseInt(postId));

  if (!post) {
    return <div>Post not found</div>;
  }

  const handleLike = () => {
    const updatedPosts = posts.map(p =>
      p.id === post.id ? { ...p, likes: p.likes + 1 } : p
    );
    setPosts(updatedPosts);
  };

  const handleComment = () => {
    setShowComments(!showComments);
  };

  const handleCloseComments = () => {
    setShowComments(false);
  };

  return (
    <div className="post-details-container">
      <Card className="post-details-card custom-card">
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {post.name.charAt(0)}
            </Avatar>
          }
          title={post.name}
        />
        <CardContent>
          <Typography
            className="post-title"
            color="text.primary"
          >
            {post.title}
          </Typography>
          <Typography
            className="post-content"
            color="text.secondary"
          >
            {post.content}
          </Typography>

          <div className="card-icons">
            <FavoriteIcon
              className="icon clickable"
              onClick={handleLike}
            /> {post.likes}
            <CommentIcon
              className="icon clickable"
              onClick={handleComment}
            /> {post.comments}
          </div>
        </CardContent>
      </Card>

      {showComments && (
        <div className="comments-popup">
          <button onClick={handleCloseComments}>Close</button>
          <h3>Comments:</h3>
          {commentsData[post.id]?.map(comment => (
            <Card key={comment.id} className="comment-card">
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="comment">
                    {comment.name.charAt(0)}
                  </Avatar>
                }
                title={comment.name}
              />
              <CardContent>
                <Typography color="text.secondary">
                  {comment.text}
                </Typography>
              </CardContent>
            </Card>
          )) || <p>No comments yet.</p>}
        </div>
      )}
    </div>
  );
};

export default PostDetails;
