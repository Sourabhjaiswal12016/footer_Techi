import React from 'react'
import '../footer/Footer.css'
const Footerright = () => {
  return (
    <div className='footerRight'>
     <div className='follow'><h3>FOLLOW US</h3></div>
     {/* social media using anchor tag */}
     <div className='social-medias'>
      <a href='https://www.instagram.com/techieco_solutions/'><i class="fa-brands fa-square-instagram social-icon"></i></a>
      <a href='https://www.linkedin.com/company/96943280/admin/feed/posts/'><i class="fa-brands fa-linkedin social-icon"></i></a>
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
     <a href="tel:+91 9971732962"><i class="fa-solid fa-phone phone-icon"></i><h5 className='contact-bottom'>Tel: +91 9971732962 </h5></a>
     </div>
     </div>




    </div>
  )
}

export default Footerright
