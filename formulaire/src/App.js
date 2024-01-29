import React from 'react';
import Formulaire from './decomnts/formulaire'; 
import Footer from './decomnts/Footer';
import Header from './decomnts/Header';
import './decomnts/formulaire.css'; 
function App() {
  return (
    <div className="App">
      
      <Header/>
      <br/><br/><br/><br/><br/><br/>
      <Formulaire />
      <br/><br/><br/><br/><br/><br/>
      <Footer/>
    </div>
  );
}

export default App;
