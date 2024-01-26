import React from 'react';
import SearchBar from './home';
import './home.css';
import LawyerCard from './LawyerCard';
import Footer from './Footer';
import Header from './Header';
function App() {
  return (
    <div className="App">
      <Header/>
      <SearchBar />
       <div className="lawyer-cards-container">
        <LawyerCard name="John Doe" photoUrl="per1.jpg" rating={4} />
        <LawyerCard name="Jane Smith" photoUrl="per2.jpg" rating={3} />
        <LawyerCard name="Bob Johnson" photoUrl="per3.jpg" rating={5} />
        <LawyerCard name="John Doe" photoUrl="kk.jpg" rating={4} />
        
      </div><br/><br/><br/><br/>
      <div className="lawyer-cards-container">
        <LawyerCard name="John Doe" photoUrl="per1.jpg" rating={4} />
        <LawyerCard name="Jane Smith" photoUrl="per2.jpg" rating={3} />
        <LawyerCard name="Bob Johnson" photoUrl="per3.jpg" rating={5} />
        <LawyerCard name="John Doe" photoUrl="kk.jpg" rating={4} />
        
      </div>
      <br/><br/>
      <div className="lawyer-cards-container">
        <LawyerCard name="John Doe" photoUrl="per1.jpg" rating={4} />
        <LawyerCard name="Jane Smith" photoUrl="per2.jpg" rating={3} />
        <LawyerCard name="Bob Johnson" photoUrl="per3.jpg" rating={5} />
        <LawyerCard name="John Doe" photoUrl="kk.jpg" rating={4} />
        
      </div><br/><br/>
      <div className='tit'><h1>If you need to join us</h1></div>
      <div className="login-buttons">
        <button>Login</button>
        <button>Connexion</button>
      </div><br/><br/><br/><br/>
      <Footer/>
</div>      
  )
}

export default App;
