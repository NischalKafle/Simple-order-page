import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div>
<nav class="navbar navbar-light bg-light">
<div style={{marginLeft:'10px',fontSize:'35px'}}>
<Link to='/' style={{textDecoration:'none', fontWeight:'bold',}}>
<img src="../images/momo.jpg.jpg" width="50" height="50" class="d-inline-block align-top" alt=""/ >
Momo Ordering Page
</Link>
</div>
</nav>
    </div>
  )
}

export default Header