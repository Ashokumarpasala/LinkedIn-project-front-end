import React, { useRef, useState } from 'react'
import NavBar from '../NavBar'
import { Link } from 'react-router-dom'
import pen from '../../assets/pen.svg'
function MainProfile() {
    const [layer, setLayer] = useState(false)
    const [usercard, setusercard] = useState(false)
    const [JobPreference, setJobPreference] = useState(false)
    const [userProfile, setUserProfile] = useState(false)

    const handleuserCard = () => {setusercard(!usercard)}
    const handleCard =() => {
      setLayer(!layer)
    }
    const layerClass = {
        position: 'relative',
        zIndex: 3,
      };
      
      const fileInputRef = useRef(null);

      const openFile = () => {
        fileInputRef.current.click();
      };

      const [inputValue, setInputValue] = useState('');
      const [names, setNames] = useState([]);

      const [inputLocation, setinputLocation] = useState('');
      const [Location, setLocation] = useState([]);
      
      const handleChange = (event) => {
        setInputValue(event.target.value);
      };
      const handleChangeLocation = (event) => {
        setinputLocation(event.target.value);
      };
    
      const handleAddName = () => {
        if (inputValue.trim() !== '') {
          setNames([...names, inputValue]);
          setInputValue('');
        }
      };
      const handleAddLocation = () => {
        if (inputLocation.trim() !== '') {
          setLocation([...Location, inputLocation]);
          setinputLocation('');
        }
      };
    
  return (
    <>
      <div style={layer ? layerClass : {}} className='profilecard'>
        <div className='layerClass'></div>
            <NavBar />
       
        <div class="row  container-xl mx-auto" style={{position:"relative", top:"30px", zIndex:"0", overflowY:"hidden"}}>
            <div class="  col-9">
                {/* main card.......... */}
                <div className={`card my-2 shadow rounded-5`}>
                    <div className=''  onClick={handleCard} style={{position:"absolute", left:"93%", top:"20px", cursor:"pointer"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="blue"  class="bi bi-camera-fill bg-white border p-2 rounded-circle" viewBox="0 0 16 16">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"/>
                    </svg>
                    </div>
                  <img className='' style={{height:"200px"}} src="https://img.freepik.com/free-photo/gray-smooth-textured-paper-background_53876-101833.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1702512000&semt=ais" alt="" />
                  <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle avatar" style={{width: "200px",
                    position:"absolute",
                    top:"80px",
                    right:"700px",
                    border:"5px solid white" 
                }}
                alt="Avatar" />
                <div className='p-5 my-5'>
                    <div className="d-flex justify-content-end " onClick={handleuserCard}>

                    <img className='' style={{ cursor:"pointer"}} src={pen} alt="" />
                    </div>

                            <h3 className='fw-bold mainName'>Ashok Kumar (Ashok kumar) pasala (He/Him)</h3>
                            <p>Worked in Think Core Technologies</p>
                            <p>Andhra Pradesh, India  <Link className='fw-bold'>Contact info</Link></p>
                            <div className="profilebtn">
                            <div className="btn btn-primary">Open to</div>
                            <div className="btn fw-bold btn-outline-primary mx-3">Add Profile section</div>
                            <div className="btn fw-bold btn-outline-primary">More</div>
                            </div>
                            <div className='border userCard mt-4 fw- p-3 w-50 bg-secondary rounded-5 fs-5'>
                            <div className='d-flex  justify-content-between'>
                                <div className='fw-bold'>open to work</div>
                                <img src={pen} onClick={() => setJobPreference(!JobPreference)} style={{cursor:"pointer"}} alt="" />
                                </div>     
                                <><Link>
                                <h6 className='fw-bold' onClick={() => setUserProfile(!userProfile)}>
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
                 {/* <div style={{
                position:"absolute",
                width:"100%",
                height:"100%",
                backgroundColor:"black",top:"0",
                left:"0",
                opacity:"0.65"
            }}></div> */}
        
                 <div class="card text showCard  h-75 shadow" style={{position:"fixed", top:"15%",zIndex:"3", left:"30%", height:"auto", width:"750px"}}>
                <div class="card-header">
                    <div className="d-flex justify-content-between p-2">

                    <h3 className='fw-bold'>Add background photo</h3>
                    <button className='btn btn-primary' onClick={handleCard}>Close</button>
                    </div>

                </div>
                <div class="card-body">
                     <img className='w-50' src="https://static.vecteezy.com/system/resources/previews/004/491/046/original/design-studio-concept-for-web-banner-woman-and-man-designers-team-create-website-layout-and-draw-elements-modern-person-scene-illustration-in-flat-cartoon-design-with-people-characters-vector.jpg" alt="" />
                    <h5 class="card-text">Showcase your personality, interests, team moments or notable milestones</h5>
                    <p class="">A good background photo will help you stand out.<Link>Learn more</Link> </p>
                </div> <hr />
                   <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                    />
                    <button
                        className="m-3 fs-6 shadow btn btn-primary text-center d-flex align-self-end fw-bold"
                        onClick={openFile}
                    >
                        Edit Profile Background
                    </button>
                </div>
            </>
        ) : (<>
            <div>{null}</div>
        </>)
    }
    {
      usercard ?
       <>
         <div>
         <div style={{
                position:"absolute",
                width:"100%",
                height:"100%",
                backgroundColor:"black",top:"0",
                left:"0",
                opacity:"0.65"
            }}></div>
         <div class="card showCard shadow-lg p-3 mb-5 rounded" style={{position:"fixed", top:"15%",zIndex:"3",width:"900px", left:"30%", height:"740px"}}>
         <div class="card-header">
                    <div className="d-flex justify-content-between p-2">

                    <h3 className='fw-bold'>Edit Info</h3>
                    <button className='btn btn-primary' onClick={handleuserCard}>Close</button>
                    </div>

                </div>
                {/* form............. */}
            <div class="card-body" style={{overflowY:"scroll"}}>
                <p>* Indicates required</p>
                <form action="" className=''>
                    <label for="username" class="fs-6 mb-1 mt-3 ">First name*</label>
                    <input type="text" className='form-control p-1 fs-5' />
                    <label for="username" class="fs-6 mb-1 mt-3 ">Last name*</label>
                    <input type="text" className='form-control p-1 fs-5' />
                    <label for="username" class="fs-6 mb-1 mt-3 ">Additional name</label>
                    <input type="text" className='form-control p-1 fs-5' />
                    <p className='mt-4'>Name pronunciation</p>
                    <p> <span className='badge bg-dark'>i</span> This can only be added using our mobile app</p>
                    <label htmlFor="" class="fs-6 mb-1 mt-3 ">pronous</label>
                    <select name="" id="" class="fs-6 mb-1 form-control  fs-5 p-2 ">
                        <option value="">select option</option>
                        <option value="He">He</option>
                        <option value="She">She</option>
                        <option value="She">They/Them</option>
                        <option value="Others">Others</option>
                    </select>
                    <p>Let others know how to refer to you.</p>
                    <label for="username" class="fs-6 mb-1 mt-3 ">Headline*</label>
                    <input type="text" className='form-control p-1 fs-5' />
                    <h3 className='mt-5'>Current Position</h3>
                    <label for="username" class="fs-6 mb-1 mt-3 ">current position*</label>
                    <input type="text" className='form-control p-1 fs-5' />
                    <label for="username" class="fs-6 mb-1 mt-3 ">Industry*</label>
                    <input type="text" className='form-control p-1 fs-5' />
                    <h3 className='mt-5'>Location</h3>
                    <label for="username" class="fs-6 mb-1 mt-3 ">country/Region*</label>
                    <input type="text" className='form-control p-1 fs-5' />
                    <label for="username" class="fs-6 mb-1 mt-3 ">city*</label>
                    <input type="text" className='form-control p-1 fs-5' />
                    <h3 className='mt-5'>Contact Info</h3>
                    <p>Add or edit your profile URL, email, and more</p>
                    <Link className='mt-3 fs-6 fw-bold'>Edit contact info</Link>

                </form>
            </div> <hr />


            <button
                        className="m-3 fs-6 shadow btn btn-primary text-center d-flex align-self-end fw-bold"
                        onClick={openFile}
                        type='submit'
                    >
                        save
                    </button>
            </div>
         </div>
       </> : <>{null}</>

    }
    {JobPreference ? <>
      <div>
      <div style={{
                position:"absolute",
                width:"100%",
                height:"100%",
                backgroundColor:"black",top:"0",
                left:"0",
                opacity:"0.65"
            }}></div>
      <div class="card showCard shadow-lg p-3 mb-5 rounded" style={{position:"fixed", top:"15%",zIndex:"3",width:"500px", left:"35%", height:"740px"}}>
      <div class="card-header">
                    <div className="d-flex justify-content-between p-2">
                    <h3 className='fw-bold'>Edit job preferences</h3>
                    <button className='btn btn-primary' onClick={() => setJobPreference(!JobPreference)}>Close</button>
                    </div>

                </div>
            <div class="card-body" style={{overflowY:"scroll"}}>
                
                <p>* Indicates required</p>
                <div>
                <label for="username" class="fs-6 mb-1 mt-3 ">job titles*</label>
                {names.length > 0 && (
                        <div>
                        <div className='d-flex flex-wrap '>
                            {names.map((name, index) => (
                            <p className='btn btn-success rounded-pill mx-2' key={index}>{name} <span className='fw-bold mx-2'>X</span></p>
                            ))}
                        </div>
                        </div>
                    )}
                    <input
                        className='form-control my-2'
                        type="text"
                        value={inputValue}
                        onChange={handleChange}
                        placeholder="Add title"
                    />
                    <button className='btn btn-primary' onClick={handleAddName}>Add Title</button>
                    </div>
                    <div className='mt-4'>
                        <p>Location type*</p>
                        <button className='btn btn-outline-primary mx-2' >on-site </button>
                        <button className='btn btn-outline-primary mx-2' >Hybrid</button>
                        <button className='btn btn-outline-primary mx-2' >Remote</button>
                    </div>
                    <div>
                    <div>
                        <label for="username" class="fs-6 mb-1 mt-3 ">job titles*</label>
                        {Location.length > 0 && (
                                <div>
                                <div className='d-flex flex-wrap '>
                                    {Location.map((name, index) => (
                                    <p className='btn btn-success rounded-pill mx-2' key={index}>{name} <span className='fw-bold mx-2'>X</span></p>
                                    ))}
                                </div>
                                </div>
                            )}
                            <input
                                className='form-control my-2'
                                type="text"
                                value={inputLocation}
                                onChange={handleChangeLocation}
                                placeholder="Add Location"
                            />
                            <button className='btn btn-primary' onClick={handleAddLocation}>Add Location</button>
                    </div>
                    {/* immidate join or not ......... */}
                        <div className='mt-4 p-1'>
                            <div>Start date*</div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                Immediately, I am actively applying                                </label>
                                </div>
                                <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"  />
                                <label class="form-check-label" for="flexRadioDefault2">
                                Flexible, I am casually looking                                </label>
                                </div>
                        </div>
                        {/* Employee type...... */}
                        <div className='mt-4'>
                        <p>Employee type*</p>
                        <button className='btn btn-outline-primary m-2' >Full-time </button>
                        <button className='btn btn-outline-primary m-2' >Part-time</button>
                        <button className='btn btn-outline-primary m-2' >Contract</button>
                        <button className='btn btn-outline-primary m-2' >InternShip</button>
                        <button className='btn btn-outline-primary m-2' >Temporary</button>
                    </div>
                    </div>

            </div><hr />
            <button className="m-3 fs-6 shadow btn btn-primary text-center d-flex align-self-end fw-bold"
                        type='submit'
                    >
                        save
                    </button>
            </div>
      </div>
    </> : <><div>{null}</div></>}
        
        {
            userProfile ? <>
            <div style={{
                position:"absolute",
                width:"100%",
                height:"100%",
                backgroundColor:"black",top:"0",
                left:"0",
                opacity:"0.65"
            }}></div>
             <div>
             <div class="card showCard shadow-lg p-3 mb-5 rounded" style={{position:"fixed", top:"15%",zIndex:"3",width:"650px", left:"35%", height:"740px"}}>
             <div class="card-header">
                    <div className="d-flex justify-content-between p-2">
                    <h3 className='fw-bold'>job preferences</h3>
                    <button className='btn btn-primary' onClick={() => setUserProfile(!userProfile)}>Close</button>
                    </div>

                    </div>
                    <div class="card-body">
                        
                    </div>
                    <div class="card-footer text-body-secondary">
                        2 days ago
                    </div>
                    </div>
             </div>
            </> : <><div>{null}</div></>
        }

         </>
      )
}

export default MainProfile
