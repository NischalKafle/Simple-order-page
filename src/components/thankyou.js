import React from 'react';
import { useLocation } from 'react-router-dom';

const Thankyou = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const type = searchParams.get('type');
  const flavour = searchParams.get('flavour');

  return (
    <div style={{ backgroundColor: 'crimson', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', color: 'white' }}>
      <h1 style={{ textAlign: 'center' }}>Thank you</h1>
      <p>Your final order is: {type} {flavour} Momo</p>
    </div>
  );
};

export default Thankyou;
