import React from 'react'
import './Footer.css'
import logo2 from './image/cbe-logo.png'
import logo3 from './image/berkeley.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>


                <div className='upright'>
                <a href='/' className='logo'>
                    <img src={logo2} alt='logo2' />
                </a>
                </div>

                <div className='bottomright'>
                <a href='/' className='logo'>
                    <img src={logo3} alt='logo3' />
                </a>
                
                </div>
            </div>
        </div>
    )
}

export default Footer
