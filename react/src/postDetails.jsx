import React, { useState, useContext } from 'react';
import { Card, CardHeader, CardContent, CardMedia, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import CommentsPopup from './CommentsPopup';
import AvatarComponent from './AvatarComponent';
import LikeCommentIcons from './LikeCommentIcons';
import PostContent from './PostContent';
import { PostsContext } from './PostsContext';
import { CommentsContext } from './CommentsContext';
import { motion } from 'framer-motion';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './postDetails.css';

const PostDetails = () => {
  const { postId } = useParams();
  const { posts, setPosts } = useContext(PostsContext);
  const { comments, setComments } = useContext(CommentsContext);
  const [showComments, setShowComments] = useState(false);
  const [likedPosts, setLikedPosts] = useState({});
  const [showHeart, setShowHeart] = useState(false);

  const post = posts.find((p) => p.id === parseInt(postId));

  if (!post) {
    return <div>Post not found</div>;
  }

  const handleLike = () => {
    const isLiked = likedPosts[post.id];
    const updatedPosts = posts.map(p =>
      p.id === post.id
        ? { ...p, likes: isLiked ? p.likes - 1 : p.likes + 1 }
        : p
    );
    setPosts(updatedPosts);
    setLikedPosts({ ...likedPosts, [post.id]: !isLiked });

    if (!isLiked) { // Only show the heart if the post is being liked
      setShowHeart(true);
      setTimeout(() => {
        setShowHeart(false);
      }, 1000); // Duration the heart is visible
    }
  };

  const handleComment = () => {
    setShowComments(!showComments);
  };

  const handleCloseComments = () => {
    setShowComments(false);
  };

  const handleAddComment = (newCommentText) => {
    const newComment = {
      id: (comments[postId]?.length || 0) + 1,
      name: 'Current User',
      text: newCommentText,
      replies: []
    };
    const updatedComments = {
      ...comments,
      [postId]: [...(comments[postId] || []), newComment]
    };
    setComments(updatedComments);
  };

  const handleAddReply = (replyText, commentId) => {
    const newReply = {
      id: Date.now(),
      name: 'Current User',
      text: replyText
    };

    const updatedComments = {
      ...comments,
      [postId]: comments[postId].map(comment =>
        comment.id === commentId
          ? { ...comment, replies: [...comment.replies, newReply] }
          : comment
      )
    };
    setComments(updatedComments);
  };

  // Inline style to shift the PostDetails component
  const postDetailsStyle = {
    transition: 'transform 0.3s ease',
    transform: showComments ? 'translateX(-10rem)' : 'translateX(0)' // Adjust the value for desired shift
  };

  return (
    <div className="post-details-container">
      <Card className="post-details-card custom-card" style={postDetailsStyle}>
        <CardHeader
          className="card-header"
          avatar={<AvatarComponent name={post.name} />}
          title={post.name}
        />
        {post.image && (
          <CardMedia
            component="img"
            height="300"
            image={post.image}
            alt={post.title || "Post image"}
            sx={{ objectFit: 'cover' }}
          />
        )}
        <CardContent className="card-content">
          <PostContent title={post.title} content={post.content} />
          <LikeCommentIcons
            postId={post.id}
            likes={post.likes}
            comments={(comments[postId] || []).length}
            handleLike={handleLike}
            handleComment={handleComment}
            liked={likedPosts[post.id]}
          />
          <Typography variant="body2" color="primary" className="post-topic">
            {post.topic}
          </Typography>
        </CardContent>
      </Card>

      {showComments && (
        <CommentsPopup
          comments={comments[postId] || []}
          handleClose={handleCloseComments}
          handleAddComment={handleAddComment}
          handleAddReply={handleAddReply}
        />
      )}

      {showHeart && (
        <motion.div
          className="big-heart"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 0, y: -100 }} // Move upwards and fade out
          transition={{ duration: 2 }}
        >
          <div className="heart">
            <FavoriteIcon style={{ fontSize: '100px', color: 'red' }} />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default PostDetails;
