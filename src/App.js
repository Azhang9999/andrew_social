import React from 'react';
import './App.css';
import { Router } from "@reach/router";
import Posts from './components/post.js'
import CreatePosts from './components/create_post'

function App() {
  return (
      <div>
          <Posts/>
          <CreatePosts/>
      </div>
  );
}

export default App;
