import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div>
      <div className="text-center   ">
        <div className="d-flex flex-wrap justify-content-around m-3 p-2 text-center" style={{cursor:"pointer"}}>
        <p className='mx-2'><Link to='/about'>About</Link></p>
        <p className='mx-2'>Accessibility</p>
        <p className='mx-2'>Help Center</p>
        <p className='mx-2'>Privacy &amp; Terms</p>
        <p className='mx-2'>Ad Choices</p>
        <p className='mx-2'>Advertising</p>
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


