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
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import './CommentsPopup.css';

const CommentsPopup = ({ comments = [], handleClose, handleAddComment, handleAddReply }) => {
  const [replyingTo, setReplyingTo] = useState(null);
  const [showReplies, setShowReplies] = useState({});
  const [commentText, setCommentText] = useState('');
  const [replyText, setReplyText] = useState('');

  const handleReplyClick = (commentId) => {
    setReplyingTo(replyingTo === commentId ? null : commentId);
  };

  const toggleReplies = (commentId) => {
    setShowReplies((prevShowReplies) => ({
      ...prevShowReplies,
      [commentId]: !prevShowReplies[commentId],
    }));
  };

  const handleCommentSubmit = () => {
    if (commentText.trim()) {
      handleAddComment(commentText);
      setCommentText(''); // Clear the comment input field
    }
  };

  const handleReplySubmit = () => {
    if (replyText.trim()) {
      handleAddReply(replyText, replyingTo); // Add reply
      setReplyText(''); // Clear the reply input field
      setReplyingTo(null); // Close the reply input
      setShowReplies((prevShowReplies) => ({
        ...prevShowReplies,
        [replyingTo]: true,
      }));
    }
  };

  return (
    <div className="comments-popup">
      <div className="comments-popup-header">
        <IconButton className="close-button" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </div>
      <div className="add-comment-section">
        <div className="comment-input-container">
          <TextField
            fullWidth
            variant="outlined"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Add a comment"
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleCommentSubmit();
              }
            }}
          />
          <IconButton onClick={handleCommentSubmit}>
            <SendIcon />
          </IconButton>
        </div>
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
                    <div className="comment-input-container">
                      <TextField
                        fullWidth
                        variant="outlined"
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        placeholder="Add a reply"
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            handleReplySubmit();
                          }
                        }}
                      />
                      <IconButton onClick={handleReplySubmit}>
                        <SendIcon />
                      </IconButton>
                    </div>
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
