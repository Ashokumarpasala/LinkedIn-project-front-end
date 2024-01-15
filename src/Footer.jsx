import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div>
      <div className="text-center   ">
        <div className="d-flex flex-wrap justify-content-around m-3 p-2 text-center" style={{cursor:"pointer"}}>
        <p className='mx-2'><Link to='/about'>About</Link></p>
        <p className='mx-2'><a href="">Accessibility</a></p>
        <p className='mx-2'>Help Center</p>
        <p className='mx-2'>Privacy &amp; Terms</p>
        <p className='mx-2'>Ad Choices</p>
        <p className='mx-2'><a 
         target='_blank'
       href="https://business.linkedin.com/marketing-solutions/ads-i?trk=n_nav_ads_rr_b&src=li-nav&veh=ad%2Fstart&adobe_mc_sdid=SDID%3D58301E84E1D7D6CE-470742D6C4643C04%7CMCORGID%3D14215E3D5995C57C0A495C55%40AdobeOrg%7CTS%3D1705279814&adobe_mc_ref=https%3A%2F%2Fwww.linkedin.com%2F">Advertising</a></p>
        <p className='mx-2' >Business Services</p>
        <p className='mx-2'>Get the LinkedIn app</p>
        <p className='mx-2'>More</p>
        </div>
        <p className=''><span><img src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo.png" style={{width:"80px"}} alt="" /></span> LinkedIn Corporation © 2023</p>
      </div>
    </div>
  )
}

export default Footer


