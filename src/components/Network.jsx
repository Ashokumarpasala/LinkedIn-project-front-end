import React, { useState } from 'react'
import NavBar from './NavBar'
import network from './navImages/teamwork.png'
import checkperson from './networkimages/person-check.svg'
import calender from './networkimages/calendar2-event.svg'
import file from './networkimages/file-earmark.svg'
import hash from './networkimages/hash.svg'
import paper from './networkimages/newspaper.svg'
import { Link } from 'react-router-dom'
import Footer from '../Footer'
import linkedInUsers from './networkComponent/LinkedInUsersData'
import SingleUserComponent from './networkComponent/SingleUserComponent'
function Network() {
  
  const [user, setUser] = useState(true)
  const [selecteduserId, setSelectedUserId] = useState(null)
  const handleUserClick = (userId) => {
    // console.log('Clicked on user with ID:', userId);
    setSelectedUserId(userId)
  }
  
  
  
  return (
    <div style={{backgroundColor:"#f4f2ee"}} className='mt-5 pt-4'>
    
      <NavBar />
    {
      user ? 
      (<div class="row container-xl network mx-auto p-3">
        <div class="col-3 ">
        <div class="card border">
          <ul class="list-group list-group-light">
            <li class="list-group-item px-3">
              <p className='fw-bold'>Manage my network</p>
              <div  >
                <Link to='/connections/network' className='d-flex fw-bold'>
                <i class="bi bi-people-fill mx-3"></i>
                <p>connections</p>
                </Link>
              </div>
              <div className='d-flex'>
                <Link to='/Followerspage/network' className='d-flex fw-bold'>
                <img src={checkperson} className='mx-3' style={{width:"20px", height:"20px"}} alt="" />
                <p>Following & followers</p>
                </Link>
              </div>
              <div className='d-flex'>
              <Link to='/groups/network' className='d-flex fw-bold'>
                <img src={network} className='mx-3' style={{width:"20px", height:"20px"}} alt="" />
                <p>Groups</p>
              </Link>
              </div>
              <div className='d-flex'>
              <Link to='/events/network' className='d-flex fw-bold'>
               <img src={calender} className='mx-3' style={{width:"20px", height:"20px"}} alt="" />
                <p>Events</p>
              </Link>
              </div>
              <div className='d-flex'>
              <Link to='/pages/network' className='d-flex fw-bold'>
                <img src={file} className='mx-3' style={{width:"20px", height:"20px"}} alt="" />
                <p>Pages</p>
              </Link>
              </div>
              <div className='d-flex'>
                <img src={paper} className='mx-3' style={{width:"20px", height:"20px"}} alt="" />
                <Link to='/news-letter/network' className='d-flex fw-bold'>
                <p>Newsletter</p>
              </Link>
              </div>
              <div className='d-flex'>
                <img src={hash} className='mx-3' style={{width:"20px", height:"20px"}} alt="" />
                <Link to='/news-letter/hastag/network'  className='d-flex fw-bold' >
                <p>Hashtags</p>
              </Link>
              </div>
            </li>
            <li class="list-group-item px-3">
            <div className=" p-3 text-center my-2">
            <p>Get the latest jobs and industry news</p>
            <div className="d-flex  justify-content-center">

            <img className='image' src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" style={{width: "80px",}} alt="Avatar" />
            </div>
            <p>Ashok Kumar, explore relevant opportunities with Mavenir</p>
            <button className='btn btn-primary fw-bold'>Follow</button>
          </div>
            </li>
            <li class="list-group-item px-3"><Footer /></li>
          </ul>
        </div>
        </div>
        <div class="col-9 ">
          <div className="card border pending">
            {/* manage card......... */}
            <div className="d-flex justify-content-between mx-3 mt-3 align-items-center">
            <p>No pending invitations</p>
            <p>Manage</p>
            </div>
          </div>
          {/* users cards....... */}
          <div className="card followers p-3 mt-2">
            <div className="d-flex justify-content-between">
            <p>People in the IT Services and IT Consulting industry you may know</p>
            <p><Link>See All</Link></p>

            </div>
            <div className="d-flex flex-wrap">
              {
                linkedInUsers.map((user) => {
                  return(
                    <div class="card border  text-start shadow m-3 h-75" key={user.id}  style={{width:"250px", cursor:"pointer"}} onClick={() => {
                      handleUserClick(user.id)
                      return (
                        setUser(!user)
                        )
                      }
                    } >
                        <img src="https://t4.ftcdn.net/jpg/03/64/50/81/360_F_364508192_18qLD98JRj0bC7DZV5WH9V0QGTB7vEBm.jpg" class="card-img-top h-25" alt="..."/>
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" style={{
                            position:"relative",
                            top:"-110px",
                            left:"200px",
                            opacity:"0.65",
                            cursor:"pointer"
                          }} class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                      </svg>
                    <img class='userimg' style={{position:"absolute", top:"50px", left:"20px", width:"110px"}} className='rounded-circle' src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png' alt="" />
                    <div class="card-body">
                     {/* <Link to='/single-user-profile/netword-page'> */}
                      <h5 class="card-title fw-bold">
                        <Link>
                          {user.firstName} {user.lastName}
                        </Link>
                        </h5>
                    {/* </Link> */}
                      <div>{user.headline} | {user.experiences[1].company}</div>
                      <div className=' ' style={{overflow:"hidden", height:"75px"}}>{user.experiences[0].description}</div>
                      {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                      <div class="btn btn-outline-primary rounded-pill w-100">Follow</div>
                    </div>
              </div>
                  )
                })
              }
            </div>
            <button className='btn lastbtn btn-outline-primary fw-bold px-3 w-25 m-4'>show more</button>
          </div>
        </div>
      </div>) : <>
      {/* <SingleUserComponent />  */}
    <SingleUserComponent user={user} selecteduserId={selecteduserId} handleUserClick={handleUserClick} setUser={setUser} /> 
      </>
     }

      
      </div>
  )
}

export default Network
