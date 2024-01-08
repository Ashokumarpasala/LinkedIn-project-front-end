import React from 'react'
import NavBar from '../NavBar'
import { Link } from 'react-router-dom'
import Footer from '../../Footer'
import linkedInUsers from './LinkedInUsersData'


function SingleUserComponent({user, setUser, selecteduserId}) {
    // console.log(linkedInUsers[selecteduserId].firstName)
    // console.log(selecteduserId)
    const singleUser = linkedInUsers[selecteduserId - 1]
  return (
     <div>
        <NavBar />

        <div class="row mainprofiles singleUser container-xl mx-auto fs-5 " style={{position:"relative", top:"10px", zIndex:"0", overflowY:"hidden"}}>
            <div>

            <button className='btn btn-success my-3 mx-4 ' style={{width:"auto", float:"right"}} onClick={() => setUser(!user)}>Back To Network</button>
            </div>
            <div class="  col-9">
                {/* main card.......... */}
                <div className={`card my-2 shadow rounded-5`}>
                    <div className=''   style={{position:"absolute", left:"93%", top:"20px", cursor:"pointer"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="blue"  class="bi bi-camera-fill  bg-white border p-2 rounded-circle" viewBox="0 0 16 16">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"/>
                    </svg>
                    </div>

       <>

        <img className='' style={{height:"200px", width:"100%"}} src="https://img.freepik.com/free-photo/gray-smooth-textured-paper-background_53876-101833.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1702512000&semt=ais" alt="" />
        </>
        

                <div className='' style={{
                    backgroundImage:"url(https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png)",
                    backgroundRepeat:"no-repeat",
                    height:"200px",
                    width:"200px",
                    backgroundPosition:"center",
                    backgroundSize:"cover",
                    objectFit:"contain",
                    top:"0px",
                    left:"50px",
                    position:"absolute",
                    borderRadius:"50%"
                }}>
        {/* 
                <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle avatar" style={{width: "200px",
                    position:"static",
                    top:"100px",
                    right:"600px",
                    border:"5px solid white" 
                }}
                alt="Avatar" /> */}
                </div>
                <div className='p-5'>
                        <h3 className='fw-bold'>{singleUser.firstName} {singleUser.lastName}</h3>
                        <div><i class="bi bi-envelope-fill mx-2"></i>{singleUser.email}</div>
                        <p><i class="bi bi-buildings-fill mx-2"></i>{singleUser.experiences[0].title} at {singleUser.experiences[0].company}</p>
                        <p><i class="bi bi-geo-alt-fill mx-2"></i>{singleUser.location.city},{singleUser.location.country} <Link>Contact info</Link> </p>
                        <p><i class="bi bi-people-fill mx-2"></i>{singleUser.connections} connections</p>
                 

                            <div className="profilebtn ">
                            <div className="btn btn-primary fs-6 rounded-pill"><i class="bi bi-plus-circle-fill mx-2"></i>connect</div>
                            <div className="btn fw-bold fs-6 btn-outline-primary mx-3 rounded-pill">message</div>
                            <div className="btn fw-bold btn-outline-primary fs-6 rounded-pill">More</div>
                            </div>
                            <div className='border userCard mt-4 fw- p-3 w-50 bg-secondary rounded-5 fs-5'>
                            <div className=''>
                                <div className='fw-bold'>open to work</div> 
                                <div>{singleUser.experiences[0].title}, {singleUser.experiences[1].title}</div>
                                </div>     
                                <><Link>
                                <h6 className='fw-bold' >
                                Show Details
                                </h6>
                                </Link></>
                </div>

                </div>
                </div>
                {/* about card........... */}
                <div className="card p-4 my-2 shadow ">

                    <div className='d-flex my-3  justify-content-between'>
                    <h5 className='fw-bold'>About</h5>
                    <div className='penhover  d-flex align-items-center justify-content-center ' style={{width:"50px", height:"50px"}}>

                    {/* <img src={pen} alt="" style={{cursor:"pointer"}} /> */}
                    </div>
                    </div>
                    <p>{singleUser.about}</p>
                    <div className="border rounded-5 p-3 my-3">
                        <p><i class="bi bi-gem mx-2"></i>Top skills</p>
                        <p>
                        <div className="d-flex flex-wrap">
                            {singleUser.skills.map((data) => <div className=''>{data }  {' , '}</div>)}
                        </div>
                            </p>
                    </div>
                </div>
                {/* experience card......... */}
                <div className="card p-4 shadow">
                <div className='d-flex my-3  justify-content-between'>
                    <h5 className='fw-bold'>Experience</h5>
                    </div>
                    {
                        singleUser.experiences.map((data) => {
                            return (<>
                              <div className='w-100 border rounded-4 p-3 mt-2'>
                                <h6><i class="bi bi-suitcase-lg-fill mx-2"></i>Job Role : {data.title}</h6>
                                <div><i class="bi bi-buildings-fill mx-2"></i>Comapany : {data.company}</div>
                                <div><i class="bi bi-alarm-fill mx-2"></i>since Worked From : {data.startDate} To : {data.endDate}</div>
                                <div><i class="bi bi-geo-alt-fill mx-2"></i>Location : {data.location}</div>
                                <div><i class="bi bi-list-check mx-2"></i>Description : {data.description}</div>
                              </div>
                            </>)
                        })
                    }
                </div>
                {/* education card......... */}
                <div className="card p-4 my-2 shadow">
                <div className='d-flex my-3  justify-content-between'>
                    <h5 className='fw-bold'>Activities</h5>
                    <div className='penhover  d-flex align-items-center justify-content-center ' style={{width:"50px", height:"50px"}}>     
                {/* <img src={pen} alt="" /> */}
                </div>
                    </div>
                    <p className='d-flex flex-wrap'><i class="bi bi-sign-dead-end-fill mx-2"></i> Degination : {singleUser.activities.map((data) => <><div>{data} {', '}</div></>)}</p>
                    <p className='d-flex flex-wrap'><i class="bi bi-geo-alt-fill mx-2"></i>Prefered Locations to Work : {singleUser.preferredLocations.map((data) => <><div>{data} {', '}</div></>)}</p> <hr />
                    <h4>Summary about the Member you Know something new .</h4>
                    <p>{singleUser.summary}</p>
                </div> 
                <div className="">

                <Footer />
                </div>

            </div>

            {/* right side............. */}
            <div class="col-3 ">
            <div className="card p-4 shadow">
                <div className='d-flex  justify-content-between'>
                    <div className='fw-bold'>Profile language</div>
                    <div className='penhover  d-flex align-items-center justify-content-center ' style={{width:"50px", height:"50px"}}>

                    {/* <img src={pen} alt="" style={{cursor:"pointer"}} /> */}
                    </div>
                    </div>
                    <p>English, Hindhi, Tamil & Telugu</p> <hr />
                    <div className=''>
                    <div className='fw-bold'><i class="bi bi-share-fill mx-2"></i>Public profile & URL</div>
                    <div>

                     <a href="">{singleUser.profileUrl}</a>
                    </div>
                    </div>
                </div>
                {/* user card...... */}
                <div className="card p-3 text-center my-2 shadow">
                    <p>Get the latest jobs and industry news</p>
                    <div className="d-flex align-self-center my-3">
                    <div className='penhover  d-flex align-items-center justify-content-center ' style={{width:"50px", height:"50px"}}>
                    <img className='' src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" class="rounded-circle" style={{width: "80px",}} alt="Avatar" />
                    </div>
                    </div>
                    <p>{linkedInUsers[selecteduserId].firstName}, explore relevant opportunities with Mavenir</p>
                    <button className='btn btn-primary fw-bold'>Follow</button>
                </div>
                {/* people viewed...... */}
                <div className="card p-3 my-2">
                <p>People Aslo Viewed</p> 
                {
                    linkedInUsers.slice(15, 20).map((data) => {
                        return(<>
                         <div className='d-flex align-items-start p-2'>
                            <img style={{width:"100px"}} className='rounded-circle' src="https://i.pinimg.com/1200x/64/81/22/6481225432795d8cdf48f0f85800cf66.jpg" alt="" />
                            <div>

                            <h6 className='fw-bold'>{data.firstName} {data.lastName}</h6>
                            <h6>{data.headline} at {data.experiences[1].company}</h6>
                            <button className='btn btn-outline-primart rounded-pill'>connect</button> <hr />
                            </div>
                         </div>
                        </>  )
                    })
                }                   
                <hr /><Link className='text-center '>Show All</Link>
                </div>
            </div>
        </div>
    </div>

  )
}

export default SingleUserComponent
