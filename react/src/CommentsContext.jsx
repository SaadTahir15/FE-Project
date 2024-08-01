// CommentsContext.jsx
import React, { createContext, useState } from 'react';

export const CommentsContext = createContext();

export const CommentsProvider = ({ children }) => {
  const initialComments = {
    1: [
      { id: 1, name: 'John', text: 'Great post!', replies: [] },
      { id: 2, name: 'John', text: 'Worst post!', replies: [] }
    ],
    2: [{ id: 2, name: 'Jane', text: 'Interesting read!', replies: [] }],
    3: [{ id: 3, name: 'Doe', text: 'Very informative!', replies: [] }],
  };
  const [comments, setComments] = useState(initialComments);

  return (
    <CommentsContext.Provider value={{ comments, setComments }}>
      {children}
    </CommentsContext.Provider>
  );
};
