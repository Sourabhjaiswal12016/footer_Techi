import React from 'react'
import './Footer.css'

import logo from '../../Assets/TE.png'

const Footer = () => {
  return (
    <div className='footer'>
    <h2 className='footer-heading'>Footer</h2>
    
    <div className='lineAndAllTwo'>
    {/* just a line to separate footer */}
    <div className='line'></div>

    <div className='all-two-container'>
    
    {/* footer left start here */}
    <div className='footerLeft'>
     {/* logo only */}
    <div><img src={logo} alt='TechiEcoLogo' className='logo'/></div>
    
     {/* company Name &  address  */}
     <div className='name-address'>
     <div className='company-name'><h2>TechiEco Solutions Pvt Ltd.</h2></div>
     <div className='company-address'><p className='address-text'>N-84 S/CITY GURUGRAM SADAR BAZAR 
GURGAON<br/><span className='second-line-address'>GURGAON-122001</span><br/><span className='third-line-address'>HARYANA</span><br/><span className='fourth-line-address'>Mob: +91 9971732962</span></p></div>
     </div>
    </div>
    {/* footer left end here */}
   
    <div className='vertical-line'></div>

    {/* footer right start here */}

    <div className='footerRight'>
     <div className='follow'><h3>FOLLOW US</h3></div>
     {/* social media using anchor tag */}
     <div className='social-medias'>
      <a href='https://www.instagram.com/techieco_solutions/'><i class="fa-brands fa-square-instagram social-icon">
</i></a>
      <a href='https://www.linkedin.com/company/96943280/admin/feed/posts/'><i class="fa-brands fa-linkedin 
social-icon"></i></a>
      <a href='https://twitter.com/techiEco_S'><i class="fa-brands fa-square-twitter social-icon"></i></a>
      
     </div>
     {/* social media finished here */}

     {/* contact us secction via email starts here */}
     <h3 className='contact'>Contact Us</h3>
    
     <div className='email-phone'>
     <div className='email-container'>
     <a href="mailto:techiecos@gmail.com"><i className="fa-solid fa-envelope email-icon"></i><h5
     className='email-bottom'>Email: techiecos@gmail.com </h5></a>
     </div>
     
     <div className='contact-container'>
     <a href="tel:+91 9971732962"><i class="fa-solid fa-phone phone-icon"></i><h5 className='contact-bottom'>Tel:
+91 9971732962 </h5></a>
     </div>
     </div>




    </div>

    {/* footer right end here */}
    
    </div>
    </div>
    </div>
  )
}

export default Footer
