import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from './image/berkeley.png';
import './Navbar.css';

const Navbar = ({ setCurrentPage }) => {
    const [click, setClick] = useState(false);
    const [activeTab, setActiveTab] = useState("Home");
    const [unit, setUnit] = useState("IP");  // Set IP as the default

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    const handleTabClick = (e, tabName, pageName) => {
        e.preventDefault();
        setActiveTab(tabName);
        setCurrentPage(pageName);
        window.scrollTo(0, 0);  // Scroll to the top of the page
    };

    const handleAddSimulation_1 = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
      
      const handleAddSimulation_2 = (e) => {
        e.preventDefault();
        const compareElement = document.getElementById('compare');
        compareElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };

    const toggleUnit = () => {  
        setUnit(unit === "SI" ? "IP" : "SI");
    };

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo' onClick={(e) => {
                    e.preventDefault();
                    window.location.href="https://infectious.cbe.berkeley.edu";
                }}>
                    <img src={logo} alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
                </div>
                <div className='title'>
                    <p>Berkeley Infectious Aerosols Tool</p>   
                </div>

                <ul className={click ? "nav-menu active" : "nav-menu"}>

{/*
                                        <li className='nav-item'>
    <button 
        onClick={() => setUnit(unit === "IP" ? "SI" : "IP")} 
        className='unit-btn'
    >
        {unit}
    </button>
</li>
            */}



                </ul>
            </nav>
        </div>
    )
}

export default Navbar;