import React from 'react'
import NavBar from '../NavBar'

function Pages() {
  return (
    <div className=''>
    <NavBar />
    <div className='row page container-xl mx-auto pt-5'>
     <div className="col-9">
      <div className="card p-3">
          <div className="border-bottom p-3">
              <h5>Pages</h5>
          </div>
        {/* .......pages maping code here......... */}

        
      </div>
     </div>
     <div class="col-3">
          <div className="card p-3 text-center ">
          <p>Get the latest jobs and industry news</p>
          <div className="d-flex align-self-center">

          <img className='' src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" style={{width: "80px",}} alt="Avatar" />
          </div>
          <p>Ashok Kumar, explore relevant opportunities with Mavenir</p>
          <button className='btn btn-primary fw-bold'>Follow</button>
        </div>
        <div className="card mt-3 p-3">
            <h1>Footer part</h1>    
          </div>
          </div> 
          241|fmmJcce4ibRzyYqToGw9Jl2Is4UdNLkNjnsplOZo


       </div>
  </div>
  )
}

export default Pages
