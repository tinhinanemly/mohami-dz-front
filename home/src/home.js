import React, { useState } from 'react';
const data = [
];

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [searchSpeciality, setSearchSpeciality] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = () => {
    const result = data.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      item.location.toLowerCase().includes(searchLocation.toLowerCase()) &&
      item.speciality.toLowerCase().includes(searchSpeciality.toLowerCase())
    );

    setFilteredData(result);
  };

  return (
    
    <div> 
      <div className="container">
        <img
          src="./pic1 (1).png"
          alt="Page d'accueil"
        />
      </div>
      <div className='n1'><h1>WE ARE HERE TO</h1></div>
      <div className='n2'><h1> ACHIEVE YOUR</h1></div>
      <div className='n3'><h1> BEST LAWYER</h1></div>
      <div className='search'>
       <div className='hh'><h1>Search  Lawyer you looking for ...</h1></div> 
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <input
        type="text"
        placeholder="Search by location"
        value={searchLocation}
        onChange={(e) => setSearchLocation(e.target.value)}
      />
      <input
        type="text"
        placeholder="Search by speciality"
        value={searchSpeciality}
        onChange={(e) => setSearchSpeciality(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {filteredData.length > 0 ? (
        <ul>
          {filteredData.map(item => (
            <li key={item.name}>
              {item.name} - {item.location} - {item.speciality}
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
      </div>
      <div className='n4'><h1>Our Lawyers:</h1></div>
    </div>
  );
};

export default SearchBar;
