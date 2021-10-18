import React, { useEffect, useState } from 'react';
import './App.css';
import { Router } from "@reach/router";
import Posts from './components/post.js'
import CreatePosts from './components/create_post'

function App() {
    const [x, forceUpdate] = useState(0);
    
    const updatePosts = () => {
        forceUpdate(x+1);
    }
    
  return (
      <div>
          <Posts uselessInt={x}/>
          <CreatePosts updatePost={forceUpdate}/>
      </div>
  );
}

export default App;
