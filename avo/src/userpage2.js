
import Footer from './Footer';
import Header from './Header';
import CircleImage from './CircleImage';
import StarRating from './StarRating';
import LawyerCard from './LawyerCard';
import avocatImage from './avocat.jpg'; 
import FicheTechnique1 from './Fichetechnique1';
import './userpage2.css';



function Userpage2() {
 
  return (
    <div className="App">
     
     
    <Header/>
   
    <div className="profil">
  <CircleImage  />
  <h5>Jhon Doe</h5>
</div>
<div className="star-profil">
  <StarRating />
</div>

<div className='fiche' style={{ position: 'absolute', top: '100px', right: '20px', padding: '20px',  }}>
    <FicheTechnique1 />
</div>
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br />  <br /><br /><br /><br /><br />
<div className="map-and-appointments">
  <div className="map-carte">
  <iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12919.00581776147!2d5.029888000000001!3d35.9530496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sdz!4v1706205066751!5m2!1sfr!2sdz"
  width="1500"
  height="350"
  style={{ border: '0' }} // Pass style as an object, not a string
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

  </div>
  
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

      <button style={{ backgroundColor: '#705231', border: 'none', padding: '10px  20px' , borderRadius:'20px',color:'white',cursor:'pointer', marginLeft:'140px'}}>favorite</button>
      <button style={{ backgroundColor: '#CA965C', border: 'none', padding: '10px  20px' , borderRadius:'20px',color:'white',cursor:'pointer', marginLeft:'40px'}}> Comment</button>
<br /><br />
<div style={{ width: '1000px', height: '200px', backgroundColor: 'white', marginLeft: '150px', border: '2px solid black', }}>
       <div className='publicationn' style={{display:'flex',flexDirection:'column',marginLeft:'20px'}}>
        <h3>Add your opinion : </h3>
        
        <br /><br />
      </div>
      <button style={{ backgroundColor: '#705231', border: 'none', padding: '10px  20px' , borderRadius:'20px',color:'white',cursor:'pointer', marginLeft:'420px'}}>favorite</button>
      </div>

      
      <br /><br />
      
<Footer/>

</div>

    

      
    
  );
}

export default Userpage2;
