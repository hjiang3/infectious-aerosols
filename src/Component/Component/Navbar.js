import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from './image/berkeley.png'
import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)


    const handleAddSimulation_1 = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
      
      const handleAddSimulation_2 = (e) => {
        e.preventDefault();
        const compareElement = document.getElementById('compare');
        compareElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };
      
      const handleAddSimulation_3 = (e) => {
        e.preventDefault();
        const aboutElement = document.getElementById('demo');
        aboutElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <div className='title'>
                    <p>Berkeley Infectious Aerosol Controller</p>   
                </div>
       

                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='#' onClick={handleAddSimulation_1}>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#compare' onClick={handleAddSimulation_2}>Compare</a>
                    </li>
                    {/*
                    <li className='nav-item'>
                        <a href='#testimonials' onClick={closeMenu}>AI Advisor</a>
                    </li>
                    */}

                    <li className='nav-item'>
                        <a href='#demo' onClick={handleAddSimulation_3}>About</a>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Navbar