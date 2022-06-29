import React from 'react';
import ReactDOM from 'react-dom/client';
import Info from './components/Info/Info.jsx';
import Main from './components/Main/Main.jsx';
import Footer from './components/Footer/Footer.jsx';
import shreks from "./img/shreks.png"
import "./style.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <img src={shreks} alt="shreks"/>
    <Info props={ {name:"Gregory", job:"React developer", website:"gregoryMeAtPaNtS.com" }} />
    <Main />
    <Footer />
  </div>
);
