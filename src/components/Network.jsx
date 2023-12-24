import React, { useState } from 'react'
import NavBar from './NavBar'
import network from './navImages/teamwork.png'
import checkperson from './networkimages/person-check.svg'
import calender from './networkimages/calendar2-event.svg'
import file from './networkimages/file-earmark.svg'
import hash from './networkimages/hash.svg'
import paper from './networkimages/newspaper.svg'
import { Link } from 'react-router-dom'

function Network() {
  
  return (
    <div style={{backgroundColor:"#f4f2ee", position:"relative", top:"20px"}}>
    
      <NavBar />
      <div class="row container-xl mx-auto p-3">
        <div class="col-3 ">
        <div class="card">
          <ul class="list-group list-group-light">
            <li class="list-group-item px-3">
              <p className='fw-bold'>Manage my network</p>
              <div  >
                <Link to='/connections/network' className='d-flex fw-bold'>
                <img src={network} className='mx-3' style={{width:"20px", height:"20px"}} alt="" />
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
                <p>Newsletter</p>
              </div>
              <div className='d-flex'>
                <img src={hash} className='mx-3' style={{width:"20px", height:"20px"}} alt="" />
                <p>Hashtags</p>
              </div>
            </li>
            <li class="list-group-item px-3">
            <div className=" p-3 text-center my-2">
            <p>Get the latest jobs and industry news</p>
            <div className="d-flex justify-content-center">

            <img className='' src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" style={{width: "80px",}} alt="Avatar" />
            </div>
            <p>Ashok Kumar, explore relevant opportunities with Mavenir</p>
            <button className='btn btn-primary fw-bold'>Follow</button>
          </div>
            </li>
            <li class="list-group-item px-3">Fotter Part</li>
          </ul>
        </div>
        </div>
        <div class="col-9 ">
          <div className="card">
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
              <div class="card text-center shadow m-4 w-25" >
                <img src="https://t4.ftcdn.net/jpg/03/64/50/81/360_F_364508192_18qLD98JRj0bC7DZV5WH9V0QGTB7vEBm.jpg" class="card-img-top h-25" alt="..."/>
          
                <div class="card-body mt-3">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              <div class="card text-center shadow m-4 w-25" >
                <img src="https://t4.ftcdn.net/jpg/03/64/50/81/360_F_364508192_18qLD98JRj0bC7DZV5WH9V0QGTB7vEBm.jpg" class="card-img-top h-25" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              <div class="card text-center shadow m-4 w-25" >
                <img src="https://t4.ftcdn.net/jpg/03/64/50/81/360_F_364508192_18qLD98JRj0bC7DZV5WH9V0QGTB7vEBm.jpg" class="card-img-top h-25" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              <div class="card text-center shadow m-4 w-25" >
                <img src="https://t4.ftcdn.net/jpg/03/64/50/81/360_F_364508192_18qLD98JRj0bC7DZV5WH9V0QGTB7vEBm.jpg" class="card-img-top h-25" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              <div class="card text-center shadow m-4 w-25" >
                <img src="https://t4.ftcdn.net/jpg/03/64/50/81/360_F_364508192_18qLD98JRj0bC7DZV5WH9V0QGTB7vEBm.jpg" class="card-img-top h-25" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              <div class="card text-center shadow m-4 w-25" >
                <img src="https://t4.ftcdn.net/jpg/03/64/50/81/360_F_364508192_18qLD98JRj0bC7DZV5WH9V0QGTB7vEBm.jpg" class="card-img-top h-25" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              <div class="card text-center shadow m-4 w-25" >
                <img src="https://t4.ftcdn.net/jpg/03/64/50/81/360_F_364508192_18qLD98JRj0bC7DZV5WH9V0QGTB7vEBm.jpg" class="card-img-top h-25" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              <div class="card text-center shadow m-4 w-25" >
                <img src="https://t4.ftcdn.net/jpg/03/64/50/81/360_F_364508192_18qLD98JRj0bC7DZV5WH9V0QGTB7vEBm.jpg" class="card-img-top h-25" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              <div class="card text-center shadow m-4 w-25" >
                <img src="https://t4.ftcdn.net/jpg/03/64/50/81/360_F_364508192_18qLD98JRj0bC7DZV5WH9V0QGTB7vEBm.jpg" class="card-img-top h-25" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              <div class="card text-center shadow m-4 w-25" >
                <img src="https://t4.ftcdn.net/jpg/03/64/50/81/360_F_364508192_18qLD98JRj0bC7DZV5WH9V0QGTB7vEBm.jpg" class="card-img-top h-25" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              <div class="card text-center shadow m-4 w-25" >
                <img src="https://t4.ftcdn.net/jpg/03/64/50/81/360_F_364508192_18qLD98JRj0bC7DZV5WH9V0QGTB7vEBm.jpg" class="card-img-top h-25" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              <div class="card text-center shadow m-4 w-25" >
                <img src="https://t4.ftcdn.net/jpg/03/64/50/81/360_F_364508192_18qLD98JRj0bC7DZV5WH9V0QGTB7vEBm.jpg" class="card-img-top h-25" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              <div class="card text-center shadow m-4 w-25" >
                <img src="https://t4.ftcdn.net/jpg/03/64/50/81/360_F_364508192_18qLD98JRj0bC7DZV5WH9V0QGTB7vEBm.jpg" class="card-img-top h-25" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              <div class="card text-center shadow m-4 w-25" >
                <img src="https://t4.ftcdn.net/jpg/03/64/50/81/360_F_364508192_18qLD98JRj0bC7DZV5WH9V0QGTB7vEBm.jpg" class="card-img-top h-25" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              <div class="card text-center shadow m-4 w-25" >
                <img src="https://t4.ftcdn.net/jpg/03/64/50/81/360_F_364508192_18qLD98JRj0bC7DZV5WH9V0QGTB7vEBm.jpg" class="card-img-top h-25" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <button className='btn btn-outline-primary fw-bold px-3 w-25 m-4'>show more</button>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Network
