import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div style={{backgroundColor:'crimson',display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'center',height:'100vh',color:'white'}}>
    <h1 style={{textAlign:'center'}}>Momo Ordering Site</h1>
    <Link to='/type'>
    <button style={{padding:'10px',margin:'20px',fontWeight:'bold',borderRadius:'12px'}}>Order your Momo</button>
    </Link>
    </div>
  )
}

export default Home