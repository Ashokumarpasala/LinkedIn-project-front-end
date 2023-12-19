import React, { useState } from 'react'
import NavBar from '../NavBar'
import { Link } from 'react-router-dom'
import pen from '../../assets/pen.svg'
function MainProfile() {
    const [layer, setLayer] = useState(false)
    const handleCamera =() => {
      setLayer(!layer)
    }
    const layerClass = {
        position: 'relative',
        zIndex: 2,
        backgroundColor: 'black',
        opacity: 1,
      };
  return (
    <>
      <div style={layer ? layerClass : {}} className=''>
            <NavBar />
       
        <div class="row  container-xl mx-auto" style={{position:"relative", top:"30px"}}>
            <div class="  col-9">
                {/* main card.......... */}
                <div className={`card my-2 shadow rounded-5`}>
                    <div className=''  onClick={handleCamera} style={{position:"absolute", left:"93%", top:"20px", cursor:"pointer"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="blue"  class="bi bi-camera-fill bg-white border p-2 rounded-circle" viewBox="0 0 16 16">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"/>
                    </svg>
                    </div>
                  <img className='' style={{height:"200px"}} src="https://img.freepik.com/free-photo/gray-smooth-textured-paper-background_53876-101833.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1702512000&semt=ais" alt="" />
                  <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" style={{width: "200px",
        position:"absolute",
        top:"80px",
        right:"700px",
        border:"5px solid white" 
      }}
      alt="Avatar" />
      <div className='p-5 my-5'>

                  <h3 className='fw-bold'>Ashok Kumar (Ashok kumar) pasala (He/Him)</h3>
                  <p>Worked in Think Core Technologies</p>
                  <p>Andhra Pradesh, India  <Link className='fw-bold'>Contact info</Link></p>
      <div className="btn btn-primary">Open to</div>
      <div className="btn fw-bold btn-outline-primary mx-3">Add Profile section</div>
      <div className="btn fw-bold btn-outline-primary">More</div>
      <div className='border mt-4 fw- p-3 w-50 bg-secondary rounded-5 fs-5'>
      <div className='d-flex  justify-content-between'>
                    <div className='fw-bold'>open to work</div>
                     <img src={pen} alt="" />
                    </div>     
                       <><Link>
                       <h6 className='fw-bold'>
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
                     <img src={pen} alt="" />
                    </div>
                    <p>Highly skilled Front-End Developer with 3 years of experience translating design concepts into seamless and responsive web experiences. Proficient in HTML, CSS, JavaScript, and modern front-end frameworks like React js and Redux.</p>
                     <div className="border rounded-5 p-3 my-3">
                        <p>Top skills</p>
                     </div>
                </div>
                {/* experience card......... */}
                <div className="card p-4 shadow">
                <div className='d-flex my-3  justify-content-between'>
                    <h5 className='fw-bold'>Experience</h5>
                     <img src={pen} alt="" />
                    </div>
                    <h6>Frontend Developer</h6>
                    <p>Think Core · Full-time</p>
                    <p>Jun 2020 - Present · 3 yrs 7 mos</p>
                    <p>Bengaluru, Karnataka, India · Remote</p>
                    <p>Highly skilled Front-End Developer with 3 years of experience translating design concepts into seamless and responsive web experiences. Proficient in HTML, CSS, JavaScript, and modern front-end frameworks like React js and Redux.</p>
                    <p>Skills: ......</p>
                </div>
                {/* education card......... */}
                <div className="card p-4 my-2 shadow">
                <div className='d-flex my-3  justify-content-between'>
                    <h5 className='fw-bold'>Education</h5>
                     <img src={pen} alt="" />
                    </div>
                    <p>Btech Mechnica; enginerring</p>
                    <p>2017-2020</p>
                </div>
            </div>

            {/* right side............. */}
            <div class="col-3 ">
            <div className="card p-4 shadow">
                <div className='d-flex  justify-content-between'>
                    <div className='fw-bold'>Profile language</div>
                     <img src={pen} alt="" />
                    </div>
                    <p>English</p> <hr />
                    <div className='d-flex  justify-content-between'>
                    <div className='fw-bold'>Public profile & URL</div>
                     <img src={pen} alt="" />
                    </div>
                </div>
                {/* user card...... */}
                <div className="card p-3 text-center my-2 shadow">
                    <p>Get the latest jobs and industry news</p>
                    <div className="d-flex align-self-center">

                    <img className='' src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" style={{width: "80px",}} alt="Avatar" />
                    </div>
                    <p>Ashok Kumar, explore relevant opportunities with Mavenir</p>
                    <button className='btn btn-primary fw-bold'>Follow</button>
                </div>
                {/* people viewed...... */}
                <div className="card p-3 my-2">
                  <p>People Aslo Viewed</p>                    
                </div>
            </div>
        </div>
    </div>
    {
        layer ? (
            <>
             <div class="card text-center w-50" style={{position:"fixed", top:"20%",zIndex:"3", left:"25%", height:"500px"}}>
                <div class="card-header">
                    <div className="d-flex justify-content-between">

                    <h3>Feature</h3>
                    <button className='btn btn-primary' onClick={handleCamera}>Close</button>
                    </div>

                </div>
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                <div class="card-footer text-body-secondary">
                    2 days ago
                </div>
                </div>
            </>
        ) : (<>
            <div>''</div>
        </>)
    }
         </>
      )
}

export default MainProfile
