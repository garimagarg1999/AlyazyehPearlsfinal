// import React from 'react'
// import './Navbar.css'

// import { Component } from 'react';


// class Navbar extends Component {
//   state = { clicked: false };
//   handleClick = () => {
//     this.setState({ clicked: !this.state.clicked })
//   }
//   render() {
//     return (
//       <>
//         <nav>
//           <div>
//           <img src={img} alt="company-logo" className="company-logo" />
//           <h2 className="company-logo-heading">AlyazyehPearls</h2>
//           </div>
//           <ul id="navbar" className={this.state.clicked ? "#navbar active":"#navbar"}>
//             <li><a href="/Home">HOME</a></li>
//             <li><a href="/About">ABOUT US</a></li>
//             <li><a href="/services">OUR SERVICES</a></li>
//             <li><a href="/Jewellery">JEWELLERY</a></li>
//             <li><a href="/gallery">GALLERY</a></li>
//             <li><a href="/Contact">CONTACT US</a></li>
//           </ul>
//           <div id='mobile' onClick={this.handleClick}>
//             <i id='bar' className={this.state.clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
//           </div>
//         </nav></>
//     )
//   }
// }

// export default Navbar








import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Hamburger from './ham.png'
import logo from './logo.png'
import './Navbar.css'


const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="nav-navbar">
      <div className="nav-container">
      <a href="/"><div className="nav-logo">
          <img src={logo} alt="Logo" className='nav-logo-img'/>
          <h3>ALYAZYEH PEARLS</h3>
        </div></a>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img src={Hamburger} alt="Hamburger" className='ham-img'/>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/Jewellery">Jewellery</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar