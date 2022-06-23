import React, { useRef, useState } from "react";
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

    const [post, setPost] = useState({title: '', body: ''});
    
    
    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
        }
        setPosts([...posts, {...post, id: Date.now()}]);
        setPost({title:'', body:''});
    }

    return (
    <div className="App">
        <form >
        <MyInput 
            type="text" 
            placeholder="Post name"
            value={post.title}
            onChange={ e => setPost({...post, title: e.target.value})}
        />
        <MyInput 
            value={post.content}
            type="text" 
            placeholder="Post description"
            onChange={ e => setPost({...post, content: e.target.value})}
            />
        
        <MyButton onClick={addNewPost}>Create Post</MyButton>
        </form>
        <PostList posts={posts} title={"Posts List 1"}/>
    </div>
  );
}

export default App;
