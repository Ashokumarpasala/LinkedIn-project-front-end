import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import home from './navImages/home.png';
import bell from './navImages/bell.png';
import downarrow from './navImages/down-arrow.png';
import menu from './navImages/menu.png';
import profile from './navImages/profile.png';
import chat from './navImages/chat.png';
import suitcase from './navImages/suitcase.png';
import teamwork from './navImages/teamwork.png';
import search from './navImages/search.svg';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const [active, setActive] = useState(false)
    const [profileCard, setprofileCard] = useState(false)
    const [showlayer, setShowLayer] = useState(false)
    const [businesscard, setbusinesscard] = useState(false)
    const [help, setHelp] = useState(false)
    const handletoggle =() => {
        setActive(!active)
    }

    const  products =  [
      {
        productName: 'Sell with LinkedIn',
        logoUrl: 'https://example.com/sell-with-linkedin-logo.png',
        headline: 'Unlock sales opportunities',
        description: 'A powerful tool to enhance your sales strategies on LinkedIn.',
      },
      {
        productName: 'Market with LinkedIn',
        logoUrl: 'https://example.com/market-with-linkedin-logo.png',
        headline: 'Reach your target audience',
        description: 'Effective marketing solutions to connect with your audience on LinkedIn.',
      },
      {
        productName: 'Connect with LinkedIn',
        logoUrl: 'https://example.com/connect-with-linkedin-logo.png',
        headline: 'Build meaningful connections',
        description: 'Networking solutions to help you establish and grow your professional network.',
      },
      {
        productName: 'Learn with LinkedIn',
        logoUrl: 'https://example.com/learn-with-linkedin-logo.png',
        headline: 'Access educational content',
        description: 'Explore a variety of educational resources to enhance your skills and knowledge.',
      },
      {
        productName: 'Recruit with LinkedIn',
        logoUrl: 'https://example.com/recruit-with-linkedin-logo.png',
        headline: 'Efficient hiring solutions',
        description: 'Streamline your recruitment process and find the right talent for your team.',
      },
      {
        productName: 'Advertise on LinkedIn',
        logoUrl: 'https://example.com/advertise-on-linkedin-logo.png',
        headline: 'Promote your brand',
        description: 'Advertise your products and services to a targeted audience on LinkedIn.',
      },
      // Add more products as needed
    ]
    const learning = [
      { name: 'Learning', logoUrl: 'https://t4.ftcdn.net/jpg/01/28/93/91/360_F_128939133_0WXTVdZ1bv1NXusQsdYYJLIwTVoXHqQ7.jpg' },
      { name: 'Talent Insights', logoUrl: 'https://media.licdn.com/dms/image/D4E0BAQHfErkmQSWBxw/company-logo_200_200/0/1700041013849/talent_insight_group_logo?e=2147483647&v=beta&t=N2X_W2dbY9uzqieL2cjf5MqWYXjulByEjRhYW6nJ8XI' },
      { name: 'Advertise', logoUrl: 'https://cdn.dribbble.com/userupload/5332605/file/original-44cc2e7058108f3bf07b21890b296120.jpg?resize=400x0' },
      { name: 'Find Leads', logoUrl: 'https://i.pinimg.com/564x/cc/64/92/cc649271943b3680b9256c64373723d0.jpg' },
      { name: 'Skill Development', logoUrl: 'https://img.freepik.com/premium-vector/gradient-code-logo-tagline-here_23-2148808179.jpg' },
      { name: 'Business Intelligence', logoUrl: 'https://us.123rf.com/450wm/mariiasimakova/mariiasimakova2008/mariiasimakova200800104/162423930-business-intelligence-icon-simple-line-element-business-intelligence-symbol-for-templates-web-design.jpg?ver=6' },
      { name: 'Marketing Solutions', logoUrl: 'https://logoarena-storage.s3.amazonaws.com/contests/public/2505/1828_1364959127_sl2.jpg' },
    ];
        
    
  return (
    <>
     
    <div className="shadow " style={{ backgroundColor: 'white', borderBottom: '2px solid lightgrey', fontFamily: 'Roboto, sans-serif', position:"fixed", width:"100%", top:"0", zIndex:"1"}}>
      <div className="container-xl p-1">
        <style>
          {`
            input[type="text"].navbaronly {
              width: 350px;
              box-sizing: border-box;
              border-radius: 4px;
              font-size: 14px;
              border: none;
              background-color: #edf3f8 ;
              background-image: url('${search}');
              background-position: 10px 10px;
              background-repeat: no-repeat;
              padding: 5px 20px 5px 40px;
              outline: none;
              transition: width 0.55s ease; /* Transition for width change */
            //   border: 1px solid lightgrey; /* Default border color */
            }

            input[type="text"].navbaronly:focus {
                width: 550px; /* Change width when focused */
              border: 3px solid black; /* Change border color when focused */
            
            }
        
          `}
        </style>
        <nav className="d-flex mainNavbar justify-content-between align-items-center" style={{fontSize:"12px", }}>
          <div className="navbar-brand d-flex">
            <img style={{ width: '50px' }} className="mx-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1024px-LinkedIn_icon.svg.png" alt="" />
            <input type="text" name="search"  className='fs-5 rounded-2 navbarinput navinput navbaronly' placeholder="search" />
          </div>
          <div className="navbar-links icons d-flex justify-content-around ">
              <div className="mx-3 text-center ">
            <NavLink to="/" className={active ? 'active' : 'nav-link'} onClick={handletoggle} >
                <img src={home} className='p-1' style={{ width: '30px' }} alt="" /> <br />
                <p>Home</p>
            </NavLink>
              </div>

              <NavLink to="/network" className={active ? 'active' : 'nav-link'} onClick={handletoggle} >
              <div className="mx-3 text-center">
                <img className='p-1' src={teamwork} style={{ width: '30px' }} alt="" /> <br />
<p>                My Network
</p>              </div>
            </NavLink>

            <NavLink to="/jobs" className={active ? 'active' : 'nav-link'} onClick={handletoggle} >
              <div className="mx-4 text-center">
                <img className='p-1' src={suitcase} style={{ width: '30px' }} alt="" /> <br />
<p>                Jobs
</p>
              </div>
            </NavLink>

            <NavLink to="/messages" className={active ? 'active' : 'nav-link'} onClick={handletoggle} >
              <div className="mx-3 text-center">
                <img className='p-1' src={chat} style={{ width: '30px' }} alt="" /> <br />
<p>                Messaging
</p>              </div>
            </NavLink>

            <NavLink to="/notifications" className={active ? 'active' : 'nav-link'} onClick={handletoggle} >

              <div className="mx-3 text-center">
                <img className='p-1' src={bell} style={{ width: '30px' }} alt="" /> <br />
<p>                Notifications
</p>              </div>
            </NavLink>

            <div  className='nav-link lastIcons' onClick={() => setprofileCard(!profileCard)} style={{cursor:"pointer"}}>
              <div className=" text-center border-end px-3">
                <img className='' src={profile} style={{ width: '30px' }} alt="" /> <br />
             Me
               <span><img src={downarrow} className="mx-1" style={{ width: '15px' }} alt="" /></span>
              </div>
            </div>

            <div  className='nav-link lastIcons' onClick={() => setbusinesscard(!businesscard)} style={{cursor:"pointer"}}>
              <div className="mx-3 text-center">
                <img src={menu} style={{ width: '30px' }} alt="" /> <br />
                  For Business
                <span><img src={downarrow} className="mx-2" style={{ width: '15px' }} alt="" /></span>
              </div>
            </div>

              {/* <div className=" text-center w-75 fs-6">
               <Link>Learn New Skills Try Premimum Free</Link>
              </div> */}

          </div>
        </nav>
        </div>
      
      
    </div>    
    {
      showlayer ? <><div>
            <div style={{
                position:"absolute",
                width:"100%",
                height:"100%",
                backgroundColor:"black",top:"0",
                left:"0",
                opacity:"0.65",
                zIndex:"1"
            }} onClick={() => setShowLayer(!showlayer)}></div>
        </div></> : <><div>{null}</div></>
    }

      {
        profileCard ? 
        (<div className='scale-in-top' style={{position:"fixed", top:"10px", left:"55%",zIndex:"1",  }} >
          <div class="card border shadow">
            <div className='d-flex align-items-center'>
                <img src={profile} class="" style={{width:"75px"}} alt="..." />
                <div className='fw-bold pt-2 mx-2' style={{fontSize:"10px"}}>
                      <Link to='/MainProfile'>
                        <h6 className='fw-bold'>Ashok Kumar Pasala</h6>
                        <div className=''>Worked in Think Core Technologies </div>
                      </Link> 
                </div>
            </div> 
                        <div className='border-primary border text-center text-dark mx-2 rounded-pill'>
                          <Link to='/MainProfile'>view profile</Link>
                        </div>

                      <hr />
                <div class="">
                    <div className="px-3 lh-base border-bottom py-2" style={{fontSize:"14px"}}>
                    <h6 class="card-title fw-bold text-secondary">Account</h6>
                   <div>
                    <Link to='/privacy-&-settings-page'>
                    <div>Settings & privacy</div>
                      </Link>
                    </div>

                    <div>
                      <Link to='/premimum'>
                        Try Premimum for $/- 0
                      </Link>
                      </div>
                    <div onClick={() => {
                      setHelp(!help)
                      setprofileCard(!profileCard)
                    }}><Link>Help</Link></div>
                   
                    <div>
                      <Link to='/privacy-&-settings-page'>
                    <div>Language</div>
                      </Link>
                      </div>
                    </div>
                    <div className="px-3 border-bottom py-2" style={{fontSize:"14px"}}>
                    <h6 className='fw-bold text-secondary'>Manage</h6>
                    <Link to='/jobs'>
                    <div>post & Activity</div>
                      </Link>
                      <Link to='/myjobs/jobs'>
                    <div>Job posting Account</div>
                      </Link>
                    </div>
                    <div className="d-flex justify-content-between px-2">
                      <p>Sign Out</p>
                    {/* <p className='btn btn-danger' onClick={() => setprofileCard(!profileCard)}> Exit</p>

                    <p className='btn btn-danger'>Sign Out</p> */}
                    </div>
                </div>
                </div>
        </div>) : null
    }

                    {help ? <>
                      <div class="card w-25 border" style={{position:"absolute", top:"50px", left:"72%", zIndex:"1", cursor:"pointer" }}>
                          <div class="card-header bg-dark text-white">
                            <div className="d-flex justify-content-between">

                            <h3>Help</h3>
                            <div><i class="bi bi-x-lg" onClick={() => setHelp(!help)}></i></div>
                            </div>
                            <input type="text" className='form-control' name="" id="" />
                          </div>
                          <ul class="list-group list-group-flush">
                            <div className="p-3 border-bottom">

                            <p>Help based on your activity</p>
                            <p><Link>LinkedIn Connections and Invitations – FAQ</Link></p>
                            <p><Link>Various ways to Connect with People on LinkedIn</Link></p>
                            <p><Link>“People You May Know” Feature - Overview</Link></p>
                            </div>
                            <li class="list-group-item"><Link>Open Help in a new tab</Link></li>
                          </ul>
                        </div>
                     </> : <>
                      <div>{null}</div>
                    </>}
    
    {
        businesscard ? (
               <div className={`card border slide-in-right  p-4`}  style={{position:"absolute", top:"10px", left:"70%", zIndex:"1", cursor:"pointer", overflow:"hidden" }} >
                  <div className='d-flex justify-content-between'>
                    <h3>For Business</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" className='' width="30" height="30" onClick={() => setbusinesscard(!businesscard)} fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                        </svg>
                  </div>
                  <div style={{overflow:"scroll"}}>

                  <div class="card border my-3">
                    <div class="card-header">
                      <h3 className='fw-bold p-2'>Visit More LinkedIn Products</h3>
                    </div>
                    <div class="card-body d-flex flex-wrap p-2">
                      {
                        learning.map((data) => {
                          return (<>
                          <div className='text-center'>

                            <div className="card mx-4">
                              <img src={data.logoUrl} style={{width:"75px", height:"75px", objectFit:"cover"}} alt="" />
                            </div> 
                            <div>

                            <h6>{data.name}</h6>
                          </div>
                            </div>
                          </>)
                        })
                      }
                    </div>
                    </div>
                    <div class="card border">
                        <h3 class="card-header fw-bold">Explore more for business</h3>
                        <div class="card-body">
                          {
                            products.map((data) => {
                              return (
                             <div className='p-3 border-bottom'>
                              <h5 class="card-title fw-bold">{data.headline}</h5>
                              <p class="card-text">{data.description}</p>
                            </div>

                              )
                            })
                          } 
                        </div>
                        </div>
                        </div>

                </div>
        ) : null
    }
    </>

  );
  
};

export default NavBar;
