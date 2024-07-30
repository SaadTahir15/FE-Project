import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import ReplyIcon from '@mui/icons-material/Reply';
import CloseIcon from '@mui/icons-material/Close';
import CommentIcon from '@mui/icons-material/Comment';
import AddComment from './AddComment'; 
import './CommentsPopup.css';

const CommentsPopup = ({ comments = [], handleClose, handleAddComment, handleAddReply }) => {
  const [replyingTo, setReplyingTo] = useState(null);
  const [showReplies, setShowReplies] = useState({});

  const handleReplyClick = (commentId) => {
    setReplyingTo(replyingTo === commentId ? null : commentId);
  };

  const toggleReplies = (commentId) => {
    setShowReplies((prevShowReplies) => ({
      ...prevShowReplies,
      [commentId]: !prevShowReplies[commentId],
    }));
  };

  const handleReplySubmit = (text, commentId) => {
    handleAddReply(text, commentId);
    setReplyingTo(null);
    setShowReplies((prevShowReplies) => ({
      ...prevShowReplies,
      [commentId]: true,
    }));
  };

  return (
    <div className="comments-popup">
      <IconButton className="close-button" onClick={handleClose}>
        <CloseIcon />
      </IconButton>
      <h3>Comments:</h3>
      <div className="add-comment-section">
        <AddComment handleAddComment={handleAddComment} placeholder="Add a comment" />
      </div>
      <div className="comments-list">
        {comments.length > 0 ? (
          comments.map(comment => (
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
                <div className="comment-actions">
                  <IconButton onClick={() => handleReplyClick(comment.id)}>
                    <ReplyIcon />
                  </IconButton>
                  <IconButton onClick={() => toggleReplies(comment.id)}>
                    <CommentIcon />
                    {comment.replies && comment.replies.length > 0 && (
                      <span className="reply-count">{comment.replies.length}</span>
                    )}
                  </IconButton>
                </div>
                {replyingTo === comment.id && (
                  <div className="add-reply-section">
                    <AddComment handleAddComment={(text) => handleReplySubmit(text, comment.id)} placeholder="Add a reply" />
                  </div>
                )}
                {showReplies[comment.id] && comment.replies && comment.replies.length > 0 && (
                  <div className="replies-list">
                    {comment.replies.map(reply => (
                      <Card key={reply.id} className="reply-card">
                        <CardHeader
                          avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="reply">
                              {reply.name.charAt(0)}
                            </Avatar>
                          }
                          title={reply.name}
                        />
                        <CardContent>
                          <Typography color="text.secondary">
                            {reply.text}
                          </Typography>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
    </div>
  );
};

export default CommentsPopup;
