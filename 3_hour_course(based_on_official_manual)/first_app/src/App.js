import React, { useState } from "react";
import PostItem from "./components/PostItem";
import './styles/App.css';

function App() {
  
    const [value, setValue] = useState('Text in the input');


  return (
    <div className="App">
        <PostItem post={{
            id: 1, 
            title: "Javascript",
            content: "Javascript is a programming language",
        }}/>

        <PostItem post={{
            id: 2, 
            title: "HTML",
            content: "HTML is a hypertext markup language",
        }}/>
      
    </div>
  );
}

export default App;
