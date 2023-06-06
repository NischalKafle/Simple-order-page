import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Thankyou = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const type = searchParams.get('type');
  const flavour = searchParams.get('flavour');

  return (
    <div style={{ backgroundColor: 'crimson', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', color: 'white' }}>
      <motion.h1 initial={{x:'150vw'}} animate={{x:0,transition:{delay:0.5}}} style={{ textAlign: 'center' }}>Thank you</motion.h1>
      <motion.p initial={{y:'-150vw'}} animate={{y:0,transition:{delay:0.7}}}>Your final order is: {type} {flavour} Momo</motion.p>
    </div>
  );
};

export default Thankyou;
