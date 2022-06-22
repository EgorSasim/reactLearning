import React, { useState } from "react";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";

import './styles/App.css';


function App() {
    
    const [posts, setPosts] = useState([
        {
            id: 1, 
            title: "Javascript",
            content: "Javascript is a programming language",
        },
        {
            id: 2, 
            title: "HTML",
            content: "HTML is a hypertext markup language",
        },
        {
            id: 3, 
            title: "DB",
            content: "It's a data base",
        },        
    ])

    const [posts2, setPosts2] = useState([
        {
            id: 1, 
            title: "NAT",
            content: "Network address translation: convert 'grey' IP into 'white' IP via cpecial stuff ",
        },
        {
            id: 2, 
            title: "HTTP",
            content: "HTTP - hypertext transfer protocol",
        },
        {
            id: 3, 
            title: "Linux",
            content: "Best operation system for free, but we use pirate Windows)",
        },
    ])

    return (
    <div className="App">
        <PostList posts={posts} title={"Posts List 1"}/>
        <PostList posts={posts2} title={"Posts List 2"}/>
    </div>
  );
}

export default App;
