import React from 'react';

import avocatImage from './avocat.jpg'; // Importer le fichier image

function CircleImage() {
  return (
    <div className="circle-container">
      <div className="circle-image-container">
        <img
          src={avocatImage}
          alt="Lawyer name"
          className="circle-image"
        />
      </div>
      
    </div>
  );
}

export default CircleImage;
