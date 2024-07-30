import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import './LikeCommentIcons.css'

const LikeCommentIcons = (props) => {
  return (
    <div className="card-icons">
      <FavoriteIcon
        className={`icon clickable ${props.liked ? 'liked' : ''}`}
        onClick={props.handleLike}
      /> {props.likes}
      <CommentIcon
        className="icon clickable"
        onClick={props.handleComment}
      /> {props.comments}
    </div>
  );
};

export default LikeCommentIcons;
