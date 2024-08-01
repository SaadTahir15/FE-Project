// PostsContext.jsx
import React, { createContext, useState } from 'react';
import { initialPosts } from './post';

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState(initialPosts);

  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostsContext.Provider>
  );
};
