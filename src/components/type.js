import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Type = () => {
  const types = ['Steam', 'Fried', 'C', 'Kothey'];
  const [selectedType, setSelectedType] = useState('');

  const navigate = useNavigate();

  const handleClick = () => {
    if (selectedType !== '') {
      navigate(`/flavour?type=${selectedType}`);
    } else {
      alert ('Please choose a Type')
    }
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  return (
    <div style={{ backgroundColor: 'crimson', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', color: 'white' }}>
      <h1 style={{ textAlign: 'center' }}>Step 1: Choose your Type</h1>
      {types.map(type => (
        <div className="form-check" key={type}>
          <input className="form-check-input" type="radio" name="flexRadioDefault" id={`flexRadioDefault-${type}`} value={type} onChange={handleTypeChange} />
          <label className="form-check-label" htmlFor={`flexRadioDefault-${type}`}>
            {type}
          </label>
        </div>
      ))}
      <button style={{ padding: '10px', margin: '20px', fontWeight: 'bold', borderRadius: '12px' }} onClick={handleClick}>Next</button>
    </div>
  );
};

export default Type;

