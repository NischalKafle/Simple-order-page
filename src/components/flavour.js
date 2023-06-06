import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

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
      <motion.h1 initial={{y:'150vw'}} animate={{y:0,transition:{delay:0.5}}} style={{ textAlign: 'center' }}>Step 2: Choose your Flavour</motion.h1>
      {flavours.map(flavour => (
        <motion.div initial={{y:'-150vw'}} animate={{y:0,transition:{delay:1}}} className="form-check" key={flavour}>
          <input className="form-check-input" type="radio" name="flexRadioDefault" id={`flexRadioDefault-${flavour}`} value={flavour} onChange={handleFlavourChange} />
          <label className="form-check-label" htmlFor={`flexRadioDefault-${flavour}`}>
            {flavour}
          </label>
        </motion.div>
      ))}
      <motion.button initial={{x:'-150vw'}} animate={{x:0,transition:{delay:1.5}}} style={{ padding: '10px', margin: '20px', fontWeight: 'bold', borderRadius: '12px' }} onClick={handleClick}>Next</motion.button>
    </div>
  );
};

export default Flavour;
