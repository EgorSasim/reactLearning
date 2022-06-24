import React from "react";
import { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/inout/MyInput";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', content: ''});

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost);
        setPost({title:'', content:''});
    }

    return (
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
    );
};

export default PostForm