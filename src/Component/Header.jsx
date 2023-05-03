import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div>
      <div className="navbar">
        <div className='navbar__logo'> <b>My logo</b></div>
       
        <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>Faq</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
