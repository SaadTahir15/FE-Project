import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@mui/material';
import { useParams } from 'react-router-dom'; // Correct import for useParams
import CommentsPopup from './CommentsPopup'; // Import the CommentsPopup component
import AvatarComponent from './AvatarComponent'; // Import AvatarComponent
import LikeCommentIcons from './LikeCommentIcons';
import PostContent from './PostContent'; // Import PostContent
import { initialPosts } from './post';
import './postDetails.css';

// Sample comments data for demonstration purposes
const commentsData = {
  1: [{ id: 1, name: 'John', text: 'Great post!' }, { id: 2, name: 'John', text: 'Worst post!' }],
  2: [{ id: 2, name: 'Jane', text: 'Interesting read!' }],
  3: [{ id: 3, name: 'Doe', text: 'Very informative!' }],
};

const PostDetails = () => {
  const { postId } = useParams();
  const [posts, setPosts] = useState(initialPosts);
  const [showComments, setShowComments] = useState(false);
  const [likedPosts, setLikedPosts] = useState({});
  const [comments, setComments] = useState(commentsData[postId] || []);

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
      id: comments.length + 1,
      name: 'Current User', // Replace with dynamic user if needed
      text: newCommentText,
    };
    setComments([...comments, newComment]);
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
            comments={comments.length}
            handleLike={handleLike}
            handleComment={handleComment}
            liked={likedPosts[post.id]}
          />
        </CardContent>
      </Card>

      {showComments && (
        <CommentsPopup
          comments={comments}
          handleClose={handleCloseComments}
          handleAddComment={handleAddComment} // Pass handleAddComment as prop
        />
      )}
    </div>
  );
};

export default PostDetails;
