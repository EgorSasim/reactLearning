import React, { useState } from "react";
import Counter from "./components/Counter";

function App() {
  
    const [value, setValue] = useState('Text in the input');


  return (
    <div className="App">
        <Counter/>
        <h1>{value}</h1>
        <input onChange={(event) => {setValue(event.target.value)}} type={"text"} value={value}></input>
    </div>
  );
}

export default App;
