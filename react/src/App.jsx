import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Announcement from './announcement'
import Navbar from './navbar';
import Home from './home';
import About from './about';

const App = () => (
  <div>
    <Announcement />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} /> 
    </Routes>

  </div>
);

export default App;
