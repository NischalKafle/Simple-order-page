import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div style={{backgroundColor:'crimson',display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'center',height:'100vh',color:'white'}}>
    <motion.h1 animate={{fontSize:'70px',transition: { delay: 0.7 },y:-100 }}  style={{textAlign:'center'}}>Momo Ordering Site</motion.h1>
    <Link to='/type'>
    <motion.button animate={{scale:'2',transition: { delay: 0.7 },margin:'40px',y:-100}} style={{padding:'10px',margin:'20px',fontWeight:'bold',borderRadius:'12px'}}>Order your Momo</motion.button>
    </Link>
    </div>
  )
}

export default Home