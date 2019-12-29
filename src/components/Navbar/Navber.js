import React from 'react';
import "./Navbar.scss";
import logo from '../../logo/logo.png';


export default function Navber() {
    return <nav className="navbar">
           <img src={logo} alt='city Tour Logo' />
           <ul className="nav-links">
               <li>
                 <a href="/"  className="nav-link">
                 Home
                </a>
               </li>
               <li>
                 <a href="/" className="nav-link">
                 About
                </a>
               </li>
               <li>
                 <a href="/" className="nav-link  active"  >
                 tours
                </a>
                </li>
                <li>
                 <a href="/" className="nav-link"  >
                 contact
                 </a>
                 </li>
                </ul>
    </nav>
        
    
}

