import React from 'react'
import './Footer.css'
import logo2 from './image/cbe-logo.png'
import logo3 from './image/berkeley.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
            <div className='col-1'>

        <h3 style={{color: '#ccc'}}>Contact us</h3>
        <br/>
        <p style={{color: '#ccc'}}><a href="https://cbe.berkeley.edu/about-us/people/chai-yoon-um/" style={{ color: '#ccc'}}>Chai Yoon Um</a>: <a href="mailto:chaium96@berkeley.edu" style={{ color: '#ccc'}}>chaium96@berkeley.edu</a></p>
        <p style={{color: '#ccc'}}><a href="https://cbe.berkeley.edu/about-us/people/stefano-schiavon/" style={{ color: '#ccc'}}>Stefano Schiavon</a>: <a href="mailto:schiavon@berkeley.edu" style={{ color: '#ccc'}}>schiavon@berkeley.edu</a></p>
        <br/>

        <p style={{color: '#ccc'}}>Version 1.0 published on 09.01.2023</p>
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
