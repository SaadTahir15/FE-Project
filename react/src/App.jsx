import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Announcement from './announcement';
import Navbar from './navbar';
import Home from './home';
import About from './about';
import Forum from './forum';
import PostDetails from './postDetails';

const App = () => (
  <div>
    <Announcement />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} /> 
      <Route path="/forum" element={<Forum />} /> 
      <Route path="/post/:postId" element={<PostDetails />} />
    </Routes>
  </div>
);

export default App;
