import React, {useMemo, useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyInput from "./components/UI/inout/MyInput";
import MySelect from "./components/UI/select/MySelect";

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

    const [selectedSort, setSelectedSort] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const sortedPosts = useMemo(() => {
        console.log("Call getSortedPosts"); 
        if (selectedSort)
            return [...posts.sort()].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort]));
        return [posts];
    }, [selectedSort, posts]);


    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.includes(searchQuery))
    }, [searchQuery, sortedPosts])
    

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort);
        console.log(sort);
    }
   
    return (
    <div className="App">
        <PostForm create={createPost} />
        <hr style={{margin: "5px"}}/>
            <MyInput 
                type="text" 
                placeholder="Search"
                value={searchQuery}
                onChange={ e => setSearchQuery(e.target.value)}
            ></MyInput>

            <MySelect
                value={selectedSort}
                onChange={sortPosts}
                defaultValue='sortBy'
                options = {[
                    {value: 'title', name: 'By name'},
                    {value: 'content', name: 'By description'}
                ]}
        />
        
        {posts.length !== 0
            ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Posts List 1"}/>
            : <h1 style={{textAlign: "center"}}>Posts not found</h1>
        } 
        
    </div>
  );
}

export default App;
