import React from 'react'
import NavBar from '../NavBar'
import { Link } from 'react-router-dom'

function EventsPage() {
  return (
    <div className=''>
      <NavBar />
      <div className='row container-xl mx-auto pt-5'>
       <div className="col-9">
        <div className="card p-3">
            <div className="d-flex justify-content-between border-bottom p-2">
                <h5>Events</h5>
                <Link className='fw-bold'>Create</Link>
            </div>
            <div className='d-flex justify-content-center'>
                <div className='text-center'>

                <img className='' src="https://media.istockphoto.com/id/1430871384/vector/event-planner-template-hand-drawn-cartoon-flat-illustration-with-planning-schedule-time.jpg?s=612x612&w=0&k=20&c=Aa-8uNDJCHmiilHB5A9-VYrbUmy5GhYG4VIfEtr9hmE=" alt="" />
                <p className='fw-bold fs-3'>Events</p>
                <p>Looks like you are not attending any events.</p>
                </div>
            </div>
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
                  
         </div>
    </div>
  )
}

export default EventsPage
