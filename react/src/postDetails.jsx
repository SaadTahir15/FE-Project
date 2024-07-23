import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

const posts = [
  { id: 1, name: "Saad Tahir", title: "First Post", content: "This is the first post content.", likes: 10, comments: 5 },
  { id: 2, name: "Anabiya Moiz", title: "Second Post Title", content: "This is the second post content.", likes: 5, comments: 2 },
  { id: 3, name: "Alexender", title: "Third Post Title", content: "This is the third post content.", likes: 20, comments: 8 }
];

const PostDetails = () => {
  const { postId } = useParams();
  const post = posts.find((p) => p.id === parseInt(postId));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <Card sx={{ width: '100%', maxWidth: 800, marginBottom: 2, opacity: 0.9 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {post.name.charAt(0)}
            </Avatar>
          }
          title={post.name}
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
    </div>
  );
};

export default PostDetails;
