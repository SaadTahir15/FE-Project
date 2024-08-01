// PostDetails.jsx
import React, { useState, useContext } from 'react';
import { Card, CardHeader, CardContent } from '@mui/material';
import { useParams } from 'react-router-dom';
import CommentsPopup from './CommentsPopup';
import AvatarComponent from './AvatarComponent';
import LikeCommentIcons from './LikeCommentIcons';
import PostContent from './PostContent';
import { PostsContext } from './PostsContext';
import { CommentsContext } from './CommentsContext';
import './postDetails.css';

const PostDetails = () => {
  const { postId } = useParams();
  const { posts, setPosts } = useContext(PostsContext);
  const { comments, setComments } = useContext(CommentsContext);
  const [showComments, setShowComments] = useState(false);
  const [likedPosts, setLikedPosts] = useState({});

  const post = posts.find((p) => p.id === parseInt(postId));

  if (!post) {
    return <div>Post not found</div>;
  }

  const handleLike = () => {
    const updatedPosts = posts.map(p =>
      p.id === post.id
        ? { ...p, likes: likedPosts[post.id] ? p.likes - 1 : p.likes + 1 }
        : p
    );
    setPosts(updatedPosts);
    setLikedPosts({ ...likedPosts, [post.id]: !likedPosts[post.id] });
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

  return (
    <div className="post-details-container">
      <Card className="post-details-card custom-card">
        <CardHeader
          avatar={<AvatarComponent name={post.name} />}
          title={post.name}
        />
        <CardContent>
          <PostContent title={post.title} content={post.content} />
          <LikeCommentIcons
            postId={post.id}
            likes={post.likes}
            comments={(comments[postId] || []).length}
            handleLike={handleLike}
            handleComment={handleComment}
            liked={likedPosts[post.id]}
          />
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
    </div>
  );
};

export default PostDetails;
