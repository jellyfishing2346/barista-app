import { useState } from 'react'
import BaristaForm from './Components/BaristaForm';
import assets from './assets/omg-logo.79cdfddd.png';
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="title-container">
        <img src={assets} alt="On My Grind Logo" className="logo" height="100" width="100"/>
        <h1 className="title">On My Grind</h1>
        <p>So you think you can barista? Let's put that to the test...</p>
      </div>
      <BaristaForm />
    </div>
  );
}

export default App;
