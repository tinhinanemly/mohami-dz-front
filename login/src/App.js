import React from 'react';
import './login.css'; 
import Login from './login'; 
import Header from'./Header';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Login />
      <br/><br/><br/>
      <Footer/>
    </div>
  );
}

export default App;
