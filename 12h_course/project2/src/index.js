import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"
import Header from './components/Header/Header.jsx';
import FactsTable from './components/FactsTable/FactsTable';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header/>
    <h1>Fun fact about React</h1>
    <FactsTable/>
  </div>
);

