import React, { useState } from 'react'
import NavBar from '../NavBar'
import { Link } from 'react-router-dom'
import Footer from '../../Footer'
import linkedInUsers from './LinkedInUsersData'  
import SingleUserComponent from './SingleUserComponent'

function Connections() {
  const [user, setUser] = useState(true)
  const [selecteduserId, setSelectedUserId] = useState(null)
  const handleUserClick = (userId) => {
    console.log('Clicked on user with ID:', userId);
    setSelectedUserId(userId)
  }
  return (
    <div className='mt-5 pt-4' style={{backgroundColor:"#f4f2ee"}}>
      <NavBar />
      {
        user ? 
      (<div class="row connections container-xl mx-auto pt-4 py-5">
            <div class="col-9">
                <div className="card p-3">
                    <h5>You don’t have any connections yet.</h5>
                    <p>Discover fresh ideas and jobs on LinkedIn through your connections and their networks. Find your first connection below.</p>
                </div>
                <div className="card mt-3">
                     {/* users cards....... */}
          <div className=" followers p-3 mt-2">
            <div className="d-flex justify-content-between">
            <p>People may You Know </p>
            <p><Link>See All</Link></p>

            </div>
            <div className="d-flex flex-wrap mx-2">
              {
                linkedInUsers.slice(14, 21).map((user) => {
                  return(
                    <div class="card text-start shadow m-2 my-3" key={user.id} style={{width:"280px"}} onClick={() => {
                      setUser(!user)
                      handleUserClick(user.id)
                    }} >
                    <img src="https://t4.ftcdn.net/jpg/03/64/50/81/360_F_364508192_18qLD98JRj0bC7DZV5WH9V0QGTB7vEBm.jpg" class="card-img-top h-25" alt="..."/>
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" style={{
                        position:"relative",
                        top:"-110px",
                        left:"190px",
                        opacity:"0.65",
                        cursor:"pointer"
                      }} class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                  </svg>
                 <img class='userimg' style={{position:"absolute", top:"50px", left:"20px", width:"110px"}} className='rounded-circle' src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png' alt="" />
                <div class="card-body mt-3">
                  <h5 class="card-title fw-bold">{user.firstName} {user.lastName}</h5>
                  <p class="card-text">{user.headline} in {user.industry}</p>
                  <p>{user.experiences[0].description}</p>
                  <a href="#" class="btn btn-outline-primary rounded-pill w-100">Follow</a>
                </div>
              </div>
                  )
                })
              }
            </div>
            <button className='btn btn-outline-primary fw-bold px-3 w-25 m-4'>show more</button>
          </div>
                </div>
            </div>
            <div class="col-3">
            <div className="card p-3 text-center">
            <p>Get the latest jobs and industry news</p>
            <div className="d-flex align-self-center">

            <img className='' src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" style={{width: "80px",}} alt="Avatar" />
            </div>
            <p>Ashok Kumar, explore relevant opportunities with Mavenir</p>
            <button className='btn btn-primary fw-bold'>Follow</button>
          </div>
          <Footer />
            </div>
        </div>) : (<><SingleUserComponent user={user} selecteduserId={selecteduserId} setUser={setUser} /> </>)
      }
    </div>
  )
}

export default Connections
