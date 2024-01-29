
import Footer from './Footer';
import Body from './body';
import Header from './Header';
import FicheTechnique from './Fichetechnique';

import CircleImage from './CircleImage';
import StarRating from './StarRating';
import LawyerCard from './LawyerCard';
import avocatImage from './avocat.jpg'; 
import './avocatfiche.css';
function AvocatFiche() {
 
  return (
    <div className="App">
     
     
    <Header/>
   
    <div className="profil">
  <CircleImage />
  <h5>Jhon Doe</h5>
</div>
<div className="star-profil">
  <StarRating />
</div>

<div className='fiche' style={{ position: 'absolute', top: '100px', right: '20px', padding: '20px',  }}>
    <FicheTechnique />
</div>
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
   <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />  <br />
<div className="map-and-appointments">
  <div className="map-carte">
  <iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12919.00581776147!2d5.029888000000001!3d35.9530496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sdz!4v1706205066751!5m2!1sfr!2sdz"
  width="600"
  height="350"
  style={{ border: '0' }} // Pass style as an object, not a string
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

  </div>
  <div className="container">
  <div className="rectangle">
  <p>Rendez-vous:</p>
  <div className="content">
    <div className='compte'>
    <img src={avocatImage} alt="Profile" />
    <p>Farah khelfaoui</p>
    </div>
    <div className="details">
      <p>Date: 26 janvier 2024</p>
      <p>Heure: 14:00</p>
      <p>About: Problème familial</p>
      <div className='buttons' style={{ display: 'flex', flexDirection: 'row' }}>
  <button style={{ marginRight: '10px' }}>Accept</button>
  <button style={{ marginRight: '10px' }}>Reject</button>
  <button>pending</button>
</div>



    </div>
  </div>
</div>

<div className="rectangle">
  <p>Rendez-vous:</p>
  <div className="content">
    <div className='compte'>
    <img src={avocatImage} alt="Profile" />
    <p>Lilia Sarah</p>
    </div>
    <div className="details">
      <p>Date: 26 janvier 2024</p>
      <p>Heure: 14:00</p>
      <p>About: Problème familial</p>
      <div className='buttons' style={{ display: 'flex', flexDirection: 'row' }}>
  <button style={{ marginRight: '10px' }}> Accept</button>
  <button style={{ marginRight: '10px' }}>Reject</button>
  <button>pending</button>
</div>



    </div>
  </div>
</div>

  </div>
</div>

  <div className='publication' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <h3>CREATE a post:</h3>
  <input type="text" style={{ width: '1000px', height: '30px', border: '2px solid black', borderRadius: '5px', paddingLeft: '5px', marginBottom: '10px'  }} placeholder="title" />


  <input type="text" style={{ width: '1000px', height: '200px', border: '2px solid black', borderRadius: '5px', paddingLeft: '5px', marginBottom: '10px' }} placeholder="Content" />
  <button style={{ backgroundColor: '#CA965C', border: 'none', padding: '10px 20px', borderRadius: '20px', color: 'white', cursor: 'pointer', width: '200px' }}>Publier</button>
</div>


<br></br>
<p style={{ marginLeft: '140px' }}><h2>Last publication :</h2></p>

<div style={{ width: '1000px', height: '200px', backgroundColor: 'white', marginLeft: '150px', border: '2px solid black', }}>
       <div className='publicationn' style={{display:'flex',flexDirection:'column',marginLeft:'20px'}}>
        <h3>New laws</h3>
        <p>therer is a new update in familial law this year and it would be announced soon</p>
      </div>
      </div>
      <div style={{ width: '1000px', height: '200px', backgroundColor: 'white', marginLeft: '150px', border: '2px solid black', }}>
       <div className='publicationn' style={{display:'flex',flexDirection:'column',marginLeft:'20px'}}>
        <h3>New laws</h3>
        <p>therer is a new update in familial law this year and it would be announced soon</p>
      </div>
      </div>
      <button style={{ backgroundColor: '#CA965C', border: 'none', padding: '10px  20px' , borderRadius:'20px',color:'white',cursor:'pointer', marginLeft:'140px'}}>Commentaires</button>
<br /><br />

<div style={{ width: '1000px', height: '200px', backgroundColor: 'white', marginLeft: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid black' }}>
      <div className="details">
      <div className='compte' style={{marginRight:'750px'}}>
    <img src={avocatImage} alt="Profile" style={{width:'50px',height:'50px',borderRadius:'50px',marginRight:'10px',marginLeft:'10px'}} />
    <p>Farah Khelfaoui</p>
    </div>
   
      <p>you are a great lawyer</p>
      </div>
      </div>
      <div style={{ width: '1000px', height: '200px', backgroundColor: 'white', marginLeft: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid black' }}>
      <div className="details">
      <div className='compte' style={{marginRight:'750px'}}>
    <img src={avocatImage} alt="Profile" style={{width:'50px',height:'50px',borderRadius:'50px',marginRight:'10px',marginLeft:'10px'}} />
    <p>lilia sarah</p>
    </div>
   
      <p>you are a great lawyer</p>
      </div>
      </div>
      <br /><br />
<Footer/>

</div>

    

      
    
  );
}
export default AvocatFiche;

