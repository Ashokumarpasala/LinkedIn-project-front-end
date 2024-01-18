import React from 'react'
import NavBar from '../NavBar'
import companies from '../jobsComponent/RecomdedJobsData'
import { Link } from 'react-router-dom'
import Footer from '../../Footer'

function LetterPage({hastage}) {
    const randomnumber = (Math.floor(Math.random() * 19) + 1)
   console.log(hastage)



  return (
    <div style={{backgroundColor:"#f4f2ee", height:"100vh"}}>
        <NavBar />
        <div className="container-xl pt-5 mt-5">
            <div className="row">
                <div className="col-9">
                    <div className="card border">
                        <div className='border-bottom border-2'>
                            <div className='p-3'>
                                {hastage ?  `${hastage}`:'News Letter'}
                            </div>
                        </div>
                        <div className=' d-flex justify-content-center w-100'>
                            <div className='text-center'>
                            <img className='img-fluid' src="https://snacknation.com/wp-content/uploads/2022/12/Best-email-newsletters-for-women-1.png" alt="" />
                            <h3>No {hastage ? hastage :'newsletters'} </h3>
                            <p>Looks like you are not {hastage ? 'Following' : 'subscribed'} to any {hastage ?  'hastages':'newsletters'}.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                <div className='card border p-3 text-center border'>
                 <div className='text-end'>Add<i class="bi bi-three-dots mx-2"></i></div>
                    <p>Get the latest jobs and industry news</p>
                    <Link to='/single-rimemum-myjob'>
                    <div className="m-2">

                    <img className='' src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" style={{width: "80px", height:"80px", objectFit:"contain"}} alt="Avatar" />
                    <img className='border rounded-4' src={companies[randomnumber].logoImage} class="" style={{width: "100px", height:"80px", objectFit:"contain", marginLeft:"30px"}} alt="" />
                    </div>
                    <p >Ashok Kumar, explore relevant opportunities with {companies[randomnumber].name}</p>
                    <button className='btn btn-primary fw-bold'>view more Job</button>
                    </Link>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default LetterPage
