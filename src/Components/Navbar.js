import React from 'react';
import {navLinks} from '../utils/Constants';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.jpg';
import '../index.css';
import {GiHamburgerMenu} from 'react-icons/gi';
const Navbar = () => {
    return (
        <div className="navbar">
            <div className='Logo'>
                <img src={logo}/>
            </div>
            <div className='links'>
                <ul className='links-ul'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/person">Create Person</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><Link to="/error">Error</Link></li>
                </ul>
            </div>
            <div className='social'>
                social icons
            </div>
            <GiHamburgerMenu className="burger"/>
        </div>
    );
};

export default Navbar;