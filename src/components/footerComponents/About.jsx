import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className='bg-light'>
      <div className='border-bottom border-3 border-primary px-5 w-100 bg-light' style={{position:"fixed", zIndex:"2"}}>
        <img src="https://logos-world.net/wp-content/uploads/2020/05/Linkedin-Logo.png" className='mx-5' style={{width:"100px"}} alt="" />
      </div>
      <div className=' text-center' style={{position:"relative", top:"750px"}}>
        <div className='position-absolute top-50 start-50 translate-middle  mt-5 pt-5' >
        <img className='my-4' src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" style={{width:"50px"}} alt="" />
        <h1 style={{fontSize:"60px"}}>About LinkedIn</h1>
        <p>Welcome to LinkedIn, the world's largest professional network with more than
            1 billion members in more than 200 countries and territories worldwide.</p>
            <div className='p-5'>
            <h1 style={{fontSize:"40px"}}>Vision</h1>
            <p>Create economic opportunity for every member of the global workforce.</p>
            </div>
            <div className='p-5'>
            <h1 style={{fontSize:"40px"}}>Mission</h1>
            <p>The mission of LinkedIn is simple: connect the world’s professionals to make them more productive and successful.</p>
            </div>
            <div className='p-5'>
            <h1 style={{fontSize:"40px"}}>Who are we?</h1>
            <p>LinkedIn began in co-founder Reid Hoffman's living room in 2002 and was officially launched on May 5, 2003.</p>
            </div>
            <div className='p-3'>
            <p>Today, LinkedIn leads a diversified business with revenues from membership subscriptions, advertising sales and recruitment solutions under the leadership of Ryan Roslansky. In December 2016, Microsoft completed its acquisition of LinkedIn, bringing together the world’s leading professional cloud and the world’s leading professional network.</p>
            </div>
            <div className=''>
                <h3>For more information about our company:</h3>
                <div className="d-flex justify-content-around p-3">
                    <h6><Link>Company page →</Link></h6>
                    <h6><Link>Products and services →</Link></h6>
                    <h6><Link>Pressroom →</Link></h6>
                    <h6><Link>Branding policies→</Link></h6>
                </div>
        </div>
            </div>
      </div>
    </div>
  )
}

export default About
