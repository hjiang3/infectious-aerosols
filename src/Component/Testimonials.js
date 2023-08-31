import React from 'react'
import './Testimonials.css'

const Testimonials = () => {
    return (
        <div className='testimonials' id='testimonials'>
            <div className='container'>
                <br></br>
                <br></br>
                <h2>Recommended Mitigation Actions</h2>
                <div className='content'>
                    <div className='card'>
                        <p>Action 1</p>
                        <p><span>Air Purifier</span></p>
                    </div>
                    <div className='card'>
                        <p>Action 2</p>
                        <p><span>Ventilation</span></p>
                    </div>
                    <div className='card'>
                        <p>Action 3</p>
                        <p><span>Distancing</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
