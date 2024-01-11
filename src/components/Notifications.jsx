import React, { useState } from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import Footer from '../Footer'
import companies from './jobsComponent/RecomdedJobsData'
import SingleJobComponent from './jobsComponent/SingleJobComponent'
function Notifications() {
  const [showSinglejobPage, setShowSingleJobpage] = useState(true)
  const [selectedid, setselectedid] = useState(1)
 
  return (
    <div style={{backgroundColor:"#f4f2ee"}}>
      <NavBar />
      {
        showSinglejobPage ? 
      (<div class="row notifications container-xl mx-auto mt-5 pt-5 " >
        <div class="col-3">
          <div className="card p-3 border">
            <h5>Manage your notifications</h5>
            <p><Link>view settings</Link></p>
          </div>
        </div>
        <div class="col-6">
          <div className="card border">
            <div className="d-flex p-3">
            <button className='btn btn-success rounded-pill px-3'>All</button>
            <button className='btn btn-outline-secondary fw-bld mx-3 rounded-pill px-3'>my-posts</button>
            <button className='btn btn-outline-secondary fw-bld mx-3 rounded-pill px-3'>mention</button>
            </div>
          </div>
          <div className="card border mt-3">
          {
            companies.map((data) => {
              return(<>
                <div className=" p-3" style={{fontSize:"13px"}} onClick={() => {
                  setShowSingleJobpage(!showSinglejobPage)
                  setselectedid(data.id)
                  }} >
                  <div className="d-flex justify-content-between">
                    <div className='d-flex w-75'>
                    <img className='img-fluid mx-3 rounded-4' style={{width:"75px", height:"50px"}} src="https://miro.medium.com/v2/resize:fit:880/0*SQy-aKEXu_WSoRd-.png" alt="" />
                    <div style={{cursor:"pointer"}}>{data.name} - {data.position} - {data.responsibilities[1]}</div>
                    </div>
                    <div><i class="bi bi-three-dots"></i></div>
                  </div>
                </div>
              </>)
            })
          }
              </div>
        </div>
        <div class="col-3">
          <div >
          <div className='card border  p-4 text-center my-2'>
            <p>Get the latest jobs and industry news</p>
            <div className="d-flex align-self-center">

            <img className='' src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" style={{width: "80px",}} alt="Avatar" />
            </div>
            <p>Ashok Kumar, explore relevant opportunities with Mavenir</p>
            <button className='btn btn-primary fw-bold'>Follow</button>
          </div>
          {/* .......footer......... */}
          <Footer />
          </div>
        </div>
      </div>) : <>
      <div className="mt-5  container">
        <div className="d-flex lastbtn justify-content-end">
          <button className='btn btn-success mt-5' onClick={() => setShowSingleJobpage(true)}>Go Back</button>
        </div>
       <SingleJobComponent selectedid={selectedid} showSinglejobPage={showSinglejobPage} setShowSingleJobpage={setShowSingleJobpage} />
      </div>
      </>
      }
    </div>
  )
}

export default Notifications
