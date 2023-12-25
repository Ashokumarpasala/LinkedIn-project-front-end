import React, { useState } from 'react'
import NavBar from './NavBar'
import imge from './homeImages/image.png'
import write from './homeImages/writting.png'
import calender from './homeImages/calendar.png'
import { Link } from 'react-router-dom'
function Home() {
  const [showAll, setShowAll] = useState(false);
  const [showpost, setShowpost] = useState('');
  const handleReadMore = () => {
    setShowAll(!showAll);
    setShowpost('slide-bottom')
  };
  const leftArryData = [
    {
      hire: '15 Big deals',
      time: '2 days ago'
    },
    {
      hire: 'IT hiring',
      time: '1 days ago'
    },
    {
      hire: 'Hiring Intent to steady',
      time: '15 minutes ago'
    },
    {
      hire: 'Frontend Developer Position at XYZ Corp',
      time: '3 hours ago'
    },
    {
      hire: 'Senior Software Engineer Needed - ABC Tech Solutions',
      time: '1 week ago'
    },

    {
      hire: 'Project Manager Role - Project Dynamics Inc.',
      time: '5 hours ago'
    },
    {
      hire: 'HR Coordinator Job - Human Resources Hub',
      time: '3 days ago'
    },
  ];
  
  return (
    <div>
      <NavBar />
      <div class="row home container-xl mx-auto pt-5 " style={{position:"relative", zIndex:"0", height:"auto"}}>
        {/* left side content user details card......... */}
        <div class="col-3">
        <div class="card shadow ">
          <Link to='/MainProfile'>
        <img className='avatar' src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" style={{width: "100px",
        position:"absolute",
        top:"30px",
        right:"100px"  
      }}
      alt="Avatar" />
          <img className='' style={{height:"100px"}} src="https://img.freepik.com/free-photo/gray-smooth-textured-paper-background_53876-101833.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1702512000&semt=ais" class="card-img-top" alt="..."/>
      </Link>
          <div class="card-body text-center my-2 fw-bold">
            <Link to='MainProfile'>
            <p class="card-title fs-5">Ashok Kumar Pasala</p>
            </Link>
            <p class="card-text" style={{fontSize:"14px"}}>Worked in Think Core Technologies</p>
          </div> <hr />
          <ul class="list-group list-group-flush fw-bold" >
            <h5 class="list-group-item">connections <br /><span style={{fontSize:"14px"}}>Grow our Network </span></h5>
            <li class="list-group-item">Try For Free $/-</li>
            <li class="list-group-item">My Items</li>
          </ul>
        </div>

         <div className="card shadow mt-3">
          <div className='p-3'>

          <p className=''>group</p>
          <p>Events</p>
          <p>Followed By</p>
          </div>
          <ul class="list-group list-group-flush fw-bold fs-6">
          <li class="list-group-item"></li>
          <li class="list-group-item"></li>

</ul>

          <p className='text-center text-secondary fw-bold'>Dicover More</p>
         </div>
        </div>

        {/* middle card content */}
        <div class="col-6">
          {/* post card  */}
          <div className="card postcard shadow rounded-4 p-3">
            <div className="d-flex  align-items-center">

          <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" style={{width: "70px",
                   
                  }}
                  alt="Avatar" />
              <input type="" className='form-control mx-3 rounded-5 fs-4' placeholder='' />

                  </div>
                  <div className="d-flex centercard  justify-content-around  mt-4 fw-bold text-secondary " style={{cursor:"pointer"}}>
                   <div className="d-flex align-items-center border p-2 ">
                    <img src={imge} style={{width:"30px"}} alt="" />
                    <p className=' mx-2' style={{top:"10px", position:"relative"}}>Media</p>
                   </div>
                   <div className="d-flex align-items-center  ">
                    <img src={calender} style={{width:"30px"}} alt="" />
                    <p className='mx-2' style={{top:"10px", position:"relative"}}>Event</p>
                   </div>
                   <div className="d-flex align-items-center  ">
                    <img src={write} style={{width:"30px"}} alt="" />
                    <p className='mx-2' style={{top:"10px", position:"relative"}}>Write articles</p>
                   </div>
                  
                  </div>
          </div> <hr />
        </div>
        {/* right side hoome page */}
        <div class="col-3">
          <div className="card p-3 shadow ">
            <div className="d-flex justify-content-between fw-bold">
              <p>LinkedIn News</p>
              <h6> <span class="badge bg-dark">i</span></h6>
            </div>
            <div>
      {showAll ? (
        <div className=''>
        {

          leftArryData.map((data, index) => (
            <div key={index} className=''>
            <li className='fw-bold fs-6'>{data.hire}</li>
            <p className='text-secondary mx-4' style={{fontSize:"14px"}}>{data.time}</p>
          </div>
        )
        )
      }
        <button onClick={handleReadMore} className='btn btn-secondary'>
              Show less
            </button>
        </div>
      ) : (
        <>
          {leftArryData.slice(0, 5).map((data, index) => (
            <div key={index} className='' >
              <li className='fw-bold fs-6'>{data.hire}</li>
              <p className='text-secondary mx-4' style={{fontSize:"14px"}}>{data.time}</p>
            </div>
          ))}
          {leftArryData.length > 5 && (
            <button onClick={handleReadMore} className='btn btn-secondary'>
              Show More
            </button>
          )}
        </>
      )}
    </div>
          </div>
          {/* sticky card........... */}
          <div className="card p-3 text-center my-2 sticky-top" >
            <p>Get the latest jobs and industry news</p>
            <div className="d-flex align-self-center">

            <img className='' src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" style={{width: "80px",}} alt="Avatar" />
            </div>
            <p>Ashok Kumar, explore relevant opportunities with Mavenir</p>
            <button className='btn btn-primary fw-bold'>Follow</button>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Home
