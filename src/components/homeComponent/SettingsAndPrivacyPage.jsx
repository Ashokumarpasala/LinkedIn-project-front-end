import React from 'react'
import Footer from '../../Footer'
import { Link } from 'react-router-dom'

function SettingsAndPrivacyPage() {
  return (
    <div className='SettingsAndPrivacyPage'>
      <nav class="navbar navbar-secondary d-flex w-100 bg-white " style={{position:"fixed", zIndex:"2"}}>
        <div className="d-flex justify-content-between align-items-center container-xl w-100">
            <Link to='/'>
                <img className='m-1' src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" style={{width:"35px"}} alt="" />
            </Link>
                <div class="">
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end text-bg-white" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    {/* <div class="offcanvas-header">
                        <h3 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Settings</h3>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div> */}
                    <div class="offcanvas-body p-3">
                        <div className="d-flex justify-content-between p-2">
                        <h3 className=''>Settings</h3>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <h6 className='px-3 py-3'><i class="bi bi-person-badge mx-2"></i>Account Preference</h6>
                        <h6 className='px-3 py-3'><i class="bi bi-lock-fill mx-2"></i>Sign In & Security</h6>
                        <h6 className='px-3 py-3'><i class="bi bi-eye-fill mx-2"></i>Visibility</h6>
                        <h6 className='px-3 py-3'><i class="bi mx-2 bi-shield-lock-fill"></i>Data Privacy</h6>
                        <h6 className='px-3 py-3'> <i class="bi bi-journal-text mx-2"></i>Advertising Data</h6>
                        <h6 className='px-3 py-3'><i class="bi bi-bell-fill mx-2"></i>Notifications</h6>
                    </div>
                    </div>
                </div>
            </div>
        </nav>
        <div className=" d-flex justify-content-center settings " style={{zIndex:"-2", position:"relative", top:"50px", backgroundColor:"#f4f2ee"}} >
            <div className='w-75 p-5 main' >

            <div class="card  border">
            <ul class="list-group list-group-flush">
                <h5 className='p-3 fw-bold'>Profile Information</h5>
                <li class="list-group-item d-flex justify-content-between"><span>Name, location, and industry </span><i class="bi bi-arrow-right-square-fill mx-2 text-end"></i></li>
                <li class="list-group-item d-flex justify-content-between">Personal demographic information <i class="bi bi-arrow-right-square-fill mx-2 text-end"></i></li>
                <li class="list-group-item d-flex justify-content-between">Verifications <i class="bi bi-arrow-right-square-fill mx-2 text-end"></i></li>
            </ul>
            </div>
            <div class="card border mt-3">
            <ul class="list-group list-group-flush">
                <h5 className='p-3 fw-bold'>Display</h5>
                <li class="list-group-item d-flex justify-content-between">Dark Mode <i class="bi bi-arrow-right-square-fill mx-2 text-end"></i></li>
            </ul>
            </div>
            <div class="card  border mt-3">
            <ul class="list-group list-group-flush">
                <h5 className='p-3 fw-bold'>    General preferences</h5>
                <li class="list-group-item d-flex justify-content-between"><span>    Language </span><i class="bi bi-arrow-right-square-fill mx-2 text-end"></i></li>
                <li class="list-group-item d-flex justify-content-between">    Content language <i class="bi bi-arrow-right-square-fill mx-2 text-end"></i></li>
                <li class="list-group-item d-flex justify-content-between">    Autoplay videos <i class="bi bi-arrow-right-square-fill mx-2 text-end"></i></li>
                <li class="list-group-item d-flex justify-content-between">        Sound effects <i class="bi bi-arrow-right-square-fill mx-2 text-end"></i></li>
                <li class="list-group-item d-flex justify-content-between">        Showing profile photos <i class="bi bi-arrow-right-square-fill mx-2 text-end">    All LinkedIn members</i></li>
                <li class="list-group-item d-flex justify-content-between">        Feed preferences <i class="bi bi-arrow-right-square-fill mx-2 text-end"></i></li>
                <li class="list-group-item d-flex justify-content-between">        People also viewed <i class="bi bi-arrow-right-square-fill mx-2 text-end"></i></li>
                <li class="list-group-item d-flex justify-content-between">        People you unfollowed <i class="bi bi-arrow-right-square-fill mx-2 text-end"></i></li>
            </ul>
            </div>
            <Footer />
            </div>
        </div>
     </div>
  )
}

export default SettingsAndPrivacyPage
