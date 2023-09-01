import React from 'react'
import './Demo.css'

const Demo = () => {
    return (
        <div className='demo' id='demo'>
            <div className='container'>
                <div className='col-1'>
                    <br/>
                    <h1 >About</h1>
                    <p>This tool calculates infection risk, offering custom mitigation strategies like ventilation and filtration based on room details. It checks for compliance with multiple standards, including ASHRAE Standard 241 and LANCET, while also providing user-targeted risk and short-range analysis. Act on easy-to-understand advice to create a safer, healthier indoor environment.</p>
                    <br/>
                    <button className='button'>Documentation</button>
                    <br/>
                </div>
                <div className='col-2'>
                    <br/>
                    <br/>
                    <h2>Developed by:</h2>
                    <span style={{ lineHeight: '0.5' }}>&nbsp;</span>
                    <p>Chai Yoon Um</p>
                    <p>Stefano Schiavon</p>
                    <p>Thomas Parkinson</p>
                    <p>Seema Bhangar</p>
                    <p>Jiayu Li</p>
                    <br/>
                    <a href="https://cbe.berkeley.edu/resources/tools/"><button className='button'>Other CBE Tools</button></a>
                    <br/>
                </div>
            </div>
        </div>
    )
}

export default Demo

