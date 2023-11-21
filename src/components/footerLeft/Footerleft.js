import React from 'react'
import '../footer/Footer.css'
import logo from '../../Assets/TE.png'
const Footerleft = () => {
  return (
    <div className='footerLeft'>
     {/* logo only */}
    <div className='logo'><img src={logo} alt='TechiEcoLogo' className='logo'/></div>
    
     {/* company Name &  address  */}
     <div className='name-address'>
     <div className='company-name'><h2>TechiEco Solutions Pvt Ltd.</h2></div>
     <div className='company-address'><p className='address-text'>N-84 S/CITY GURUGRAM SADAR BAZAR GURGAON<br/>GURGAON-122001<br/>HARYANA<br/>Mob: +91 9971732962</p></div>
     </div>
    </div>
  )
}

export default Footerleft
