import React from 'react'
import './Footer.css'
import logo2 from './image/cbe-logo.png'
import logo3 from './image/berkeley.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
            <div className='col-1'>



                <p style={{color: '#ccc'}}>
                <a href="https://cbe-berkeley.gitbook.io/berkeley-infectious-aerosols-tool/changelog/changelog#version-1.0.0-2023-09-21" 
                    style={{ color: '#ccc'}}>Version 1.0</a> | <a href="https://cbe-berkeley.gitbook.io/berkeley-infectious-aerosols-tool/#contributions" 
                    style={{ color: '#ccc'}}>Contributors</a> | <a href="https://cbe-berkeley.gitbook.io/berkeley-infectious-aerosols-tool/" 
                    style={{ color: '#ccc'}}>Documentation</a> | <a href="https://docs.google.com/forms/d/e/1FAIpQLScjqsZGOEPwvETjGhMiR94GiyHkGhmuuETISncjeso56PAQWA/viewform" 
                    style={{ color: '#ccc'}}>Feedbacks</a> | <a href="https://cbe.berkeley.edu/resources/tools/" 
                    style={{ color: '#ccc'}}>Other CBE tools</a></p>

<br/>
                    <p style={{color: '#ccc'}}>Disclaimer: This tool is not affiliated with, endorsed by, or officially related to ASHRAE.</p>
    </div>

                <div className='col-2'>
                    <div className='upright'>
                        <a href='https://cbe.berkeley.edu/' className='logo' target='_blank' rel='noopener noreferrer'>
                            <img src={logo2} alt='logo2' />
                        </a>
                    </div>
                    <div className='bottomright'>
                        <div className='logo'>
                            <img src={logo3} alt='logo3' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
