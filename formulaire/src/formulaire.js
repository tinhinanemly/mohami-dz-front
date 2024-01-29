import React, { useState } from 'react';

const Formulaire = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    date: '',
    holrog: '',
    email: '',
    numberphone: '',
    publication: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePublicationSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle publication submission here
    console.log('Publication submitted:', formData.publication);
  };

  return (
    <div className="form-wrapper" >
      <div className='FELLA'><h1>ASK FOR YOUR APPOINTMENT</h1></div>
         <div className="form-container">
    
           <div className='hh'>
      <label className="form-label">
        First Name:
        <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} className="form-input" />
      </label>
      <br /><br/><br />
      <label className="form-label">
        Last Name:
        <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} className="form-input" />
      </label>
      <br /><br/><br />
      <label className="form-label">
        Date:
        <input type="date" name="date" value={formData.date} onChange={handleChange} className="form-input" />
      </label>
    </div>

    <div className='hello'>
      <label className="form-label">
        Holrog:
        <input type="text" name="holrog" value={formData.holrog} onChange={handleChange} className="form-input" />
      </label>
      <br /><br/><br />
      <label className="form-label">
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" />
      </label>
      <br /><br/><br />
      <label className="form-label">
        Phone Number:
        <input
          type="tel"
          name="numberphone"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          value={formData.numberphone}
          onChange={handleChange}
          className="form-input"
        />
      </label>
    </div>
  </div>
   
  <div className='heloo' >
  <div className='baba' >
    <form onSubmit={handlePublicationSubmit} className="publication-form">
        <label className="form-labell"  >
            Add a Publication:
            <input
                type="text"
                name="publication"
                value={formData.publication}
                onChange={handleChange}
                className="form-input"
            />
        </label>
        <input type="file" accept="image/*" className="photo-upload" />
    </form>
</div>
<div className='but'><button type="submit" className="submit-button">send</button></div>
</div>
</div>

  )}
export default Formulaire;

