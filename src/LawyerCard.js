import React, { useState } from 'react';
import StarRating from './StarRating';
const LawyerCard = ({ name, photoUrl, rating }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
 
    <div
      className={`lawyer-card ${isClicked ? 'clicked' : ''}`}
      onClick={handleClick}
    >
       
      <img
        src={photoUrl}
        alt={name}
        className={`lawyer-photo ${isClicked ? 'clicked' : ''}`}
      />
      <h3 className="lawyer-name">{name}</h3>
      <StarRating rating={rating} />
    </div>
   
   
  );
};

export default LawyerCard;