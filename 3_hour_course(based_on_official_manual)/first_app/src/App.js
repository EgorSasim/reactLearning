import React, { useState } from "react";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/inout/MyInput";

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

    const [title, setTitle] = useState('');
    
    
    const addNewPost = (e) => {
        e.preventDefault();
        console.log(title);
    }

    return (
    <div className="App">
        <form >
        <MyInput 
            type="text" 
            placeholder="Post name"
            value={title}
            onChange={ e => setTitle(e.target.value)}
        />
        <MyInput type="text" placeholder="Post description"/>
        
        <MyButton onClick={addNewPost}>Create Post</MyButton>
        </form>
        <PostList posts={posts} title={"Posts List 1"}/>
    </div>
  );
}

export default App;
