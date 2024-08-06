import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import Home from './home';
import About from './about';
import Forum from './forum';
import Shop from './shop';
import PostDetails from './postDetails';
import Contacts from './contacts'; // Import your Contacts component
import { PostsProvider } from './PostsContext';
import { CommentsProvider } from './CommentsContext';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <PostsProvider>
      <CommentsProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/post/:postId" element={<PostDetails />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </CommentsProvider>
    </PostsProvider>
  </div>
);

export default App;
