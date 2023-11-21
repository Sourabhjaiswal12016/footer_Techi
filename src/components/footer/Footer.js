import React from 'react'
import './Footer.css'
import Footerleft from '../footerLeft/Footerleft'
import Footerright from '../footerRight/Footerright'


const Footer = () => {
  return (
    <div className='footer'>
    <h2 className='footer-heading'>Footer</h2>
    
    <div className='lineAndAllTwo'>
    {/* just a line to separate footer */}
    <div className='line'></div>

    <div className='all-two-container'>
    <Footerleft/>
   
   
    <div className='vertical-line'></div>
    <Footerright/>
    </div>
    </div>
    </div>
  )
}

export default Footer
