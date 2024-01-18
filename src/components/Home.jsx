import React, { useEffect, useRef, useState } from 'react'
import NavBar from './NavBar'
import imge from './homeImages/image.png'
import write from './homeImages/writting.png'
import calender from './homeImages/calendar.png'
import { Link } from 'react-router-dom'
import Footer from '../Footer'
import MediaComponent from './profileComponents/MediaComponent'
import EventComponent from './profileComponents/EventComponent'
import leftArryData from './homeComponent/NewsData'
import axios from 'axios'
import NewPage from './homeComponent/NewPage'
import companies from './jobsComponent/RecomdedJobsData'

function Home({users}) {
  const [showAll, setShowAll] = useState(false);
  const [showpost, setShowpost] = useState('');
  const [showMediaComponent, setShowMediaComponent] = useState(false)
  const [eventComponent, seteventComponent] = useState(false)
  const [newspageShow, setnewspageShow] = useState(true)
  const [newsId, setNewsId] = useState(null)
  const [premimum, setpremimum] = useState(true)
  // console.log(newsId)
  // console.log(newspageShow)
  const randomnumber = (Math.floor(Math.random() * 19) + 1)

 

  
  
  const [likeCount, setLikeCount] = useState(null)
  const [selectedId, setselectedId] = useState(null)

  const handleReadMore = () => {
    setShowAll(!showAll);
    setShowpost('slide-bottom')
  };
  

  const [isSticky, setIsSticky] = useState(false);
  const stickyCardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const stickyCard = stickyCardRef.current;

      if (stickyCard) {
        const stickyOffset = stickyCard.offsetTop;

        if (window.pageYOffset >= stickyOffset) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  const cardData = Array.from({ length: 5 }, (_, index) => index); // Creates an array [0, 1, 2, 3, 4]
  const [followclick, setfollowclick] = useState(false)

  const [childImages, setChildImages] = useState([]);
  // console.log(childImages)

  const handleSetImages = (newImages) => {
    setChildImages(newImages);
  };

  const [dataFromEventComp, setDataFromEventComp] = useState([])

  const handleFormSubmit = (formDataevent) => {
    setDataFromEventComp([...dataFromEventComp, formDataevent])
  };
// ......data from get api event form data base to display as a post...........
  const [eventDetails, setEventDetails] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:9090/create/an/event/eventdetails');
        setEventDetails(response.data);
      } catch (error) {
        console.error('Error fetching event details:', error);
      } finally {
        const timeoutId = setTimeout(() => {
          setLoading(false);
        }, 500);
    
        // Cleanup the timeout when the component unmounts or when loading is complete
        return () => clearTimeout(timeoutId);      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect will only run once after the initial render.

  if (loading) {
    return <>
    
     <div className=' d-flex justify-content-center align-content-center w-100 h-100'>
      <div>
      <img style={{width:"350px"}} src="https://logos-world.net/wp-content/uploads/2020/05/Linkedin-Logo.png" alt="" /> <br />
      <div class="text-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
     </div>
      </div>
    </>;
  }

  const dataInsert = [
    {
      id:1,
      description: "Explore the world of front-end development with our hands-on internship program. Dive into HTML, CSS, and JavaScript, and work on real-world projects to sharpen your skills. Join us to turn your passion for coding into a rewarding career.",
      imageUrl: "https://isteam.wsimg.com/ip/a8efe83b-6857-477d-9d0f-f13ca0229a20/ols/2348_original/:/rs=w:600,h:600",
    },
    {
      id:2,
      description: " Dive into Redux and state managment Frame Work and JavaScript, and work on real-world projects to sharpen your skills. Join us to turn your passion for coding into a rewarding career.",
      imageUrl: "https://miro.medium.com/v2/resize:fit:1000/1*UOde9AZsRtpC7EwJRRVcWA.gif",
    },
    {
      id:3,
      description: "Enhance your front-end expertise with our comprehensive training in React.js and Vue.js. Master the art of building responsive and dynamic user interfaces. Take the next step in your development journey and become a sought-after front-end developer.",
      imageUrl: "https://media.licdn.com/dms/image/D5622AQEtyMVGID9zEA/feedshare-shrink_2048_1536/0/1681846684757?e=1706745600&v=beta&t=jngrvIgft8YUiFn0I5bklu2gz_bPgS8J4VRnH2lRZMc"
    },
    {
      id:4,
      description: "Join our dynamic front-end internship and collaborate with a diverse team of developers. Gain exposure to cutting-edge technologies, refine your coding skills, and contribute to impactful projects. Kickstart your journey to becoming a proficient front-end developer.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdouZcQuoeC34UkZlHzhORaRzV_XEuLK4A1ijBEIr3SMuRk0W0KNph5ihkpNGx06qyXKM&usqp=CAU",
    },
    {
      id:5,
      description: "Immerse yourself in the world of web development through our intensive front-end training. Learn the latest trends in UI/UX design, responsive layouts, and web accessibility. Elevate your coding prowess and unlock exciting opportunities in the tech industry.",
      imageUrl: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/203680158/original/58dbe2e106e6ddcf55bde877704514cd3f350411/do-web-programming-in-html-css-php-mysql-bootstrap.jpeg"
    },
    {
      id:6,
      description: "Embark on a transformative front-end internship experience. Work on real-world projects, collaborate with industry professionals, and build a portfolio that showcases your skills. Join us to gain valuable insights and accelerate your career in front-end development.",
      imageUrl: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/331693509/original/74be9ca9a6a03d08421554bd9d232cf0dd273373/do-mini-web-project-in-html-css-and-js-in-1-day.jpg",
    },
  ];

  

  return (
    <div className='mt-5' style={{backgroundColor:"#f4f2ee"}}>
      <NavBar />
     
      
      <div class="row home container-xl mx-auto pt-5 py-5" style={{position:"relative", zIndex:"0", height:"auto", fontSize:"14px"}}>
        {/* left side content user details card......... */}
        {
          newspageShow ? <>
          <div class="col-3">
            
          <div class="card shadow  ">
            <Link to='/MainProfile'>
          <img className='avatar' src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" style={{width: "100px",
          position:"absolute",
          top:"30px",
          right:"100px"  
        }}
        alt="Avatar" />
            <img className='' style={{height:"100px"}} src="https://img.freepik.com/free-photo/gray-smooth-textured-paper-background_53876-101833.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1702512000&semt=ais" class="card-img-top" alt="..."/>
        </Link>
        {
          users.slice(0, 1).map((user) => {
            return (
            <div class="card-body text-center my-2 fw-bold">
              <Link to='MainProfile'>
                <p class="card-title fs-5"> {user.firstName } {user.lastName} {user.additionalName}</p>
              </Link>
              <p class="card-text" style={{fontSize:"14px"}}>Worked in {user.industry} sector as a {user.headline}</p>
            </div>
            )
          })
        }
            <hr />
            <ul class="list-group homelist list-group-flush fw-bold" >
              <h6 class="list-group-item">
                <Link to='/network' className='d-flex justify-content-between'>
                  <div>

                <div>connections</div>
                <div>Grow Yor network</div>
                  </div>
                 <i class="bi bi-people-fill mx-2"></i>
                </Link>
                </h6>
                <p class="list-group-item fs-6">
                <Link to='/network' className='d-flex justify-content-between'>
                <p>invitations</p> <span>1</span>
                </Link>
                </p>
                
              <li class="list-group-item">
                  <i class="bi bi-file-earmark-fill mx-2"></i>
                <Link to='/premimum'>
                  Learn New Skills Try For Free $/-
                </Link>
                </li>
              <li class="list-group-item"><i class="bi bi-bookmark-fill mx-2"></i><Link to='/myjobs/jobs'>My Items</Link></li>
            </ul>
          </div>

          <div className="card shadow mt-3">
          <ul class="list-group homelist list-group-flush mt-4 fw-bold" >
              <li class="list-group-item"><Link to='/groups/network'>Groups</Link></li>
              <li class="list-group-item d-flex justify-content-between"><Link to='/events/network'>Events</Link>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
              </svg>
              </li>
              <li class="list-group-item"><Link to='/Followerspage/network'>Followed Hastags</Link></li>
            </ul>
            <ul class="list-group list-group-flush fw-bold fs-6">
            <li class="list-group-item"></li>
            <li class="list-group-item"></li>

  </ul>

            <p className='text-center text-secondary fw-bold fs-6'>
              <Link to='/network'>
                Dicover More
              </Link>
              </p>
          </div>
          </div>

          {/* middle card content */}
          <div class="col-6">
               {
                premimum ? 
                <div className="card premimum border p-4">
              <div className="d-flex  justify-content-between">
                <h4 className='fw-bold'>Get ahead with Premium</h4>
                <i class="bi bi-x-lg" onClick={() => setpremimum(false)} style={{cursor:"pointer"}}></i>
              </div>
              <div className='border rounded-4 text-center mt-2  p-4'>
              <img className='avatar' src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" style={{width: "150px",
                
              }}
              alt="Avatar" />
                <div className="lh-base mt-2">
                <h5>Looking for your next role?</h5>
                <p>Premium members are 2.6x more likely to get hired on average.</p>
                <button className='btn btn-warning fs-6 rounded-pill text-black fw-bold '>
                  <Link to='/premimum' className='text-black'>
                    get Premimum
                  </Link>
                  </button>
                </div>
              </div>
            </div> : ''
            }

            {/* post search card  */}
            <div className="card border postcard shadow rounded-4 p-3 mt-3">
              <div className="d-flex  align-items-center">

            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" style={{width: "70px",
                    
                    }}
                    alt="Avatar" />
                <input type="" className='form-control mx-3 rounded-5 p-3 rounded-pill' onClick={() => setShowMediaComponent(!showMediaComponent)} placeholder='Start a Post' />

                    </div>
                    <div className="d-flex centercard  justify-content-around  mt-2 fw-bold text-secondary " style={{cursor:"pointer"}}>
                    <div className="d-flex align-items-center rounded-4  px-4 " onClick={() => setShowMediaComponent(!showMediaComponent)}>
                      <img src={imge} style={{width:"25px"}} alt="" />
                      <p className=' mx-2' style={{top:"10px", position:"relative"}}>Media</p>
                    </div>
                    <div className="d-flex align-items-center p-2 rounded-4 px-4 " onClick={() => seteventComponent(!eventComponent)}>
                      <img src={calender} style={{width:"25px"}} alt="" />
                      <p className='mx-2' style={{top:"10px", position:"relative"}}>Event</p>
                    </div>
                    <div className="d-flex align-items-center p-2 rounded-4 px-4  ">
                      <img src={write} style={{width:"30px"}} alt="" />
                      <p className='mx-2' style={{top:"10px", position:"relative"}}>
                        <Link to='/write-article-page' className='text-secondary'>
                          Write articles
                        </Link>
                        </p>
                    </div>
                    
                    </div>
            </div> 
            <div className="d-flex sortline align-items-center py-2">
              <div className='border-bottom ' style={{width:"80%"}}></div>

              <div className='px-2'>Sort by: <span>Top</span> <i class="bi bi-caret-down-fill "></i></div>
            </div>
            {/* ..hard coded image post........ */}
            {
              dataInsert.map((data) => {
                return (
                  <>
                    <div class="card postedcard border text-center mt-1 " key={data.id}>
                        <div class="card-header p-3 ">
                          <div className="d-flex justify-content-between">
                            <h6>Suggested</h6>
                            <div>
                            <i class="bi mx-4 bi-three-dots"></i>
                            <i class="bi bi-x-lg"></i>
                            </div>

                          </div>
                        </div>

                            <div class="">
                              <div>
                                {/* posted user details */}
                                <div className="d-flex postedUser justify-content-between p-2">
                                  <div className='d-flex '>

                                  <img style={{width:"70px", height:"70px"}} className='user' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK8ffDsJ4jPCqnGI6CmuPG9MHW22ophfZauvpt6qO5qnJz6oKjsySCrmqgrEZLk30ufKs&usqp=CAU" alt="" />
                                  <div className='text-start mx-2' style={{fontSize:"12px"}}>
                                    <h6 className='fw-bold'>
                                      <Link to='/MainProfile'>
                                        Ashok Kumar Pasala
                                      </Link>
                                      </h6>
                                    <h6>It Sector || Front End Developer</h6>
                                    <h6>6d. <img src="https://i.pinimg.com/564x/cc/8c/bc/cc8cbc0443d2f033fe6a457cb383601c.jpg" style={{width:"15px"}} alt="" /> </h6>
                                  </div>
                                  </div>
                                  <div>

                                {
                                  followclick ? <>
                                  
                                  <div className='text-secondary  d-flex  align-items-center followinghover px-3' onClick={() => setfollowclick(!followclick)} style={{cursor:"pointer"}}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="grey" class="bi bi-check-lg mx-2" viewBox="0 0 16 16">
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022"/>
            </svg>     
                                  <p className='fw-bold fs-5  my-2 '>Following</p>
                                  </div>
                                  </> : <>
                                <div className='text-primary  d-flex followhover align-items-center   px-2' onClick={() => setfollowclick(!followclick)} style={{cursor:"pointer"}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="blue" class="bi  bi-plus-lg mx-2 " viewBox="0 0 16 16">
                                  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                                </svg>        
                                <p className='fw-bold fs-5  my-2 '>Follow</p>
                                </div>
                                  
                                  </>
                                }
                                  </div>
                                </div>
                                {/* image */}
                                        <div className=''>
                                          <h5 className='text-start px-4'>{data.description}</h5>
                                          <img className='w-100 my-4' src={data.imageUrl} alt="" />                     
                                        </div> 
                              </div>
                              {(likeCount > 0) && (selectedId === data.id) ? 
                              <p className='text-start mx-5'>{likeCount} <span className='fw-bold fs-5'>Likes</span></p> : ''
                              }
                            </div>
                            <div class="card-footer text-body-secondary">
                        <div className="d-flex plate justify-content-between" style={{cursor:"pointer"}}>
                            <div className="d-flex iconshover  p-2 px-3" onClick={() => {
                                setselectedId(data.id)
                                setLikeCount(likeCount + 1)
                            }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-hand-thumbs-up mx-1" viewBox="0 0 16 16">
                              <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
                            </svg>
                              <h6 className='pt-1'>Like</h6>
                            </div>
                            <div className="d-flex iconshover  p-2 px-3 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-chat-text mx-1" viewBox="0 0 16 16">
                              <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894m-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                              <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8m0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5"/>
                            </svg>

                            <h6 className='pt-1' data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Comment</h6>
                            </div>

                            <div className="d-flex iconshover  p-2 px-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-recycle mx-1" viewBox="0 0 16 16">
                                <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242-2.532-4.431zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24l2.552-4.467zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.498.498 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244l-1.716-3.004z"/>
                              </svg>
                              <h6 className='pt-1'>Repote</h6>
                            </div>
                            <div className="d-flex iconshover  p-2 px-3 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-send-fill mx-1" viewBox="0 0 16 16">
                              <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
                            </svg>                 
                              <h6 className='pt-1'>Send</h6>
                            </div>
                          </div>
                          <div class="collapse " id="collapseExample">
                              <div class="p-3" >
                              <div className="d-flex addcomment align-items-center">
                                <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" style={{width: "70px" }} alt="Avatar" />
                                <input type="text" className='form-control mx-2 rounded-5 p-2'  placeholder='Add a comment' />
                                <button className='btn btn-success'>Post</button>
                                </div>
                              </div>
                            </div>
                        </div>
                        
                    </div>
                    
                  </>

                )
              })
              
            }
            

            {/* ........ posted list cards*/}
            <div>
              {
                childImages.map((postedimages) => {
                  return (

              <div class="card postedcard text-center mt-2 border " key={postedimages.text}>
                <div class="card-header p-4">
                  <div className="d-flex justify-content-between">
                    <h6>Suggested</h6>
                    <div>
                    <i class="bi mx-4 bi-three-dots"></i>
                    <i class="bi bi-x-lg"></i>
                    </div>

                  </div>
                </div>

                    <div class="">
                      <div>
                        {/* posted user details */}
                        <div className="d-flex postedUser justify-content-between p-3">
                          <div className='d-flex '>

                          <img style={{width:"70px", height:"70px"}} className='user' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK8ffDsJ4jPCqnGI6CmuPG9MHW22ophfZauvpt6qO5qnJz6oKjsySCrmqgrEZLk30ufKs&usqp=CAU" alt="" />
                          <div className='text-start mx-2' style={{fontSize:"12px"}}>
                            <h6 className='fw-bold'>
                              <Link to='/MainProfile'>
                                Ashok Kumar Pasala
                              </Link>
                              </h6>
                            <h6>It Sector || Front End Developer</h6>
                            <h6>6d. <img src="https://i.pinimg.com/564x/cc/8c/bc/cc8cbc0443d2f033fe6a457cb383601c.jpg" style={{width:"15px"}} alt="" /> </h6>
                          </div>
                          </div>
                          <div>

                        {
                          followclick ? <>
                          
                          <div className='text-secondary  d-flex  align-items-center followinghover px-3' onClick={() => setfollowclick(!followclick)} style={{cursor:"pointer"}}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="grey" class="bi bi-check-lg mx-2" viewBox="0 0 16 16">
      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022"/>
    </svg>     
                          <p className='fw-bold fs-5  my-2 '>Following</p>
                          </div>
                          </> : <>
                        <div className='text-primary  d-flex followhover align-items-center   px-2' onClick={() => setfollowclick(!followclick)} style={{cursor:"pointer"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="blue" class="bi  bi-plus-lg mx-2 " viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                        </svg>        
                        <p className='fw-bold fs-5  my-2 '>Follow</p>
                        </div>
                          
                          </>
                        }
                          </div>
                        </div>
                        {/* image */}
                                <div className=''>
                                  <h5 className='d-flex align-self-start mx-4'>{postedimages.text}</h5>
                                  <img className='w-100 my-4' src={postedimages.image} alt="" />                     
                                </div> 
                      </div>
                    </div>
                <div class="card-footer text-body-secondary">
                <div className="d-flex plate justify-content-between">
                    <div className="d-flex iconshover  p-2 px-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-hand-thumbs-up mx-1" viewBox="0 0 16 16">
                      <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
                    </svg>
                      <h6 className='pt-1'>Like</h6>
                    </div>
                    <div className="d-flex iconshover  p-2 px-3 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-chat-text mx-1" viewBox="0 0 16 16">
                      <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894m-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                      <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8m0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5"/>
                    </svg>
                    <h6 className='pt-1'>Comment</h6>
                    </div>
                    <div className="d-flex iconshover  p-2 px-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-recycle mx-1" viewBox="0 0 16 16">
                        <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242-2.532-4.431zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24l2.552-4.467zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.498.498 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244l-1.716-3.004z"/>
                      </svg>
                      <h6 className='pt-1'>Repote</h6>
                    </div>
                    <div className="d-flex iconshover  p-2 px-3 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-send-fill mx-1" viewBox="0 0 16 16">
                      <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
                    </svg>                 
                      <h6 className='pt-1'>Send</h6>
                    </div>
                  </div>
                </div>
              </div>
                  )
                })
              }
            </div>
            {/* ........event post cards list..... */}
            <div>
              {eventDetails && eventDetails.map((data) => {
                return(
                  <div class="card postedcard text-center mt-2 border" key={data.id}>
                <div class="card-header p-4">
                  <div className="d-flex justify-content-between">
                    <h6>Suggested</h6>
                    <div>
                    <i class="bi mx-4 bi-three-dots"></i>
                    <i class="bi bi-x-lg"></i>
                    </div>

                  </div>
                </div>

                    <div class="">
                      <div>
                        {/* posted user details */}
                        <div className="d-flex postedUser justify-content-between p-3">
                          <div className='d-flex '>

                          <img style={{width:"70px", height:"70px"}} className='user' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK8ffDsJ4jPCqnGI6CmuPG9MHW22ophfZauvpt6qO5qnJz6oKjsySCrmqgrEZLk30ufKs&usqp=CAU" alt="" />
                          <div className='text-start mx-2' style={{fontSize:"12px"}}>
                            <h6 className='fw-bold'>
                              <Link to='/MainProfile'>
                                Ashok Kumar Pasala
                              </Link>
                              </h6>
                            <h6>It Sector || Front End Developer</h6>
                            <h6>6d. <img src="https://i.pinimg.com/564x/cc/8c/bc/cc8cbc0443d2f033fe6a457cb383601c.jpg" style={{width:"15px"}} alt="" /> </h6>
                          </div>
                          </div>
                          <div>

                        {
                          followclick ? <>
                          
                          <div className='text-secondary  d-flex  align-items-center followinghover px-3' onClick={() => setfollowclick(!followclick)} style={{cursor:"pointer"}}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="grey" class="bi bi-check-lg mx-2" viewBox="0 0 16 16">
      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022"/>
    </svg>     
                          <p className='fw-bold fs-5  my-2 '>Following</p>
                          </div>
                          </> : <>
                        <div className='text-primary  d-flex followhover align-items-center   px-2' onClick={() => setfollowclick(!followclick)} style={{cursor:"pointer"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="blue" class="bi  bi-plus-lg mx-2 " viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                        </svg>        
                        <p className='fw-bold fs-5  my-2 '>Follow</p>
                        </div>
                          
                          </>
                        }
                          </div>
                        </div>
                        {/* image */}
                          <p className='px-4 text-start'>Scheduling meetings and events in software involves creating a user-friendly platform that enables users to plan, organize, and manage various types of gatherings efficiently.</p>
                        <div className="card h-75 p-4 border w-auto m-3 text-start">
              <h5 className='text-danger fw-bold'><i class="bi bi-calendar3 mx-2"></i>Meeting Will Be Held Between from {data.startDate} to {data.endDate}</h5> <hr />
              <div className=''>

              <div className=''><i class="bi mx-2 bi-person-circle"></i>Mentor : <span className='text-bark'>{data.firstName} {data.lastName}</span> </div>
              <div><i class="bi bi-collection-play mx-2"></i>Mode of Meeting : {data.eventType}</div>
              <div><i class="bi bi-journal-text mx-2"></i>Meeting Aganda Description : {data.description}</div>
              </div>
            </div>
                      </div>
                    </div>
                <div class="card-footer text-body-secondary">
                <div className="d-flex plate justify-content-between">
                    <div className="d-flex iconshover  p-2 px-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-hand-thumbs-up mx-1" viewBox="0 0 16 16">
                      <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
                    </svg>
                      <h6 className='pt-1'>Like</h6>
                    </div>
                    <div className="d-flex iconshover  p-2 px-3 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-chat-text mx-1" viewBox="0 0 16 16">
                      <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894m-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                      <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8m0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5"/>
                    </svg>
                    <h6 className='pt-1'>Comment</h6>
                    </div>
                    <div className="d-flex iconshover  p-2 px-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-recycle mx-1" viewBox="0 0 16 16">
                        <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242-2.532-4.431zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24l2.552-4.467zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.498.498 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244l-1.716-3.004z"/>
                      </svg>
                      <h6 className='pt-1'>Repote</h6>
                    </div>
                    <div className="d-flex iconshover  p-2 px-3 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-send-fill mx-1" viewBox="0 0 16 16">
                      <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
                    </svg>                 
                      <h6 className='pt-1'>Send</h6>
                    </div>
                  </div>
                </div>
              </div>
                )
              })}
            </div>
          </div>
          <div class="col-3">
            <div className="card p-3 shadow border" >
              <div className="d-flex justify-content-between fw-bold">
                <p>LinkedIn News</p>
                <h6> <span class="badge bg-dark">i</span></h6>
              </div>
              <div>
        {showAll ? (
          <div className=''>
          {
            leftArryData.map((data) => (
              <ul  key={data.id} onClick={() => {
                setNewsId(data.id)
                setnewspageShow(!newspageShow)
                
              }} style={{cursor:"pointer",}} >
                <li>

              <div className='fw-bold  '><Link>{data.headline}</Link></div>
              <div className='text-secondary'>{data.time}</div>
                </li>
            </ul>
          )
          )
        }
          <button onClick={handleReadMore} className='btn btn-secondary'>
                Show less
              </button>
          </div>
        ) : (
          <div>
            {leftArryData.slice(0, 4).map((data) => (
              <ul  key={data.id} onClick={() => {
                setNewsId(data.id)
                setnewspageShow(!newspageShow)
              }} style={{cursor:"pointer"}} >
                <li>
                  <div className='fw-bold ' style={{fontSize:"12px"}}><Link>{data.headline}</Link></div>
                  <div className='text-secondary '>{data.time}</div>
                </li>
              </ul>
            ))}
            {leftArryData.length > 5 && (
              <button onClick={handleReadMore} className='btn btn-secondary'>
                Show More
              </button>
            )}
          </div>
        )}
      </div>
            </div>
            {/* sticky card........... */}

            <div ref={stickyCardRef} className={` ${isSticky ? 'sticky-top' : ''}`} >
            <div className='card  p-4 text-center my-2 border'>
              <div className='text-end'>Add<i class="bi bi-three-dots mx-2"></i></div>
              <p>Get the latest jobs and industry news</p>
              <Link to='/single-rimemum-myjob'>
              <div className="m-3">

              <img className='' src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" style={{width: "80px", height:"80px", objectFit:"contain"}} alt="Avatar" />
              <img className='border rounded-4' src={companies[randomnumber].logoImage} class="" style={{width: "100px", height:"80px", objectFit:"contain", marginLeft:"30px"}} alt="" />
              </div>
              <p >Ashok Kumar, explore relevant opportunities with {companies[randomnumber].name}</p>
              <button className='btn btn-primary fw-bold'>view more Job</button>
              </Link>
            </div>
            {/* .......footer......... */}
            <Footer />
            </div>
          </div>
          </> : <>
          <NewPage newsId={newsId} setNewsId={setNewsId} setnewspageShow={setnewspageShow} newspageShow={newspageShow}/>
          </>
        }
        {/* right side hoome page */}
      </div>
 

      {/* mediaComponenet,............. */}
      {showMediaComponent ?
       <>
          <div style={{
            position:"fixed",
            width:"100%",
            height:"100%",
            backgroundColor:"black",
            top:"0",
            left:"0",
            opacity:"0.65"
          }}  onClick={() => setShowMediaComponent(!showMediaComponent)}>

            </div>
              <MediaComponent setChildImages={handleSetImages} dataFromEventComp={dataFromEventComp} setShowMediaComponent={setShowMediaComponent} seteventComponent={seteventComponent} eventComponent={eventComponent} showMediaComponent={showMediaComponent} />
      </> : <><div>{null}</div></>}

      {/* .....events componenet.................. */}
      {eventComponent ?
       <>
          <div style={{
            position:"fixed",
            width:"100%",
            height:"100%",
            backgroundColor:"black",
            top:"0",
            left:"0",
            opacity:"0.65"
          }}>
            </div>
              <EventComponent seteventComponent={seteventComponent} onSubmit={handleFormSubmit}  setShowMediaComponent={setShowMediaComponent} showMediaComponent={showMediaComponent} eventComponent={eventComponent} />
      </> : <><div>{null}</div></>}


      </div>
  )
}

export default Home
