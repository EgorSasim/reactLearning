import React from "react";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import Cards_data from "./components/Cards_data";

const App = () => {
  let cards = Cards_data.map( (card) => {
    return <Card img={card.img} state={card.state} stars={card.stars} workDesc={card.workDesc} price={card.price} who={card.who}/>;
  })
  console.log(cards);
  return (
    <div className="app">
      <NavBar/>
      <div className="cards">
        {cards};
      </div>
    </div>
  );
}

export default App;