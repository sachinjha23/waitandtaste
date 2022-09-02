import React from 'react'
import logo from '../images/logo.png'
import Button from './Button'
import {Link} from 'react-router-dom'
import SocialMedia from './SocialMedia'
export default function Navbar() {
  return (
    <nav id="navbar">
        <div className="nav-logo">
            {/* <img src={logo} alt="" /> */}
        </div>
        <div className="nav-items">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </div>
        <div className="nav-button">
            <Button btn="+91 8742920558"/>
        </div>
    </nav>
  )
}
