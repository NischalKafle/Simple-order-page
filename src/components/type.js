import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

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
    <div  style={{ backgroundColor: 'crimson', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', color: 'white' }}>
      <motion.h1 initial={{opacity:0}} animate={{opacity:1,transition:{delay:0.5}}} style={{ textAlign: 'center' }}>Step 1: Choose your Type</motion.h1>
      {types.map(type => (
        <motion.div initial={{y:'150vw'}} animate={{y:0,transition:{delay:1}}} className="form-check" key={type}>
          <input className="form-check-input" type="radio" name="flexRadioDefault" id={`flexRadioDefault-${type}`} value={type} onChange={handleTypeChange} />
          <label className="form-check-label" htmlFor={`flexRadioDefault-${type}`}>
            {type}
          </label>
        </motion.div>
      ))}
      <motion.div initial={{x:'-150vw'}} animate={{x:0}}>
      <button style={{ padding: '10px', margin: '20px', fontWeight: 'bold', borderRadius: '12px' }} onClick={handleClick}>Next</button>
      </motion.div>
    </div>
  );
};

export default Type;


