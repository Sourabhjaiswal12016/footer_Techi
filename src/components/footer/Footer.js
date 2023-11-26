import React from 'react'
import './Footer.css'

import logo from '../../Assets/TE.png'

const Footer = () => {
  return (
    <section className='main-container'>
    {/* first container */}
    <div className='container first-container'>
      <img src={logo} alt='logo' className='logo' />
      <div className='line'></div>
      <div className='social-medias'>
      <a href='https://www.linkedin.com/company/96943280/admin/feed/posts/'><i className="fa-brands fa-linkedin social"></i></a>
      <a href='https://twitter.com/techiEco_S'><i className="fa-brands fa-square-twitter social"></i></a>
      <a href='https://www.instagram.com/techieco_solutions/'><i className="fa-brands fa-square-instagram social"></i></a>
      
      </div>
    </div>
    {/* second container */}
    <div className='container second-container'>
      <h1 className='com-name'>TechiEco Solutions Pvt Ltd.</h1>
      <div className='com-address-title'><div className='location-icon'><i className="fa-solid fa-location-dot fa-2xl"></i></div><div className='location-heading' ><h2 className='find'>Find Us</h2></div></div>
      <div className='address-lines'>
      <p className='com-address'>N-84 S/CITY GURUGRAM SADAR BAZAR GURGAON,</p>
      <p className='com-address2'> GURGAON-122001,</p>
      <p className='com-address3'>HARYANA</p>
      </div>
    </div>
    {/* third container */}
    <div className='container third-container'>
      <h2 className='Contact'>Contact Us</h2>
      <div className='email'>
      <a href='mailto:techiecos@gmail.com' className='email'><i className="fa-solid fa-envelope "></i> : techiecos@gmail.com</a>
      </div>
      <div className='phone'>
      <a href='tel:9971732962' className='phone'><i className="fa-solid fa-phone "> : +91 9971732962</i></a>
      </div>
    </div>
    </section>
  )


 }

export default Footer
