import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Flavour = () => {
  const flavours = ['Chicken', 'Buff', 'Veg', 'Pork', 'Paneer'];
  const [selectedFlavour, setSelectedFlavour] = useState('');

  const location = useLocation();
  const navigate = useNavigate();
  const type = new URLSearchParams(location.search).get('type');

  const handleClick = () => {
    if (selectedFlavour !== '') {
      navigate(`/order?type=${type}&flavour=${selectedFlavour}`);
    } else {
        alert('Please choose a Flavour')
    }
  };

  const handleFlavourChange = (event) => {
    setSelectedFlavour(event.target.value);
  };

  return (
    <div style={{ backgroundColor: 'crimson', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', color: 'white' }}>
      <h1 style={{ textAlign: 'center' }}>Step 2: Choose your Flavour</h1>
      {flavours.map(flavour => (
        <div className="form-check" key={flavour}>
          <input className="form-check-input" type="radio" name="flexRadioDefault" id={`flexRadioDefault-${flavour}`} value={flavour} onChange={handleFlavourChange} />
          <label className="form-check-label" htmlFor={`flexRadioDefault-${flavour}`}>
            {flavour}
          </label>
        </div>
      ))}
      <button style={{ padding: '10px', margin: '20px', fontWeight: 'bold', borderRadius: '12px' }} onClick={handleClick}>Next</button>
    </div>
  );
};

export default Flavour;
